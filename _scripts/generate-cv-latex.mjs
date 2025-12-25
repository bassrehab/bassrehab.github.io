#!/usr/bin/env node
/**
 * Generate LaTeX CV from cv_data.yml
 * Outputs both public (cv-clean.tex) and private (cv-clean-phone.tex) versions
 *
 * Usage: node _scripts/generate-cv-latex.mjs
 */

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT_DIR, "_build", "cv");

// Phone number for private version (not stored in YAML for privacy)
const PHONE_NUMBER = "+65 82501776";

// Check for --concise flag
const isConcise = process.argv.includes("--concise");

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
    // Handle smart quotes
    .replace(/"/g, "''")
    .replace(/"/g, "``")
    // Keep regular apostrophes as-is (LaTeX handles them fine)
    .replace(/'/g, "'")
    .replace(/'/g, "'")
    // Handle dashes
    .replace(/–/g, "--")
    .replace(/—/g, "---")
    .replace(/\.\.\./g, "\\ldots{}")
    // Handle arrow notation
    .replace(/->/g, "$\\rightarrow$")
    // Fix double escaping of already escaped items
    .replace(/\\\$XXM/g, "\\$XXM")
    .replace(/\\\$XM/g, "\\$XM")
    .replace(/\\\$50K/g, "\\$50K");
}

/**
 * Convert URL to LaTeX hyperref
 */
function formatUrl(url, label = null) {
  if (!url) return "";
  if (label) {
    return `\\href{${url}}{${escapeLatex(label)}}`;
  }
  return `\\url{${url}}`;
}

/**
 * Process text for LaTeX: converts HTML links and escapes special characters
 * Handles HTML anchor tags by converting to LaTeX href, then escapes the rest
 */
function processTextForLatex(text) {
  if (!text) return "";

  // Regex to match HTML anchor tags
  const linkRegex = /<a\s+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;

  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Escape text before this link
    result += escapeLatex(text.slice(lastIndex, match.index));
    // Convert the link to LaTeX href
    const url = match[1];
    const label = match[2];
    result += `\\href{${url}}{${escapeLatex(label)}}`;
    lastIndex = match.index + match[0].length;
  }

  // Escape remaining text after last link
  result += escapeLatex(text.slice(lastIndex));

  return result;
}

/**
 * Format date from YYYY-MM or YYYY to Month YYYY
 */
function formatDate(dateStr) {
  if (!dateStr) return "";
  if (dateStr === "present") return "Present";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts = dateStr.split("-");
  if (parts.length === 2) {
    const monthIndex = parseInt(parts[1], 10) - 1;
    return `${months[monthIndex]} ${parts[0]}`;
  }
  return parts[0]; // Just year
}

/**
 * Generate the LaTeX document
 */
function generateLatex(cv, includePhone = false) {
  const lines = [];

  // Preamble
  lines.push(`\\documentclass[11pt,a4paper]{article}`);
  lines.push(`\\usepackage[margin=0.75in]{geometry}`);
  lines.push(`\\usepackage{titlesec}`);
  lines.push(`\\usepackage{enumitem}`);
  lines.push(`\\usepackage{hyperref}`);
  lines.push(`\\usepackage{parskip}`);
  lines.push(`\\usepackage{xcolor}`);
  lines.push(`\\usepackage{fancyhdr}`);
  lines.push(`\\usepackage{lastpage}`);
  lines.push(``);
  lines.push(`% Colors`);
  lines.push(`\\definecolor{headercolor}{RGB}{37, 99, 235}`);
  lines.push(`\\definecolor{linkcolor}{RGB}{37, 99, 235}`);
  lines.push(``);
  lines.push(`% Formatting`);
  lines.push(`\\setlist{nosep, leftmargin=*}`);
  lines.push(`\\hypersetup{`);
  lines.push(`    colorlinks=true,`);
  lines.push(`    linkcolor=linkcolor,`);
  lines.push(`    urlcolor=linkcolor,`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`% Section formatting with color`);
  lines.push(
    `\\titleformat{\\section}{\\Large\\bfseries\\color{headercolor}}{}{0em}{}[\\titlerule]`
  );
  lines.push(`\\titleformat{\\subsection}[runin]{\\bfseries}{}{0em}{}[:]`);
  lines.push(`\\titlespacing{\\section}{0pt}{14pt}{8pt}`);
  lines.push(``);
  lines.push(`% Footer with website and page numbers`);
  lines.push(`\\pagestyle{fancy}`);
  lines.push(`\\fancyhf{}`);
  lines.push(`\\renewcommand{\\headrulewidth}{0pt}`);
  lines.push(`\\fancyfoot[C]{\\small\\color{gray} \\href{https://subhadipmitra.com}{subhadipmitra.com} \\quad | \\quad Page \\thepage\\ of \\pageref{LastPage}}`);
  lines.push(``);
  lines.push(`\\begin{document}`);
  lines.push(``);

  // Header
  lines.push(`% Header`);
  lines.push(`\\begin{center}`);
  lines.push(`{\\huge \\textbf{${escapeLatex(cv.basics.name)}}}\\\\[4pt]`);
  lines.push(`\\textit{${escapeLatex(cv.basics.title)}}\\\\[8pt]`);

  // Contact line - with or without phone
  const contactParts = [cv.basics.location];
  if (includePhone) {
    contactParts.push(PHONE_NUMBER);
  }
  contactParts.push(cv.basics.email);
  lines.push(`${contactParts.join(" $|$ ")} \\\\`);

  // Social links (embedded hyperlinks)
  lines.push(
    `\\href{https://linkedin.com/in/subhadip-mitra}{LinkedIn} $|$ \\href{https://github.com/bassrehab}{GitHub} $|$ \\href{https://subhadipmitra.com}{Website}`
  );
  lines.push(`\\end{center}`);
  lines.push(``);
  lines.push(`\\begin{flushright}`);
  lines.push(`\\small\\textit{Last updated: \\today}`);
  lines.push(`\\end{flushright}`);
  lines.push(``);

  // Professional Summary
  lines.push(`\\section{Professional Summary}`);
  const summary = cv.basics.summary
    .replace(/\n\n/g, " ")
    .replace(/\n/g, " ")
    .trim();
  lines.push(escapeLatex(summary));
  lines.push(``);

  // Professional Experience
  lines.push(`\\section{Professional Experience}`);
  lines.push(``);

  for (const job of cv.experience) {
    lines.push(`\\subsection{${escapeLatex(job.company)}}`);
    lines.push(
      `\\textbf{${escapeLatex(job.role)}} \\hfill \\textit{${formatDate(job.start_date)} -- ${formatDate(job.end_date)}}`
    );
    lines.push(``);

    // Job description (may contain HTML links)
    const desc = job.description.replace(/\n/g, " ").trim();
    lines.push(processTextForLatex(desc));
    lines.push(``);

    // Handle sections (for Google role) or simple highlights
    if (job.sections) {
      for (const section of job.sections) {
        lines.push(`\\textbf{${escapeLatex(section.title)}:}`);
        lines.push(`\\begin{itemize}`);
        for (const item of section.highlights) {
          // For PDF, we don't include the title prefix - just combine them
          const highlight = item.description || item;
          lines.push(`\\item ${escapeLatex(highlight)}`);
        }
        lines.push(`\\end{itemize}`);
        lines.push(``);
      }
    } else if (job.highlights && job.highlights.length > 0) {
      lines.push(`\\begin{itemize}`);
      for (const highlight of job.highlights) {
        lines.push(`\\item ${escapeLatex(highlight)}`);
      }
      lines.push(`\\end{itemize}`);
      lines.push(``);
    }
  }

  // Research & Open Source Engineering
  lines.push(`\\section{Research \\& Open Source Engineering}`);
  lines.push(``);

  for (const project of cv.research) {
    lines.push(`\\textbf{${escapeLatex(project.title)}} \\\\`);

    // Description
    const desc = project.description.replace(/\n/g, " ").trim();
    lines.push(escapeLatex(desc) + " \\\\");

    // Links (embedded hyperlinks)
    if (project.links && project.links.length > 0) {
      const linkStrs = project.links.map((link) => {
        if (link.type === "github") {
          return `\\href{${link.url}}{GitHub}`;
        } else if (link.type === "pypi") {
          return `\\href{${link.url}}{PyPI}`;
        } else if (link.type === "docs") {
          return `\\href{${link.url}}{Docs}`;
        } else if (link.type === "blog") {
          return `\\href{${link.url}}{Blog}`;
        } else if (link.type === "paper") {
          return `\\href{${link.url}}{Paper}`;
        } else {
          // Use label if available, otherwise generic "Link"
          const label = link.label || "Link";
          return `\\href{${link.url}}{${escapeLatex(label)}}`;
        }
      });
      lines.push(linkStrs.join(" $\\cdot$ "));
    }

    // Status
    if (project.status) {
      lines.push(`\\\\`);
      lines.push(`\\textit{${escapeLatex(project.status)}}`);
    }

    lines.push(``);
  }

  // Publications & Technical Disclosures
  lines.push(`\\section{Publications \\& Technical Disclosures}`);
  lines.push(``);

  for (const pub of cv.publications) {
    // Title as clickable link
    lines.push(`\\href{${pub.url}}{\\textbf{${escapeLatex(pub.title)}}} \\\\`);
    lines.push(`\\textit{${escapeLatex(pub.venue)}, ${formatDate(pub.date)}}`);
    lines.push(``);
  }

  // Education
  lines.push(`\\section{Education}`);
  lines.push(``);

  for (let i = 0; i < cv.education.length; i++) {
    const edu = cv.education[i];
    const lineBreak = i < cv.education.length - 1 ? " \\\\" : "";
    lines.push(`\\textbf{${escapeLatex(edu.degree)}} \\hfill ${escapeLatex(edu.institution)}${lineBreak}`);
  }
  lines.push(``);

  // Technical Skills
  lines.push(`\\section{Technical Skills}`);
  lines.push(``);

  for (const skill of cv.skills) {
    const category = escapeLatex(skill.category);
    const items = skill.items.map((item) => escapeLatex(item)).join(", ");
    lines.push(`\\subsection{${category}} ${items}`);
    lines.push(``);
  }

  // Professional Affiliations
  if (cv.affiliations && cv.affiliations.length > 0) {
    lines.push(`\\section{Professional Affiliations}`);
    lines.push(``);
    lines.push(cv.affiliations.join(" • "));
    lines.push(``);
  }

  lines.push(`\\end{document}`);

  return lines.join("\n");
}

/**
 * Main function
 */
async function main() {
  const variant = isConcise ? "concise" : "full";
  const yamlFile = isConcise ? "cv_data_concise.yml" : "cv_data.yml";

  console.log(`Generating ${variant} LaTeX CV from ${yamlFile}...\n`);

  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  // Read YAML file
  const yamlPath = path.join(ROOT_DIR, "_data", yamlFile);
  const yamlContent = fs.readFileSync(yamlPath, "utf8");
  const cv = yaml.load(yamlContent);

  // Generate public version (no phone)
  const publicLatex = generateLatex(cv, false);
  const publicFilename = isConcise ? "cv-concise.tex" : "cv-clean.tex";
  const publicPath = path.join(BUILD_DIR, publicFilename);
  fs.writeFileSync(publicPath, publicLatex);
  console.log(`✓ Generated ${publicPath}`);

  // Generate private version (with phone)
  const privateLatex = generateLatex(cv, true);
  const privateFilename = isConcise ? "cv-concise-phone.tex" : "cv-clean-phone.tex";
  const privatePath = path.join(BUILD_DIR, privateFilename);
  fs.writeFileSync(privatePath, privateLatex);
  console.log(`✓ Generated ${privatePath}`);

  console.log("\nLaTeX files generated successfully!");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
