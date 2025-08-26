import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-tech-purple/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Kashish Makkar</span>
            <span className="block text-2xl md:text-4xl font-medium text-white/90 mt-4">
              Full-Stack Software Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Building scalable microservices and responsive web applications with 
            <span className="text-tech-blue font-semibold"> Spring Boot</span>, 
            <span className="text-tech-blue font-semibold"> Angular</span>, and 
            <span className="text-tech-blue font-semibold"> modern cloud technologies</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/kashish-makkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/kashishmakkar99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="mailto:kashishmakkar99@gmail.com"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};