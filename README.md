# Nishtha Tiku | Portfolio

Personal portfolio of Nishtha Tiku, a Java backend developer who builds secure, scalable backend services, APIs and enterprise integrations.

**Live site:** https://nishtha-tiku.vercel.app

## Features

- Single-page site with Experience, Projects, Education & Recognition, Technical Skills and Contact sections
- Dark and light themes, remembered between visits
- Interactive hero: animated node-network background, typing role line and a 3D-tilt photo
- Sections fade in on scroll, and cards, chips and links highlight on hover
- Project cards with links to GitHub repositories
- Downloadable resume and one-click links to Gmail, LinkedIn and GitHub
- Contact form that opens Gmail with the message pre-filled, or delivers straight to an inbox with a free Web3Forms key
- Responsive layout, keyboard-friendly, and respects the "reduce motion" setting

## Tech stack

Next.js (App Router), React, TypeScript, Framer Motion, custom CSS, deployed on Vercel.

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/Nishtha-Tiku/nishtha-portfolio.git
cd nishtha-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build locally |

## Project structure

```
src/
  app/            Page layout, global styles and the home page
  components/     Header, Hero, Contact form, Icons and other UI pieces
  lib/data.ts     All site content (text, projects, skills, links)
public/
  profile.jpg               Hero photo
  Nishtha_Tiku_Resume.pdf   File served by the Download Resume button
next.config.ts    Next.js settings
```

## Editing the content

- Change text, projects, skills and links in `src/lib/data.ts`.
- Replace `public/Nishtha_Tiku_Resume.pdf` with a new file of the same name to update the resume download.
- Replace `public/profile.jpg` to change the photo.

## Contact form

Without any setup, the form opens Gmail in a new tab with the message pre-filled.

To have messages arrive directly in your inbox:

1. Get a free access key at https://web3forms.com.
2. Create a file called `.env.local` in the project root:

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
   ```

3. Restart `npm run dev`.

Do not commit `.env.local` to GitHub.

## Deployment

The site is deployed on Vercel. Every push to the `main` branch redeploys it automatically.

To deploy your own copy, import the repository in Vercel and click Deploy. For the contact form key, add `NEXT_PUBLIC_WEB3FORMS_KEY` under Project Settings > Environment Variables and redeploy.

## Contact

- Email: nishthatiku16@gmail.com
- LinkedIn: https://www.linkedin.com/in/nishtha-tiku-7778441b4/
- GitHub: https://github.com/Nishtha-Tiku
