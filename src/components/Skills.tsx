import React, { useEffect } from "react";
import { 
  Code, Database, Terminal, Globe, Layout, Server, 
  Cpu, GitBranch, PackageOpen, Shield, Layers, Search 
} from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "C++", level: 5 },
        { name: "C", level: 4 },
        { name: "Java", level: 4 },
        { name: "Python", level: 3 },
        { name: "JavaScript", level: 4 },
        { name: "HTML/CSS", level: 4 },
      ],
    },
    {
      name: "Frameworks & Tools",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "ReactJS", level: 3 },
        { name: "MongoDB", level: 3 },
        { name: "MySQL", level: 4 },
        { name: "Git & GitHub", level: 4 },
        { name: "VS Code", level: 5 },
        { name: "MS Office", level: 4 },
      ],
    },
    {
      name: "Core Concepts",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Data Structures & Algorithms", level: 4 },
        { name: "OOPS", level: 4 },
        { name: "DBMS", level: 4 },
        { name: "Computer Networks", level: 3 },
        { name: "Operating Systems", level: 3 },
        { name: "UI/UX", level: 3 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Communication", level: 4 },
        { name: "Project Management", level: 3 },
        { name: "Problem Solving", level: 5 },
        { name: "Teamwork", level: 4 },
        { name: "Time Management", level: 4 },
        { name: "Adaptability", level: 4 },
      ],
    },
  ];

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
    <section id="skills" className="bg-secondary/30 py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Technical Skills
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          A diverse set of technical and soft skills accumulated throughout my academic journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="glassmorphism rounded-xl p-6 reveal"
              data-effect="zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level === 5 ? "Expert" : 
                         skill.level === 4 ? "Advanced" : 
                         skill.level === 3 ? "Intermediate" : 
                         skill.level === 2 ? "Basic" : "Beginner"}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level * 20}%`, transitionDelay: "0.3s" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
