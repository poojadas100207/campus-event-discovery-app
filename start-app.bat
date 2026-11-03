@echo off
title Campus Pulse - Event Discovery & Clash Guard
echo ========================================================
echo   CAMPUS PULSE - EVENT DISCOVERY APP
echo   Mapped strictly to the User Flow Diagram
echo ========================================================
echo.
echo Launching local server at http://localhost:3000 ...
timeout /t 1 >nul
start "" "http://localhost:3000"
node server.js
pause
