#!/bin/bash

# Generate CV versions from cv_data.yml and cv_data_onepage.yml
# Outputs: Full CV (PDF/DOCX) and 1-page CV (PDF only)
#
# Usage: ./generate-cv.sh or npm run generate-cv

set -e

echo "=========================================="
echo "       CV Generation Pipeline"
echo "=========================================="
echo ""

# Create directories
mkdir -p assets/cv
mkdir -p _build/cv

# Build directory for intermediate files
BUILD_DIR="_build/cv"
OUTPUT_DIR="assets/cv"

# ==========================================
# FULL VERSION
# ==========================================
echo "=== Full Version ==="
echo ""

# Step 1: Generate LaTeX from YAML
echo "1. Generating LaTeX..."
node _scripts/generate-cv-latex.mjs

# Step 2: Compile to PDF (run twice to resolve page references)
echo ""
echo "2. Compiling PDFs..."
cd "$BUILD_DIR"
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1
mv cv-clean.pdf "../../$OUTPUT_DIR/cv.pdf"
rm -f cv-clean.aux cv-clean.log cv-clean.out
echo "   ✓ $OUTPUT_DIR/cv.pdf"

pdflatex -interaction=nonstopmode cv-clean-phone.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode cv-clean-phone.tex > /dev/null 2>&1
mv cv-clean-phone.pdf "../../$OUTPUT_DIR/cv-phone.pdf"
rm -f cv-clean-phone.aux cv-clean-phone.log cv-clean-phone.out
echo "   ✓ $OUTPUT_DIR/cv-phone.pdf"
cd - > /dev/null

# Step 3: Generate DOCX
echo ""
echo "3. Generating DOCX..."
node _scripts/generate-cv-docx.mjs

# ==========================================
# 1-PAGE VERSION (2-column poster style)
# ==========================================
echo ""
echo "=== 1-Page Version (2-column) ==="
echo ""

# Step 1: Generate LaTeX
echo "1. Generating LaTeX..."
node _scripts/generate-cv-onepage.mjs

# Step 2: Compile to PDF
echo ""
echo "2. Compiling PDFs..."
cd "$BUILD_DIR"
pdflatex -interaction=nonstopmode cv-onepage.tex > /dev/null 2>&1
mv cv-onepage.pdf "../../$OUTPUT_DIR/cv-onepage.pdf"
rm -f cv-onepage.aux cv-onepage.log cv-onepage.out
echo "   ✓ $OUTPUT_DIR/cv-onepage.pdf"

pdflatex -interaction=nonstopmode cv-onepage-phone.tex > /dev/null 2>&1
mv cv-onepage-phone.pdf "../../$OUTPUT_DIR/cv-onepage-phone.pdf"
rm -f cv-onepage-phone.aux cv-onepage-phone.log cv-onepage-phone.out
echo "   ✓ $OUTPUT_DIR/cv-onepage-phone.pdf"
cd - > /dev/null

# ==========================================
# SUMMARY
# ==========================================
echo ""
echo "=========================================="
echo "           Generation Complete"
echo "=========================================="
echo ""
echo "Generated files:"
ls -lh assets/cv/cv*.pdf assets/cv/cv*.docx 2>/dev/null || true
echo ""
