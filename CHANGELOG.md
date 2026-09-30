# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-09-30

### Fixed

- Remove unused work page and slider button component that caused type-checking errors during production builds.
- Update repository references in the README after the repository rename.

## [1.0.0] - 2026-09-30

### Added

- Added site metadata including title, description, and Open Graph configuration.
- Added favicon configuration.
- Added resume download functionality.
- Added the resume PDF to the public directory.
- Added contact form functionality.
- Added contact form client-side and server-side validation using Zod.
- Added contact form submission through the `/api/contact` endpoint.
- Added email delivery using Nodemailer and Gmail SMTP.
- Added a custom HTML email template using the portfolio's primary and accent colors.
- Added email `replyTo` support to allow direct replies to the contact sender.
- Added environment variables for Gmail SMTP credentials.
- Added translation support for Portuguese and English.
- Added language switcher and browser language detection.

### Changed

- Configured the `Social` component by separating social media configuration from presentation logic.
- Improved accessibility of social media links with descriptive `aria-label` attributes.
- Updated the stats section with experience, projects, architecture, and infrastructure metrics.
- Updated service descriptions to better reflect professional offerings.
- Made service cards fully clickable and linked them to the contact page.
- Generated service numbers dynamically from the list index.
- Standardized service card dimensions and spacing across responsive layouts.
- Refactored the Resume page into reusable components.
- Separated Resume data by section.
- Decoupled skill data from icon components.
- Improved TypeScript typing across Resume components.
- Simplified Tailwind CSS content paths to use the `src` directory.
- Removed unused Tailwind configuration for dark mode, cards, accordions, and redundant defaults.
- Removed unused shadcn/ui CSS variables while keeping the variables required by the Tooltip component.
- Simplified global CSS by removing unused shadcn/ui theme variables and commented styles.
- Updated the project color configuration to use the portfolio's existing visual theme.
- Removed unused TypeScript/JavaScript support configuration.
- Simplified project configuration while preserving Next.js, TypeScript, Radix UI, and shadcn/ui requirements.
