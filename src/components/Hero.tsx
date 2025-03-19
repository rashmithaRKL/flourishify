
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden section-padding"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 max-w-xl">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full animate-fade-in">
              Minimalist Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance animate-fade-in-up">
              Design that speaks through <span className="text-primary">simplicity</span>
            </h1>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed animate-fade-in-up delay-200">
            Crafting experiences that blend intuitive functionality with 
            elegant aesthetics. Our approach embraces the philosophy that 
            true beauty emerges from purpose and clarity.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
            <a 
              href="#features" 
              className="px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px]"
            >
              Discover More
              <ArrowRight size={16} />
            </a>
            <a 
              href="#philosophy" 
              className="px-6 py-3 glass-morphism text-foreground rounded-full font-medium"
            >
              Our Philosophy
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative h-[600px] w-full">
            {/* Layered Device Mockups */}
            <div className="absolute right-0 top-0 w-[350px] h-[600px] glass-card rounded-3xl overflow-hidden shadow-xl animate-slide-in-right">
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-20 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                    <span className="text-primary/40 font-medium">Beautiful Interface</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-[200px] top-[100px] w-[280px] h-[400px] glass-card rounded-3xl overflow-hidden shadow-lg animate-slide-in-right delay-200">
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="text-primary/40 font-medium">Elegant Details</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute left-0 bottom-0 w-[240px] h-[320px] glass-card rounded-3xl overflow-hidden shadow-lg animate-slide-in-left delay-400">
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 overflow-hidden">
                <div className="h-full w-full bg-white/30 backdrop-blur-md p-4">
                  <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="rounded-2xl h-[calc(100%-24px)] w-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <span className="text-primary/40 font-medium">Perfect Balance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in delay-500">
        <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
