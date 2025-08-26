import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className={`p-8 md:p-12 card-shadow hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Software Engineer
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  Tata Consultancy Services
                </h4>
              </div>
              <div className="text-sm text-muted-foreground space-y-2 md:text-right">
                <div className="flex items-center md:justify-end">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>Oct 2021 – Present</span>
                </div>
                <div className="flex items-center md:justify-end">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Gurgaon, India</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
                <div className="grid gap-6">
                <div className="space-y-4">
                  <div className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Designed and implemented microservices-based architecture</strong> using Spring Boot 3, 
                      leveraging RESTful APIs and Docker-based containerization, which reduced system downtime by 30% through 
                      enhanced fault isolation and improved scalability by enabling independent service deployment.
                    </p>
                  </div>
                  
                  <div className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Developed and maintained responsive Angular-based frontend</strong> with 
                      dynamic component architecture, optimizing performance and accessibility across devices, resulting in a 
                      25% increase in user satisfaction scores and a 40% reduction in page load times.
                    </p>
                  </div>
                  
                  <div className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Collaborated with cross-functional teams</strong> including backend engineers, 
                      QA, and product managers, to architect and deliver a high-traffic Taxation platform capable of handling 
                      10,000+ concurrent users with sub-200ms latency by implementing caching strategies (Redis) and optimizing 
                      database queries (PostgreSQL).
                    </p>
                  </div>
                  
                  <div className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Provided technical support and maintenance</strong> for legacy systems 
                      built on Struts and Servlet JSP frameworks, ensuring platform stability, resolving critical production 
                      issues, and leading seamless migration of core modules to Spring Boot and Angular for enhanced performance 
                      and modern architecture compliance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h5 className="text-lg font-semibold text-foreground mb-4">Key Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot 3", "Angular", "Docker", "PostgreSQL", "Redis", "RESTful APIs", "Microservices", "Git"].map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${1 + (index * 0.1)}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};