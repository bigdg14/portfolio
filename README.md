# Modern Developer Portfolio

A stunning, fully-featured developer portfolio built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Dark-themed with blue and purple gradients
- **3D Animations**: Interactive project cards with 3D tilt effects
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **TypeScript**: Type-safe throughout
- **Neon.tech Integration**: Ready for database integration
- **SEO Optimized**: Meta tags and proper structure

## Project Showcase Features

The portfolio features an innovative project showcase with:

1. **3D Card Grid**: Interactive cards with parallax tilt effects
2. **Expandable Modals**: Detailed project views with smooth animations
3. **Category Filtering**: Filter projects by type (web, AI, game, social)
4. **Hover Effects**: Beautiful glow and scale effects on interaction

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
   - Change name, title, and tagline
   - Update social media links

2. **Projects**: Edit `lib/data.ts`
   - Add your projects with details
   - Update tech stacks and features

3. **Colors**: Edit `tailwind.config.ts`
   - Customize the gradient colors
   - Add your brand colors

### Add Your Resume

Place your resume PDF in `public/resume/resume.pdf`

### Environment Variables (for contact form)

Create a `.env.local` file:
```
NEON_DATABASE_URL=your_neon_connection_string
RESEND_API_KEY=your_resend_api_key
```

## Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Neon.tech (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Upcoming Sections

- Skills/Tech Stack visualization
- Contact form with email integration
- Resume viewer
- Blog section (optional)

## License

MIT
