#!/usr/bin/env node

/**
 * OG Image Generator for Blog Posts
 * Uses Satori to generate social preview images at build time
 */

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Configuration
const POSTS_DIR = join(rootDir, "_posts");
const OUTPUT_DIR = join(rootDir, "assets", "img", "og");
const WIDTH = 1200;
const HEIGHT = 630;

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Load font from @fontsource/inter package
async function loadFont() {
  const fontPath = join(rootDir, "node_modules", "@fontsource", "inter", "files", "inter-latin-700-normal.woff");

  try {
    const fontBuffer = readFileSync(fontPath);
    return [
      {
        name: "Inter",
        data: fontBuffer,
        weight: 700,
        style: "normal",
      },
    ];
  } catch (e) {
    console.error("Failed to load font from @fontsource/inter:", e);
    throw e;
  }
}

// Parse front matter from markdown file
function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontMatter = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Handle arrays
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/['"]/g, ""));
    }

    frontMatter[key] = value;
  }

  return frontMatter;
}

// Extract date from filename (YYYY-MM-DD-title.md)
function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    const [, year, month] = match;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  }
  return "";
}

// Generate slug from filename
function getSlugFromFilename(filename) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
}

// Calculate reading time
function calculateReadingTime(content) {
  const text = content.replace(/---[\s\S]*?---/, ""); // Remove front matter
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Create the OG image template
function createOGTemplate(title, description, date, readingTime, tags) {
  // Truncate title if too long
  const maxTitleLength = 80;
  const displayTitle = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + "..." : title;

  // Truncate description
  const maxDescLength = 120;
  const displayDesc = description ? (description.length > maxDescLength ? description.slice(0, maxDescLength) + "..." : description) : "";

  // Get first tag
  const tag = Array.isArray(tags) ? tags[0] : tags || "";

  return {
    type: "div",
    props: {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        padding: "60px",
        fontFamily: "Inter",
      },
      children: [
        // Top bar with blog name and tag
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    color: "#b509ac",
                    fontSize: "24px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  },
                  children: "Binary Breakthroughs",
                },
              },
              tag
                ? {
                    type: "div",
                    props: {
                      style: {
                        color: "#888",
                        fontSize: "18px",
                        backgroundColor: "#1a1a1a",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        border: "1px solid #333",
                      },
                      children: `#${tag}`,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
        // Main content area
        {
          type: "div",
          props: {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
            children: [
              // Title
              {
                type: "div",
                props: {
                  style: {
                    color: "#ffffff",
                    fontSize: "56px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: "24px",
                    letterSpacing: "-0.02em",
                  },
                  children: displayTitle,
                },
              },
              // Description
              displayDesc
                ? {
                    type: "div",
                    props: {
                      style: {
                        color: "#888888",
                        fontSize: "24px",
                        lineHeight: 1.4,
                      },
                      children: displayDesc,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
        // Bottom bar with metadata
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #333",
              paddingTop: "24px",
              marginTop: "24px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          color: "#ffffff",
                          fontSize: "20px",
                          fontWeight: 700,
                        },
                        children: "Subhadip Mitra",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          color: "#666",
                          fontSize: "20px",
                        },
                        children: "|",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          color: "#888",
                          fontSize: "20px",
                        },
                        children: `${date}  •  ${readingTime} min read`,
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    color: "#b509ac",
                    fontSize: "20px",
                    fontWeight: 600,
                  },
                  children: "subhadipmitra.com",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

// Generate OG image for a post
async function generateOGImage(postFile, fonts) {
  const content = readFileSync(join(POSTS_DIR, postFile), "utf-8");
  const frontMatter = parseFrontMatter(content);

  // Skip if no title
  if (!frontMatter.title) {
    console.log(`  Skipping ${postFile} - no title`);
    return null;
  }

  const slug = getSlugFromFilename(postFile);
  const date = extractDateFromFilename(postFile);
  const readingTime = calculateReadingTime(content);

  const template = createOGTemplate(frontMatter.title, frontMatter.description || "", date, readingTime, frontMatter.tags);

  // Generate SVG with Satori
  const svg = await satori(template, {
    width: WIDTH,
    height: HEIGHT,
    fonts,
  });

  // Convert SVG to PNG with Resvg
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: WIDTH,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  // Save the image
  const outputPath = join(OUTPUT_DIR, `${slug}.png`);
  writeFileSync(outputPath, pngBuffer);

  return slug;
}

// Main function
async function main() {
  console.log("🖼️  Generating OG images for blog posts...\n");

  // Load fonts
  console.log("Loading fonts...");
  const fonts = await loadFont();

  // Get all markdown files
  const posts = readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("."))
    .sort();

  console.log(`Found ${posts.length} posts\n`);

  let generated = 0;
  let skipped = 0;

  for (const post of posts) {
    try {
      const slug = await generateOGImage(post, fonts);
      if (slug) {
        console.log(`  ✓ ${slug}.png`);
        generated++;
      } else {
        skipped++;
      }
    } catch (e) {
      console.error(`  ✗ Error processing ${post}:`, e.message);
      skipped++;
    }
  }

  console.log(`\n✅ Generated ${generated} OG images`);
  if (skipped > 0) {
    console.log(`⚠️  Skipped ${skipped} posts`);
  }
  console.log(`📁 Output: ${OUTPUT_DIR}`);
}

main().catch(console.error);
