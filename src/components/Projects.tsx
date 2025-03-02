
import React, { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Neural Artistic Style Transfer",
        description: "An AI application that applies the artistic style of one image to the content of another using convolutional neural networks.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "Cloud-based File System",
        description: "A distributed file system with end-to-end encryption, version control, and real-time collaboration features.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["React", "Node.js", "AWS S3", "MongoDB", "Socket.io"],
        github: "https://github.com",
        featured: true,
      },
      {
        id: 3,
        title: "Gesture-Controlled Drone",
        description: "A custom-built drone that can be controlled with hand gestures recognized through computer vision algorithms.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["Python", "OpenCV", "Arduino", "ROS", "PlatformIO"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 4,
        title: "Smart Home Energy Monitor",
        description: "An IoT system that tracks household energy usage in real-time and provides insights for optimization.",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["Raspberry Pi", "Node.js", "MQTT", "InfluxDB", "Grafana"],
        github: "https://github.com",
        featured: false,
      },
      {
        id: 5,
        title: "Augmented Reality Navigation",
        description: "A mobile app that uses AR to display directional cues in the real world for pedestrian navigation.",
        image: "https://images.unsplash.com/photo-1616628188500-43d19c8e4664?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["Swift", "ARKit", "CoreLocation", "MapKit", "Firebase"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 6,
        title: "Blockchain-based Voting System",
        description: "A secure, transparent voting platform built on blockchain technology to ensure tamper-proof election results.",
        image: "https://images.unsplash.com/photo-1622819584099-e04c99d8e8c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
        github: "https://github.com",
        featured: false,
      },
    ];

    setProjects(projectsData);
    setVisibleProjects(projectsData);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.featured));
    }
  }, [filter, projects]);

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
  }, [visibleProjects]);

  return (
    <section id="projects" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          My Projects
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          A showcase of my technical projects, from machine learning to web applications and IoT systems
        </p>

        {/* Filter buttons */}
        <div className="flex justify-center mt-8 mb-12 reveal" data-effect="fade-bottom">
          <div className="inline-flex rounded-lg border border-border p-1 bg-secondary/30">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                filter === "all" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "hover:bg-secondary"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                filter === "featured" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "hover:bg-secondary"
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="glassmorphism rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg reveal"
              data-effect="fade-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github || project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
