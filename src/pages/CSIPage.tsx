import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import csiDaycare from "@/assets/csi-daycare.jpg";
import csiCommunity from "@/assets/csi-community.jpg";

const csiProjects = [
  {
    id: 1,
    name: "Lokolohang Day Care Centre",
    description: "Supporting early childhood development through infrastructure improvements, educational resources, and nutrition programs for underprivileged children in our community.",
    images: [csiDaycare],
    impact: "50+ children supported annually",
  },
  {
    id: 2,
    name: "Jehovah Rehoboth Prayer Cathedral",
    description: "Community outreach and support programs in partnership with local faith organizations, providing essential supplies and assistance to families in need.",
    images: [csiCommunity],
    impact: "200+ families reached",
  },
];

export default function CSIPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = csiProjects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % csiProjects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + csiProjects.length) % csiProjects.length);
    setCurrentImageIndex(0);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
              <Heart className="h-4 w-4 text-secondary" />
              <span>Corporate Social Investment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Investing in Our Community
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Munene Risk Services is a community-focused broker committed to meaningful 
              social development initiatives that create lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* CSI Introduction */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Commitment to Social Responsibility
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Munene Risk Services, we believe that true success is measured not only by 
              business achievements but also by the positive impact we make in the communities 
              we serve. Our CSI initiatives focus on education, community development, and 
              supporting those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Initiatives
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Project Slider */}
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl">
              {/* Project Name Banner */}
              <div className="bg-primary px-8 py-4">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white text-center">
                  {project.name}
                </h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9]">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </button>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                    <Heart className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-primary">{project.impact}</span>
                  </div>
                  
                  {/* Dots Navigation */}
                  <div className="flex gap-2">
                    {csiProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveProject(index);
                          setCurrentImageIndex(0);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          activeProject === index ? 'bg-secondary' : 'bg-border hover:bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSI Pillars */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our CSI Focus Areas
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description: "Supporting early childhood development centers and educational programs to give children the foundation they need to succeed.",
                icon: "📚",
              },
              {
                title: "Community Development",
                description: "Partnering with local organizations to strengthen community infrastructure and provide essential resources.",
                icon: "🏘️",
              },
              {
                title: "Empowerment",
                description: "Creating opportunities for skills development, job creation, and economic participation in underserved communities.",
                icon: "⭐",
              },
            ].map((pillar, index) => (
              <div key={index} className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Partner With Us for Change
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
            Interested in collaborating on community initiatives? We welcome partnerships 
            that create meaningful, lasting impact.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-navy-dark px-8 py-6 text-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
