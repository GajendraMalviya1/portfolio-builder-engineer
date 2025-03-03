
import React, { useEffect } from "react";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  grades?: string;
  icon: React.ReactNode;
  achievements?: string[];
};

const Education = () => {
  const educationHistory: EducationItem[] = [
    {
      id: 1,
      institution: "Chandigarh University",
      degree: "B.E (CSE)",
      location: "Mohali, Punjab, India",
      duration: "Aug 2022 – June 2026",
      grades: "CGPA: 8.58",
      icon: <GraduationCap className="h-6 w-6" />,
      achievements: ["Softball Player", "Class Representative"]
    },
    {
      id: 2,
      institution: "Sooraj Sikshan Sansthan Senior Secondary School",
      degree: "Class 8th to Class 12th (Science - Mathematics)",
      location: "Pali, Rajasthan",
      duration: "July 2016 - May 2021",
      grades: "12th Grade: 98.80%, 10th Grade: 92.17%",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 3,
      institution: "Balaji Vidhyapeeth Uchch Prathmik Vidhyalay",
      degree: "Class 1st to Class 7th",
      location: "Pali, Rajasthan",
      duration: "July 2007 - March 2015",
      icon: <BookOpen className="h-6 w-6" />
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
    <section id="education" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Education
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          My academic journey and qualifications
        </p>

        <div className="mt-16 space-y-12">
          {educationHistory.map((item, index) => (
            <div 
              key={item.id}
              className="glassmorphism rounded-xl p-6 reveal"
              data-effect="fade-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-medium">{item.institution}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>
                  
                  {item.degree && (
                    <p className="text-primary font-medium mt-1">{item.degree}</p>
                  )}
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  
                  {item.grades && (
                    <div className="mt-3 flex items-center">
                      <Award className="h-4 w-4 mr-1 text-primary" />
                      <span className="font-medium">{item.grades}</span>
                    </div>
                  )}
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Achievements:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
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

export default Education;
