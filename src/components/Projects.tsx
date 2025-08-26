import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Built a scalable full-stack eCommerce platform using Angular 18 and Spring Boot 3, adopting a monorepo architecture to streamline development, improve code sharing across modules, and accelerate feature delivery.",
      period: "Jan 2025 - Mar 2025",
      technologies: ["Spring Boot 3", "Angular 18", "Docker", "PostgreSQL", "RESTful APIs"],
      highlights: [
        "Advanced product filtering with multi-criteria search",
        "Robust admin panel for inventory and order management",
        "Angular Server-Side Rendering (SSR) for improved SEO",
        "Monorepo architecture for streamlined development"
      ],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Caption Bot for the Blind",
      description: "Developed an AI-powered image captioning system using Neural Networks, Transfer Learning, and NLP to assist visually impaired users by generating real-time descriptive audio feedback.",
      period: "Jan 2019 - May 2019",
      technologies: ["Python", "TensorFlow", "Keras", "CNN + RNN", "NLP", "ResNet-50"],
      highlights: [
        "Computer vision with pre-trained CNN models (ResNet-50)",
        "RNN-based language model for context-aware descriptions",
        "Real-time speech synthesis for audio feedback",
        "Transfer learning for improved accuracy"
      ],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "High-Traffic Taxation Platform",
      description: "Architected and delivered a robust taxation platform capable of handling 10,000+ concurrent users with sub-200ms latency through strategic caching and database optimization.",
      period: "2022 - 2023",
      technologies: ["Spring Boot", "Angular", "Redis", "PostgreSQL", "Docker", "Microservices"],
      highlights: [
        "Handles 10,000+ concurrent users",
        "Sub-200ms response latency",
        "Redis caching implementation",
        "Optimized PostgreSQL queries"
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Legacy System Migration",
      description: "Led seamless migration of core modules from legacy Struts/JSP frameworks to modern Spring Boot and Angular architecture, improving performance and maintainability.",
      period: "2021 - 2022",
      technologies: ["Spring Boot", "Angular", "Struts", "JSP", "Java"],
      highlights: [
        "Zero-downtime migration strategy",
        "Improved system performance by 40%",
        "Enhanced code maintainability",
        "Modern architecture compliance"
      ],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 hero-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.title} 
                className="p-8 card-shadow hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.period}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={project.title} 
                className="p-6 card-shadow hover:scale-105 hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" className="p-1.5">
                      <Github className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.period}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Research Publication */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 card-shadow bg-gradient-to-r from-primary/5 to-tech-purple/5">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Published Research
              </h3>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Drowsiness Detection for Online Courses
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Authors:</strong> Rajat Jain, Kashish Makkar, Sanskriti Jain, Mili Tyagi
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Published:</strong> April 2021 | Conference on Computational Intelligence & Information Technology
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Designed a drowsiness detection system using OpenCV, Dlib (EAR, MAR) and NLP for real-time monitoring 
                and question generation. The system enhances online learning experiences by ensuring student engagement 
                and alertness during virtual classes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">OpenCV</Badge>
                <Badge variant="secondary">Dlib</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">NLP</Badge>
                <Badge variant="secondary">Real-time Processing</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
