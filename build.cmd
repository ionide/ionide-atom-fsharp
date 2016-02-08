@echo off
cls

.paket\paket.bootstrapper.exe 3.0.0-alpha040
if errorlevel 1 (
  exit /b %errorlevel%
)

.paket\paket.exe restore
if errorlevel 1 (
  exit /b %errorlevel%
)

packages\FAKE\tools\FAKE.exe build.fsx %* --nocache
