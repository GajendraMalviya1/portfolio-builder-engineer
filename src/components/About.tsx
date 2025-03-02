
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
    <section id="about" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          About Me
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          A passionate engineering student with a focus on creating impactful technology solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="reveal" data-effect="fade-right">
            <h3 className="text-2xl font-medium mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              Hello! I'm Alex Chen, a Computer Science Engineering student at Stanford University with a passion for software development, artificial intelligence, and creating elegant solutions to complex problems.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in technology began when I built my first computer at age 12. Since then, I've been captivated by the endless possibilities that engineering and computer science offer to improve lives and shape the future.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I enjoy hiking, playing the piano, and participating in hackathons where I can collaborate with other tech enthusiasts to build innovative projects.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <BookOpen size={20} className="text-primary mr-2" />
                <span>B.S. Computer Science</span>
              </div>
              <div className="flex items-center">
                <Code size={20} className="text-primary mr-2" />
                <span>Software Engineer</span>
              </div>
              <div className="flex items-center">
                <Lightbulb size={20} className="text-primary mr-2" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="text-primary mr-2" />
                <span>4.0 GPA</span>
              </div>
              <div className="flex items-center">
                <Coffee size={20} className="text-primary mr-2" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 reveal" data-effect="fade-left">
            <div className="rounded-xl overflow-hidden glassmorphism p-6">
              <h3 className="text-xl font-medium mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Stanford University</h4>
                  <p className="text-sm text-muted-foreground">B.S. Computer Science Engineering, 2020 - 2024</p>
                </div>
                <div>
                  <h4 className="font-medium">Relevant Coursework</h4>
                  <p className="text-sm text-muted-foreground">Data Structures & Algorithms, Machine Learning, Computer Networks, Database Systems, Software Engineering</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden glassmorphism p-6">
              <h3 className="text-xl font-medium mb-4">Career Objective</h3>
              <p className="text-muted-foreground">
                To leverage my technical skills and passion for innovation to develop software solutions that address real-world problems, with a particular focus on artificial intelligence and cloud computing technologies.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden glassmorphism p-6">
              <h3 className="text-xl font-medium mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Cloud Computing", "Web Development", "Mobile Apps", "UI/UX Design", "Open Source", "Hackathons", "Tech Startups"].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
