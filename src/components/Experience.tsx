
import React, { useEffect } from "react";
import { Calendar, Briefcase, Award, Code } from "lucide-react";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  type: "work" | "research" | "hackathon";
  icon: React.ReactNode;
  description: string[];
  technologies?: string[];
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      date: "May 2023 - Aug 2023",
      type: "work",
      icon: <Briefcase className="h-5 w-5" />,
      description: [
        "Developed and implemented new features for Google Cloud Platform's data analytics service.",
        "Optimized database queries resulting in a 30% reduction in response time.",
        "Collaborated with cross-functional teams to improve the user interface and user experience.",
        "Participated in code reviews and engineering design discussions."
      ],
      technologies: ["Python", "Java", "React", "BigQuery", "Kubernetes"],
    },
    {
      id: 2,
      title: "Machine Learning Research Assistant",
      company: "Stanford AI Lab",
      location: "Stanford, CA",
      date: "Sep 2022 - May 2023",
      type: "research",
      icon: <Code className="h-5 w-5" />,
      description: [
        "Conducted research on improving natural language processing models for low-resource languages.",
        "Implemented and evaluated novel transformer architectures using PyTorch.",
        "Co-authored a research paper presented at a leading NLP conference.",
        "Developed data collection and preprocessing pipelines for multilingual datasets."
      ],
      technologies: ["PyTorch", "TensorFlow", "BERT", "Python", "NLP"],
    },
    {
      id: 3,
      title: "Hackathon Winner - First Place",
      company: "TechCrunch Disrupt",
      location: "San Francisco, CA",
      date: "Oct 2022",
      type: "hackathon",
      icon: <Award className="h-5 w-5" />,
      description: [
        "Led a team of 4 in developing an AI-powered accessibility tool for visually impaired users.",
        "Implemented computer vision algorithms to describe surroundings and identify objects in real-time.",
        "Pitched the project to a panel of industry judges and won first place among 200+ teams.",
        "Received $25,000 in seed funding to continue development."
      ],
      technologies: ["React Native", "TensorFlow.js", "Azure Cognitive Services", "Node.js"],
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Netflix",
      location: "Los Gatos, CA",
      date: "May 2022 - Aug 2022",
      type: "work",
      icon: <Briefcase className="h-5 w-5" />,
      description: [
        "Contributed to the development of Netflix's internal content management system.",
        "Implemented responsive UI components using React and TypeScript.",
        "Wrote unit and integration tests using Jest and React Testing Library.",
        "Participated in agile development processes, including daily stand-ups and sprint planning."
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "CSS-in-JS"],
    },
    {
      id: 5,
      title: "Undergraduate Researcher",
      company: "Stanford Computer Systems Laboratory",
      location: "Stanford, CA",
      date: "Jan 2022 - May 2022",
      type: "research",
      icon: <Code className="h-5 w-5" />,
      description: [
        "Researched distributed systems with a focus on fault tolerance and consensus algorithms.",
        "Implemented a prototype of a novel distributed key-value store.",
        "Conducted performance and reliability tests under various network conditions.",
        "Created visualization tools to analyze system behavior and identify bottlenecks."
      ],
      technologies: ["Go", "Rust", "Docker", "Kubernetes", "Distributed Systems"],
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
    <section id="experience" className="bg-secondary/30 py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          My Experience
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Professional journey through internships, research positions, and hackathons
        </p>

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:-translate-x-0.5"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } reveal`}
                data-effect={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-7 h-7 rounded-full border-4 border-background bg-primary transform -translate-x-3 md:-translate-x-3.5 flex items-center justify-center z-10">
                  {exp.icon}
                </div>
                
                {/* Date for mobile */}
                <div className="md:hidden pl-10 mb-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.date}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 
                  ? "md:pr-12 md:text-right" 
                  : "md:pl-12"
                } pl-10 md:pl-0`}>
                  <div className="glassmorphism rounded-xl p-6">
                    <div className={`flex items-center justify-between mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div>
                        <h3 className="text-xl font-medium">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.location}</p>
                      </div>
                      
                      {/* Date for desktop */}
                      <div className="hidden md:flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.date}
                      </div>
                    </div>
                    
                    <ul className={`text-muted-foreground space-y-2 text-sm ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
