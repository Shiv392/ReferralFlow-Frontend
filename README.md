# ReferralFlow — Frontend

Frontend application for **ReferralFlow**, a referral and job application management platform.
The application is built using **Angular**, **Tailwind CSS**, and **PrimeNG**, with a modular architecture so that new features can be added independently as the platform grows.

---

## Tech Stack

* **Angular** — Frontend framework
* **TypeScript** — Application language
* **Tailwind CSS** — Utility-first styling
* **PrimeNG** — UI component library

---

## Project Modules
The frontend will be organized into independent feature modules.

```text
ReferralFlow
│
├── Authentication
├── Dashboard
├── Referral Management
├── Job Management
└── Profile
```

> Currently, the **Authentication** module is under development. Other modules will be added as the application evolves.

---

# Authentication Module

The Authentication module handles user registration, login, and social authentication.

## Features

### Sign Up

Users can create a ReferralFlow account using:

* Name
* Email
* Password
* Confirm Password

Client-side validation will handle:

* Required fields
* Email format
* Password requirements
* Password confirmation
* Validation error messages
* Loading states

---

### Login

Existing users can authenticate using:

* Email
* Password

The login flow will provide:

* Form validation
* Authentication error handling
* Loading state
* Successful authentication handling
* Navigation to the authenticated application

---

### Social Authentication

ReferralFlow will support:

* Google
* GitHub
* LinkedIn

The frontend will provide the corresponding authentication options, while OAuth authentication and token/session management will be handled through the backend authentication service.

---

## Authentication Routes

```text
/auth
│
├── /login
└── /signup
```

Example:

```text
/login
/signup
```

---

## Authentication Structure

```text
src/
└── app/
    │
    ├── core/
    │   ├── guards/
    │   ├── interceptors/
    │   └── services/
    │
    ├── features/
    │   │
    │   └── authentication/
    │       ├── components/
    │       │   ├── login/
    │       │   └── signup/
    │       │
    │       ├── services/
    │       ├── models/
    │       └── authentication.routes.ts
    │
    ├── shared/
    │   ├── components/
    │   └── validators/
    │
    └── app.routes.ts
```

---

## Authentication Flow

### Email / Password

```text
User
 │
 ▼
Login / Signup
 │
 ▼
Angular Form Validation
 │
 ▼
Authentication API
 │
 ▼
Backend Authentication
 │
 ▼
Token / Session
 │
 ▼
Authenticated Application
```

### Social Login

```text
User
 │
 ▼
Google / GitHub / LinkedIn
 │
 ▼
OAuth Provider
 │
 ▼
Backend Authentication
 │
 ▼
Token / Session
 │
 ▼
ReferralFlow
```

---

## UI & Design

The Authentication module uses:

### Tailwind CSS

Used for:

* Layout
* Responsive design
* Spacing
* Typography
* Custom styling
* Responsive authentication screens

### PrimeNG

Used for reusable UI components such as:

* Input fields
* Buttons
* Password fields
* Form-related components
* Toast notifications
* Loading indicators
* Dialogs where required

---

## Authentication Pages

### Login

The login page will contain:

```text
Email
Password

[ Login ]

──────── OR ────────

[ Continue with Google ]
[ Continue with GitHub ]
[ Continue with LinkedIn ]

Don't have an account?
[ Sign Up ]
```

### Signup

The signup page will contain:

```text
Name
Email
Password
Confirm Password

[ Create Account ]

──────── OR ────────

[ Continue with Google ]
[ Continue with GitHub ]
[ Continue with LinkedIn ]

Already have an account?
[ Login ]
```

---

## Future Authentication Features

The following features can be added later:

* Forgot Password
* Reset Password
* Email Verification
* Refresh Token handling
* Logout
* Session management
* Account linking
* Two-factor authentication
* OAuth provider management

---

## Development Status

### Authentication

* [ ] Login UI
* [ ] Signup UI
* [ ] Form validation
* [ ] Google authentication UI
* [ ] GitHub authentication UI
* [ ] LinkedIn authentication UI
* [ ] Responsive design
* [ ] Authentication API integration
* [ ] Token/session handling

### Upcoming Modules

* [ ] Dashboard
* [ ] Referral Management
* [ ] Job Management
* [ ] Profile Management

---

## Goal

ReferralFlow is being developed as a modular referral management platform where authentication, referrals, jobs, and user management can evolve independently while maintaining a consistent frontend architecture.
