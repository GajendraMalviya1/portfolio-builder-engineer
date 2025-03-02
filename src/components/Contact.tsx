
import React, { useEffect, useState } from "react";
import { Send, MapPin, Phone, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Get In Touch
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <div className="glassmorphism rounded-xl p-8 reveal" data-effect="fade-right">
            <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Opportunity"
                    required
                    className="w-full p-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a potential project..."
                    required
                    rows={5}
                    className="w-full p-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between reveal" data-effect="fade-left">
            <div className="glassmorphism rounded-xl p-8 mb-6">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Stanford, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:alex@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+15551234567" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-xl p-8 mb-6">
              <h3 className="text-xl font-medium mb-6">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-[#0A66C2] mb-2" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-6 w-6 text-foreground mb-2" />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-[#1DA1F2] mb-2" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
            
            <div className="glassmorphism rounded-xl p-8">
              <h3 className="text-xl font-medium mb-6">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
