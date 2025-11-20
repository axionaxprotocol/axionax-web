import { NextRequest, NextResponse } from 'next/server';

interface StatsResponse {
  blockNumber: number;
  services: {
    healthy: number;
    total: number;
  };
  uptime: {
    hours: number;
    days: number;
  };
  deployment: number;
  validators: {
    online: number;
    total: number;
  };
  timestamp: number;
}

// Calculate uptime since testnet launch (Nov 18, 2025)
const LAUNCH_DATE = new Date('2025-11-18T00:00:00Z').getTime();

async function getBlockHeight(): Promise<number> {
  try {
    const response = await fetch('http://217.76.61.116:8545', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 1,
      }),
      signal: AbortSignal.timeout(3000),
    });

    if (response.ok) {
      const data = (await response.json()) as { result?: string };
      return parseInt(data.result || '0x0', 16);
    }
  } catch (error) {
    console.error('Failed to fetch block height:', error);
  }

  return 0;
}

export async function GET(_request: NextRequest) {
  try {
    const blockNumber = await getBlockHeight();
    const now = Date.now();
    const uptimeMs = now - LAUNCH_DATE;
    const uptimeHours = Math.floor(uptimeMs / (1000 * 60 * 60));
    const uptimeDays = Math.floor(uptimeHours / 24);

    const stats: StatsResponse = {
      blockNumber: blockNumber > 0 ? blockNumber : 34560, // Fallback to estimate
      services: {
        healthy: 7,
        total: 9,
      },
      uptime: {
        hours: uptimeHours,
        days: uptimeDays,
      },
      deployment: 100,
      validators: {
        online: 2,
        total: 2,
      },
      timestamp: now,
    };

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=5, stale-while-revalidate=10',
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
