param(
  [string]$DefaultHost = "smtp.hostinger.com",
  [int]$DefaultPort = 465,
  [bool]$DefaultSecure = $true,
  [string]$DefaultTo = "info@vestalux.lv",
  [string]$DefaultFrom = "Vestalux <no-reply@vestalux.lv>"
)

Write-Host "This script will recreate .env.local with UTF-8 encoding (no BOM)" -ForegroundColor Cyan

# Collect inputs
$SMTP_HOST = Read-Host "SMTP_HOST [$DefaultHost]"
if ([string]::IsNullOrWhiteSpace($SMTP_HOST)) { $SMTP_HOST = $DefaultHost }

$SMTP_PORT_IN = Read-Host "SMTP_PORT [$DefaultPort]"
if ([string]::IsNullOrWhiteSpace($SMTP_PORT_IN)) { $SMTP_PORT = $DefaultPort } else { $SMTP_PORT = [int]$SMTP_PORT_IN }

$SMTP_SECURE_IN = Read-Host "SMTP_SECURE (true/false) [$DefaultSecure]"
if ([string]::IsNullOrWhiteSpace($SMTP_SECURE_IN)) { $SMTP_SECURE = $DefaultSecure } else { $SMTP_SECURE = [bool]::Parse($SMTP_SECURE_IN) }

$SMTP_USER = Read-Host "SMTP_USER (full email, e.g. no-reply@your-domain.lv)"
$SMTP_PASS_SEC = Read-Host -AsSecureString "SMTP_PASS (input hidden)"
$SMTP_PASS_BSTR = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($SMTP_PASS_SEC)
$SMTP_PASS = [Runtime.InteropServices.Marshal]::PtrToStringAuto($SMTP_PASS_BSTR)
[Runtime.InteropServices.Marshal]::ZeroFreeBSTR($SMTP_PASS_BSTR)

$CONTACT_TO_EMAIL = Read-Host "CONTACT_TO_EMAIL [$DefaultTo]"
if ([string]::IsNullOrWhiteSpace($CONTACT_TO_EMAIL)) { $CONTACT_TO_EMAIL = $DefaultTo }

$CONTACT_FROM_EMAIL = Read-Host "CONTACT_FROM_EMAIL [$DefaultFrom]"
if ([string]::IsNullOrWhiteSpace($CONTACT_FROM_EMAIL)) { $CONTACT_FROM_EMAIL = $DefaultFrom }

# Build .env content
$lines = @(
  "SMTP_HOST=$SMTP_HOST",
  "SMTP_PORT=$SMTP_PORT",
  "SMTP_SECURE=$SMTP_SECURE",
  "SMTP_USER=$SMTP_USER",
  "SMTP_PASS=$SMTP_PASS",
  "CONTACT_TO_EMAIL=$CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL=$CONTACT_FROM_EMAIL"
)

$envPath = Join-Path $PSScriptRoot "..\.env.local"
$envPath = [IO.Path]::GetFullPath($envPath)

# Write with UTF-8 (no BOM if PowerShell 7+)
try {
  Set-Content -Path $envPath -Value ($lines -join "`n") -Encoding utf8NoBOM
} catch {
  # Fallback for Windows PowerShell 5.1 where utf8NoBOM isn't available
  Set-Content -Path $envPath -Value ($lines -join "`n") -Encoding utf8
}

Write-Host ""; Write-Host ".env.local written to: $envPath" -ForegroundColor Green
Write-Host "Preview (password hidden):" -ForegroundColor Yellow
Write-Host "SMTP_HOST=$SMTP_HOST"
Write-Host "SMTP_PORT=$SMTP_PORT"
Write-Host "SMTP_SECURE=$SMTP_SECURE"
Write-Host "SMTP_USER=$SMTP_USER"
Write-Host "SMTP_PASS=********"
Write-Host "CONTACT_TO_EMAIL=$CONTACT_TO_EMAIL"
Write-Host "CONTACT_FROM_EMAIL=$CONTACT_FROM_EMAIL"

Write-Host ""; Write-Host "Note: Restart your dev server (npm run dev) after this." -ForegroundColor Cyan
