# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added site metadata including title, description, and Open Graph configuration.
- Added favicon configuration.
- Added resume download functionality.
- Added the resume PDF to the public directory.

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
