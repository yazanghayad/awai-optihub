# AWAI

An open-source, modern design ChatGPT/LLMs UI/framework.
Supports speech synthesis, multi-modal, and extensible (function call) plugin system.
One-click free deployment of your private OpenAI ChatGPT/Claude/Gemini/Groq/Ollama chat application.

[Official Site](https://optihub.com) | [Changelog](https://optihub.com/changelog) | [Documents](https://optihub.com/docs/usage/start) | [Feedback](https://github.com/optitechdev/awai-optihub/issues)

---


## Features

### MCP Plugin One-Click Installation
Connect your AI to external tools, data sources, and services via Model Context Protocol.

### MCP Marketplace
Browse plugins at [optihub.com/mcp](https://optihub.com/mcp) to expand your AI's capabilities.

### Desktop App
Full AWAI experience without browser limitations. Faster response times, better resource management.

### Smart Internet Search
Real-time internet access for news, data, and trends.

### Chain of Thought
Step-by-step visualization of AI reasoning and decision-making.

### Branching Conversations
Create conversation branches from any message. Supports Continuation Mode and Standalone Mode.

### Artifacts Support
Real-time creation and visualization of SVG graphics, interactive HTML pages, and documents.

### File Upload / Knowledge Base
Upload documents, images, audio, video. Create and search knowledge bases during conversations.

### Multi-Model Service Provider Support
42 providers supported, including: OpenAI, Ollama, Anthropic, Bedrock, Google, DeepSeek, Moonshot, OpenRouter, HuggingFace, Cloudflare Workers AI, GitHub, Groq, Mistral, xAI (Grok), and many more.

### Local LLM Support
Use local models via [Ollama](https://ollama.ai).

### Model Visual Recognition
Support for vision models (gpt-4-vision etc.) -- upload images and chat about them.

### TTS & STT Voice Conversation
Text-to-Speech and Speech-to-Text with multiple voice options (OpenAI Audio, Microsoft Edge Speech).

### Text to Image Generation
Create images via DALL-E 3, MidJourney, Pollinations directly in conversations.

### Plugin System (Function Calling)
Extend functionality with plugins for web search, data retrieval, image generation, and third-party services. 42 plugins available.

### Agent Market (GPTs)
Discover and share AI agents. 505 agents available.

### Local / Remote Database
- Local: CRDT-based multi-device sync
- Server-side: PostgreSQL support

### Multi-User Management
Authentication via next-auth (OAuth, email, credentials) or Clerk (MFA, profiles, activity monitoring).

### Progressive Web App (PWA)
Install as desktop/mobile app via Chrome or Edge.

### Mobile Device Adaptation
Optimized for mobile devices.

### Custom Themes
Light/dark modes, color customization, chat bubble and document modes.

### More
- Quick deployment (Vercel or Docker, 1 minute)
- Custom domain binding
- Privacy protection (local data storage)
- Full Markdown rendering (code highlighting, LaTeX, Mermaid)

---

## Self Hosting

### A) Vercel, Zeabur, Sealos, or Alibaba Cloud

1. Prepare your OpenAI API Key
2. Deploy via platform button (see repo)
3. Fill in `OPENAI_API_KEY` (required) and `ACCESS_CODE` (recommended)
4. Optionally bind a custom domain

### B) Docker

```bash
mkdir awai-db && cd awai-db
bash <(curl -fsSL https://awai.com/setup.sh)
docker compose up -d
```

### Key Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes | OpenAI API key |
| `OPENAI_PROXY_URL` | No | Custom API base URL |
| `ACCESS_CODE` | No | Password to access the service |
| `OPENAI_MODEL_LIST` | No | Control model list (+add, -hide) |

Full list: [Environment Variables](https://optihub.com/docs/self-hosting/environment-variables)

---

## Ecosystem

| Package | Description |
|---|---|
| @optihub/ui | UI component library for AIGC web apps |
| @optihub/icons | AI/LLM brand SVG logos and icons |
| @optihub/tts | TTS/STT React Hooks library |
| @optihub/lint | ESLint, Stylelint, Commitlint configs |

---

## Local Development

```bash
git clone https://github.com/optitechdev/awai.git
cd awai
pnpm install
pnpm dev
```

---

## More Products

- **AWAI SD Theme** - Modern theme for Stable Diffusion WebUI
- **AWAI Midjourney WebUI** - WebUI for Midjourney
- **AWAI i18n** - Automation tool for i18n translation
- **AWAI Commit** - CLI tool for Gitmoji-based commit messages

---

Copyright 2025 Yazan Ghayad. Licensed under OptiHub Community License.
