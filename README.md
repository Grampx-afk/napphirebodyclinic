# Napphire Body Clinic — Website

Official website for **Napphire Body Clinic**, a premium aesthetic and wellness clinic in Ibadan, Nigeria.

---

## 📁 File Structure
```
napphire-body-clinic/
├── index.html           ← Full website
├── build.js             ← Injects env variables at deploy time
├── package.json         ← Build config for Vercel
├── vercel.json          ← Vercel deployment config
├── ceo.png              ← CEO photo
├── napphire_setup.sql   ← Run this in Supabase SQL Editor
└── README.md            ← This file
```

---

## 🗄️ Supabase Setup (do this first)
1. Go to supabase.com and create a free account
2. Create a new project named napphire-clinic
3. Go to SQL Editor and run napphire_setup.sql
4. Go to Settings → API and copy your Project URL and anon public key

---

## 🚀 Deploy to Vercel

### Step 1 — Push to GitHub
git init
git add .
git commit -m "Initial commit — Napphire Body Clinic"
git remote add origin https://github.com/YOURUSERNAME/napphire-body-clinic.git
git push -u origin main

### Step 2 — Import to Vercel
1. Go to vercel.com and sign in
2. Click "Add New Project" → Import your GitHub repo
3. Build Settings:
   - Framework Preset: Other
   - Build Command: node build.js
   - Output Directory: . (root)

### Step 3 — Add Environment Variables
In Vercel → Project Settings → Environment Variables:

  SUPABASE_URL        →  https://your-project.supabase.co
  SUPABASE_ANON_KEY   →  eyJ...your-anon-key...

Set for Production, Preview, and Development.

### Step 4 — Deploy
Click Deploy — live in ~30 seconds!

---

## 🔄 Updating Env Variables Later
1. Vercel → Project → Settings → Environment Variables → Edit
2. Go to Deployments → Redeploy latest
3. Done ✅

---

## 📞 Contact
Phone: +234 904 788 6972
Email: enquiry@napphire.com.ng
Address: Emagbadun Building, Iwo Rd, Beside Bishop Phillips, Ibadan 200223, Oyo State
Hours: Monday – Saturday, 9:00 AM – 5:00 PM
