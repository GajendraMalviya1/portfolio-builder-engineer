
import React, { useEffect } from "react";
import { Trophy, Award, Medal, BookOpen, Star, BadgeCheck } from "lucide-react";

type Achievement = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  description: string;
  credential?: string;
};

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Dean's List Recognition",
      issuer: "Stanford University",
      date: "2021 - 2023",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      description: "Recognized for academic excellence with a GPA of 3.9 or higher for three consecutive years.",
    },
    {
      id: 2,
      title: "Best Technical Innovation Award",
      issuer: "Stanford Engineering Showcase",
      date: "April 2023",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      description: "Received award for developing an AI-powered prosthetic hand control system based on muscle impulse detection.",
      credential: "https://stanford.edu/awards/2023",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "February 2023",
      icon: <BadgeCheck className="h-8 w-8 text-blue-500" />,
      description: "Professional certification validating expertise in designing distributed systems on AWS.",
      credential: "https://aws.amazon.com/certification",
    },
    {
      id: 4,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "November 2022",
      icon: <BadgeCheck className="h-8 w-8 text-green-500" />,
      description: "Certification demonstrating ability to design, build, and maintain data processing systems on Google Cloud.",
      credential: "https://cloud.google.com/certification",
    },
    {
      id: 5,
      title: "National Science Foundation Research Grant",
      issuer: "National Science Foundation",
      date: "May 2022",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      description: "Received $15,000 grant for undergraduate research project on energy-efficient computing systems.",
      credential: "https://nsf.gov/awards/2022",
    },
    {
      id: 6,
      title: "1st Place in ACM Coding Competition",
      issuer: "Association for Computing Machinery",
      date: "April 2022",
      icon: <Award className="h-8 w-8 text-amber-500" />,
      description: "Won first place among 200 participants in algorithmic problem-solving competition.",
      credential: "https://acm.org/competitions/2022",
    },
    {
      id: 7,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "March 2022",
      icon: <BadgeCheck className="h-8 w-8 text-red-500" />,
      description: "Certification validating expertise in building and training neural networks using TensorFlow.",
      credential: "https://tensorflow.org/certificate",
    },
    {
      id: 8,
      title: "Excellence in Leadership Award",
      issuer: "Stanford Engineering Student Association",
      date: "June 2021",
      icon: <Medal className="h-8 w-8 text-amber-500" />,
      description: "Recognized for outstanding leadership as the President of the Robotics Club.",
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
    <section id="achievements" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Achievements & Certifications
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Awards, certifications, and recognitions that showcase my dedication and expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-lg reveal"
              data-effect="zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{achievement.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">{achievement.issuer}</p>
                <p className="text-muted-foreground text-xs mb-4">{achievement.date}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {achievement.description}
                </p>
                {achievement.credential && (
                  <a
                    href={achievement.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
