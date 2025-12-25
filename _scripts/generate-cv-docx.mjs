#!/usr/bin/env node
/**
 * Generate DOCX CV from cv_data.yml / cv_data_concise.yml
 * Outputs both public and private versions
 *
 * Usage: node _scripts/generate-cv-docx.mjs [--concise]
 */

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  convertInchesToTwip,
  ExternalHyperlink,
} from "docx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

// Phone number for private version
const PHONE_NUMBER = "+65 82501776";

// Check for variant flags
const isConcise = process.argv.includes("--concise");
const isOnepage = process.argv.includes("--onepage");

/**
 * Format date from YYYY-MM to Month YYYY
 */
function formatDate(dateStr) {
  if (!dateStr) return "";
  if (dateStr === "present") return "Present";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const parts = dateStr.split("-");
  if (parts.length === 2) {
    const monthIndex = parseInt(parts[1], 10) - 1;
    return `${months[monthIndex]} ${parts[0]}`;
  }
  return parts[0];
}

/**
 * Create a section heading with bottom border
 */
function createSectionHeading(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 28,
        color: "000000",
      }),
    ],
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 300, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
    },
  });
}

/**
 * Create a subsection heading
 */
function createSubsectionHeading(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 24,
      }),
    ],
    spacing: { before: 200, after: 60 },
  });
}

/**
 * Create a bullet point
 */
function createBullet(text) {
  return new Paragraph({
    children: [new TextRun({ text: text, size: 22 })],
    bullet: { level: 0 },
    spacing: { after: 40 },
  });
}

/**
 * Generate the DOCX document
 */
function generateDocx(cv, includePhone = false) {
  const children = [];

  // Header - Name
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: cv.basics.name,
          bold: true,
          size: 48,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    })
  );

  // Header - Title
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: cv.basics.title,
          italics: true,
          size: 24,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    })
  );

  // Header - Contact
  const contactParts = [cv.basics.location];
  if (includePhone) {
    contactParts.push(PHONE_NUMBER);
  }
  contactParts.push(cv.basics.email);

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: contactParts.join(" | "),
          size: 22,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
    })
  );

  // Header - Links
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "LinkedIn: linkedin.com/in/subhadip-mitra | GitHub: github.com/bassrehab",
          size: 22,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // Professional Summary
  children.push(createSectionHeading("Professional Summary"));
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: cv.basics.summary.replace(/\n/g, " ").trim(),
          size: 22,
        }),
      ],
      spacing: { after: 120 },
    })
  );

  // Professional Experience
  children.push(createSectionHeading("Professional Experience"));

  for (const job of cv.experience) {
    // Company and role
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: job.company, bold: true, size: 24 }),
        ],
        spacing: { before: 160, after: 40 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: job.role, bold: true, size: 22 }),
          new TextRun({ text: "  " }),
          new TextRun({
            text: `${formatDate(job.start_date)} - ${formatDate(job.end_date)}`,
            italics: true,
            size: 22,
          }),
        ],
        spacing: { after: 60 },
      })
    );

    // Description
    if (job.description) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: job.description.replace(/\n/g, " ").trim(),
              size: 22,
            }),
          ],
          spacing: { after: 80 },
        })
      );
    }

    // Sections (for complex roles like Google)
    if (job.sections) {
      for (const section of job.sections) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: section.title + ":", bold: true, size: 22 }),
            ],
            spacing: { before: 80, after: 40 },
          })
        );
        for (const item of section.highlights) {
          children.push(createBullet(item.description || item));
        }
      }
    } else if (job.highlights && job.highlights.length > 0) {
      for (const highlight of job.highlights) {
        children.push(createBullet(highlight));
      }
    }
  }

  // Research & Open Source (if present)
  if (cv.research && cv.research.length > 0) {
    children.push(createSectionHeading("Research & Open Source"));

    for (const project of cv.research) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: project.title, bold: true, size: 22 }),
            new TextRun({ text: ` (${project.period})`, italics: true, size: 22 }),
          ],
          spacing: { before: 120, after: 40 },
        })
      );

      if (project.status) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: project.status, italics: true, size: 20, color: "666666" }),
            ],
            spacing: { after: 40 },
          })
        );
      }

      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: project.description.replace(/\n/g, " ").trim(),
              size: 22,
            }),
          ],
          spacing: { after: 80 },
        })
      );
    }
  }

  // Publications
  if (cv.publications && cv.publications.length > 0) {
    children.push(createSectionHeading("Publications & Technical Disclosures"));

    for (const pub of cv.publications) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: pub.title, bold: true, size: 22 }),
          ],
          spacing: { before: 80, after: 20 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${pub.venue}, ${formatDate(pub.date)}`,
              italics: true,
              size: 20,
            }),
          ],
          spacing: { after: 60 },
        })
      );
    }
  }

  // Education
  children.push(createSectionHeading("Education"));

  for (const edu of cv.education) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: edu.degree, bold: true, size: 22 }),
          new TextRun({ text: " - ", size: 22 }),
          new TextRun({ text: edu.institution, size: 22 }),
          new TextRun({
            text: ` (${edu.start_date} - ${edu.end_date})`,
            italics: true,
            size: 22,
          }),
        ],
        spacing: { before: 80, after: 40 },
      })
    );
  }

  // Skills
  children.push(createSectionHeading("Technical Skills"));

  for (const skill of cv.skills) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: skill.category + ": ", bold: true, size: 22 }),
          new TextRun({ text: skill.items.join(", "), size: 22 }),
        ],
        spacing: { after: 60 },
      })
    );
  }

  // Certifications (if present)
  if (cv.certifications && cv.certifications.length > 0) {
    children.push(createSectionHeading("Certifications"));

    for (const cert of cv.certifications) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: cert.name, size: 22 }),
            new TextRun({ text: ` - ${cert.issuer}`, italics: true, size: 22 }),
          ],
          spacing: { after: 40 },
        })
      );
    }
  }

  // Affiliations
  if (cv.affiliations && cv.affiliations.length > 0) {
    children.push(createSectionHeading("Professional Affiliations"));
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: cv.affiliations.join(" | "), size: 22 }),
        ],
        spacing: { after: 80 },
      })
    );
  }

  // Create document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.75),
              right: convertInchesToTwip(0.75),
              bottom: convertInchesToTwip(0.75),
              left: convertInchesToTwip(0.75),
            },
          },
        },
        children: children,
      },
    ],
  });

  return doc;
}

/**
 * Main function
 */
async function main() {
  let variant, yamlFile, publicFilename, privateFilename;

  if (isOnepage) {
    variant = "onepage";
    yamlFile = "cv_data_onepage.yml";
    publicFilename = "cv-onepage.docx";
    privateFilename = "cv-onepage-phone.docx";
  } else if (isConcise) {
    variant = "concise";
    yamlFile = "cv_data_concise.yml";
    publicFilename = "cv-concise.docx";
    privateFilename = "cv-concise-phone.docx";
  } else {
    variant = "full";
    yamlFile = "cv_data.yml";
    publicFilename = "cv.docx";
    privateFilename = "cv-phone.docx";
  }

  console.log(`Generating ${variant} DOCX CV...`);

  // Read YAML file
  const yamlPath = path.join(ROOT_DIR, "_data", yamlFile);
  const yamlContent = fs.readFileSync(yamlPath, "utf8");
  const cv = yaml.load(yamlContent);

  // Ensure output directory exists
  const outputDir = path.join(ROOT_DIR, "assets", "cv");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate public version
  const publicDoc = generateDocx(cv, false);
  const publicPath = path.join(outputDir, publicFilename);
  const publicBuffer = await Packer.toBuffer(publicDoc);
  fs.writeFileSync(publicPath, publicBuffer);
  console.log(`✓ Generated ${publicPath}`);

  // Generate private version (with phone)
  const privateDoc = generateDocx(cv, true);
  const privatePath = path.join(outputDir, privateFilename);
  const privateBuffer = await Packer.toBuffer(privateDoc);
  fs.writeFileSync(privatePath, privateBuffer);
  console.log(`✓ Generated ${privatePath}`);

  console.log("\nDOCX files generated successfully!");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
