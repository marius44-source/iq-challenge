# Run from PowerShell AFTER you have logged in once with: gh auth login
# Creates a public GitHub repo (if missing), sets origin, pushes main.
# Override repo name: $env:GITHUB_REPO_NAME = "my-iq-site"; .\complete-github-push.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$gh = if (Get-Command gh -ErrorAction SilentlyContinue) { "gh" } else { "C:\Program Files\GitHub CLI\gh.exe" }
if (-not (Test-Path $gh) -and $gh -ne "gh") {
    Write-Error "GitHub CLI not found. Install with: winget install GitHub.cli"
}

& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in. Run in this terminal first:"
    Write-Host "  gh auth login"
    Write-Host "Then run this script again."
    exit 1
}

$repo = if ($env:GITHUB_REPO_NAME) { $env:GITHUB_REPO_NAME } else { "iq-challenge-site" }
$git = if (Get-Command git -ErrorAction SilentlyContinue) { "git" } else { "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe" }

$hasOrigin = & $git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' already set to: $hasOrigin"
    Write-Host "Pushing main..."
    & $git push -u origin main
    exit $LASTEXITCODE
}

Write-Host "Creating GitHub repo: $repo (public) and pushing..."
& $gh repo create $repo --public --source=. --remote=origin --push --description "IQ Challenge - static site"
