
import { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useParallaxScroll } from '@/lib/animations';

const Hero = () => {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  
  // Apply parallax effect to background elements
  useParallaxScroll(parallaxBgRef, 0.05);
  
  // Animate typing effect for the tagline
  useEffect(() => {
    // This effect will run on client-side only
    const typewriterElement = document.querySelector('.typewriter-text') as HTMLElement;
    if (!typewriterElement) return;
    
    const text = typewriterElement.innerText;
    typewriterElement.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typewriterElement.innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(() => typeWriter(), 1000);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden section-padding"
    >
      {/* Background Elements with Parallax Effect */}
      <div ref={parallaxBgRef} className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl floating" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl floating" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-primary/10 blur-3xl floating" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 max-w-xl">
          <div className="space-y-2 initial-animation animate-on-scroll" data-animation="fade-up">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Minimalist Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance font-playfair">
              Design that speaks through <span className="gradient-text">simplicity</span>
            </h1>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed initial-animation animate-on-scroll typewriter-text" data-animation="fade-up">
            Crafting experiences that blend intuitive functionality with 
            elegant aesthetics.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 initial-animation animate-on-scroll" data-animation="fade-up">
            <a 
              href="#features" 
              className="px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] hover-lift"
            >
              Discover More
              <ArrowRight size={16} />
            </a>
            <a 
              href="#philosophy" 
              className="px-6 py-3 neo-glass text-foreground rounded-full font-medium hover-scale"
            >
              Our Philosophy
            </a>
          </div>

          {/* New Feature: Social Proof Carousel */}
          <div className="mt-12 initial-animation animate-on-scroll" data-animation="fade-up">
            <Carousel opts={{ loop: true, align: "start", duration: 40 }} className="w-full max-w-sm">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card rounded-xl p-4 h-full">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-medium">
                          {testimonial.initial}
                        </div>
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                      <p className="text-sm text-foreground/70 italic">"{testimonial.quote}"</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        
        <div ref={deviceRef} className="relative hidden lg:block initial-animation animate-on-scroll" data-animation="fade-left">
          <div className="relative h-[600px] w-full">
            {/* Layered Device Mockups with enhanced visuals */}
            <div className="absolute right-0 top-0 w-[350px] h-[600px] neo-glass rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-20 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="shimmer w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary">UI</span>
                      </div>
                      <span className="text-primary/60 font-medium">Beautiful Interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-[200px] top-[100px] w-[280px] h-[400px] neo-glass rounded-3xl overflow-hidden shadow-lg floating" style={{ animationDuration: '6s', animationDelay: '1s' }}>
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-primary text-xs">UX</span>
                      </div>
                      <span className="text-primary/40 font-medium">Elegant Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute left-0 bottom-0 w-[240px] h-[320px] neo-glass rounded-3xl overflow-hidden shadow-lg floating" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="pulse w-10 h-10 rounded-full bg-primary/15 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-primary text-xs">⌘</span>
                      </div>
                      <span className="text-primary/40 font-medium">Perfect Balance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center initial-animation animate-on-scroll" data-animation="fade-up">
        <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center hover:border-primary/40 transition-colors duration-300">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1.5s_infinite] mt-2"></div>
        </div>
        <ChevronDown size={16} className="text-foreground/40 mt-2 animate-bounce" />
      </div>
    </section>
  );
};

// Testimonial data for the carousel
const testimonials = [
  { name: "Alex Chen", initial: "A", quote: "The design simplicity makes our app feel so intuitive." },
  { name: "Sarah Johnson", initial: "S", quote: "Minimalist approach that captures our brand perfectly." },
  { name: "David Miller", initial: "D", quote: "Clean aesthetic with fantastic attention to detail." },
  { name: "Emily Wilson", initial: "E", quote: "Our users love the smooth, elegant interface." }
];

export default Hero;
