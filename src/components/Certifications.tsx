
import React, { useEffect } from "react";
import { BadgeCheck, ExternalLink, Calendar } from "lucide-react";

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Introduction to Database",
      issuer: "Meta (Coursera)",
      date: "2023",
      link: "https://coursera.org"
    },
    {
      id: 2,
      title: "Computer Organization & Architecture",
      issuer: "IIT Guwahati (NPTEL)",
      date: "2023",
      link: "https://nptel.ac.in"
    },
    {
      id: 3,
      title: "Software Engineering",
      issuer: "HackerRank",
      date: "2023",
      link: "https://hackerrank.com"
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
              className="glassmorphism rounded-xl p-6 reveal transition-all duration-300 hover:shadow-lg"
              data-effect="fade-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BadgeCheck className="h-6 w-6 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
