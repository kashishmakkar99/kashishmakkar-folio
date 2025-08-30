import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectFlashcard } from "./ProjectFlashcard";

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
          {/* All Projects as Flashcards */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Click on any card to flip and see details</p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectFlashcard 
                key={project.title}
                project={project}
                index={index}
              />
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
