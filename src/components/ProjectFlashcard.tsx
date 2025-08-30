import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, RotateCcw } from "lucide-react";

interface Project {
  title: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  github: string;
  demo: string;
  featured: boolean;
}

interface ProjectFlashcardProps {
  project: Project;
  index: number;
}

export const ProjectFlashcard = ({ project, index }: ProjectFlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''} h-[400px] animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleFlip}
    >
      <div className="flashcard-inner h-full">
        {/* Front Side */}
        <Card className="flashcard-front p-6 card-shadow h-full flex flex-col justify-between bg-gradient-to-br from-card to-card/90 border-l-4 border-l-primary/30">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground line-clamp-2">
                {project.title}
              </h3>
              <RotateCcw className="h-4 w-4 text-muted-foreground opacity-60" />
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {project.period}
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 mb-4">
              {project.description}
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Click to flip for details</p>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="flashcard-back p-6 card-shadow h-full flex flex-col bg-gradient-to-br from-primary/5 to-tech-purple/5 border-l-4 border-l-primary">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">
              Key Features
            </h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4">
            <div className="text-center mb-3">
              <p className="text-xs text-muted-foreground">All Technologies:</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};