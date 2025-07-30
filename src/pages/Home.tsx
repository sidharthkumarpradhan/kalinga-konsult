import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Structural Design",
      description: "Complete structural engineering solutions for residential and commercial projects",
      icon: "🏗️"
    },
    {
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality control",
      icon: "📋"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and testing services for construction materials",
      icon: "✅"
    },
    {
      title: "Site Supervision",
      description: "Professional site supervision and construction monitoring services",
      icon: "👷"
    }
  ];

  const features = [
    "Licensed Professional Engineers",
    "20+ Years of Experience",
    "Quality Guaranteed Projects",
    "Timely Project Delivery",
    "Cost-Effective Solutions",
    "Modern Construction Techniques"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We are Construction & Engineering Experts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional construction and engineering consultancy services with proven expertise and commitment to excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Quote Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kalinga Consult & Engineers provides comprehensive construction and engineering solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Kalinga Consult?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With decades of experience in construction and engineering, we deliver projects that exceed expectations
                while maintaining the highest standards of safety and quality.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3"
                alt="Construction site"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our expert team for a consultation and detailed project quotation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@kalingaconsult.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Bhubaneswar, Odisha</span>
            </div>
          </div>
          
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;