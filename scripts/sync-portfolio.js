/**
 * Automated Portfolio Project Sync Script with Gemini AI Intelligence
 * 
 * Capabilities:
 *  - Scans local & remote GitHub repositories for 'add to port.txt' or 'portfolio.json'
 *  - If GEMINI_API_KEY is present, automatically analyzes repo README and code files
 *    to generate high-impact descriptions, architectural highlights, tech tags, and terminal code snippets!
 *  - Merges results into data/projects.json
 * 
 * Usage:
 *   node scripts/sync-portfolio.js              (Scans both local parent folders and GitHub)
 *   node scripts/sync-portfolio.js --local      (Scans only local sibling repos)
 *   node scripts/sync-portfolio.js --github     (Scans only remote GitHub repos via API)
 */

const fs = require('fs');
const path = require('path');

// Auto-load .env if present (without external dependencies)
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const k = trimmed.slice(0, eqIdx).trim();
          const v = trimmed.slice(eqIdx + 1).trim();
          if (!process.env[k]) process.env[k] = v;
        }
      }
    });
  } catch (e) {}
}

const GITHUB_USERNAME = 'anasmouquinee';
const PROJECTS_FILE = path.join(__dirname, '..', 'data', 'projects.json');
const TARGET_TRIGGER_FILENAMES = [
  'add to port.txt',
  'add-to-port.txt',
  'port.txt',
  'portfolio.txt',
  'portfolio.json'
];

function getGitHubHeaders() {
  const headers = {
    'User-Agent': 'Portfolio-Sync-Engine',
    'Accept': 'application/vnd.github.v3+json'
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

/**
 * Calls Google Gemini AI to analyze repo context (README, file list, etc.)
 * and generate structured portfolio metadata.
 */
async function analyzeWithGemini(repoName, readmeContent, fileList = [], existingData = {}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  console.log(`🧠 [Gemini AI] Analyzing repository context for: [${repoName}]...`);

  const prompt = `
You are an expert technical portfolio curator for Anas Mouquine (Full Stack Engineer & AI Architect).
Analyze the following repository details and generate structured JSON metadata for his developer portfolio.

Repository Name: ${repoName}
Key Files in Repo: ${fileList.slice(0, 30).join(', ')}
README Preview:
"""
${readmeContent.slice(0, 3500)}
"""

Existing manual values (respect these if already filled):
${JSON.stringify(existingData, null, 2)}

Respond with a raw, valid JSON object ONLY (no markdown code blocks, no intro, no wrap) matching this schema:
{
  "title": "Clean, Professional Project Title",
  "category": "One of: AI & Autonomous Systems | Mobile & Industrial IoT | Full-Stack & Web | Big Data & Architecture | DevOps & Automation | Systems & Concurrency",
  "filter": "One of: ai | mobile | web | cloud",
  "desc": "A concise, impactful 2-sentence executive summary explaining what this solves and the technical achievement.",
  "tech": ["List", "of", "4-6", "core", "technologies"],
  "features": [
    "High-impact architectural feature 1",
    "High-impact architectural feature 2",
    "High-impact architectural feature 3",
    "High-impact architectural feature 4"
  ],
  "hasCodeSnippet": true,
  "codeLanguage": "python / dart / javascript / typescript / java / cpp / csharp",
  "codeSnippet": "An elegant, self-contained 8-12 line clean code snippet representing the core architectural logic (without unnecessary boilerplate)."
}
`;

  try {
    // Try Gemini 2.5 Flash / 1.5 Flash endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!res.ok) {
      // Fallback to gemini-1.5-flash
      const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const fbRes = await fetch(fallbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      if (fbRes.ok) {
        const data = await fbRes.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const cleaned = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
        return JSON.parse(cleaned);
      }
      return null;
    }

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.warn(`⚠️ Gemini analysis failed for ${repoName}:`, err.message);
    return null;
  }
}

function parsePortTxt(content, defaultTitle = 'Untitled Project', repoUrl = '') {
  const lines = content.split(/\r?\n/);
  const data = {
    title: defaultTitle,
    category: 'Full-Stack & Web',
    filter: 'web',
    featured: false,
    hasCodeSnippet: false,
    codeLanguage: 'javascript',
    codeSnippet: '',
    tech: [],
    desc: '',
    features: [],
    screenshots: [],
    demo: '',
    github: repoUrl
  };

  let inSnippetBlock = false;
  let snippetBuffer = [];

  for (let rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      if (inSnippetBlock) {
        data.codeSnippet = snippetBuffer.join('\n');
        data.hasCodeSnippet = true;
        inSnippetBlock = false;
      } else {
        inSnippetBlock = true;
        snippetBuffer = [];
        const lang = line.replace('```', '').trim();
        if (lang) data.codeLanguage = lang.toLowerCase();
      }
      continue;
    }

    if (inSnippetBlock) {
      snippetBuffer.push(rawLine);
      continue;
    }

    if (!line || line.startsWith('#')) continue;

    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim().toLowerCase();
    const value = line.slice(colonIdx + 1).trim();

    if (key === 'title') {
      data.title = value;
    } else if (key === 'category') {
      data.category = value;
      const lower = value.toLowerCase();
      if (lower.includes('ai') || lower.includes('agent') || lower.includes('ml')) data.filter = 'ai';
      else if (lower.includes('mobile') || lower.includes('app') || lower.includes('flutter') || lower.includes('react native') || lower.includes('expo')) data.filter = 'mobile';
      else if (lower.includes('cloud') || lower.includes('devops') || lower.includes('data') || lower.includes('system') || lower.includes('backend')) data.filter = 'cloud';
      else data.filter = 'web';
    } else if (key === 'filter') {
      data.filter = value.toLowerCase();
    } else if (key === 'featured') {
      data.featured = value.toLowerCase() === 'true' || value === '1';
    } else if (key === 'description' || key === 'desc') {
      data.desc = value;
    } else if (key === 'tech' || key === 'technologies' || key === 'stack') {
      data.tech = value.split(',').map(t => t.trim()).filter(Boolean);
    } else if (key === 'demo' || key === 'link' || key === 'url') {
      data.demo = value;
    } else if (key === 'github' || key === 'repo') {
      data.github = value;
    } else if (key === 'feature' || key === 'keyfeature') {
      data.features.push(value);
    } else if (key === 'screenshot' || key === 'image' || key === 'img') {
      data.screenshots.push(value);
    } else if (key === 'codelanguage' || key === 'language') {
      data.codeLanguage = value.toLowerCase();
    }
  }

  return data;
}

async function scanLocalDirectory(rootDir) {
  console.log(`🔍 Scanning local directories in: ${rootDir}...`);
  const foundProjects = [];

  if (!fs.existsSync(rootDir)) return foundProjects;

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;

    const repoPath = path.join(rootDir, entry.name);
    let triggerFile = null;

    for (const trig of TARGET_TRIGGER_FILENAMES) {
      const p = path.join(repoPath, trig);
      if (fs.existsSync(p)) {
        triggerFile = p;
        break;
      }
      const pDocs = path.join(repoPath, 'docs', trig);
      if (fs.existsSync(pDocs)) {
        triggerFile = pDocs;
        break;
      }
    }

    if (triggerFile) {
      console.log(`✨ Found trigger file in local repo: [${entry.name}] -> ${triggerFile}`);
      const content = fs.readFileSync(triggerFile, 'utf8');
      
      let parsed;
      if (triggerFile.endsWith('.json')) {
        try {
          parsed = JSON.parse(content);
        } catch (e) {
          console.error(`❌ Error parsing JSON in ${triggerFile}:`, e.message);
          continue;
        }
      } else {
        parsed = parsePortTxt(content, entry.name, `https://github.com/${GITHUB_USERNAME}/${entry.name}`);
      }

      // Check if repo has images
      const fileList = [];
      const images = [];
      try {
        const files = fs.readdirSync(repoPath);
        for (const f of files) {
          fileList.push(f);
          if (/\.(png|jpe?g|webp|gif)$/i.test(f) && !f.toLowerCase().includes('icon') && !f.toLowerCase().includes('logo')) {
            images.push(f);
          }
        }
      } catch (e) {}

      if (!parsed.screenshots || parsed.screenshots.length === 0) {
        parsed.screenshots = images;
      }

      // If description or code is missing and Gemini API key is set, enhance with AI!
      if (process.env.GEMINI_API_KEY && (!parsed.desc || parsed.features.length === 0 || !parsed.codeSnippet)) {
        let readme = '';
        const readmePath = path.join(repoPath, 'README.md');
        if (fs.existsSync(readmePath)) {
          readme = fs.readFileSync(readmePath, 'utf8');
        }
        const aiData = await analyzeWithGemini(entry.name, readme, fileList, parsed);
        if (aiData) {
          parsed.title = parsed.title || aiData.title;
          parsed.desc = parsed.desc || aiData.desc;
          parsed.category = parsed.category === 'Full-Stack & Web' ? (aiData.category || parsed.category) : parsed.category;
          parsed.filter = parsed.filter === 'web' ? (aiData.filter || parsed.filter) : parsed.filter;
          if (!parsed.tech.length) parsed.tech = aiData.tech || [];
          if (!parsed.features.length) parsed.features = aiData.features || [];
          if (!parsed.codeSnippet && aiData.codeSnippet) {
            parsed.codeSnippet = aiData.codeSnippet;
            parsed.codeLanguage = aiData.codeLanguage || parsed.codeLanguage;
            parsed.hasCodeSnippet = true;
          }
        }
      }

      parsed.id = parsed.id || entry.name.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
      foundProjects.push(parsed);
    }
  }

  return foundProjects;
}

async function scanGitHubRepos() {
  console.log(`🌐 Scanning GitHub repositories for user: @${GITHUB_USERNAME}...`);
  const foundProjects = [];

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
      headers: getGitHubHeaders()
    });

    if (!res.ok) {
      console.warn(`⚠️ GitHub API returned ${res.status}: ${res.statusText}`);
      return foundProjects;
    }

    const repos = await res.json();

    for (const repo of repos) {
      if (repo.fork) continue;

      try {
        const contentsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents`, {
          headers: getGitHubHeaders()
        });

        if (!contentsRes.ok) continue;

        const files = await contentsRes.json();
        if (!Array.isArray(files)) continue;

        let triggerFile = files.find(f => TARGET_TRIGGER_FILENAMES.includes(f.name.toLowerCase()));
        
        if (triggerFile) {
          console.log(`✨ Found remote trigger file in GitHub repo: [${repo.name}] (${triggerFile.name})`);
          const fileRes = await fetch(triggerFile.download_url);
          const content = await fileRes.text();

          let parsed;
          if (triggerFile.name.endsWith('.json')) {
            parsed = JSON.parse(content);
          } else {
            parsed = parsePortTxt(content, repo.name, repo.html_url);
          }

          if (!parsed.screenshots || parsed.screenshots.length === 0) {
            const screenshots = files
              .filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f.name) && !f.name.toLowerCase().includes('icon') && !f.name.toLowerCase().includes('logo'))
              .map(f => f.download_url);
            parsed.screenshots = screenshots;
          }

          // If description or features are missing, enhance via Gemini AI!
          if (process.env.GEMINI_API_KEY && (!parsed.desc || parsed.features.length === 0 || !parsed.codeSnippet)) {
            let readme = '';
            const readmeFile = files.find(f => f.name.toLowerCase() === 'readme.md');
            if (readmeFile) {
              try {
                const rRes = await fetch(readmeFile.download_url);
                if (rRes.ok) readme = await rRes.text();
              } catch (e) {}
            }
            const fileList = files.map(f => f.name);
            const aiData = await analyzeWithGemini(repo.name, readme, fileList, parsed);
            if (aiData) {
              parsed.title = parsed.title || aiData.title;
              parsed.desc = parsed.desc || aiData.desc;
              parsed.category = parsed.category === 'Full-Stack & Web' ? (aiData.category || parsed.category) : parsed.category;
              parsed.filter = parsed.filter === 'web' ? (aiData.filter || parsed.filter) : parsed.filter;
              if (!parsed.tech.length) parsed.tech = aiData.tech || [];
              if (!parsed.features.length) parsed.features = aiData.features || [];
              if (!parsed.codeSnippet && aiData.codeSnippet) {
                parsed.codeSnippet = aiData.codeSnippet;
                parsed.codeLanguage = aiData.codeLanguage || parsed.codeLanguage;
                parsed.hasCodeSnippet = true;
              }
            }
          }

          parsed.id = parsed.id || repo.name.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
          parsed.github = parsed.github || repo.html_url;
          parsed.demo = parsed.demo || repo.homepage || '';
          foundProjects.push(parsed);
        }
      } catch (err) {
        // Continue to next repo
      }
    }
  } catch (err) {
    console.warn(`⚠️ Could not complete GitHub scan:`, err.message);
  }

  return foundProjects;
}

function mergeProjects(existingProjects, newProjects) {
  const map = new Map();

  for (const p of existingProjects) {
    map.set(p.id, p);
  }

  let addedCount = 0;
  let updatedCount = 0;

  for (const p of newProjects) {
    const hasCode = p.hasCodeSnippet || (!p.screenshots?.length && !p.img);
    const defaultImg = p.screenshots && p.screenshots.length > 0 ? p.screenshots[0] : (p.img || null);
    const gallery = p.screenshots && p.screenshots.length > 0 ? p.screenshots : (p.gallery || []);

    const formatted = {
      id: p.id,
      title: p.title || p.name,
      category: p.category || 'Full-Stack & Web',
      filter: p.filter || 'web',
      featured: typeof p.featured === 'boolean' ? p.featured : false,
      hasCodeSnippet: hasCode,
      codeLanguage: p.codeLanguage || 'javascript',
      codeSnippet: p.codeSnippet || '',
      img: defaultImg,
      gallery: gallery,
      tech: Array.isArray(p.tech) ? p.tech : (p.tech ? [p.tech] : []),
      desc: p.desc || p.description || '',
      features: Array.isArray(p.features) ? p.features : [],
      github: p.github || '',
      link: p.demo || p.link || p.github || '#'
    };

    if (map.has(p.id)) {
      map.set(p.id, { ...map.get(p.id), ...formatted });
      updatedCount++;
    } else {
      map.set(p.id, formatted);
      addedCount++;
    }
  }

  return {
    merged: Array.from(map.values()),
    addedCount,
    updatedCount
  };
}

async function run() {
  console.log('====================================================');
  console.log('🚀 Portfolio Cloud & Local Ingestion Engine (AI-Powered)');
  console.log('====================================================');

  if (process.env.GEMINI_API_KEY) {
    console.log('✨ Gemini AI Intelligence: ENABLED');
  } else {
    console.log('ℹ️ Gemini AI Intelligence: DISABLED (Set GEMINI_API_KEY to enable auto-summaries)');
  }

  const args = process.argv.slice(2);
  const onlyLocal = args.includes('--local');
  const onlyGithub = args.includes('--github');

  let existing = [];
  if (fs.existsSync(PROJECTS_FILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf8'));
    } catch (e) {
      console.warn('⚠️ Could not parse existing projects.json, creating a new dataset.');
    }
  }

  const collected = [];

  // 1. Scan Local Sibling Repositories if running on local dev machine
  if (!onlyGithub) {
    const parentDir = path.resolve(__dirname, '..', '..');
    const localFound = await scanLocalDirectory(parentDir);
    collected.push(...localFound);
  }

  // 2. Scan Remote GitHub Repositories (Runs in GitHub Actions cloud or local CLI)
  if (!onlyLocal) {
    const githubFound = await scanGitHubRepos();
    collected.push(...githubFound);
  }

  console.log(`\n📊 Scanned & detected ${collected.length} projects with trigger files.`);

  if (collected.length > 0) {
    const { merged, addedCount, updatedCount } = mergeProjects(existing, collected);
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(merged, null, 2));
    console.log(`✅ Saved ${merged.length} total projects to ${PROJECTS_FILE}`);
    console.log(`   + Added: ${addedCount} new projects`);
    console.log(`   * Updated: ${updatedCount} existing projects`);
  } else {
    console.log(`ℹ️ No new trigger files found. Total active projects in portfolio: ${existing.length}`);
  }

  console.log('====================================================\n');
}

run();
