# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Yet Another Fashion AI** — a satirical landing page parodying AI startup marketing in the fashion industry. The humor is dry and subtle: the page should feel almost real before visitors realize it's satire.

## Stack

- **Backend**: Python with Flask or FastAPI (one file)
- **Frontend**: Plain HTML, vanilla JS, plain CSS (one file each)
- No heavy frameworks, no real ML, no external APIs, no auth, no data collection

## Running the App

```bash
# Flask
pip install flask
python app.py

# FastAPI
pip install fastapi uvicorn
uvicorn app:app --reload
```

## Architecture

The entire project fits in ~4 files:

- `app.py` — serves the single-page app; one endpoint (`/generate`) returns randomized fake AI output as JSON
- `templates/index.html` — full single-page experience with all sections
- `static/style.css` — AI startup visual aesthetic (gradients, bold type, whitespace)
- `static/app.js` — orchestrates the interactive flow (loading sequence, prompt submission, output reveal)

**The fake AI generator** (`/generate`) uses `random.choice()` over hardcoded lists of buzzword values (fits, fabrics, garment names, measurements). The user's prompt input is ignored or only superficially echoed. No real ML.

## Interactive Flow

1. Hero section → "Generate Disruption" button
2. Problem section (dramatic statements, scrolls)
3. "Generate Innovation" triggers fake loading bar (pauses at 97%)
4. Prompt input form
5. POST to `/generate` → fake techpack output displayed
6. "Export to Enterprise PLM" button shows: *"Export complete. Your development team has been replaced."*
7. Features / Testimonials / Pricing / Closing punchline

## Tone Rules

- Mimic real AI startup marketing: confident, vague, buzzword-heavy
- **Never** make jokes explicit — the humor comes from deadpan exaggeration
- Copy phrases like: "neural garment intelligence", "post-human fashion pipelines", "AI-native design workflows"
- Sustainability Score must be >100% (e.g., 112%)
- Pricing must be absurd ($999/mo Starter, $29,999/mo Enterprise)
- Testimonials attribute to vague corporate titles ("VP of Innovation, Major Luxury Brand")
