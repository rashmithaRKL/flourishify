
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAnimateOnScroll, useStaggeredAnimation } from '@/lib/animations';

const Index = () => {
  // Initialize scroll animations with custom threshold
  useAnimateOnScroll({ threshold: 0.15 });
  
  // Reference for sections with staggered children
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Apply staggered animation to feature cards
  useStaggeredAnimation(featuresRef, '.feature-card', 150);

  // Set page title and apply initial animations
  useEffect(() => {
    document.title = 'PulchrDesign | Elegant Digital Experiences';
    
    // Apply entrance animations to elements that should animate on load
    const initialAnimations = document.querySelectorAll('.initial-animation');
    setTimeout(() => {
      initialAnimations.forEach(element => {
        element.classList.add('show-element');
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,180,255,0.15),transparent_60%)]"></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(120,120,255,0.1),transparent_60%)]"></div>
      
      <Navbar />
      <main>
        <Hero />
        <div ref={featuresRef}>
          <Features />
        </div>
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      
      {/* Cursor tracker - subtle gradient that follows mouse movements */}
      <div id="cursor-glow" className="fixed w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none opacity-0 -z-5 transition-opacity duration-300"></div>
    </div>
  );
};

// Add cursor effect
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = `${clientX - 250}px`;
      cursorGlow.style.top = `${clientY - 250}px`;
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });
  });
}

export default Index;
