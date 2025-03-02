
import React, { useEffect } from "react";
import { Download, FileText, Eye } from "lucide-react";

const Resume = () => {
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
    <section id="resume" className="bg-secondary/30 py-24">
      <div className="section-container">
        <h2 className="section-title text-center reveal" data-effect="fade-bottom">
          My Resume
        </h2>
        <p className="section-subtitle text-center reveal" data-effect="fade-bottom">
          Download or view my detailed resume to learn more about my qualifications
        </p>

        <div className="max-w-4xl mx-auto mt-16 glassmorphism rounded-xl p-8 reveal" data-effect="zoom">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Resume Preview */}
            <div className="md:col-span-3 flex flex-col">
              <div className="flex-1 bg-background rounded-lg overflow-hidden shadow-lg border border-border">
                <div className="aspect-[8.5/11] relative">
                  {/* Replace with actual resume preview */}
                  <div className="absolute inset-0 bg-white flex flex-col p-8 text-black">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold">Alex Chen</h2>
                      <p className="text-sm text-gray-600">Software Engineer | Stanford University</p>
                      <div className="flex justify-center space-x-2 mt-2 text-xs text-gray-600">
                        <span>alex@example.com</span>
                        <span>•</span>
                        <span>(555) 123-4567</span>
                        <span>•</span>
                        <span>github.com/alexchen</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Education</h3>
                      <div className="text-xs">
                        <p className="font-semibold">Stanford University</p>
                        <div className="flex justify-between">
                          <p>B.S. Computer Science Engineering</p>
                          <p>2020 - 2024</p>
                        </div>
                        <p className="text-gray-600">GPA: 3.95/4.0</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Experience</h3>
                      <div className="text-xs mb-2">
                        <div className="flex justify-between">
                          <p className="font-semibold">Google</p>
                          <p>May 2023 - Aug 2023</p>
                        </div>
                        <p className="italic">Software Engineering Intern</p>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Developed features for Google Cloud Platform</li>
                          <li>Optimized database queries (30% performance improvement)</li>
                        </ul>
                      </div>
                      <div className="text-xs">
                        <div className="flex justify-between">
                          <p className="font-semibold">Netflix</p>
                          <p>May 2022 - Aug 2022</p>
                        </div>
                        <p className="italic">Web Development Intern</p>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Contributed to content management system</li>
                          <li>Built UI components with React and TypeScript</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Skills</h3>
                      <div className="text-xs grid grid-cols-2 gap-1">
                        <div>
                          <p className="font-semibold">Programming</p>
                          <p className="text-gray-700">Python, JavaScript, Java, C++</p>
                        </div>
                        <div>
                          <p className="font-semibold">Web Development</p>
                          <p className="text-gray-700">React, Node.js, HTML/CSS</p>
                        </div>
                        <div>
                          <p className="font-semibold">Databases</p>
                          <p className="text-gray-700">MySQL, MongoDB, Firebase</p>
                        </div>
                        <div>
                          <p className="font-semibold">Tools</p>
                          <p className="text-gray-700">Git, Docker, AWS, TensorFlow</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* More sections would appear in full resume */}
                    <div className="mt-auto text-center italic text-xs text-gray-500">
                      This is a preview. Download for full resume.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Download and View Options */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">Resume Overview</h3>
              <p className="text-muted-foreground text-sm mb-8">
                My resume highlights my education at Stanford University, professional experience at leading tech companies, technical skills, and notable projects. It also includes academic achievements and certifications.
              </p>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-300"
                >
                  <Eye size={18} />
                  <span>View Full Resume</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors duration-300"
                >
                  <FileText size={18} />
                  <span>Download Word Format</span>
                </a>
              </div>
              
              <p className="text-muted-foreground text-xs mt-6">
                Last updated: May 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
