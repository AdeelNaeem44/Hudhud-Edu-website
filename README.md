# Hudhud Edu — Marketing Website

A single-page marketing/landing site for the Hudhud Edu mobile app
(English learning for Uzbek speakers), built with React + Vite.

This matches the scope your supervisor gave you: it's a website that
*promotes and explains* the mobile app — it does not include in-browser
login or lessons, since those live in the app itself.

## Sections (all on one page, linked via the navbar)

- **Home** — hero, intro, App Store / Google Play buttons
- **About Us** (`#about`) — vision & mission
- **Features** (`#features`) — vocabulary, quizzes, progress tracking, gamification, subscriptions
- **Screenshots** (`#screenshots`) — placeholder phone mockups (swap for real screenshots later)
- **Pricing** (`#pricing`) — weekly/monthly toggle
- **FAQ** (`#faq`) — accordion, dynamic open/close
- **Contact** (`#contact`) — support email + contact form

Plus two dedicated pages, linked from the footer:
- `/privacy-policy`
- `/terms`

## 1. Install & run

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## 2. Things to fill in before launch

- **App Store / Google Play links**: open `src/components/AppStoreButtons.jsx`
  and set `APP_STORE_URL` and `GOOGLE_PLAY_URL` once the app is published.
  Until then, the buttons show a "Coming soon" state automatically.
- **Real screenshots**: `src/pages/sections/Screenshots.jsx` currently
  renders CSS-drawn placeholder phone mockups. Once you have real app
  screenshots, replace the placeholder `<div>` content with `<img>` tags.
- **Contact form**: `src/pages/sections/Contact.jsx` just shows a success
  message on submit right now — wire it to an email service or backend
  endpoint.
- **Support email / social links**: update `SUPPORT_EMAIL` and
  `SOCIAL_LINKS` in `src/components/Footer.jsx`, and `SUPPORT_EMAIL` in
  `src/pages/sections/Contact.jsx`.
- **Pricing amounts**: `src/pages/sections/Pricing.jsx` has placeholder
  prices ($2.99/week, $8.99/month) — update to your real subscription
  pricing.
- **Legal pages**: `PrivacyPolicy.jsx` and `Terms.jsx` are placeholder
  text — have a supervisor or legal advisor review before launch.

## Project structure

```
src/
  components/
    Navbar.jsx           Sticky nav with anchor links + mobile menu
    Footer.jsx            Copyright, legal links, support email, social
    AppStoreButtons.jsx   App Store / Google Play badges
    ScrollToHash.jsx       Smooth-scrolls to #sections on navigation
  pages/
    Home.jsx               Assembles all the sections below
    sections/
      Hero.jsx, About.jsx, Features.jsx, Screenshots.jsx,
      Pricing.jsx, FAQ.jsx, Contact.jsx
    PrivacyPolicy.jsx
    Terms.jsx
    NotFound.jsx
  styles/global.css        All styling
  App.jsx                  Routes
  main.jsx                 Entry point
```
