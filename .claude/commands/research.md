# Competitor Research Workflow

Run a full 4-agent competitor research pipeline for: **$ARGUMENTS**

You are the orchestrator of a sequential multi-agent competitor research workflow. Execute each agent in order, passing the full output of each agent as input to the next. Do NOT ask for confirmation between agents — run all four to completion autonomously.

---

## AGENT 1 — IDENTIFY

Spawn an agent with the following prompt:

```
You are a competitive intelligence researcher. Your job is to build a comprehensive competitor profile for: $ARGUMENTS

Research and document the following using web search:
1. Website — URL, design quality, UX, key pages
2. Product offerings — core features, product lines, free vs paid tiers
3. Pricing — tiers, price points, billing models (monthly/annual), free trials
4. Target audience — company size, industry, job titles, geography, use cases
5. Marketing channels — SEO, paid ads, content marketing, email, partnerships
6. Social media presence — platforms used, follower counts, posting frequency, content style
7. Technology stack — frontend framework, backend clues, hosting, CDN, notable tools (use BuiltWith hints, job postings, GitHub if open source)
8. Unique selling propositions — what they claim makes them different, key messaging, brand voice

Output a structured Markdown document with all 8 sections clearly labelled. Be specific — include actual prices, URLs, follower numbers, and tech names where found. End with a one-paragraph executive summary of who this company is.
```

Store the agent's full output as the competitor profile.

---

## AGENT 2 — ANALYZE

Spawn an agent with the following prompt, injecting the full competitor profile from Agent 1:

```
You are a strategic business analyst. Using the competitor profile below, produce a deep strategic analysis.

COMPETITOR PROFILE:
[INSERT AGENT 1 OUTPUT HERE]

Your analysis must cover:
1. Strengths — what are they doing well? (product, brand, distribution, pricing, UX)
2. Weaknesses — where are the gaps, pain points, or vulnerabilities?
3. Opportunities — what market gaps or unmet needs can be exploited?
4. Threats — how could they block or outcompete a challenger?
5. Market positioning — where do they sit (low-cost vs premium, niche vs broad)?
6. Customer acquisition methods — how do they get new customers? (organic, paid, referral, community)
7. Monetization methods — how do they generate revenue? (subscriptions, usage, services, upsells)
8. Automation opportunities — where are they likely using or missing automation that could be a differentiator?

Format each section as a Markdown header with bullet points. Be analytical, not descriptive — explain WHY each point matters strategically. End with a one-paragraph positioning summary.
```

Store the agent's full output as the strategic analysis.

---

## AGENT 3 — BREAK DOWN

Spawn an agent with the following prompt, injecting the outputs from Agents 1 and 2:

```
You are a software architect and product analyst. Using the competitor research below, reverse-engineer and map every component of this product and business.

COMPETITOR PROFILE:
[INSERT AGENT 1 OUTPUT HERE]

STRATEGIC ANALYSIS:
[INSERT AGENT 2 OUTPUT HERE]

Produce a detailed component map covering:

### Software Components
- Frontend — framework, UI library, key screens, notable UX patterns
- Backend — likely architecture (monolith/microservices), language/framework, APIs exposed
- Database — likely database(s), data models implied by features
- APIs — internal APIs, third-party integrations, public API if any
- Authentication — login methods (SSO, social, MFA), session handling
- Payment system — processor, billing engine, subscription management
- Analytics — product analytics, marketing analytics, data warehouse clues
- AI features — any AI/ML components, LLM integrations, automation features
- Integrations — key third-party tools they connect with (CRMs, ERPs, communication tools)

### Business Components
- Marketing funnel — awareness → consideration → decision stages and tactics
- Lead generation — magnets, forms, trials, demos, SEO content
- Sales process — self-serve vs sales-assisted, demo flow, contract process
- Customer retention — onboarding, success programs, NPS, churn prevention tactics

For each component: describe what they likely have, rate complexity (Low/Medium/High), and note any gaps or weaknesses. Format as a Markdown document with clear sections and tables where helpful.
```

Store the agent's full output as the component breakdown.

---

## AGENT 4 — SUMMARIZE

Spawn an agent with the following prompt, injecting the outputs from Agents 1, 2, and 3:

```
You are a startup CTO and product strategist. Using the full competitor research below, create an actionable implementation plan to build a competing product that beats this competitor on key dimensions.

COMPETITOR PROFILE:
[INSERT AGENT 1 OUTPUT HERE]

STRATEGIC ANALYSIS:
[INSERT AGENT 2 OUTPUT HERE]

COMPONENT BREAKDOWN:
[INSERT AGENT 3 OUTPUT HERE]

Produce the following:

## Executive Summary
2–3 paragraphs: who the competitor is, the key strategic opportunity, and the recommended approach to compete.

## Feature Priority Matrix
Table with columns: Feature | Impact (H/M/L) | Difficulty (H/M/L) | Priority Score | Notes
List the 15 most important features to build, ranked by impact vs difficulty.

## Recommended Tools & Frameworks
For each major component (frontend, backend, database, auth, payments, analytics, AI), recommend the best tool/framework and briefly justify it.

## Quick Wins (Week 1–2)
Bullet list of 5–8 things that can be done immediately to establish a foundation or competitive edge.

## Differentiators
Bullet list of 5–8 ways to genuinely differentiate from this competitor — things they don't do or do poorly.

## 30-Day Plan
Week-by-week breakdown of what to build and ship in the first 30 days.

## 90-Day Plan
Month-by-month breakdown of milestones for the first 90 days.

## Long-Term Strategy (6–18 months)
Quarterly milestones and strategic bets for long-term competitive positioning.

Format as a clean, well-structured Markdown document. Be concrete — name actual tools, give actual timeframes, recommend actual decisions.
```

Store the agent's full output as the implementation roadmap.

---

## FILE STORAGE INSTRUCTIONS

After all four agents complete, write their outputs to the following files in the `/research` folder of this project:

1. `research/competitor-profile.md` — Agent 1 output
2. `research/strategic-analysis.md` — Agent 2 output
3. `research/component-breakdown.md` — Agent 3 output
4. `research/implementation-roadmap.md` — Agent 4 output

Each file should begin with:
```
# [Title] — $ARGUMENTS
Generated: [current date]
```

After writing all files, print a summary to the user:
- Competitor researched
- Key insight from each agent (1–2 sentences each)
- File paths written
- Suggested next step
