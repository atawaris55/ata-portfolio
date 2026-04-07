# Ata Waris - Graphic Designer Portfolio

A modern, professional portfolio website for Ata Waris, showcasing his work as a Graphic Designer and Creative Head.

## Features

- **Professional Navy & Gold Theme**: Sophisticated dark navy background with elegant gold accents
- **Grainy Gradient Background**: Multi-layered gradients with fine grain texture and depth
- **Professional Profile Image**: Circular profile photo with navy/gold glow effects and hover animations
- **Tool Expertise Badges**: Interactive badges showcasing Adobe Photoshop, Canva, and Figma skills
- **Certification Display**: Creative Head achievement badge with star member status
- **Enhanced Testimonials**: Quote-styled testimonial cards with professional typography
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Fade, slide, scale, and hover effects throughout
- **Glassmorphism Effects**: Modern glass-like cards and elements
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Animated progress bars for skills
  - Hover effects on portfolio items
  - Pricing plan selection with auto-fill contact form
  - Mobile-friendly hamburger menu
- **Sections**:
  - Hero with compelling headline and CTAs
  - About section with stats
  - Skills with animated progress bars
  - Portfolio grid with hover overlays
  - Pricing plans with glassmorphism cards
  - Client testimonials
  - Contact form with WhatsApp integration

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid, Flexbox, and CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## How to Run

1. **Using Python (Recommended)**:
   ```bash
   cd "path/to/portfolio/folder"
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js**:
   ```bash
   npx serve .
   ```

3. **Direct File Opening**:
   Simply open `index.html` in your web browser.

## Customization

### Colors
The color scheme can be easily modified in `styles.css` by changing the CSS variables at the top:

```css
:root {
    --primary-color: #1e3a8a;    /* Navy Blue */
    --secondary-color: #d4af37;  /* Gold */
    --accent-color: #f59e0b;     /* Amber accent */
    --dark-bg: #0f172a;          /* Dark Navy */
    --darker-bg: #020617;        /* Deep Navy */
}
```

### Content
- Update personal information in `index.html`
- Modify skills, portfolio items, pricing, and testimonials
- Change contact information and social links

### Images
Replace placeholder images in the portfolio section with actual project screenshots. The current placeholders use Via Placeholder service.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight vanilla implementation (no frameworks)
- Optimized CSS with minimal repaints
- Efficient JavaScript with passive event listeners
- Fast loading with minimal dependencies

## Contact Integration

The contact form currently shows an alert on submission. To integrate with a backend:

1. Replace the form submission handler in `script.js`
2. Connect to services like:
   - EmailJS for client-side email sending
   - Netlify Forms for static site hosting
   - Custom backend API

## Deployment

Ready for deployment on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is open source and available under the MIT License.