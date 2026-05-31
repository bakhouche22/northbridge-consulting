@echo off
setlocal

cd /d "%~dp0"

set "NODE_DIR=C:\Program Files\nodejs"
set "NPM_CMD=%NODE_DIR%\npm.cmd"

if not exist "%NPM_CMD%" (
  echo Node.js / npm was not found at "%NPM_CMD%".
  echo Please install Node.js or update NODE_DIR in this file.
  pause
  exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"

if not exist "node_modules" (
  echo Installing project dependencies...
  call "%NPM_CMD%" install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Starting Northbridge Consulting website...
echo Open http://127.0.0.1:5173 in your browser.
call "%NPM_CMD%" run dev -- --host 127.0.0.1 --port 5173

endlocal
