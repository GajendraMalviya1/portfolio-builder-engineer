
import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-2xl font-semibold tracking-tight flex items-center">
              <span className="text-primary">Gajendra</span>
              <span> &nbsp;Malviya</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-xs">
              A passionate engineer focused on creating innovative solutions to real-world problems.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-center md:text-left">
            <div>
              <h3 className="text-sm font-medium uppercase mb-4">Navigation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium uppercase mb-4">More</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#achievements" className="hover:text-primary transition-colors">Achievements</a></li>
                <li><a href="#resume" className="hover:text-primary transition-colors">Resume</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium uppercase mb-4">Connect</h3>
              <div className="flex space-x-3 justify-center md:justify-start">
                <a
                  href="https://github.com/GajendraMalviya1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary/20 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gajendra-malviya-99226a291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary/20 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="mailto:gajendramalviya1512@gmail.com"
                  className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary/20 transition-all"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Gajendra Malviya. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
