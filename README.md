# Hudhud Edu – Marketing Website

A modern, responsive single-page marketing website built with **React** and **Vite** for the **Hudhud Edu** mobile application.

Hudhud Edu is an English learning platform designed specifically for **Uzbek speakers**. This website serves as the official landing page for the mobile application, providing visitors with information about the platform, its features, pricing, screenshots, FAQs, and contact information.

> **Note:** This project is a promotional website only. User authentication, lessons, quizzes, and other learning functionality are available exclusively within the Hudhud Edu mobile application.

---

# Project Overview

The website is designed to:

- Introduce the Hudhud Edu mobile application
- Showcase the application's key features
- Display app screenshots
- Present subscription pricing
- Answer frequently asked questions
- Provide contact and support information
- Offer Privacy Policy and Terms & Conditions pages

The website follows a modern responsive design and works smoothly across desktop, tablet, and mobile devices.

---

# Features

### Responsive Design
- Mobile-first responsive layout
- Optimized for desktop, tablet, and smartphones
- Smooth scrolling navigation

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Download buttons for App Store and Google Play

### About Section
- Company vision
- Mission statement
- Introduction to Hudhud Edu

### Features Section
Highlights the application's main capabilities:

- Vocabulary Learning
- Interactive Quizzes
- Progress Tracking
- Gamification
- Personalized Learning Experience
- Premium Subscription Plans

### Screenshots
- Mobile phone mockups
- Placeholder screens ready to be replaced with actual application screenshots

### Pricing
- Weekly and Monthly subscription toggle
- Easy comparison of plans
- Ready for real pricing integration

### FAQ
- Interactive accordion component
- Expand/Collapse questions
- Common user queries

### Contact
- Support email
- Contact form
- Ready for backend or email service integration

### Legal Pages
- Privacy Policy
- Terms & Conditions

---

# Technologies Used

- React 19
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Responsive Design
- Flexbox
- CSS Grid

---

# Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── AppStoreButtons.jsx
│   └── ScrollToHash.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── PrivacyPolicy.jsx
│   ├── Terms.jsx
│   ├── NotFound.jsx
│   │
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Features.jsx
│       ├── Screenshots.jsx
│       ├── Pricing.jsx
│       ├── FAQ.jsx
│       └── Contact.jsx
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

# Website Sections

The website consists of the following sections:

| Section | Description |
|----------|-------------|
| Home | Hero banner with introduction and download buttons |
| About | Vision, mission, and company overview |
| Features | Core app features and benefits |
| Screenshots | Mobile application preview |
| Pricing | Weekly and monthly subscription plans |
| FAQ | Frequently asked questions |
| Contact | Contact form and support information |
| Privacy Policy | Legal privacy page |
| Terms & Conditions | Terms of service |

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd hudhud-edu-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Configuration Before Deployment

Before deploying the website, update the following:

## App Store & Google Play Links

File:

```
src/components/AppStoreButtons.jsx
```

Replace the placeholder URLs with your published application links.

---

## Application Screenshots

File:

```
src/pages/sections/Screenshots.jsx
```

Replace the placeholder phone mockups with actual application screenshots.

---

## Contact Form

File:

```
src/pages/sections/Contact.jsx
```

Currently displays a success message only.

Connect it to:

- EmailJS
- Formspree
- Firebase
- Node.js Backend
- Laravel API
- Any preferred backend service

---

## Support Information

Update:

- Support email
- Social media links

Located in:

```
src/components/Footer.jsx
```

and

```
src/pages/sections/Contact.jsx
```

---

## Pricing

Update the subscription amounts in:

```
src/pages/sections/Pricing.jsx
```

Replace the placeholder pricing with actual subscription plans.

---

## Legal Content

Review and replace placeholder text in:

- PrivacyPolicy.jsx
- Terms.jsx

before publishing the website.

---

# Performance

The website includes:

- Responsive layout
- Smooth scrolling navigation
- Mobile navigation menu
- Modern UI/UX
- Optimized component structure
- Fast loading with Vite
- Clean and reusable React components

---

# Future Improvements

Potential future enhancements include:

- Dark Mode
- Multi-language support
- Real app screenshots
- Backend-powered contact form
- Newsletter subscription
- Blog section
- Analytics integration
- SEO optimization
- Progressive Web App (PWA) support
- Live chat support

---

# Browser Compatibility

Tested for modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

---

# License

This project was developed as part of an academic project and is intended for educational and demonstration purposes.

---

# Author

**Developer:** Adeel Adeel

**Project:** Hudhud Edu Marketing Website

**Technology Stack:** React • Vite • JavaScript • CSS3 • HTML5

---
