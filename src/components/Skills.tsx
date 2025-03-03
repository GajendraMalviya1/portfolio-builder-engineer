
import React, { useEffect } from "react";
import { 
  Code, Database, Terminal, Globe, Layout, Server, 
  Cpu, GitBranch, PackageOpen, Shield, Layers, Search,
  Users, MessageSquare, LightbulbIcon, Clock, Target, Puzzle
} from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    logo: React.ReactNode;
  }[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "C++", logo: <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-full"><span className="text-sm font-bold text-blue-600 dark:text-blue-400">C++</span></div> },
        { name: "C", logo: <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-full"><span className="text-sm font-bold text-blue-600 dark:text-blue-400">C</span></div> },
        { name: "Java", logo: <Cpu className="w-8 h-8 text-red-500" /> },
        { name: "Python", logo: <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/20 rounded-full"><span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">Py</span></div> },
        { name: "JavaScript", logo: <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/20 rounded-full"><span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">JS</span></div> },
        { name: "HTML/CSS", logo: <Code className="w-8 h-8 text-orange-500" /> },
      ],
    },
    {
      name: "Frameworks & Tools",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "ReactJS", logo: <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-full"><span className="text-xs font-bold text-blue-600 dark:text-blue-400">React</span></div> },
        { name: "MongoDB", logo: <Database className="w-8 h-8 text-green-500" /> },
        { name: "MySQL", logo: <Database className="w-8 h-8 text-blue-500" /> },
        { name: "Git & GitHub", logo: <GitBranch className="w-8 h-8 text-gray-700 dark:text-gray-300" /> },
        { name: "VS Code", logo: <Code className="w-8 h-8 text-blue-500" /> },
        { name: "MS Office", logo: <Layout className="w-8 h-8 text-orange-500" /> },
      ],
    },
    {
      name: "Core Concepts",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Data Structures & Algorithms", logo: <Layers className="w-8 h-8 text-purple-500" /> },
        { name: "OOPS", logo: <Puzzle className="w-8 h-8 text-yellow-500" /> },
        { name: "DBMS", logo: <Database className="w-8 h-8 text-indigo-500" /> },
        { name: "Computer Networks", logo: <Server className="w-8 h-8 text-blue-500" /> },
        { name: "Operating Systems", logo: <Cpu className="w-8 h-8 text-green-500" /> },
        { name: "UI/UX", logo: <Layout className="w-8 h-8 text-pink-500" /> },
      ],
    },
    {
      name: "Interpersonal Skills",
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Communication", logo: <MessageSquare className="w-8 h-8 text-blue-500" /> },
        { name: "Project Management", logo: <Target className="w-8 h-8 text-red-500" /> },
        { name: "Problem Solving", logo: <LightbulbIcon className="w-8 h-8 text-yellow-500" /> },
        { name: "Teamwork", logo: <Users className="w-8 h-8 text-green-500" /> },
        { name: "Time Management", logo: <Clock className="w-8 h-8 text-purple-500" /> },
        { name: "Adaptability", logo: <Puzzle className="w-8 h-8 text-orange-500" /> },
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
          A diverse set of technical and interpersonal skills accumulated throughout my academic journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
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

              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-3 bg-background/50 dark:bg-background/20 rounded-lg hover:shadow-md transition-all">
                    <div className="mb-2">
                      {skill.logo}
                    </div>
                    <span className="text-xs text-center font-medium">{skill.name}</span>
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
