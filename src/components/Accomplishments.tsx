
import React, { useEffect } from "react";
import { Trophy, Award, Medal, BookOpen, Star, BadgeCheck } from "lucide-react";

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
};

const Accomplishments = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "JEE Mains 2022",
      description: "Scored 92 Percentile in the national engineering entrance examination.",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 2,
      title: "'Elite' Rank Holder in Computer Organization and Architecture",
      description: "Achieved Elite rank in the NPTEL course by IIT Guwahati (2023).",
      icon: <Award className="h-8 w-8 text-blue-500" />,
      link: "https://nptel.ac.in",
    },
    {
      id: 3,
      title: "Played Softball Sport at State Level",
      description: "Represented the state in softball competition (April 2019).",
      icon: <Medal className="h-8 w-8 text-indigo-500" />,
    },
    {
      id: 4,
      title: "Solved 500+ DSA Problems",
      description: "Completed over 500 Data Structures and Algorithms problems on Leetcode, GFG, and HackerRank.",
      icon: <Star className="h-8 w-8 text-green-500" />,
      link: "https://leetcode.com/profile",
    },
    {
      id: 5,
      title: "LeetCode Biweekly Contest",
      description: "Achieved 150th rank in February 2025 Biweekly Contest 150 on LeetCode.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      link: "https://leetcode.com/contest/biweekly-contest-150",
    },
    {
      id: 6,
      title: "Gold Badge in C++",
      description: "Earned Gold Badge in C++ programming on HackerRank.",
      icon: <BadgeCheck className="h-8 w-8 text-amber-500" />,
      link: "https://hackerrank.com",
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
    <section id="accomplishments" className="bg-background py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          Accomplishments
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Key achievements and recognition in academics and programming
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center reveal"
              data-effect="zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
              
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View Details
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
