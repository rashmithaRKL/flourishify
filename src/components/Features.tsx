
import { Check, Zap, Shield, Eye } from 'lucide-react';

const features = [
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Refined Aesthetics",
    description: "Clean lines and intentional design elements that create visual harmony without unnecessary complexity."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Intuitive Interaction",
    description: "Every element responds naturally to your touch, creating a fluid and predictable experience."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Robust Architecture",
    description: "Built on a foundation of reliable technology that ensures consistency and stability."
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Thoughtful Details",
    description: "Small touches that make a significant difference, from perfect spacing to smooth transitions."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hidden-element">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight hidden-element">
            Designed with purpose, <br />built with precision
          </h2>
          <p className="text-foreground/70 leading-relaxed mt-4 hidden-element">
            Our approach combines aesthetic elegance with functional clarity, 
            creating digital products that feel both beautiful and intuitive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl hidden-element"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="hidden-element">
            <div className="bg-gradient-to-r from-primary/5 to-primary/20 rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="h-[500px] w-full bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                  <div className="glass-card rounded-xl p-6 max-w-lg text-center space-y-4">
                    <h3 className="text-2xl font-medium">Experience Design Excellence</h3>
                    <p className="text-foreground/70">
                      Every pixel has been carefully considered to create a product that not only meets your needs but exceeds your expectations.
                    </p>
                    <div className="pt-2">
                      <a 
                        href="#contact" 
                        className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px]"
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
      </div>
    </section>
  );
};

export default Features;
