import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 card-shadow hover-lift">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Passionate Full-Stack Developer
                </h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    I'm a dedicated Software Engineer at <strong className="text-foreground">Tata Consultancy Services</strong> with over 3 years of experience building robust, scalable applications that serve thousands of users.
                  </p>
                  <p>
                    My expertise lies in designing microservices-based architectures and creating responsive, high-performance web applications. I've successfully reduced system downtime by 30% and improved user satisfaction scores by 25% through strategic technical implementations.
                  </p>
                  <p>
                    Beyond coding, I'm passionate about emerging technologies like AI/ML, evidenced by my published research in drowsiness detection systems and AI-powered applications for accessibility.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">30% reduction</strong> in system downtime through microservices architecture
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">25% increase</strong> in user satisfaction scores
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">10,000+ concurrent users</strong> supported with sub-200ms latency
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Published researcher</strong> in AI/ML applications
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Education</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2">
                      B.Tech Computer Science
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      8.9 GPA
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      AWS Certified
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};