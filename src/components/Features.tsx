
import { useRef } from 'react';
import { Check, Zap, Shield, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Toggle } from "@/components/ui/toggle";

const features = [
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Refined Aesthetics",
    description: "Clean lines and intentional design elements that create visual harmony without unnecessary complexity.",
    strength: 95
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Intuitive Interaction",
    description: "Every element responds naturally to your touch, creating a fluid and predictable experience.",
    strength: 90
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Robust Architecture",
    description: "Built on a foundation of reliable technology that ensures consistency and stability.",
    strength: 85
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Thoughtful Details",
    description: "Small touches that make a significant difference, from perfect spacing to smooth transitions.",
    strength: 92
  }
];

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  return (
    <section id="features" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full animate-on-scroll" data-animation="fade-up">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight animate-on-scroll font-playfair" data-animation="fade-up">
            Designed with purpose, <br />built with precision
          </h2>
          <p className="text-foreground/70 leading-relaxed mt-4 animate-on-scroll" data-animation="fade-up">
            Our approach combines aesthetic elegance with functional clarity, 
            creating digital products that feel both beautiful and intuitive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="neo-glass p-8 rounded-xl animate-on-scroll feature-card hover-lift"
              data-animation="fade-up"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-foreground/70 mb-4">{feature.description}</p>
              
              {/* Feature strength indicator */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-foreground/60">Strength</span>
                  <span className="text-xs font-medium">{feature.strength}%</span>
                </div>
                <Progress value={feature.strength} className="h-1.5" />
              </div>
              
              {/* Interactive hover card */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="mt-4 text-primary text-sm flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight size={12} />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">{feature.title} Details</h4>
                    <p className="text-xs text-muted-foreground">
                      Our {feature.title.toLowerCase()} approach ensures your project 
                      stands out in today's competitive digital landscape.
                    </p>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3].map((i) => (
                        <Toggle key={i} size="sm" variant="outline" className="text-xs h-7">
                          Option {i}
                        </Toggle>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="animate-on-scroll" data-animation="fade-up">
            <div className="bg-gradient-to-r from-primary/5 to-primary/20 rounded-2xl p-1 gradient-border">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Image preview */}
                  <div className="h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute w-40 h-40 rounded-full bg-primary/5 top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-20 h-20 rounded-full bg-primary/10 bottom-0 left-1/4"></div>
                    
                    {/* Content preview */}
                    <div className="relative z-10 neo-glass rounded-xl p-6 w-full max-w-xs text-center">
                      <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                        <Check className="h-8 w-8 text-primary/40" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-24 bg-gray-200 rounded-full mx-auto"></div>
                        <div className="h-2 w-32 bg-gray-200 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Call to action */}
                  <div className="h-[400px] bg-white p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-medium mb-4">Experience Design Excellence</h3>
                    <p className="text-foreground/70 mb-6">
                      Every pixel has been carefully considered to create a product that not only meets your needs 
                      but exceeds your expectations. Our design system ensures consistency across all touchpoints.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['Pixel-perfect accuracy', 'Responsive across devices', 'Consistent visual language'].map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={16} className="text-primary" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#contact" 
                      className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] hover-lift w-fit"
                    >
                      Start Creating
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
