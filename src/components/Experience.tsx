
import React, { useEffect } from "react";
import { Calendar, Code, Briefcase, Award } from "lucide-react";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  type: "technical" | "management" | "training";
  icon: React.ReactNode;
  description: string[];
  technologies?: string[];
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Programming in C, C++, DSA",
      company: "Chandigarh University",
      location: "Mohali, Punjab, India",
      date: "Aug 2022 - Present",
      type: "technical",
      icon: <Code className="h-5 w-5" />,
      description: [
        "Developed strong foundation in C and C++ programming languages",
        "Implemented various data structures like arrays, linked lists, stacks, queues, trees, and graphs",
        "Solved complex algorithmic problems applying different algorithmic paradigms",
        "Participated in coding competitions and hackathons to enhance problem-solving skills",
        "Mentored junior students in programming concepts and problem-solving approaches"
      ],
      technologies: ["C", "C++", "Data Structures", "Algorithms", "Problem Solving"],
    },
    {
      id: 2,
      title: "Project Management",
      company: "Academic Projects",
      location: "Chandigarh University",
      date: "Jan 2023 - Present",
      type: "management",
      icon: <Briefcase className="h-5 w-5" />,
      description: [
        "Led multiple academic project teams with 4-6 members each",
        "Applied Agile methodology for efficient project execution and delivery",
        "Managed project timelines, resources, and task distribution among team members",
        "Conducted regular project status meetings and ensured timely completion of milestones",
        "Developed skills in conflict resolution, team motivation, and effective communication"
      ],
      technologies: ["Agile", "Scrum", "Kanban", "JIRA", "GitHub", "Team Leadership"],
    },
    {
      id: 3,
      title: "Java In-house Summer Trainee",
      company: "Chandigarh University",
      location: "Mohali, Punjab, India",
      date: "June 2023 - Aug 2023",
      type: "training",
      icon: <Award className="h-5 w-5" />,
      description: [
        "Completed intensive 3-month in-house training program on Java and related technologies",
        "Developed a comprehensive understanding of object-oriented programming concepts",
        "Created various Java applications including console-based and GUI applications",
        "Learned database connectivity using JDBC and implemented CRUD operations",
        "Developed a mini-project implementing all concepts learned during the training"
      ],
      technologies: ["Java", "OOP", "JDBC", "MySQL", "Swing", "JavaFX"],
    }
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
          Technical skills and project management experience
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
