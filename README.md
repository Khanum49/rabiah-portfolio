# Rabiah Khanum | Portfolio

This is my personal portfolio website, built using **Astro** and **Tailwind CSS**, to showcase my professional skills, projects, and technical writing work. 

## What's Inside

**Home** — An introduction and skills overview, connecting my electrical engineering background to the technical writing work I do now. Includes a live breakdown of the tools and domains I work across: docs-as-code, API documentation, networking, embedded systems.

**Documentation** — A collection of real technical guides (Linux firewall configuration, Inter-VLAN routing, ESP32/STM32 microcontrollers, RTOS vs bare metal) written the way I'd document them for an actual engineering team: prerequisites, step-by-step instructions, and verification steps included, not just theory. Also includes reflective pieces on the writing process itself, like what building my first open-source contribution to rstdoc taught me.

**API Docs** — A full REST API reference for a fictional IoT Device Management API, built to demonstrate real API documentation skills: authentication, endpoint references, request/response examples, error handling, and live "Try it" demos backed by a real mock API. Structured around Postman's API documentation best practices, since that's what I studied to build it.

**Feedback System** — Every documentation page includes a live feedback widget (thumbs up/down, optional comment). Submissions route through a Cloudflare Worker to a private Slack channel, tagged for review when they need one, and now include the exact page section a reader was viewing. I built this after researching the same mechanism for a client project at Xgrid — this version is fully mine, end to end.

**Videos** — Conversations and interviews about technical writing as a career and craft, including my own appearances discussing documentation practices and my transition from engineering into writing.

**Blog** — Longer-form, reflective writing: published pieces (like my STVY feature on entering tech writing during the AI boom) alongside personal essays on books, poetry, and creative process.

**Contact** — A direct way to reach me for freelance work, collaboration, or questions about anything documented here.

## Tech Stack

- **Frontend:** Astro, Tailwind CSS
- **Deployment:** GitHub Pages (static site)
- **Feedback backend:** Cloudflare Workers (serverless relay to Slack)
- **Docs build:** MkDocs + GitHub Actions (automated build & deploy)