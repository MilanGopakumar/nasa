# Exoplanet Explorer

A refined, production-ready NASA-themed ML web application for exoplanet detection and explainability.

## Design System

### Color Palette

```css
--background: #0b1230          /* Deep navy space - primary background */
--background-secondary: #1a2847 /* Cosmic indigo - secondary surfaces */
--primary: #2dd4bf              /* Cyan/turquoise - CTAs and highlights */
--secondary: #ffb86b            /* Warm amber/gold - secondary highlights */
--foreground: #ffffff           /* Pure white - primary text */
--muted-foreground: #9ca3af    /* Gray - secondary text */
```

### Typography

- **Font Family**: Poppins (geometric sans-serif from Google Fonts)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Base Size**: 16px
- **Scale**: Modular scale for consistent hierarchy

### Spacing

Based on 8-point grid system:
- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 0.75rem (12px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)
- `--spacing-3xl`: 4rem (64px)

### Animation Timing

- `--transition-fast`: 150ms (micro-interactions)
- `--transition-base`: 250ms (standard transitions)
- `--transition-slow`: 400ms (emphasis animations)

## NASA Logo Usage

### Current Implementation

The application uses a custom NASA-inspired insignia (`/components/NASAInsignia.tsx`) that evokes the space agency aesthetic without using protected trademarks.

### Using the Official NASA Logo

If you have permission to use the official NASA logo:

1. **Obtain Permission**: Review NASA's Media Usage Guidelines at https://www.nasa.gov/multimedia/guidelines/
2. **Download Assets**: Get official NASA insignia from https://www.nasa.gov/multimedia/guidelines/
3. **SVG Format**: Use SVG for crisp rendering at all resolutions
4. **Replace Component**: Update the header to use the official logo:

```tsx
// Replace NASAInsignia component with:
<img 
  src="/assets/nasa-logo.svg" 
  alt="NASA Logo" 
  className="w-12 h-12 flex-shrink-0"
/>
```

### Fallback Options

If official NASA logo cannot be used:
- ✅ Custom insignia (current implementation)
- Alternative: Use a generic planet/orbit SVG icon
- Alternative: Text-only branding

## Components

### Button Styles

**Primary Button** (filled, accent color):
```tsx
<button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-all duration-200 hover:shadow-glow-primary">
  Predict
</button>
```

**Secondary Button** (outline):
```tsx
<button className="px-8 py-4 rounded-lg border border-border hover:border-primary/50 text-foreground hover:bg-primary/5 transition-all duration-200">
  View Demo
</button>
```

### Card Hover Effects

Cards use subtle lift and glow effects:
- `translateY(-8px)` on hover
- Gradient glow on hover (`opacity-0` → `opacity-100`)
- Border color transition
- 300ms smooth transitions

### Animations

Available animation classes:
- `.animate-float` - Gentle floating motion (6s)
- `.animate-pulse-glow` - Subtle glow pulse (3s)
- `.animate-star-twinkle` - Star twinkle effect (4s)
- `.animate-gradient` - Background gradient shift (15s)
- `.animate-orbit` - Orbital rotation (20s)
- `.animate-fade-in` - Fade in with slide up (0.6s)

## Responsive Breakpoints

- **Mobile**: < 640px (cards stack vertically)
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px (full layout)

Testing widths: 320px / 768px / 1440px

## Accessibility

- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ High contrast text on dark backgrounds
- ✅ Descriptive `aria-label` attributes
- ✅ Keyboard-focus visible styles
- ✅ Reduced motion support (respects user preferences)

## Suggested Enhancements

### Future Improvements

1. **Lottie Integration**
   - Animated planet/orbit graphics in hero
   - Subtle particle effects
   - Loading state animations

2. **Dark Mode Toggle**
   - Already supports dark theme variables
   - Add user preference toggle
   - Persist selection in localStorage

3. **Interactive Starfield**
   - Canvas-based parallax stars
   - Mouse-following constellation lines
   - Smooth WebGL particle system

4. **Enhanced Micro-interactions**
   - Button ripple effects
   - Card reveal animations on scroll
   - Smooth section transitions

5. **Performance Optimizations**
   - Lazy load images below fold
   - Progressive web app (PWA) support
   - Optimized animation performance

## File Structure

```
/
├── App.tsx                      # Main application component
├── README.md                    # This file
├── components/
│   ├── NASAInsignia.tsx        # Custom NASA-inspired logo
│   └── ui/                     # Shadcn UI components
├── styles/
│   └── globals.css             # Design system tokens & animations
└── assets/                     # (Create this folder for images/SVGs)
    └── nasa-logo.svg           # Official NASA logo (if permitted)
```

## Getting Started

1. Install dependencies
2. Run development server
3. View at http://localhost:3000
4. Customize colors in `/styles/globals.css`
5. Replace logo component if using official NASA assets

## Legal Notes

- This project uses a custom insignia inspired by NASA's design language
- Official NASA logos require permission for use
- Data credits: NASA Exoplanet Archive, Kepler Mission
- See NASA Media Usage Guidelines for official asset usage

## Credits

- **Data**: NASA Exoplanet Archive, Kepler Mission, TESS
- **Design**: Space agency aesthetic, minimal and professional
- **Typography**: Poppins by Google Fonts
- **Icons**: Lucide React

---

*Built for scientific exploration and educational purposes.*
