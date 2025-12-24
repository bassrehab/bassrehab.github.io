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

# Create output directory
mkdir -p assets/pdf

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
pdflatex -interaction=nonstopmode cv-clean.tex > /dev/null 2>&1
mv cv-clean.pdf assets/pdf/cv.pdf
rm -f cv-clean.aux cv-clean.log cv-clean.out
echo "   ✓ assets/pdf/cv.pdf"

pdflatex -interaction=nonstopmode cv-clean-phone.tex > /dev/null 2>&1
mv cv-clean-phone.pdf assets/pdf/cv-phone.pdf
rm -f cv-clean-phone.aux cv-clean-phone.log cv-clean-phone.out
echo "   ✓ assets/pdf/cv-phone.pdf"

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
pdflatex -interaction=nonstopmode cv-concise.tex > /dev/null 2>&1
mv cv-concise.pdf assets/pdf/cv-concise.pdf
rm -f cv-concise.aux cv-concise.log cv-concise.out
echo "   ✓ assets/pdf/cv-concise.pdf"

pdflatex -interaction=nonstopmode cv-concise-phone.tex > /dev/null 2>&1
mv cv-concise-phone.pdf assets/pdf/cv-concise-phone.pdf
rm -f cv-concise-phone.aux cv-concise-phone.log cv-concise-phone.out
echo "   ✓ assets/pdf/cv-concise-phone.pdf"

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
ls -lh assets/pdf/cv*.pdf assets/pdf/cv*.docx 2>/dev/null || true
echo ""
