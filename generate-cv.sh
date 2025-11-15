#!/bin/bash

# Generate professional PDF CV from LaTeX template
# Usage: ./generate-cv.sh or npm run generate-cv

echo "Generating professional PDF CV..."

# Compile LaTeX to PDF
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1

# Create output directory if needed
mkdir -p assets/pdf

# Move PDF to assets/pdf
mv cv-clean.pdf assets/pdf/cv.pdf

# Clean up auxiliary files
rm -f cv-clean.aux cv-clean.log cv-clean.out

echo "✓ PDF CV generated successfully at assets/pdf/cv.pdf"
ls -lh assets/pdf/cv.pdf
