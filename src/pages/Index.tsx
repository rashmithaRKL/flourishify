
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAnimateOnScroll } from '@/lib/animations';

const Index = () => {
  // Initialize scroll animations
  useAnimateOnScroll();

  // Set page title
  useEffect(() => {
    document.title = 'PulchrDesign | Elegant Digital Experiences';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
