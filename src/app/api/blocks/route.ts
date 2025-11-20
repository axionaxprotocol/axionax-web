import { NextRequest, NextResponse } from 'next/server';

interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: number;
  miner: string;
  gasUsed: string;
  gasLimit: string;
}

interface BlocksResponse {
  blocks: Block[];
  total: number;
  page: number;
  pageSize: number;
}

// Mock block data generator
function generateMockBlock(blockNumber: number): Block {
  const baseTimestamp = new Date('2025-11-18T00:00:00Z').getTime();
  const blockTime = 5000; // 5 seconds per block

  return {
    number: blockNumber,
    hash: '0x' + Math.random().toString(16).slice(2).padEnd(64, '0'),
    timestamp: baseTimestamp + blockNumber * blockTime,
    transactions: Math.floor(Math.random() * 50),
    miner: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4',
    gasUsed: (Math.random() * 8000000).toFixed(0),
    gasLimit: '8000000',
  };
}

async function getCurrentBlockNumber(): Promise<number> {
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
    console.error('Failed to fetch block number:', error);
  }

  return 34560; // Fallback estimate
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    if (page < 1 || pageSize < 1 || pageSize > 100) {
      return NextResponse.json(
        { error: 'Invalid pagination parameters' },
        { status: 400 }
      );
    }

    const currentBlock = await getCurrentBlockNumber();

    // Generate mock blocks for the requested page
    const blocks: Block[] = [];
    const startBlock = currentBlock - (page - 1) * pageSize;

    for (let i = 0; i < pageSize && startBlock - i > 0; i++) {
      blocks.push(generateMockBlock(startBlock - i));
    }

    const response: BlocksResponse = {
      blocks,
      total: currentBlock,
      page,
      pageSize,
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=5, stale-while-revalidate=10',
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blocks' },
      { status: 500 }
    );
  }
}
