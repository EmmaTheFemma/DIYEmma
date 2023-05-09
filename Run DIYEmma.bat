@ECHO OFF
title NextJS

START http://localhost:3000/
CD "%~dp0frontend"
npm run dev
PAUSE
EXIT