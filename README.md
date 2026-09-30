# Jhonatan Lima — Software Engineer Portfolio

Personal portfolio website built with Next.js and TypeScript to showcase my professional experience, skills, and services.

## ✨ Features

- 🌎 Portuguese and English localization
- 📱 Responsive design
- 🎨 Modern dark interface
- ⚡ Smooth animations and page transitions
- 📄 Professional resume and experience
- 🛠️ Services and technical skills
- 📂 Project showcase
- 📬 Contact form with email delivery
- 🔒 Client-side and server-side form validation
- 🌐 Browser language detection with manual language switching

## 🛠️ Tech Stack

### Core

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Framer Motion](https://motion.dev/) — Animations and transitions
- [Radix UI](https://www.radix-ui.com/) — Accessible UI primitives
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [Swiper](https://swiperjs.com/) — Interactive sliders

### Forms & Validation

- [Zod](https://zod.dev/) — Schema validation
- [React Phone Number Input](https://github.com/catamphetamine/react-phone-number-input) — International phone input
- [Nodemailer](https://nodemailer.com/) — Email delivery

### Internationalization

- [next-intl](https://next-intl.dev/) — Internationalization and locale management

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   ├── contact/
│   ├── resume/
│   ├── services/
│   └── work/
├── components/
│   ├── resume/
│   ├── Social/
│   └── ui/
├── data/
│   └── resume/
├── i18n/
├── lib/
│   ├── mail/
│   │   └── templates/
│   └── validations/
└── types/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/gitjhonatan/devjhone-portfolio.git
cd devjhone-portfolio
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

These variables are used by the contact form to send emails through SMTP.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

http://localhost:3000

### Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📜 Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm start`     | Start the production server          |
| `npm run lint`  | Run ESLint                           |

## 🌐 Localization

The portfolio currently supports:

- 🇧🇷 Portuguese (`pt-BR`)
- 🇺🇸 English (`en`)

The initial locale is resolved from the browser's language preferences, with Portuguese as the default fallback.

Users can also manually switch between supported languages through the language selector.

## 📬 Contact Form

The contact form includes:

- Client-side validation with Zod
- Server-side validation
- International phone number input
- SMTP email delivery with Nodemailer
- Success and error feedback

SMTP credentials must be configured through environment variables.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
