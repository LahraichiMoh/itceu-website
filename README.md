# ITCEU Website – Next.js Version

This is a converted Next.js (App Router) version of your original ITCEU website.

## Main changes

- Removed Vite and Express.
- Uses Next.js `app` router.
- Reuses your existing components, contexts, and pages.
- Routing:
  - `/` → `src/app/page.tsx` → `src/pages/Home.tsx`
  - `/about` → `src/app/about/page.tsx` → `src/pages/About.tsx`
  - `/founders` → `src/app/founders/page.tsx` → `src/pages/Founders.tsx`
  - `/committees` → `src/app/committees/page.tsx` → `src/pages/Committees.tsx`
  - `/accreditation` → `src/app/accreditation/page.tsx` → `src/pages/Accreditation.tsx`
  - `/membership` → `src/app/membership/page.tsx` → `src/pages/Membership.tsx`
  - `/contact` → `src/app/contact/page.tsx` → `src/pages/Contact.tsx`

## Dev commands

```bash
pnpm install   # or npm install / yarn
pnpm dev       # or npm run dev
```

You can adjust Tailwind/Next config as you like.
