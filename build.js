// build.js — runs during Vercel deployment
// Replaces {{SUPABASE_URL}} and {{SUPABASE_ANON_KEY}} placeholders
// with real values from Vercel Environment Variables

const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('⚠️  Warning: SUPABASE_URL or SUPABASE_ANON_KEY environment variable is missing.');
  console.warn('   Add them in Vercel → Project Settings → Environment Variables');
}

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(/\{\{SUPABASE_URL\}\}/g, SUPABASE_URL);
html = html.replace(/\{\{SUPABASE_ANON_KEY\}\}/g, SUPABASE_ANON_KEY);

fs.writeFileSync(indexPath, html, 'utf8');

console.log('✅ Build complete — environment variables injected.');
console.log(`   SUPABASE_URL: ${SUPABASE_URL ? '✓ set' : '✗ missing'}`);
console.log(`   SUPABASE_ANON_KEY: ${SUPABASE_ANON_KEY ? '✓ set' : '✗ missing'}`);
