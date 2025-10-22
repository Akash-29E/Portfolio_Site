# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional experience, skills, and projects with an elegant design and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Navigation**: Top navigation bar with smooth tab transitions and hover effects
- **Animated Components**: Ripple effects, fade transitions, and smooth animations throughout
- **Professional Sections**:
  - Home page with introduction
  - About Me with personal information
  - Resume with experience, education, and skills
  - Portfolio with project showcases
  - Contact page with email copy functionality
- **Modern UI**: Glass morphism effects, backdrop filters, and contemporary styling
- **Accessibility**: Keyboard navigation support and proper ARIA labels

## 🚀 Live Demo

Visit the live website: [www.akashparmar.me](https://www.akashparmar.me/)

## 🛠️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Material-UI** - Component library for accordions
- **CSS3** - Custom styling with CSS variables and animations
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side drawer and main content
- **Mobile** (< 550px): Side drawer takes full width, main content hidden for mobile-first experience

## 🎨 Design Features

- **Color Scheme**: Modern gradient background with carefully selected color palette
- **Typography**: Rubik and Quicksand fonts for excellent readability
- **Animations**: 
  - Ripple wave effects on profile image
  - Tab fade-in transitions
  - Hover effects on navigation and buttons
- **Glass Morphism**: Backdrop blur effects for modern UI elements

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

This project is set up for deployment on GitHub Pages:

```bash
npm run deploy
```

The site will be deployed to your GitHub Pages domain.

## 📁 Project Structure

```
src/
├── components/
│   ├── Accordion.jsx          # Reusable accordion component
│   └── Accordion.css
├── pages/
│   ├── HomePage.jsx           # Landing page
│   ├── AboutMePage.jsx        # About section
│   ├── ResumePage.jsx         # Experience & skills
│   ├── PortfolioPage.jsx      # Project showcase
│   └── ContactPage.jsx        # Contact information
├── navigation/
│   ├── TopNavBar.jsx          # Main navigation
│   ├── SideDrawer.jsx         # Profile sidebar
│   └── MainContent.jsx        # Content container
├── styles/
│   ├── App.css               # Global styles & variables
│   └── [Component].css       # Component-specific styles
└── assets/
    └── [images/icons]        # Static assets
```

## 🎯 Key Components

### Navigation System
- **TopNavBar**: Horizontal navigation with active states and hover effects
- **SideDrawer**: Profile information with social links and download CV button
- **MainContent**: Container managing tab transitions and content routing

### Content Pages
- **HomePage**: Welcome section with name and role
- **AboutMePage**: Personal information in a two-column layout
- **ResumePage**: Professional experience using expandable accordions
- **PortfolioPage**: Project grid with image thumbnails
- **ContactPage**: Contact information with copy-to-clipboard functionality

## 🔧 Customization

### Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --color-bg: white;
  --color-accent: #f4ddfb;
  --color-main-bg: linear-gradient(...);
  --color-text: #00000;
  --color-bg-dark: #7f4bc01a;
  --color-nav-bg: rgb(224, 233, 250);
}
```

### Content
- Update personal information in `SideDrawer.jsx`
- Modify page content in respective component files
- Replace images in the `public/` directory

## 📱 Mobile Experience

On screens smaller than 550px:
- Side drawer expands to full width
- Main content is hidden for focused mobile experience
- Profile information becomes the primary interface

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Akash Parmar - [mail@akashparmar.me](mailto:mail@akashparmar.me)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

## 🙏 Acknowledgments

- Icons from various open source icon libraries
- Fonts from Google Fonts
- Inspiration from modern web design trends
- React and Vite communities for excellent documentation

---

⭐ **Star this repository if you found it helpful!**
