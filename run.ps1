$ErrorActionPreference = "Stop"

Set-Location -LiteralPath $PSScriptRoot

$nodeDir = "C:\Program Files\nodejs"
$npmCmd = Join-Path $nodeDir "npm.cmd"

if (-not (Test-Path -LiteralPath $npmCmd)) {
  Write-Host "Node.js / npm was not found at $npmCmd"
  Write-Host "Please install Node.js or update `$nodeDir in this file."
  exit 1
}

$env:PATH = "$nodeDir;$env:PATH"

if (-not (Test-Path -LiteralPath "node_modules")) {
  Write-Host "Installing project dependencies..."
  & $npmCmd install
}

Write-Host "Starting Northbridge Consulting website..."
Write-Host "Open http://127.0.0.1:5173 in your browser."
& $npmCmd run dev -- --host 127.0.0.1 --port 5173
