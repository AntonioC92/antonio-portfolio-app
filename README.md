# Antonio’s Marketing Portfolio

Antonio’s portfolio is a sleek, modern web experience built using **Vite + React**, powered by **Contentful** for flexible content management, and deployed via **Cloudflare Pages** for blazing-fast global performance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Docker Setup](#docker-setup)
- [Deployment on Cloudflare](#deployment-on-cloudflare)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

This portfolio site is designed to **showcase Antonio’s work, highlight skills, and deliver a dynamic and engaging experience**. All content is managed through **Contentful**, enabling quick updates without redeploying the site.

---

## Features

- **Vite + React** – Fast dev environment and optimized builds.
- **Contentful CMS** – Manage projects, testimonials, and blog posts easily.
- **Framer Motion** – Smooth, scroll-triggered animations.
- **Responsive Design** – Looks great on mobile, tablet, and desktop.
- **SEO-Ready** – Meta tags and structured data for search visibility.
- **Cloudflare Pages** – Fast and globally distributed hosting.

---

## Setup and Installation

### **Prerequisites**

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **Contentful credentials**
- **Cloudflare account** (for deployment)
- **Docker** (optional)

### **Installation Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/antonio-portfolio.git
   cd antonio-portfolio
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root with:

   ```bash
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

---

## Running the Project

### **Development Mode**

Start the local development server:

```bash
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

For day-to-day UI-only work (no `/api/*` testing), use:

```bash
npm run dev:vite
```

### **Production Build**

Build the optimized production version:

```bash
npm run build
```

Preview it locally with:

```bash
npm run preview
```

### **Cloudflare Pages Local Dev (Wrangler)**

When running the built app with `wrangler pages dev`, create a `.dev.vars` file in the project root:

```bash
VITE_CF_SITEKEY=__REPLACE_ME__
VITE_CF_SECRET=__REPLACE_ME__
```

Then run:

```bash
npm run build && npx wrangler pages dev dist
```

Equivalent script:

```bash
npm run dev:cf
```

Use `dev:cf` when testing `/api/lead` (Pages Functions).

Do not commit real keys to git.

---

## Docker Setup

### **Using Docker Compose**

To build and run with Docker:

```bash
docker compose up --build
```

Access at: **`http://localhost:5173`**

To stop:

```bash
docker compose down
```

---

## Deployment on Cloudflare

### **Steps to Deploy**

1. Log in to **Cloudflare**, go to **Pages**, and create a new project.
2. Connect your **GitHub repo**.
3. Use the following build settings:

   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Environment variables**:

     - `VITE_CONTENTFUL_SPACE_ID`
     - `VITE_CONTENTFUL_ACCESS_TOKEN`
     - `VITE_CF_SITEKEY`
     - `VITE_CF_SECRET`

4. Hit **Deploy** and your site will go live globally.

---

## Project Structure

```plaintext
src/
│
├── components/         # UI building blocks (Header, Footer, ProjectCard, etc.)
├── sections/           # Homepage sections (Hero, Work, About, Contact)
├── styles/             # Global and component styles
├── hooks/              # Custom hooks (e.g., Contentful queries)
├── utils/              # Utilities for formatting and animations
├── contentful/         # CMS data fetching logic
├── pages/              # Route-based pages
│   ├── Home.tsx        # Main portfolio landing page
│   ├── Projects.tsx    # Project showcase
│   ├── About.tsx       # About Antonio
│
└── public/             # Static files (images, icons, favicons)
```

---

## Technologies Used

- **Vite + React** – Modern dev tooling and build speed
- **TypeScript** – Type-safe and scalable codebase
- **Contentful** – Headless CMS for flexible content
- **Styled Components** – Scoped, maintainable styling
- **Framer Motion** – High-performance motion animations
- **React Intersection Observer** – Scroll-aware animations
- **React Responsive** – Adaptive layouts by screen size
- **Cloudflare Pages** – Serverless, globally distributed hosting
- **Docker** – Local development in a containerized environment

---

## License

This project is open-source under the **MIT License**.
