
import React, { useEffect, useState } from "react";
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

type CodolioData = {
  leetcode?: {
    username: string;
    totalSolved: number;
    ranking: number;
    reputation: number;
    submissionStats: {
      totalSubmissions: number;
      waSubmissions: number;
      acSubmissions: number;
      reSubmissions: number;
      otherSubmissions: number;
    };
  };
  gfg?: {
    username: string;
    institution: string;
    score: number;
    ranking: number;
    stars: number;
    problemsSolved: number;
  };
  codechef?: {
    username: string;
    stars: number;
    ranking: number;
    rating: number;
    highestRating: number;
    country: string;
    globalRank: number;
    countryRank: number;
  };
  codeforces?: {
    username: string;
    rating: number;
    maxRank: string;
    maxRating: number;
    rank: string;
  };
  github?: {
    username: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
  };
  loading: boolean;
  error: string | null;
};

const Skills = () => {
  const [codolioData, setCodolioData] = useState<CodolioData>({
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchCodolioData = async () => {
      try {
        const response = await fetch('https://codolio.com/api/profile/bklJYbeu');
        if (!response.ok) {
          throw new Error('Failed to fetch Codolio data');
        }
        const data = await response.json();
        setCodolioData({
          ...data,
          loading: false,
          error: null
        });
        console.log('Codolio data:', data);
      } catch (error) {
        console.error('Error fetching Codolio data:', error);
        setCodolioData({
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }
    };

    fetchCodolioData();
  }, []);

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
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Codolio Stats Section */}
        <div className="mt-16">
          <h2 className="section-title text-center reveal" data-effect="fade-bottom">
            Coding Profiles
          </h2>
          <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
            Competitive programming and development statistics from various platforms
          </p>
          
          {codolioData.loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : codolioData.error ? (
            <div className="p-6 bg-red-100 dark:bg-red-900/20 rounded-lg text-center my-8">
              <p className="text-red-600 dark:text-red-400">Failed to load coding profiles data. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {codolioData.leetcode && (
                <div className="glassmorphism rounded-xl p-6 reveal" data-effect="zoom">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                      <span className="text-xl font-bold text-yellow-600 dark:text-yellow-400">LC</span>
                    </div>
                    <h3 className="text-xl font-medium">LeetCode</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {codolioData.leetcode.username}</p>
                    <p><span className="font-medium">Problems Solved:</span> {codolioData.leetcode.totalSolved}</p>
                    <p><span className="font-medium">Ranking:</span> {codolioData.leetcode.ranking}</p>
                    <p><span className="font-medium">Reputation:</span> {codolioData.leetcode.reputation}</p>
                    <p><span className="font-medium">Acceptance Rate:</span> {
                      codolioData.leetcode.submissionStats.acSubmissions 
                      ? Math.round((codolioData.leetcode.submissionStats.acSubmissions / codolioData.leetcode.submissionStats.totalSubmissions) * 100) 
                      : 0
                    }%</p>
                  </div>
                </div>
              )}
              
              {codolioData.gfg && (
                <div className="glassmorphism rounded-xl p-6 reveal" data-effect="zoom">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">GFG</span>
                    </div>
                    <h3 className="text-xl font-medium">GeeksForGeeks</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {codolioData.gfg.username}</p>
                    <p><span className="font-medium">Institution:</span> {codolioData.gfg.institution}</p>
                    <p><span className="font-medium">Score:</span> {codolioData.gfg.score}</p>
                    <p><span className="font-medium">Ranking:</span> {codolioData.gfg.ranking}</p>
                    <p><span className="font-medium">Problems Solved:</span> {codolioData.gfg.problemsSolved}</p>
                    <p><span className="font-medium">Stars:</span> {codolioData.gfg.stars}⭐</p>
                  </div>
                </div>
              )}
              
              {codolioData.codechef && (
                <div className="glassmorphism rounded-xl p-6 reveal" data-effect="zoom">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <span className="text-xl font-bold text-red-600 dark:text-red-400">CC</span>
                    </div>
                    <h3 className="text-xl font-medium">CodeChef</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {codolioData.codechef.username}</p>
                    <p><span className="font-medium">Stars:</span> {codolioData.codechef.stars}⭐</p>
                    <p><span className="font-medium">Rating:</span> {codolioData.codechef.rating}</p>
                    <p><span className="font-medium">Highest Rating:</span> {codolioData.codechef.highestRating}</p>
                    <p><span className="font-medium">Global Rank:</span> {codolioData.codechef.globalRank}</p>
                    <p><span className="font-medium">Country:</span> {codolioData.codechef.country}</p>
                    <p><span className="font-medium">Country Rank:</span> {codolioData.codechef.countryRank}</p>
                  </div>
                </div>
              )}
              
              {codolioData.codeforces && (
                <div className="glassmorphism rounded-xl p-6 reveal" data-effect="zoom">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                      <span className="text-xl font-bold text-purple-600 dark:text-purple-400">CF</span>
                    </div>
                    <h3 className="text-xl font-medium">Codeforces</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {codolioData.codeforces.username}</p>
                    <p><span className="font-medium">Rating:</span> {codolioData.codeforces.rating}</p>
                    <p><span className="font-medium">Rank:</span> {codolioData.codeforces.rank}</p>
                    <p><span className="font-medium">Max Rating:</span> {codolioData.codeforces.maxRating}</p>
                    <p><span className="font-medium">Max Rank:</span> {codolioData.codeforces.maxRank}</p>
                  </div>
                </div>
              )}
              
              {codolioData.github && (
                <div className="glassmorphism rounded-xl p-6 reveal" data-effect="zoom">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <GitBranch className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-medium">GitHub</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {codolioData.github.username}</p>
                    <p><span className="font-medium">Name:</span> {codolioData.github.name}</p>
                    <p><span className="font-medium">Repositories:</span> {codolioData.github.public_repos}</p>
                    <p><span className="font-medium">Followers:</span> {codolioData.github.followers}</p>
                    <p><span className="font-medium">Following:</span> {codolioData.github.following}</p>
                    <p><span className="font-medium">Gists:</span> {codolioData.github.public_gists}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
