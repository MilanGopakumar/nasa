import { Brain, Github, Telescope, TrendingUp, Twitter } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Refined animated starfield background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1230] via-[#1a2847] to-[#0b1230] animate-gradient"></div>
        
        {/* Subtle star field */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 25% 20%, white, transparent),
                           radial-gradient(1.5px 1.5px at 75% 30%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 85% 15%, white, transparent),
                           radial-gradient(2px 2px at 15% 70%, white, transparent),
                           radial-gradient(1px 1px at 40% 85%, white, transparent)`,
          backgroundSize: '300px 300px',
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header - Clean and minimal */}
        <header className="border-b border-border backdrop-blur-lg bg-background/70 sticky top-0 z-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center h-20">
              {/* Title Only */}
              <div>
                <h1 className="tracking-tight leading-none">Exoplanet Explorer</h1>
                <p className="text-xs text-muted-foreground mt-0.5">NASA ML Research Platform</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section - Elegant and spacious */}
        <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-6 lg:px-8 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                <span className="text-sm text-primary">AI-Powered Exoplanet Detection</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight max-w-4xl mx-auto">
                Discover the Worlds{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Beyond Our Solar System
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Harness machine learning to detect and analyze exoplanets using NASA's Kepler mission data with explainable AI
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Exploring
                    <Telescope className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  </span>
                </button>
              </div>

              {/* Stats - Minimal and clean */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/50 mt-12">
                <div>
                  <div className="text-3xl text-primary mb-1">5,502</div>
                  <div className="text-sm text-muted-foreground">Confirmed Exoplanets</div>
                </div>
                <div>
                  <div className="text-3xl text-secondary mb-1">98.7%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl text-primary mb-1">Real-time</div>
                  <div className="text-sm text-muted-foreground">Detection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Three cards with hover effects */}
        <section id="features" className="py-24 px-6 lg:px-8 border-t border-border/50">
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Advanced <span className="text-primary">ML Pipeline</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Two integrated tools for comprehensive exoplanet analysis
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Predict Card */}
              <div className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card content */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl mb-3">Predict</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    State-of-the-art neural networks classify stellar objects and identify exoplanet candidates from light curve data.
                  </p>
                  
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Deep learning classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Real-time inference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Batch processing</span>
                    </li>
                  </ul>

                  <button className="mt-6 text-primary hover:text-primary-hover transition-colors duration-200 flex items-center gap-2 group/btn text-sm">
                    Learn more
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>

              {/* Explain Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:border-secondary/40 hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <h3 className="text-xl mb-3">Explain</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    SHAP-based interpretability reveals feature importance and provides transparent explanations for model decisions.
                  </p>
                  
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>SHAP value analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Feature importance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Model transparency</span>
                    </li>
                  </ul>

                  <button className="mt-6 text-secondary hover:text-secondary-hover transition-colors duration-200 flex items-center gap-2 group/btn text-sm">
                    Learn more
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Built on NASA Data */}
        <section id="about" className="py-24 px-6 lg:px-8 border-t border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl opacity-60"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709142221334-290c5a72de26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBuZWJ1bGF8ZW58MXx8fHwxNzU5NjQyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Deep space nebula"
                  className="relative rounded-3xl shadow-2xl border border-border"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl tracking-tight">
                  Built on <span className="text-secondary">NASA Data</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Powered by decades of astronomical research from NASA's Kepler and TESS missions, combined with cutting-edge machine learning and explainable AI techniques.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="mb-1">Verified NASA Datasets</h4>
                      <p className="text-sm text-muted-foreground">Curated data from official Kepler and TESS missions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="mb-1">Explainable AI</h4>
                      <p className="text-sm text-muted-foreground">Transparent predictions with SHAP interpretability</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="mb-1">Open Research</h4>
                      <p className="text-sm text-muted-foreground">Community-driven development for scientific advancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Minimal and professional */}
        <footer className="border-t border-border/50 py-12 px-6 lg:px-8 mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h3 className="mb-4">Exoplanet Explorer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advancing exoplanet research through machine learning and explainable AI.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="mb-4 text-sm">Resources</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><a href="#about" className="hover:text-primary transition-colors duration-200">About</a></li>
                </ul>
              </div>

              {/* Data Credits */}
              <div>
                <h4 className="mb-4 text-sm">Data Sources</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Data courtesy of NASA Exoplanet Archive, Kepler Mission, and Exoplanet Orbit Database.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border/50 pt-8 flex justify-center items-center text-sm text-muted-foreground">
              <p>© 2025 Exoplanet Explorer. Data courtesy of NASA Exoplanet Science Institute.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
