# Extroverts Signup

A responsive React signup experience for **Extroverts — Party Finder**. It pairs a promotional landing page with a guided, seven-step registration flow, including Clerk email verification and browser-based location detection.

## Features

- Landing page with party-discovery messaging and a signup call to action
- Seven-step signup wizard with visible progress
- Terms acceptance and client-side form validation
- Clerk-powered email signup and six-digit email OTP verification
- Username, date-of-birth (18+), and full-name collection
- Browser geolocation with reverse geocoding through OpenStreetMap's Nominatim service
- Completion page that displays the collected profile details
- Responsive UI built with React, Tailwind CSS, and React Icons

## Signup flow

1. Accept the terms and conditions.
2. Enter an email address.
3. Verify the six-digit email code sent by Clerk.
4. Choose a username.
5. Provide a date of birth and confirm the user is at least 18.
6. Enter a full name.
7. Allow location access, then complete signup.

On completion, the profile is saved to `sessionStorage` under `signupProfile` and shown at `/welcome`. This is browser-session storage only; the application does not currently persist the extra profile fields to a backend.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Clerk](https://clerk.com/) for email verification
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Browser Geolocation API and [OpenStreetMap Nominatim](https://nominatim.org/) reverse geocoding

## Prerequisites

- Node.js 20.19+ or 22.12+ (required by Vite 8)
- npm
- A Clerk application configured to allow email-code verification

## Getting started

1. Clone the repository and open the project directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
   ```

   Get the publishable key from your Clerk dashboard. Never commit secrets or environment files.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (normally `http://localhost:5173`).

## Available scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite development server.               |
| `npm run build`   | Build an optimized production bundle in `dist/`. |
| `npm run preview` | Serve the production build locally.              |
| `npm run lint`    | Run ESLint across the project.                   |

## Routes

| Route      | Purpose                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------- |
| `/`        | Landing page.                                                                                   |
| `/signup`  | Signup wizard; redirects to `/welcome` when a completed profile exists in the current session.  |
| `/welcome` | Displays the completed signup profile; redirects to `/signup` if no session profile is present. |

## Project structure

```text
src/
├── components/
│   ├── Navbar/                # Landing-page navigation
│   ├── Card/                  # Reusable feature card
│   └── signup/                # Signup wizard, progress UI, and steps
├── pages/                     # Landing, signup, and welcome routes
├── sections/                  # Landing-page sections
├── utils/                     # Validation, age, and location helpers
├── App.jsx                    # Application routes
└── main.jsx                   # React and Clerk providers
```

## Location and privacy notes

The final signup step requests the browser's current location only after the user selects **Allow location**. Coordinates are sent to Nominatim to resolve an address, city, state, country, and postal code. Users must grant browser location permission for this step to finish.

The completion data is retained only for the active browser session via `sessionStorage`; closing the session or clearing site data removes it. Clerk manages the email-signup and verification process separately.

## Current scope

This repository is a frontend signup flow. The landing-page search control is presentational, and there is no application backend or database integration yet. Before a production launch, add server-side profile persistence, a complete privacy policy/terms workflow, and appropriate rate limiting and monitoring for location and verification requests.
