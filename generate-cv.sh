#!/bin/bash

# Generate professional PDF CV from LaTeX template
# Usage: ./generate-cv.sh or npm run generate-cv

echo "Generating professional PDF CVs..."

# Create output directory if needed
mkdir -p assets/pdf

# Compile public CV (without phone number)
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1
mv cv-clean.pdf assets/pdf/cv.pdf
rm -f cv-clean.aux cv-clean.log cv-clean.out

echo "✓ Public CV generated at assets/pdf/cv.pdf"

# Compile private CV (with phone number)
pdflatex -interaction=nonstopmode cv-clean-phone.tex > /dev/null 2>&1
mv cv-clean-phone.pdf assets/pdf/cv-phone.pdf
rm -f cv-clean-phone.aux cv-clean-phone.log cv-clean-phone.out

echo "✓ Private CV (with phone) generated at assets/pdf/cv-phone.pdf"

ls -lh assets/pdf/cv.pdf assets/pdf/cv-phone.pdf
