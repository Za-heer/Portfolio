# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TypeScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark/Light mode toggle
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form integration
- 🚀 Ready for deployment on Vercel

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: FastAPI (for contact form)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```tree
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── services/          # API services
├── utils/             # Utility functions
├── styles/            # Global styles
└── routes/            # Route configuration
```

## Customization

1. Update personal information in `src/utils/constants.ts`
2. Replace placeholder images with your own
3. Modify the color scheme in `tailwind.config.js`
4. Add your projects data in `src/pages/Projects.tsx`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

MIT License - feel free to use this template for your own portfolio!
