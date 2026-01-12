# Rajan Sharma - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a B.Tech final-year student specializing in cybersecurity and cloud security. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **SEO Friendly**: Meta tags and structured content for better search engine visibility
- **Interactive Sections**:
  - Hero Section with animated background
  - About Section
  - Experience Timeline
  - Skills Showcase
  - Projects Portfolio
  - Startup Information
  - Achievements Gallery
  - Contact Form
  - Footer with social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.30.1
- **3D Graphics**: Three.js 0.182.0
- **Animations**: Tailwind CSS Animate
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajansharma-123/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
Rajan_Portfolio/
├── src/
│   ├── assets/              # Images, PDFs, and other static assets
│   │   ├── achievements/    # Achievement images and resume
│   │   └── RajanIMG.jpg    # Profile image
│   ├── components/          # React components
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   ├── ui/              # Reusable UI components (shadcn/ui)
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── NavLink.tsx      # Navigation link component
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Profile Image**: Replace `src/assets/RajanIMG.jpg` with your image
2. **Resume**: Replace `src/assets/achievements/Rajan_Sharma_Resume.pdf` with your resume
3. **Content**: Edit the respective section components in `src/components/sections/`
4. **Meta Tags**: Update SEO information in `src/pages/Index.tsx`

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in component files

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **Cloudflare Pages**: Connect repository for automatic deployments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rajan Sharma**
- GitHub: [@rajansharma-123](https://github.com/rajansharma-123)
- Portfolio: [Live Site](https://github.com/rajansharma-123/Portfolio)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

⭐ If you find this portfolio helpful, please consider giving it a star!
