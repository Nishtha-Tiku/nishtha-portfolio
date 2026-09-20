# Nishtha Tiku portfolio

1. Delete the `src` and `public` folders in your Next.js project, then copy `src`, `public` and `next.config.ts` from this zip in (replace the existing next.config.ts).
2. Run `npm install framer-motion` and `npm run dev`.

Edit your content in `src/lib/data.ts`. Replace `public/Nishtha_Tiku_Resume.pdf` to update the resume download.

## Contact form

Works out of the box by opening Gmail with your message pre-filled.
To send messages straight to your inbox, get a free access key at https://web3forms.com and create a file
called `.env.local` in the project root containing:

    NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here

On Vercel, add the same variable under Project Settings > Environment Variables.
