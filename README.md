<div align="center">
  <h1>🛡️ Auto-Offensive Documentation</h1>
  <p>The official portal for guides, API recipes, and CLI tool references for the Auto-Offensive platform.</p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br />

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Content Authoring](#content-authoring)
- [Custom Components](#custom-components)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Writing Guidelines](#writing-guidelines)
- [License](#license)

---

## Overview

This repository contains the front-end documentation site for the Auto-Offensive platform. It is designed to provide developers, security engineers, and CI/CD administrators with an "Apple-style", premium reading experience. 

It covers everything from triggering remote scans via the `aof` CLI, to understanding sandboxed tool architectures (like Nuclei and Subfinder), to integrating the platform into automated workflows.

**Key Features:**
- **Bilingual i18n Support**: Full localization for English (EN) and Khmer (KH) using `next-intl`.
- **Premium Design System**: Glassmorphism UI, smooth Framer Motion micro-animations, and dynamic light/dark modes.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & custom Shadcn/ui components
- **Animations**: Framer Motion
- **i18n**: `next-intl`
- **Icons**: Lucide React

---

## Project Structure

```text
├── app/
│   ├── [locale]/            # Dynamic routing for /en and /kh
│   └── layout.tsx           # Global layouts and theme providers
├── components/
│   ├── document/            # 📝 ALL CONTENT LIVES HERE
│   │   ├── ci-cd/           # CI/CD integration guides
│   │   ├── getting-started/ # Quickstart and core concepts
│   │   ├── tools/           # Deep-dive references for tools
│   │   └── shared/          # Reusable UI primitives
│   └── navbar.tsx           # Global navigation
├── public/                  # Static assets (images, fonts)
└── .env.example             # Example environment variables
```

---

## Getting Started

To run the documentation locally for development:

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/auto-offensive-documentation.git
   cd auto-offensive-documentation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   *Note: The server runs on `http://localhost:3001` to avoid port collisions with the main Web App.*

---

## Content Authoring

Currently, content is written inside large React components (`.tsx` files). 
If you are adding a new sentence, you **must** provide the translation logic. This is handled via ternary operators based on the active locale:

```tsx
// Example of current authoring style
<Para>
  {isKhmer ? "Khmer String" : "English String"}
</Para>
```

*(Note: We are actively transitioning to MDX to streamline this process).*

---

## Custom Components

Never write raw HTML for styled elements. Always import and use the shared primitives from `components/document/shared/doc-primitives.tsx`:

- `<Callout type="info|warn|tip">`: Used for alerts and important notices.
- `<CodeBlock title="bash">`: Used for terminal commands and code snippets (includes copy button).
- `<Para>`: Standard paragraph typography.
- `<SectionHeading>`: Used for main `H2` headers.
- `<InlineCode>`: Used for highlighting inline variables or flags.

---

## Configuration

- **Next.js Configuration**: Modifiable in `next.config.ts`.
- **Tailwind**: Configured to support dark mode and custom CSS variables for our Apple-style theme.
- **i18n**: Configured via `next-intl` settings in `i18n.ts` and the middleware.

---

## Scripts

The following commands are available in `package.json`:

- `npm run dev`: Starts the local development server on port 3001.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch code quality issues.

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## Writing Guidelines

1. **Tone**: Professional, concise, and developer-centric.
2. **Formatting**: Always use our `<Custom Components>` instead of raw markdown or HTML.
3. **Roadmap**: We are migrating to **MDX (Markdown for JSX)**. Please check with maintainers before creating massive new `.tsx` content files, as they will need to be converted to `.mdx` shortly.

