# Genera la carpeta bookhero360-html/ (sitio estático) sin tocar las páginas dinámicas de la plantilla.
$src = Split-Path $PSScriptRoot -Parent
$tmp = Join-Path $env:TEMP 'bh_export_v2'
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory $tmp | Out-Null
robocopy $src $tmp /E /XD node_modules .next out bookhero360-html /NFL /NDL /NJH /NJS /NP | Out-Null
cmd /c mklink /J "$tmp\node_modules" "$src\node_modules" | Out-Null
$keep = 'app', 'privacy-policy', 'legal', 'terms-conditions', 'refund-policy', 'contact-us', 'security'
Get-ChildItem "$tmp\src\app" -Directory | Where-Object { $keep -notcontains $_.Name } | Remove-Item -Recurse -Force
Push-Location $tmp
$env:EXPORT = '1'
npx next build --webpack
Pop-Location
$dst = Join-Path $src 'bookhero360-html'
if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
Copy-Item "$tmp\out" $dst -Recurse
New-Item -ItemType File -Force (Join-Path $dst '.nojekyll') | Out-Null
Write-Host "Listo: $dst  (sirvela con: npx serve bookhero360-html)"
