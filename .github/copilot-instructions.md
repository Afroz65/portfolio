# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilot-instructions.md-file -->

## Project Overview
This is a responsive React TypeScript portfolio website for Jawed Afroz, a Software Engineer with 3+ years of experience. The portfolio showcases professional skills, experience, and achievements with a modern glass-morphism design aesthetic.

## Technology Stack
- React 18 with TypeScript
- Vite for build tooling and development server
- CSS modules for component-scoped styling
- Framer Motion for smooth animations and page transitions
- Lucide React for consistent iconography
- Modern CSS with glass-morphism effects and gradients

## Project Guidelines:
- Use TypeScript for all components with proper interface definitions
- Follow responsive design principles with mobile-first approach (480px, 768px breakpoints)
- Use CSS modules for styling with glass-morphism effects
- Maintain clean, semantic HTML structure with proper accessibility
- Use modern React patterns (hooks, functional components, proper state management)
- Keep components modular and reusable with clear prop interfaces
- Implement smooth scroll navigation between sections
- Use consistent animation timing and easing with Framer Motion

## Portfolio Sections:
- **Navigation**: Fixed header with brand logo and smooth scroll links
- **Hero**: Professional photo, introduction, contact info, and CTA buttons (Get In Touch + Resume)
- **About**: Personal story and professional summary
- **Skills**: Technical skills with visual representation
- **Experience**: Professional experience timeline
- **Education**: Academic background and certifications
- **Achievements**: Professional achievements with icons, titles, and descriptions
- **Contact**: Interactive contact form with validation
- **Footer**: Social links and copyright information

## Styling Guidelines:
- **Design System**: Glass-morphism with gradient backgrounds and backdrop filters
- **Color Scheme**: Blue to purple gradients (#667eea to #764ba2) with white overlays
- **Typography**: Hierarchical with gradient text effects for headings
- **Animations**: Framer Motion for smooth page loads and interactions
- **Responsive**: Mobile-first with consistent spacing and layout adaptation
- **Interactive Elements**: Hover effects with transforms and shadow enhancements

## Data Management:
- All content stored in `portfolioData.ts` for easy maintenance
- Typed interfaces for PersonalInfo, Skills, Experience, Education, Achievement
- Centralized data structure enables quick content updates
