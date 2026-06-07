# Claude Code Custom Commands

## /research [competitor-name]

Runs a complete 4-agent competitor research and analysis pipeline.

### Usage

```
/research Notion
/research Linear
/research Figma
/research "Salesforce CRM"
```

### What it does

| Agent | Role | Output file |
|-------|------|-------------|
| Agent 1 — IDENTIFY | Researches the competitor across 8 dimensions | `research/competitor-profile.md` |
| Agent 2 — ANALYZE | SWOT + positioning + monetization analysis | `research/strategic-analysis.md` |
| Agent 3 — BREAK DOWN | Full software + business component map | `research/component-breakdown.md` |
| Agent 4 — SUMMARIZE | 30/90/long-term implementation roadmap | `research/implementation-roadmap.md` |

Agents run sequentially and autonomously — no confirmation prompts.
All outputs are saved to the `research/` folder.
