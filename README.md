# Personal Portfolio

React + Vite + Tailwind CSS + Framer Motion, with a contact form that emails you via EmailJS (no backend needed).

## Run it

```bash
npm install
cp .env.example .env     # then fill in the EmailJS values (below)
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Make it yours

All content lives in **`src/data.js`**: name, tagline, social links, skills, projects and experience. Replace the placeholder GitHub/LinkedIn/demo URLs and the experience bullets. Drop your `resume.pdf` into `public/`.

## Contact form setup (EmailJS, free tier)

1. Create an account at https://www.emailjs.com
2. **Email Services** → Add service (Gmail works) → note the **Service ID**
3. **Email Templates** → Create template. Use these variables in the body/subject:
   - `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`
   - Set "To email" to your own address, and "Reply-To" to `{{reply_to}}`
   - Note the **Template ID**
4. **Account → General** → copy your **Public Key**
5. Put the three values in `.env`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

When deploying (Vercel/Netlify), add the same three variables in the host's environment settings. In EmailJS you can also restrict the allowed domains and enable reCAPTCHA to limit spam.

## Structure

```
src/
  App.jsx
  data.js
  components/  Navbar · Home · Skills · Projects · Experience · Contact · Footer
```
