
import React, { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrollPosition / 700}`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef} 
        className="section-container relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-8 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=faces&auto=format&q=90"
            alt="Gajendra Malviya"
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-white/70 text-sm tracking-wider uppercase animate-fade-in" style={{animationDelay: "0.2s"}}>
          Welcome to my portfolio
        </p>
        
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
          I'm <span className="text-primary">Gajendra Malviya</span>
        </h1>
        
        <h2 className="text-white/80 text-xl md:text-2xl max-w-xl animate-fade-in" style={{animationDelay: "0.4s"}}>
          Aspiring Engineer | Software Developer | Innovator
        </h2>
        
        <p className="text-white/80 mt-4 max-w-2xl text-base animate-fade-in" style={{animationDelay: "0.5s"}}>
          Enthusiastic Software Developer with a strong foundation in programming and problem-solving, eager to apply skills to real-world challenges. Passionate about continuous learning and contributing to innovative projects in the tech industry.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-in" style={{animationDelay: "0.5s"}}>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>Pali, Rajasthan, India</span>
          </div>
          <div className="flex items-center text-white/80 text-sm">
            <Mail size={16} className="mr-1" />
            <span>gajendramalviya1512@gmail.com</span>
          </div>
          <div className="flex items-center text-white/80 text-sm">
            <Phone size={16} className="mr-1" />
            <span>+919521871512</span>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-8 animate-fade-in" style={{animationDelay: "0.6s"}}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:gajendramalviya1512@gmail.com" 
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white animate-bounce transition-all duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
