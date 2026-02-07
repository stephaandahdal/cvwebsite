# CV Website

A modern, responsive professional CV website featuring smooth scroll animations, dark/light mode toggle, and a clean, professional design.

🌐 **Live Website**: [https://stephaandahdal.github.io/cvwebsite/](https://stephaandahdal.github.io/cvwebsite/)

## Features

- ✨ **Modern Design**: Clean, professional layout with smooth scroll animations
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent preference
- 🎨 **Animated Blob Background**: Smooth, morphing blob animations with green accent theme
- 🔄 **Particle System Option**: Switchable background between blob morphing and interactive particle system
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Lightweight vanilla JavaScript, no frameworks
- 🚀 **GitHub Pages Ready**: Easy deployment via GitHub Actions
- 🎯 **Smooth Scroll Animations**: Professional Intersection Observer-based animations
- 📸 **Headshot Support**: Placeholder for professional headshot photo
- 📄 **PDF Integration**: Support for Dean's List certificates and resume PDFs

## Sections

- **About**: Personal introduction and background
- **Education**: Degree information, coursework, achievements, and Dean's List certificates
- **Experience**: Professional work experience with timeline layout
- **Skills**: Organized by categories (Programming Languages, Frontend, Backend, Tools, Other)
- **Projects**: Showcase of key projects with descriptions and links

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/stephaandahdal/cvwebsite.git
cd cvwebsite
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/stephaandahdal/cvwebsite.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. Your site will be available at:
   [https://stephaandahdal.github.io/cvwebsite/](https://stephaandahdal.github.io/cvwebsite/)

### Method 2: Using GitHub Pages Settings

1. Push your code to GitHub (same as above)

2. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. Your site will be live in a few minutes

## Customization

### Update Your Information

1. **Personal Details**: Edit `index.html` to update:
   - Name, tagline, and location
   - Social media links (GitHub, LinkedIn, Email, Resume PDF)
   - About section
   - Education details and Dean's List certificates
   - Experience entries
   - Skills and categories
   - Projects with descriptions and links

2. **Headshot Photo**: 
   - Add your headshot image to the `images/` folder
   - Update the `src` attribute in `index.html` (line ~78) to point to your image
   - Example: `src="images/headshot.jpg"`

3. **PDF Files**:
   - Add Dean's List PDFs to the `pdfs/` folder
   - Update the `href` attributes in the Dean's List buttons
   - Add your resume PDF and update the resume link in the header

4. **Styling**: Modify `styles.css` to customize:
   - Colors and themes (CSS variables)
   - Fonts and typography
   - Spacing and layout
   - Animations and transitions

5. **Functionality**: Adjust `script.js` for:
   - Background type (blob or particle system)
   - Animation speeds and effects
   - Additional interactive features

### Theme Customization

The color scheme is defined using CSS variables in `styles.css`. You can easily customize:

- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background (cards, sections)
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--accent`: Accent color (links, highlights) - currently green (#00d97e)
- `--accent-gradient`: Gradient for accents and highlights
- `--border`: Border colors
- `--shadow`: Shadow colors

### Background Options

You can switch between two background types in `script.js`:

- **Blob Morphing** (default): Smooth, organic blob animations
- **Particle System**: Interactive particle network with connections

Change the `BACKGROUND_TYPE` constant in `script.js`:
```javascript
const BACKGROUND_TYPE = 'blob'; // Change to 'particles' to switch
```

## File Structure

```
cvwebsite/
├── index.html          # Main HTML file
├── styles.css          # All styling and themes
├── script.js           # JavaScript functionality
├── images/             # Headshot and other images
├── pdfs/               # Dean's List certificates and resume PDFs
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── .gitignore
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no frameworks)
- Efficient animations using `requestAnimationFrame` and CSS animations
- Intersection Observer for smooth scroll animations
- Respects `prefers-reduced-motion` for accessibility
- Canvas-based particle system for optimal performance

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Respects user's motion preferences
- High contrast support in both themes

## License

This project is open source and available under the MIT License.

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: Custom SVG icons
- Design inspiration: Stripe-inspired clean design

---

Made with ❤️ by Stephaan Dahdal
