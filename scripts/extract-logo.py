"""Extract the owner's original logo from the rendered, single-page PDF.

Render first with Poppler:
Create tmp/ first, then:
pdftoppm -f 1 -singlefile -r 300 -png source-assets/brand/logo.pdf tmp/logo-page
No tracing, redrawing, color changes, or background synthesis are performed.
"""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
output = root / "src/assets/brand"
output.mkdir(parents=True, exist_ok=True)
with Image.open(root / "tmp/logo-page.png") as page:
    if page.size != (1125, 675):
        raise ValueError("Render the original page at 300 DPI before extracting.")
    # Full original lockup for the footer; source mark + wordmark for the header.
    page.crop((452, 215, 674, 483)).save(output / "shan-fitness-logo.png", optimize=True)
    page.crop((459, 220, 666, 425)).save(output / "shan-fitness-mark.png", optimize=True)
    page.crop((459, 433, 666, 459)).save(output / "shan-fitness-wordmark.png", optimize=True)
    # Use the genuine logo mark for the browser icon, replacing the SF fallback.
    mark = page.crop((455, 216, 671, 432)).convert("RGB")
    mark.resize((128, 128), Image.Resampling.LANCZOS).save(root / "public/favicon.png", optimize=True)
print("Original logo, mark, wordmark, and favicon extracted.")
