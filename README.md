# Murphy Street Partners — website

Source for [murphy-street.com](https://murphy-street.com). A static React site, built with Vite and hosted on GitHub Pages from this repository. No third-party site builder is involved.

## Local development

```sh
npm install
npm run dev        # http://localhost:8080
npm test
npm run build      # output in dist/
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain (`murphy-street.com`) is configured in the repository's **Settings → Pages**; `public/CNAME` mirrors it for reference but is not what binds the domain when deploying via Actions.

DNS (at the domain registrar) must point at GitHub Pages:

| Type  | Host  | Value                                                                       |
| ----- | ----- | --------------------------------------------------------------------------- |
| A     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `mbatula23.github.io`                                                       |

## Structure

- `src/pages/Index.tsx` — home page (hero, rotating strapline, London video strip)
- `src/pages/Login.tsx` — client login (Supabase auth)
- `src/pages/PrivacyPolicy.tsx`
- `public/media/` — compressed hero video (`london.mp4`, `london.webm`) and poster frame
- `.env` — public Supabase URL and anon key used by the login page
