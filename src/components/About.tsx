
import React, { useEffect } from "react";
import { BookOpen, Code, Coffee, Lightbulb, Award } from "lucide-react";

const About = () => {
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
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          About Me
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          A passionate engineering student with a focus on creating impactful technology solutions
        </p>

        <div className="mt-12 glassmorphism rounded-xl p-6 md:p-8 reveal" data-effect="fade-up">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium mb-4">Who I Am</h3>
            <p className="text-muted-foreground">
              Hello! I'm Gajendra Malviya, a Computer Science Engineering student at Chandigarh University with a passion for software development, artificial intelligence, and creating elegant solutions to complex problems.
            </p>
            <p className="text-muted-foreground">
              My journey in technology began with a strong foundation in programming. Since then, I've been captivated by the endless possibilities that engineering and computer science offer to improve lives and shape the future.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I enjoy playing softball, participating in hackathons, and continuously expanding my knowledge in the tech domain.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center">
                <BookOpen size={18} className="text-primary mr-2" />
                <span>B.E. Computer Science</span>
              </div>
              <div className="flex items-center">
                <Code size={18} className="text-primary mr-2" />
                <span>Software Developer</span>
              </div>
              <div className="flex items-center">
                <Lightbulb size={18} className="text-primary mr-2" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center">
                <Award size={18} className="text-primary mr-2" />
                <span>8.58 CGPA</span>
              </div>
              <div className="flex items-center">
                <Coffee size={18} className="text-primary mr-2" />
                <span>Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
