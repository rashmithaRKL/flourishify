
import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: 'Please fill in all fields'
      });
      return;
    }

    // Simulating form submission
    setFormStatus({
      success: true,
      message: 'Thank you! Your message has been sent.'
    });
    
    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hidden-element">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight hidden-element">
            Let's create something exceptional together
          </h2>
          <p className="text-foreground/70 leading-relaxed mt-4 hidden-element">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8 hidden-element">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-foreground/70">hello@pulchrdesign.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-foreground/70">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl">
                <h3 className="text-lg font-medium mb-2">Office Hours</h3>
                <p className="text-foreground/70 mb-4">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
                <p className="text-sm text-foreground/60">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 hidden-element">
            <div className="glass-card rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px]"
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
