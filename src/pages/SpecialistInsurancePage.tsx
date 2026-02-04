import { Link } from "react-router-dom";
import { HardHat, Truck, Car, Wheat, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const specialistServices = [
  {
    icon: HardHat,
    title: "Construction Insurance",
    description: "Comprehensive coverage for construction projects including contractors all risks, plant and equipment, and public liability protection.",
    features: [
      "Contractors All Risks (CAR)",
      "Plant & Equipment Insurance", 
      "Public Liability",
      "Contract Works Protection",
      "Professional Indemnity"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb1924025?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Truck,
    title: "Transport Insurance",
    description: "Specialized insurance solutions for transport operators covering goods in transit, fleet vehicles, and third-party liabilities.",
    features: [
      "Goods in Transit",
      "Fleet Vehicle Insurance",
      "Third-Party Liability",
      "Haulage Contractors Cover",
      "Cold Chain Protection"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Car,
    title: "Motor Fleets",
    description: "Tailored motor fleet insurance solutions for businesses with multiple vehicles, providing comprehensive coverage and risk management.",
    features: [
      "Comprehensive Fleet Cover",
      "Third-Party Liability",
      "Driver Accident Cover",
      "Windscreen Protection",
      "24/7 Roadside Assistance"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Wheat,
    title: "Farming Insurance",
    description: "Agricultural insurance solutions protecting farms, crops, livestock, and farming equipment against various risks and perils.",
    features: [
      "Crop Insurance",
      "Livestock Cover",
      "Farm Buildings & Contents",
      "Agricultural Equipment",
      "Liability Protection"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Wrench,
    title: "Engineering Insurance",
    description: "Specialized engineering insurance covering machinery breakdown, electronic equipment, and project-specific engineering risks.",
    features: [
      "Machinery Breakdown",
      "Electronic Equipment",
      "Deterioration of Stock",
      "Contractors Plant",
      "Engineering Project Risks"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
  }
];

export default function SpecialistInsurancePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-dark" />
        
        <div className="relative container-custom pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Specialized Insurance
              <span className="block text-secondary">Solutions</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Industry-specific insurance expertise delivering tailored risk management solutions 
              for specialized sectors with unique requirements and challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="btn-gold text-lg px-8 py-6 border-0">
                  Get Specialist Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="btn-outline text-lg px-8 py-6">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Industry-Specific Expertise
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our specialist insurance solutions are designed by industry experts who understand 
              the unique risks and requirements of your business sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialistServices.map((service, index) => (
              <div key={index} className="service-card-bg group" 
                style={{
                  '--bg-image': `url(${service.backgroundImage})`
                } as React.CSSProperties}>
                <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <service.icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Get Coverage Details <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Need Specialized Insurance Coverage?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our specialist team is ready to provide expert advice and tailored solutions 
            for your industry-specific insurance requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-6 text-lg">
                Speak to a Specialist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+27123456789">
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg">
                Call Our Experts
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
