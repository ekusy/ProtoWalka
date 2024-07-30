@echo off
cd %~dp0

npm run build

xcopy dist ../dist \E \C \I \Y