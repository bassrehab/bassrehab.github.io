#!/bin/bash

# Generate all CV versions from cv_data.yml and cv_data_concise.yml
# Outputs: PDF and DOCX in both full and concise versions
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

# Step 2: Compile to PDF
echo ""
echo "2. Compiling PDFs..."
cd "$BUILD_DIR"
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1
mv cv-clean.pdf "../../$OUTPUT_DIR/cv.pdf"
rm -f cv-clean.aux cv-clean.log cv-clean.out
echo "   ✓ $OUTPUT_DIR/cv.pdf"

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
# CONCISE VERSION
# ==========================================
echo ""
echo "=== Concise Version ==="
echo ""

# Step 1: Generate LaTeX from YAML (concise)
echo "1. Generating LaTeX..."
node _scripts/generate-cv-latex.mjs --concise

# Step 2: Compile to PDF (concise)
echo ""
echo "2. Compiling PDFs..."
cd "$BUILD_DIR"
pdflatex -interaction=nonstopmode cv-concise.tex > /dev/null 2>&1
mv cv-concise.pdf "../../$OUTPUT_DIR/cv-concise.pdf"
rm -f cv-concise.aux cv-concise.log cv-concise.out
echo "   ✓ $OUTPUT_DIR/cv-concise.pdf"

pdflatex -interaction=nonstopmode cv-concise-phone.tex > /dev/null 2>&1
mv cv-concise-phone.pdf "../../$OUTPUT_DIR/cv-concise-phone.pdf"
rm -f cv-concise-phone.aux cv-concise-phone.log cv-concise-phone.out
echo "   ✓ $OUTPUT_DIR/cv-concise-phone.pdf"
cd - > /dev/null

# Step 3: Generate DOCX (concise)
echo ""
echo "3. Generating DOCX..."
node _scripts/generate-cv-docx.mjs --concise

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
