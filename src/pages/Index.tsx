import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Kashish Makkar. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-primary-foreground/70 mt-2">
            Designed with passion for clean code and beautiful user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
