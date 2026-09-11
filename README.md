# METACON — Architectural Design, Turnkey Construction & Luxury Interiors

A web application designed for **METACON (Design – Build – Decorate)**, showcasing architectural concepts, turnkey residential construction, structural remodeling, and bespoke interior decoration across **Islamabad, Rawalpindi, Lahore, and Peshawar**.

Built with modern React, pure Vanilla CSS design system, interactive tools, and pre-configured for deployment on **Vercel**.

---

## Key Features

1. **Executive Obsidian & Architectural Gold Aesthetic**:
   - Deep obsidian dark theme (`#080A0F` / `#0C0E14`) accented by warm architectural gold gradients (`#C59A63` / `#DFB987`).
   - Clean typography using Google Fonts **Outfit** and **Plus Jakarta Sans**.
2. **Hero Experience**:
   - High-impact visual featuring the custom tri-split concept (`hero-triplet.png`: Architectural Sketch, Structural Frame, Finished Interior).
   - "BUILT ON STRENGTH. DRIVEN BY TRUST." headline with instant consultation and portfolio CTAs.
3. **The 3 Core Disciplines (Design · Build · Decorate)**:
   - Detailed breakdowns for Architectural Layouts, Grey Structures, and Bespoke Interior Styling.
4. **Interactive Pakistan Construction Cost & Timeline Estimator**:
   - Real-time indicative construction cost calculation for 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal+ properties across Islamabad, Lahore, and Peshawar.
   - One-click transfer into the consultation inquiry form.
5. **Interactive Before & After Structural Remodeling Sliders**:
   - Smooth horizontal drag slider comparing unrenovated/structural frames with finished luxury spaces.
6. **Full-Featured Portfolio with Blueprint Lightbox**:
   - Filter by New Residential Builds, Remodeling, and Interior Styling.
   - Modal inspection viewer with 3D elevations, cutaways, and engineering specs.
7. **Contact & Consultation Form**:
   - Fields matching client specifications (Name, Phone with country code, Email, City dropdown, Service dropdown, Plot Size dropdown, Message).
   - Interactive submission with confirmation and confetti effect.
8. **Top Right Click-to-Call & 2-Column Regional Footer**:
   - Directly adheres to client instructions with persistent Central Office phone numbers and regional branch details.
9. **Floating WhatsApp Assistance**:
   - Direct pre-filled WhatsApp routing for Islamabad, Lahore, and Peshawar.

---

## Local Development

```bash
# Navigate to this directory
cd "metacon-website-antigravity"

# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev
```

---

## Deploying to Vercel

This project is configured out-of-the-box for **Vercel** with `vercel.json` rewrite rules and static asset optimization.

### Option A: Deploy via Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

### Option B: Deploy via GitHub (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**!
