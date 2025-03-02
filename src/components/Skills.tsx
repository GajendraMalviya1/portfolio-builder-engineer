
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
        { name: "Python", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Java", level: 4 },
        { name: "C++", level: 3 },
        { name: "Swift", level: 3 },
      ],
    },
    {
      name: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML5", level: 5 },
        { name: "CSS3", level: 5 },
        { name: "React", level: 4 },
        { name: "Node.js", level: 4 },
        { name: "Angular", level: 3 },
        { name: "Vue.js", level: 3 },
      ],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MySQL", level: 4 },
        { name: "MongoDB", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "Firebase", level: 4 },
        { name: "Redis", level: 3 },
        { name: "GraphQL", level: 3 },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", level: 4 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 3 },
        { name: "CI/CD", level: 3 },
        { name: "Kubernetes", level: 2 },
        { name: "Jenkins", level: 2 },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Figma", level: 4 },
        { name: "Adobe XD", level: 3 },
        { name: "Sketch", level: 3 },
        { name: "Photoshop", level: 3 },
        { name: "Illustrator", level: 2 },
        { name: "InVision", level: 3 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <Search className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Problem Solving", level: 5 },
        { name: "Team Collaboration", level: 4 },
        { name: "Communication", level: 4 },
        { name: "Time Management", level: 4 },
        { name: "Adaptability", level: 5 },
        { name: "Leadership", level: 4 },
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
          My Skills
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          A diverse set of technical and soft skills accumulated throughout my academic and professional journey
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
