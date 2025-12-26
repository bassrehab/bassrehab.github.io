#!/usr/bin/env node
/**
 * Generate 1-page 2-column LaTeX CV from cv_data_onepage.yml
 * Outputs a dense, poster-style resume
 *
 * Usage: node _scripts/generate-cv-onepage.mjs
 */

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT_DIR, "_build", "cv");

// Phone number for private version
const PHONE_NUMBER = "+65 82501776";

/**
 * Escape special LaTeX characters
 */
function escapeLatex(text) {
  if (!text) return "";
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/"/g, "''")
    .replace(/"/g, "``")
    .replace(/'/g, "'")
    .replace(/'/g, "'")
    .replace(/–/g, "--")
    .replace(/—/g, "---")
    .replace(/\.\.\./g, "\\ldots{}")
    .replace(/->/g, "$\\rightarrow$");
}

/**
 * Process text for LaTeX: converts HTML links and escapes special characters
 */
function processTextForLatex(text) {
  if (!text) return "";
  const linkRegex = /<a\s+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    result += escapeLatex(text.slice(lastIndex, match.index));
    const url = match[1];
    const label = match[2];
    result += `\\href{${url}}{${escapeLatex(label)}}`;
    lastIndex = match.index + match[0].length;
  }
  result += escapeLatex(text.slice(lastIndex));
  return result;
}

/**
 * Generate 2-column 1-page LaTeX CV
 */
function generateOnePage(cv, includePhone = false) {
  const lines = [];

  // Document setup - compact 1-page format
  lines.push(`\\documentclass[10pt,a4paper]{article}`);
  lines.push(``);
  lines.push(`% Packages`);
  lines.push(`\\usepackage[margin=0.4in]{geometry}`);
  lines.push(`\\usepackage{multicol}`);
  lines.push(`\\usepackage{enumitem}`);
  lines.push(`\\usepackage{titlesec}`);
  lines.push(`\\usepackage{hyperref}`);
  lines.push(`\\usepackage{xcolor}`);
  lines.push(`\\usepackage{parskip}`);
  lines.push(``);
  lines.push(`% Colors - dark blue for print compatibility`);
  lines.push(`\\definecolor{headercolor}{RGB}{30, 64, 175}`);
  lines.push(`\\definecolor{linkcolor}{RGB}{30, 64, 175}`);
  lines.push(``);
  lines.push(`% Hyperref setup`);
  lines.push(`\\hypersetup{colorlinks=true,linkcolor=linkcolor,urlcolor=linkcolor,citecolor=linkcolor,filecolor=linkcolor}`);
  lines.push(``);
  lines.push(`% Section formatting`);
  lines.push(`\\titleformat{\\section}{\\large\\bfseries\\color{headercolor}}{}{0em}{}[\\titlerule]`);
  lines.push(`\\titlespacing{\\section}{0pt}{14pt}{8pt}`);
  lines.push(``);
  lines.push(`% Lists with slight spacing`);
  lines.push(`\\setlist[itemize]{itemsep=1pt,topsep=3pt,parsep=1pt,partopsep=0pt,leftmargin=12pt}`);
  lines.push(``);
  lines.push(`% No page numbers`);
  lines.push(`\\pagestyle{empty}`);
  lines.push(``);
  lines.push(`\\begin{document}`);
  lines.push(``);

  // Header - Name and Contact
  lines.push(`% Header`);
  lines.push(`\\begin{center}`);
  lines.push(`{\\LARGE\\bfseries ${escapeLatex(cv.basics.name)}}\\\\[8pt]`);
  lines.push(`{\\large\\color{headercolor} ${escapeLatex(cv.basics.title)}}\\\\[10pt]`);

  // Contact line
  const contactItems = [];
  contactItems.push(`${escapeLatex(cv.basics.location)}`);
  contactItems.push(`\\href{mailto:${cv.basics.email}}{${escapeLatex(cv.basics.email)}}`);
  if (includePhone) {
    contactItems.push(`${escapeLatex(PHONE_NUMBER)}`);
  }
  contactItems.push(`\\href{${cv.basics.linkedin}}{LinkedIn}`);
  contactItems.push(`\\href{${cv.basics.github}}{GitHub}`);

  lines.push(`{\\small ${contactItems.join(" \\quad ")}}`);
  lines.push(`\\end{center}`);
  lines.push(``);

  // Summary
  lines.push(`\\vspace{6pt}`);
  const summaryText = cv.basics.summary.replace(/\n/g, " ").trim().split(".").slice(0, 2).join(".") + ".";
  lines.push(`{\\small ${processTextForLatex(summaryText)}}`);
  lines.push(``);

  // Start 2-column layout
  lines.push(`\\vspace{12pt}`);
  lines.push(`\\begin{multicols}{2}`);
  lines.push(``);

  // LEFT COLUMN - Experience & Education

  // Experience Section
  lines.push(`\\section*{Experience}`);

  for (const job of cv.experience.slice(0, 4)) {
    // Top 4 jobs
    lines.push(`\\textbf{${escapeLatex(job.role)}}\\\\`);
    lines.push(`{\\small\\textit{${escapeLatex(job.company)}} \\hfill ${job.start_date.split("-")[0]}--${job.end_date === "present" ? "Present" : job.end_date.split("-")[0]}}`);

    if (job.highlights && job.highlights.length > 0) {
      lines.push(`\\begin{itemize}`);
      const maxHighlights = job.current ? 6 : 3;
      for (const highlight of job.highlights.slice(0, maxHighlights)) {
        const text = typeof highlight === "string" ? highlight : highlight;
        lines.push(`\\item {\\footnotesize ${processTextForLatex(text)}}`);
      }
      lines.push(`\\end{itemize}`);
    }
    lines.push(`\\vspace{8pt}`);
  }

  // Education Section
  lines.push(`\\section*{Education}`);
  for (const edu of cv.education) {
    lines.push(`\\textbf{${escapeLatex(edu.degree)}}\\\\`);
    lines.push(`{\\small ${escapeLatex(edu.institution)} \\hfill ${edu.start_date}--${edu.end_date}}\\\\[8pt]`);
  }

  // Column break
  lines.push(`\\columnbreak`);
  lines.push(``);

  // RIGHT COLUMN - Research, Skills, Publications

  // Research Section (compact)
  lines.push(`\\section*{Research \\& Innovation}`);

  if (cv.research) {
    for (const project of cv.research.slice(0, 6)) {
      // Top 6 research items
      lines.push(`\\textbf{${escapeLatex(project.title)}} {\\small (${project.period})}\\\\`);
      // Full description
      const desc = project.description.replace(/\n/g, " ").trim();
      lines.push(`{\\footnotesize ${processTextForLatex(desc)}}\\\\[8pt]`);
    }
  }

  // Publications Section (just titles)
  lines.push(`\\section*{Publications}`);
  lines.push(`{\\footnotesize`);
  if (cv.publications) {
    for (const pub of cv.publications.slice(0, 6)) {
      const year = pub.date.split("-")[0];
      lines.push(`\\textbullet\\ \\href{${pub.url}}{${escapeLatex(pub.title)}} (${year})\\\\`);
    }
  }
  lines.push(`}`);

  // Skills Section (compact tags)
  lines.push(`\\section*{Skills}`);
  if (cv.skills) {
    for (const skillCat of cv.skills) {
      lines.push(`\\textbf{\\small ${escapeLatex(skillCat.category)}:} {\\footnotesize ${skillCat.items.map((s) => escapeLatex(s)).join(", ")}}\\\\[6pt]`);
    }
  }

  // End 2-column layout
  lines.push(`\\end{multicols}`);
  lines.push(``);

  // Footer with website and last updated
  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const lastUpdated = `${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  lines.push(`\\vfill`);
  lines.push(`\\begin{center}`);
  lines.push(`{\\small\\color{gray} \\href{https://subhadipmitra.com}{subhadipmitra.com} \\quad | \\quad Last updated: ${lastUpdated}}`);
  lines.push(`\\end{center}`);
  lines.push(``);
  lines.push(`\\end{document}`);

  return lines.join("\n");
}

// Main execution
async function main() {
  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  // Load concise CV data
  const yamlPath = path.join(ROOT_DIR, "_data", "cv_data_onepage.yml");
  const yamlContent = fs.readFileSync(yamlPath, "utf8");
  const cv = yaml.load(yamlContent);

  console.log("Generating 1-page 2-column CV...");

  // Generate public version (no phone)
  const publicTex = generateOnePage(cv, false);
  const publicPath = path.join(BUILD_DIR, "cv-onepage.tex");
  fs.writeFileSync(publicPath, publicTex);
  console.log(`✓ Generated ${publicPath}`);

  // Generate private version (with phone)
  const privateTex = generateOnePage(cv, true);
  const privatePath = path.join(BUILD_DIR, "cv-onepage-phone.tex");
  fs.writeFileSync(privatePath, privateTex);
  console.log(`✓ Generated ${privatePath}`);

  console.log("\n1-page CV LaTeX files generated successfully!");
}

main().catch(console.error);
