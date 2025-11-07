$ErrorActionPreference = "Stop"
Set-Location "D:\Desktop\axionaxius01\axionax-web"
Write-Host "Starting AxionAX Website Development Server..." -ForegroundColor Green
Write-Host "Location: $(Get-Location)" -ForegroundColor Cyan
npm run dev
