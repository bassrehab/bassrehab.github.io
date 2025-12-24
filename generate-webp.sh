#!/bin/bash
# generate-webp.sh
# Copies generated WebP images from _site back to source for git tracking
# Run after Jekyll build to persist responsive images

set -e

echo "Building site..."
bundle exec jekyll build

echo "Copying WebP images to source..."
count=0
find _site/assets/img -name "*.webp" | while read f; do
  dest=$(echo "$f" | sed 's/_site\///')
  mkdir -p "$(dirname "$dest")"
  cp "$f" "$dest"
  ((count++)) || true
done

# Count files copied
total=$(find assets/img -name "*.webp" | wc -l)
echo "Done! $total WebP files in assets/img"
echo "Run 'git add assets/img/**/*.webp' to stage new files."
