import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillLevels = {
    "Java": 90,
    "Spring Boot": 85,
    "Angular": 80,
    "TypeScript": 75,
    "PostgreSQL": 80,
    "Docker": 70,
    "Microservices": 85
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      Object.entries(skillLevels).forEach(([skill, level], index) => {
        setTimeout(() => {
          setProgressValues(prev => ({ ...prev, [skill]: level }));
        }, index * 200);
      });
    }
  }, [isVisible]);
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "TypeScript", "JavaScript", "SQL", "Python"],
      color: "bg-tech-blue"
    },
    {
      category: "Frameworks & Technologies",
      skills: ["Spring Boot", "Angular", "Hibernate", "Apache Kafka", "Jenkins", "Git", "Docker"],
      color: "bg-tech-purple"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      color: "bg-success-green"
    },
    {
      category: "Development Tools",
      skills: ["IntelliJ IDEA", "VS Code", "Eclipse", "Postman", "Docker"],
      color: "bg-primary"
    },
    {
      category: "Architecture & Design",
      skills: ["Microservices", "RESTful APIs", "Design Patterns", "System Design", "Data Structures & Algorithms"],
      color: "bg-tech-blue"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 hero-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        {/* Skill Progress Bars */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 card-shadow">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Core Competencies
            </h3>
            <div className="space-y-6">
              {Object.entries(skillLevels).map(([skill, level]) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                    <span className="text-sm text-muted-foreground">{progressValues[skill] || 0}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-tech-blue h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressValues[skill] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className="p-6 card-shadow hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Certifications */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 card-shadow">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-primary-foreground font-bold">AWS</span>
                </div>
                <h4 className="font-semibold text-foreground">AWS Certified Cloud Practitioner</h4>
                <p className="text-sm text-muted-foreground">Nov 2024</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white font-bold">ML</span>
                </div>
                <h4 className="font-semibold text-foreground">Machine Learning & Deep Learning</h4>
                <p className="text-sm text-muted-foreground">Coding Blocks, Dec 2017</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white font-bold">WD</span>
                </div>
                <h4 className="font-semibold text-foreground">Web Development Training</h4>
                <p className="text-sm text-muted-foreground">Internshala, Apr 2020</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};