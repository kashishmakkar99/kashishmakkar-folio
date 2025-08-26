import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Code } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kashishmakkar99@gmail.com",
      href: "mailto:kashishmakkar99@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9999700287",
      href: "tel:+919999700287"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kashish-makkar",
      color: "hover:text-tech-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kashishmakkar99",
      color: "hover:text-foreground"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/bigmakk_/",
      color: "hover:text-tech-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss new opportunities or collaborate on exciting projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or potential collaborations. Whether you're looking for a dedicated full-stack 
                  developer or want to explore how we can work together, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href !== "#" ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Connect on Social
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20 ${link.color}`}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Contact Card */}
            <div>
              <Card className="p-8 card-shadow hover-lift">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Ready to Start a Conversation?
                  </h3>
                  <p className="text-muted-foreground">
                    Let's discuss how I can contribute to your next project
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = 'mailto:kashishmakkar99@gmail.com?subject=Let\'s Connect&body=Hi Kashish,%0D%0A%0D%0AI came across your portfolio and would like to discuss...'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.open('tel:+919999700287')}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    className="w-full" 
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Current Status:</strong> Open to new opportunities 
                    and exciting projects in full-stack development, microservices architecture, and cloud technologies.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};