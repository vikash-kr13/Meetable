# Grouproll — Landing Page

Table-filling software for independent board game stores and cafés.

---

## What's in this repo

A complete React + TypeScript landing page with Firebase/Firestore email capture, deployed to
Google Cloud Run via AI Studio's built-in publish flow.

```
src/
  App.tsx                  ← Section assembly, scroll-to-capture nav hook
  index.tsx                ← React root
  firebase.ts              ← Firebase init (reads REACT_APP_FIREBASE_* env vars)
  leads.ts                 ← saveLead() — writes to Firestore `leads` collection
  hooks/
    useEntrance.ts         ← IntersectionObserver scroll-entrance, respects prefers-reduced-motion
  components/
    Nav.tsx / .css         ← Sticky nav, wordmark + 3 links + 1 CTA
    Hero.tsx / .css        ← Split layout, SVG hero image, email capture
    Problem.tsx / .css     ← 4-pain columns, surface band
    HowItWorks.tsx / .css  ← 3 numbered cards, bg band
    DemoMoment.tsx / .css  ← Two-panel worked example + second email capture
    Benefits.tsx / .css    ← 3-col grid, outline icons
    Pricing.tsx / .css     ← 3 tiers, recommended badge, tier modal with capture
    FAQ.tsx / .css         ← Accordion
    FinalCTA.tsx / .css    ← Centered CTA, third email capture
    SiteFooter.tsx / .css  ← Brand + links
  styles/
    global.css             ← ALL color/type/spacing tokens as CSS variables
firestore.rules            ← Public write, zero public read
firebase.json              ← Hosting + Firestore config
```

---

## Phase 1: Run locally

```bash
cd grouproll
npm install
cp .env.example .env
# Fill in your Firebase project values in .env
npm start
```

Open http://localhost:3000

---

## Phase 2: Enable Firebase (email capture)

**In Google AI Studio:**

> ⚡ **Click the "Enable Firebase" card in the AI Studio integrations panel.**
> AI Studio will provision a Firestore database and inject all `REACT_APP_FIREBASE_*`
> environment variables automatically. You do NOT need to touch `.env` in Studio.

### Firestore security rules

The rules in `firestore.rules` enforce:

- **Anyone may CREATE a lead** — the public form writes `{ email, source, tier, timestamp }` with basic validation (email must be a non-empty string under 320 chars, source must be a string).
- **Nobody may READ, UPDATE, or DELETE** leads from the public site — `allow read, update, delete: if false`.

Deploy the rules:

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only firestore:rules
```

### What gets stored per lead

```json
{
  "email": "owner@dicehaven.com",
  "source": "tier-fullhouse",
  "tier": "Full House",
  "timestamp": "2025-07-01T19:30:00Z"
}
```

`source` is one of: `hero` · `demo` · `final-cta` · `tier-starter` · `tier-fullhouse` · `tier-multilocation`

### Honeypot anti-spam

Every form has a visually-hidden input (`position: absolute; left: -9999px`). Submissions where
that field is non-empty are silently discarded before any Firestore write.

### Test the capture

1. Open the page at http://localhost:3000
2. Enter an email in the hero form and submit
3. In the Firebase Console → Firestore → `leads` collection, you will see the document with your
   email, source `"hero"`, and a server timestamp.

---

## Phase 3: Publish to a live URL

**Google AI Studio — Share > Publish:**

1. In AI Studio, open the project.
2. Click **Share** (top-right) → **Publish**.
3. AI Studio builds the React app and deploys it to Cloud Run (free starter tier — no credit card required).
4. Copy the live URL from the confirmation dialog.
5. Open the live URL in a private/incognito window and submit a real email.
6. Verify the lead appears in the Firebase Console → Firestore → `leads` collection.

**The page is now live on a real public URL.**

---

## Share kit (ready to post)

### Post 1 — Facebook group for independent game store owners

> Question for folks who run weeknight events: how do you deal with the gap between "interested"
> clicks and actual butts in seats? I've been researching this problem for a couple months — talked
> to players and store staff — and the pattern is the same everywhere: attendance swings from 6 to
> 20+ with no warning, newcomers get seated wrong and don't come back, and one cancellation kills a
> whole table. I built a tool that forms matched 4-6 person tables from a store's own email/Discord
> list, sends reminders, and backfills no-shows from a waitlist. I put together a page for this and
> I'd genuinely rather hear what's wrong with it than launch quietly. What would make this useless
> for your store? **[YOUR LINK]**

### Post 2 — LinkedIn or X

> The same company now owns both Meetup and Eventbrite. It bought Meetup in 2024 and raised
> organizer prices within six months. It closed on Eventbrite this year for ~$500M. Every
> independent game store that runs its weekly game night on either platform now has one landlord —
> and the rent only goes up. Meanwhile "board game cafe near me" gets 14,800 US searches a month,
> up 1.6x year over year. The demand walks past the door; it just doesn't find a seat. I've been
> working on a tool that fills store game nights from the store's own player list instead of a
> rented platform. I put together a page for it — honest feedback welcome, especially from anyone
> who runs or attends store events. **[YOUR LINK]**

### Post 3 — Tabletop retail Discord / BGG retailer forum

> Been digging into why store game nights run half empty even though players literally post "I can't
> find a group, even at my local game store" threads (one hit 140+ comments on r/boardgames). The
> failure point seems to be table formation — matching by game, skill, and availability — not
> awareness. I made a tool that does that part automatically from a store's existing list, with
> reminders and waitlist backfill. I put together a page for this and I'm looking for a handful of
> stores to poke holes in it before I go further. What am I missing? **[YOUR LINK]**

### DM version

> I've been researching why store game nights run half empty and built a tool that forms matched
> tables from a store's own player list — reminders and no-show backfill included. I put together a
> page for it and would really value your take as someone who runs events: **[YOUR LINK]**

---

## Design token reference

All values are CSS variables in `src/styles/global.css`. No hardcoded hex anywhere in components.

| Token | Value |
|-------|-------|
| `--color-bg` | `#FBF8F2` |
| `--color-surface` | `#FFFFFF` |
| `--color-border` | `#E3DCCD` |
| `--color-text-primary` | `#26221A` |
| `--color-text-muted` | `#6E6657` |
| `--color-accent` | `#1E6B4C` |
| `--color-accent-hover` | `#16543B` |
| `--color-text-on-accent` | `#FFFFFF` |
