# CV Website

A fast, responsive, and sleek professional CV website with dark/light mode toggle and a cursor-following light effect.

## Features

- ✨ **Modern Design**: Clean, professional layout with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent preference
- 💡 **Cursor Light Effect**: Interactive light that follows your cursor
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Lightweight and optimized for speed
- 🚀 **GitHub Pages Ready**: Easy deployment via GitHub Actions

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/steph aandahdal/cvwebsite.git
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
git remote add origin https://github.com/steph aandahdal/cvwebsite.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. Your site will be available at:
   `https://steph aandahdal.github.io/cvwebsite/`

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
   - Name and tagline
   - Social media links (GitHub, LinkedIn, Email)
   - About section
   - Experience, Education, Skills, Projects

2. **Styling**: Modify `styles.css` to customize:
   - Colors and themes
   - Fonts and typography
   - Spacing and layout
   - Animations

3. **Functionality**: Adjust `script.js` for:
   - Cursor light intensity and size
   - Animation speeds
   - Additional interactive features

### Theme Customization

The color scheme is defined using CSS variables in `styles.css`. You can easily customize:

- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background (cards, sections)
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--accent`: Accent color (links, highlights)
- `--cursor-light`: Cursor light effect color

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no frameworks)
- Efficient animations using `requestAnimationFrame`
- Lazy loading and intersection observers for smooth scrolling

## License

This project is open source and available under the MIT License.

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: Custom SVG icons

---

Made with ❤️ by Stephaan Dahdal
