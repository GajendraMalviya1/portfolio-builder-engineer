
import React, { useEffect } from "react";
import { BadgeCheck, ExternalLink, Calendar, Eye } from "lucide-react";

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Introduction to Database",
      issuer: "Meta (Coursera)",
      date: "2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      link: "https://drive.google.com/file/d/1IW6FGRyJqv3T7QuVmCtH9KBG9uD2BIO0/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Computer Organization & Architecture",
      issuer: "IIT Guwahati (NPTEL)",
      date: "2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      link: "https://drive.google.com/file/d/1IIuvr12Wm87QRPruEGRNzmn4mlbha9na/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      issuer: "HackerRank",
      date: "2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      link: "https://drive.google.com/file/d/15b6Zgexhhc1D-SwONjjfYgAikEoP-Dwe/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      issuer: "Udemy",
      date: "2022",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=300&fit=crop",
      link: "https://udemy.com"
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&h=300&fit=crop",
      link: "https://freecodecamp.org"
    }
  ];

  const handlePreview = (image: string, title: string) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[999] flex items-center justify-center bg-black/70 animate-fade-in';
    
    // Create the modal content
    modal.innerHTML = `
      <div class="relative bg-background p-4 rounded-lg max-w-2xl mx-4 animate-scale-in">
        <button class="absolute right-3 top-3 p-1 rounded-full bg-secondary/80 hover:bg-secondary text-foreground" id="close-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <h3 class="text-xl font-medium mb-4">${title} Certificate</h3>
        <img src="${image}" alt="${title}" class="w-full rounded-lg" />
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listener to close modal
    document.getElementById('close-modal')?.addEventListener('click', () => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }
    });
  };

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
    <section id="certifications" className="bg-secondary/30 py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Certifications
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Professional certifications and courses completed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glassmorphism rounded-xl overflow-hidden reveal transition-all duration-300 hover:shadow-lg"
              data-effect="fade-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <button 
                  onClick={() => handlePreview(cert.image, cert.title)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-foreground transition-all duration-300"
                  aria-label="Preview certificate"
                >
                  <Eye size={18} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium">{cert.title}</h3>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                    
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                    
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        View Certificate
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
