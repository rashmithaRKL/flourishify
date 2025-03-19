
const principles = [
  {
    number: "01",
    title: "Simplicity",
    description: "Good design removes the unnecessary so that the necessary may speak."
  },
  {
    number: "02",
    title: "Functionality",
    description: "Design is not just what it looks like and feels like. Design is how it works."
  },
  {
    number: "03",
    title: "Honesty",
    description: "Good design is honest and doesn't attempt to manipulate the user with false promises."
  },
  {
    number: "04",
    title: "Longevity",
    description: "Good design is thorough down to the last detail, and nothing is arbitrary or left to chance."
  }
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className="border border-border p-6 rounded-xl hidden-element"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl font-light text-primary/40 block mb-4">
                    {principle.number}
                  </span>
                  <h3 className="text-xl font-medium mb-2">{principle.title}</h3>
                  <p className="text-foreground/70 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 max-w-xl order-1 lg:order-2">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hidden-element">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight hidden-element">
                Less, but better
              </h2>
            </div>
            <div className="space-y-4 hidden-element">
              <p className="text-foreground/80 leading-relaxed">
                We believe that good design is as little design as possible. It's about 
                focusing on the essential aspects and eliminating everything else.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                By embracing simplicity, we create digital products that are beautiful in 
                their clarity and purposeful in their execution. This approach ensures that 
                every element serves a clear function, resulting in designs that feel 
                intuitive and effortless.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our work is guided by the principle that good design makes a product 
                understandable. It clarifies the product's structure, making it transparent 
                and self-explanatory.
              </p>
            </div>
            <div className="hidden-element">
              <a 
                href="#contact" 
                className="inline-block mt-4 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
