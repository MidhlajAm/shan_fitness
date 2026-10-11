"""One-time HEIC conversion. Originals remain untouched; runtime has no Python dependency.
Run with Pillow + pillow-heif installed; see README.md.
"""
from pathlib import Path
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()
root = Path(__file__).resolve().parent.parent
output = root / "src/assets"
mapping = {
    "source-assets/hero/members.heic": "hero/members.webp",
    "source-assets/trainers/shanoob-ck.heic": "trainers/shanoob-ck.webp",
    "source-assets/transformations/member-01-before.heic": "transformations/member-01-before.webp",
    "source-assets/transformations/member-01-after.heic": "transformations/member-01-after.webp",
    "source-assets/transformations/member-02-before.heic": "transformations/member-02-before.webp",
    "source-assets/transformations/member-02-after.heic": "transformations/member-02-after.webp",
}
for source, name in mapping.items():
    destination = output / name
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(root / source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.thumbnail((1600, 2000), Image.Resampling.LANCZOS)
        # No EXIF is carried into the public images (including GPS metadata).
        image.save(destination, "WEBP", quality=92, method=6)
        print(f"{source} => {name}: {image.size}")
