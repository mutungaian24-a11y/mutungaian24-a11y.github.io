# Portfolio Project Structure

```
sites/
├── src/                                    # Vite + React Frontend
│   ├── components/                         # UI Components (Atomic Design)
│   │   ├── atoms/                          # Smallest building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Text/
│   │   │   ├── Icon/
│   │   │   ├── Image/
│   │   │   ├── Link/
│   │   │   └── Logo/
│   │   │
│   │   ├── molecules/                      # Simple component groups
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Card.module.css
│   │   │   │   └── index.ts
│   │   │   ├── FormField/
│   │   │   ├── ProjectCard/
│   │   │   ├── SkillTag/
│   │   │   ├── SocialLinks/
│   │   │   ├── NavigationItem/
│   │   │   └── TestimonialCard/
│   │   │
│   │   ├── organisms/                      # Complex component combinations
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── ProjectGrid/
│   │   │   ├── ContactForm/
│   │   │   ├── SkillsSection/
│   │   │   ├── ExperienceTimeline/
│   │   │   └── TestimonialsCarousel/
│   │   │
│   │   └── templates/                      # Page-level layouts
│   │       ├── MainLayout/
│   │       ├── ProjectLayout/
│   │       └── BlogLayout/
│   │
│   ├── pages/                              # Route/Page components
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.module.css
│   │   │   └── index.ts
│   │   ├── About/
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   └── ProjectDetail.tsx
│   │   ├── Blog/
│   │   │   ├── Blog.tsx
│   │   │   └── BlogPost.tsx
│   │   ├── Contact/
│   │   └── NotFound/
│   │
│   ├── features/                           # Feature-based modules
│   │   ├── projects/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── blog/
│   │   └── contact/
│   │
│   ├── assets/                             # Static assets
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   ├── about/
│   │   │   ├── logos/
│   │   │   └── icons/
│   │   ├── videos/
│   │   │   ├── demos/
│   │   │   └── backgrounds/
│   │   ├── fonts/
│   │   ├── animations/
│   │   └── documents/
│   │       └── resume.pdf
│   │
│   ├── styles/                             # Global styles
│   │   ├── variables.css                   # CSS custom properties
│   │   ├── globals.css
│   │   ├── reset.css
│   │   └── themes/
│   │       ├── light.css
│   │       └── dark.css
│   │
│   ├── hooks/                              # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollPosition.ts
│   │   └── useIntersectionObserver.ts
│   │
│   ├── utils/                              # Utility functions
│   │   ├── api.ts
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   │
│   ├── types/                              # TypeScript types
│   │   ├── project.types.ts
│   │   ├── blog.types.ts
│   │   ├── contact.types.ts
│   │   └── common.types.ts
│   │
│   ├── context/                            # React Context
│   │   ├── ThemeContext.tsx
│   │   └── AppContext.tsx
│   │
│   ├── routes/                             # Route configuration
│   │   ├── index.tsx
│   │   └── routes.config.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── public/                                 # Public static files
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── backend/                                # Next.js Backend (App Router)
│   ├── app/
│   │   ├── api/                            # API Routes
│   │   │   ├── projects/
│   │   │   │   ├── route.ts                # GET /api/projects
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts            # GET /api/projects/:id
│   │   │   ├── blog/
│   │   │   │   ├── route.ts
│   │   │   │   └── [slug]/
│   │   │   │       └── route.ts
│   │   │   ├── contact/
│   │   │   │   └── route.ts                # POST /api/contact
│   │   │   └── analytics/
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── lib/                                # Backend utilities
│   │   ├── db/
│   │   │   ├── client.ts                   # Database client
│   │   │   ├── schema.ts
│   │   │   └── migrations/
│   │   ├── email/
│   │   │   ├── transporter.ts              # Email service
│   │   │   └── templates/
│   │   ├── auth/
│   │   │   └── middleware.ts
│   │   └── utils/
│   │       ├── validators.ts
│   │       └── formatters.ts
│   │
│   ├── models/                             # Data models
│   │   ├── Project.ts
│   │   ├── BlogPost.ts
│   │   └── Contact.ts
│   │
│   ├── services/                           # Business logic
│   │   ├── projectService.ts
│   │   ├── blogService.ts
│   │   ├── contactService.ts
│   │   └── analyticsService.ts
│   │
│   ├── middleware/                         # Custom middleware
│   │   ├── cors.ts
│   │   ├── rateLimit.ts
│   │   └── errorHandler.ts
│   │
│   ├── types/                              # Backend TypeScript types
│   │   ├── api.types.ts
│   │   ├── models.types.ts
│   │   └── common.types.ts
│   │
│   ├── config/                             # Configuration files
│   │   ├── database.config.ts
│   │   ├── email.config.ts
│   │   └── env.config.ts
│   │
│   ├── public/                             # Backend static assets
│   │   └── uploads/                        # User-uploaded files
│   │       ├── images/
│   │       └── documents/
│   │
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── .env.local
│
├── shared/                                 # Shared code between frontend/backend
│   ├── types/
│   │   ├── project.types.ts
│   │   ├── blog.types.ts
│   │   └── api.types.ts
│   ├── constants/
│   │   └── index.ts
│   └── validators/
│       └── schemas.ts
│
├── docs/                                   # Documentation
│   ├── STRUCTURE.md
│   ├── API.md
│   ├── COMPONENTS.md
│   └── DEPLOYMENT.md
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── copilot-instructions.md
│
├── scripts/                                # Utility scripts
│   ├── seed-data.ts
│   ├── backup-db.ts
│   └── generate-sitemap.ts
│
├── .gitignore
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── package.json                            # Root package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Key Structure Principles

### Frontend (src/)

**Atomic Design Pattern:**
- **Atoms**: Basic building blocks (buttons, inputs, text)
- **Molecules**: Simple combinations (cards, form fields)
- **Organisms**: Complex sections (header, footer, hero sections)
- **Templates**: Page layouts
- **Pages**: Route-specific implementations

**Feature Organization:**
- Each feature has its own hooks, services, types, and utils
- Keeps related code together
- Easy to scale and maintain

### Backend (backend/)

**Clean Architecture:**
- **API Routes**: RESTful endpoints
- **Services**: Business logic layer
- **Models**: Data structures and database schemas
- **Middleware**: Cross-cutting concerns
- **Config**: Environment and configuration management

### Assets Management

**Images**: Organized by context (hero, projects, about)
**Videos**: Separated by purpose (demos, backgrounds)
**Fonts**: Custom typography files
**Documents**: Downloadable files (resume, portfolio PDF)

### Shared Code

**Shared Types**: Ensures type safety between frontend and backend
**Constants**: Shared configuration values
**Validators**: Reusable validation schemas

## Usage Examples

### Component Structure
```tsx
// src/components/atoms/Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### API Route Structure
```tsx
// backend/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { projectService } from '@/services/projectService';

export async function GET() {
  const projects = await projectService.getAllProjects();
  return NextResponse.json(projects);
}
```

## Development Workflow

**Root Scripts (package.json):**
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "vite",
    "dev:backend": "cd backend && npm run dev",
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "vite build",
    "build:backend": "cd backend && npm run build"
  }
}
```

## Benefits

✅ **Clear separation of concerns**
✅ **Scalable atomic design system**
✅ **Type-safe shared code**
✅ **Easy to navigate and maintain**
✅ **Feature-based organization**
✅ **Clean backend architecture**
✅ **Proper asset management**