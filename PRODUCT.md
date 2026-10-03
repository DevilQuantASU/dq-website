# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

ASU students who are curious about quantitative finance, from any major. They arrive from a Discord or LinkedIn link, a club fair, Sun Devil Central, or word of mouth, usually on a phone, and decide within seconds whether this club is for them. Their job: understand what DevilQuant is and join.

## Product Purpose

The public website of DevilQuant, the first quantitative finance club at Arizona State University (est. January 2025). Success means a visiting student immediately understands what the club is and joins: through the Discord server (primary community) or the Sun Devil Central club signup.

## Positioning

The first quant finance club at ASU. That claim and the member placements are the proof the homepage may use.

## Operating Context

- Static React SPA on GitHub Pages at devilquant.com; HashRouter URLs (`/#/about`).
- Pages: Home, About (mission, member placements, leadership and members by year, founders, contact), Resources (guides), Projects.
- Join paths: `/discord`, `/sundevilcentral`, and `/linkedin` redirects (URLs in `src/data/links.js`). Contact: contact@devilquant.com.

## Capabilities and Constraints

- Stack: React 19, Vite 7, Tailwind CSS v4, React Router 7 (HashRouter), `motion` available. Internal links must use `<Link>`.
- The hero background video was removed (2026-10-01); the homepage has no background media.
- The club has no official tagline. Don't write or suggest one; the footer line stays until the club provides one.
- The footer GitHub link stays as is (maintainer decision).

## Brand Commitments

- Name: DevilQuant.
- The DQ monogram (`public/DQ.png`, light mark on dark) is the club's logo and must be kept.
- The site stays dark-themed.
- ASU maroon/gold and Sun Devil branding are not committed and not to be used.

## Evidence on Hand

- Approved homepage claims: "the first quantitative finance club at ASU"; member placements at Amazon, AWS, Capital One, General Dynamics, Microsoft, Seagate, ServiceNow, Wells Fargo (logos in `public/logos/`).
- Incumbent hero copy (existing, may be kept): "DevilQuant is the first quantitative finance club at ASU. We are a community of students who are building real projects, networking, participating in competitions, and working with industry professionals."
- Not approved as homepage claims: the three career tracks (Trading/Developer/Research), activity lists, and specific projects. Link to the Projects and Resources pages instead of restating them.
- Absent: member counts, event schedules, testimonials, sponsors, competition results, photos of events. Never fabricate these.

## Product Principles

1. A visitor knows what DevilQuant is within the first screen.
2. Joining is always one obvious step away.
3. Claim only what is approved; let real placements carry the proof.
4. Phone-first: most visitors arrive from a shared link on mobile.
