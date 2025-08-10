import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Complex - Green Valley",
      category: "Residential",
      location: "Bhubaneswar, Odisha",
      year: "2023",
      description: "150-unit residential complex with modern amenities and sustainable design features",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
      status: "Completed",
      client: "ABC Developers",
      area: "25,000 sq ft"
    },
    {
      id: 2,
      title: "Commercial Office Building",
      category: "Commercial",
      location: "Cuttack, Odisha",
      year: "2023",
      description: "10-story modern office building with state-of-the-art facilities and energy-efficient design",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3",
      status: "Ongoing",
      client: "XYZ Corporation",
      area: "50,000 sq ft"
    },
    {
      id: 3,
      title: "Industrial Warehouse Complex",
      category: "Industrial",
      location: "Rourkela, Odisha",
      year: "2022",
      description: "Large-scale warehouse facility with advanced logistics and storage systems",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3",
      status: "Completed",
      client: "Industrial Corp",
      area: "75,000 sq ft"
    },
    {
      id: 4,
      title: "Educational Institution",
      category: "Institutional",
      location: "Berhampur, Odisha",
      year: "2024",
      description: "Modern educational campus with smart classrooms and research facilities",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3",
      status: "Planning",
      client: "Education Board",
      area: "40,000 sq ft"
    },
    {
      id: 5,
      title: "Highway Bridge Construction",
      category: "Infrastructure",
      location: "Sambalpur, Odisha",
      year: "2023",
      description: "Major highway bridge construction project ensuring smooth traffic flow",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
      status: "Ongoing",
      client: "State Government",
      area: "500 meters"
    },
    {
      id: 6,
      title: "Luxury Villa Project",
      category: "Residential",
      location: "Puri, Odisha",
      year: "2022",
      description: "Premium luxury villas with modern architecture and premium amenities",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3",
      status: "Completed",
      client: "Private Client",
      area: "15,000 sq ft"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Ongoing":
        return "bg-blue-500";
      case "Planning":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Infrastructure"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              With 5+ years of excellence and statewide reach across all districts of Odisha, we deliver DPR, Aerial & Drone (LiDAR) surveys, Geospatial & Hydrological studies, PMC, Architectural & Building design, Highway design, and Geotechnical investigations.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["DPR for Roads & Bridges","Aerial & Drone (LiDAR) Survey","Geospatial & Hydrological Survey","Project Management Consultancy","Architectural & Building Design","Highway Design","Geotechnical Investigation"].map((item) => (
                <Badge key={item} variant="secondary">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Area: {project.area}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can bring your construction vision to life
          </p>
          <Button variant="secondary" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;