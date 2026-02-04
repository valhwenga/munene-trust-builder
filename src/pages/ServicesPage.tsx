import { Link } from "react-router-dom";
import { Users, Building2, Landmark, Shield, Car, Home, Briefcase, Factory, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const services = [
  {
    id: "personal",
    icon: Users,
    title: "Personal Insurance",
    subtitle: "Protection for You and Your Family",
    description: "Comprehensive coverage designed to protect your personal assets and give you peace of mind in your daily life.",
    features: [
      "Household contents and building cover",
      "Private motor vehicle insurance",
      "Personal all-risk protection",
      "Personal liability coverage",
      "Valuable items insurance",
    ],
    forWho: "Individuals and families seeking comprehensive protection for their homes, vehicles, and personal belongings.",
    benefits: [
      { icon: Home, text: "Home & Contents" },
      { icon: Car, text: "Motor Vehicle" },
      { icon: Shield, text: "Personal Liability" },
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Insurance",
    subtitle: "Protecting Your Business Growth",
    description: "Tailored insurance solutions for small to medium enterprises, ensuring your business assets and operations are fully protected.",
    features: [
      "Business premises and property insurance",
      "Commercial motor fleet cover",
      "Public and products liability",
      "Business interruption insurance",
      "Employee fidelity guarantee",
    ],
    forWho: "Small to medium business owners looking for comprehensive coverage that grows with their enterprise.",
    benefits: [
      { icon: Building2, text: "Property Cover" },
      { icon: Car, text: "Fleet Insurance" },
      { icon: Briefcase, text: "Business Continuity" },
    ],
  },
  {
    id: "corporate",
    icon: Landmark,
    title: "Corporate Insurance",
    subtitle: "Enterprise-Grade Risk Solutions",
    description: "Sophisticated risk management and insurance programmes for blue-chip companies with complex local and international operations.",
    features: [
      "Multi-location property programmes",
      "Directors and officers liability",
      "Professional indemnity insurance",
      "Cyber liability protection",
      "International operations coverage",
    ],
    forWho: "Large corporations and blue-chip companies requiring comprehensive risk management for assets locally and abroad.",
    benefits: [
      { icon: Landmark, text: "Global Coverage" },
      { icon: Shield, text: "D&O Protection" },
      { icon: Briefcase, text: "Professional Indemnity" },
    ],
  },
  {
    id: "public",
    icon: Shield,
    title: "Public Sector Insurance",
    subtitle: "Serving Government & Municipalities",
    description: "Specialized insurance solutions designed for the unique requirements of state-owned entities, municipalities, and government departments.",
    features: [
      "Municipal infrastructure cover",
      "Government vehicle fleets",
      "Public liability insurance",
      "Professional indemnity for officials",
      "Assets and equipment protection",
    ],
    forWho: "State-owned entities, municipalities, and government departments requiring compliant, comprehensive coverage.",
    benefits: [
      { icon: Factory, text: "Infrastructure" },
      { icon: Car, text: "Fleet Management" },
      { icon: Shield, text: "Public Liability" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive short-term insurance solutions tailored to protect individuals, 
              businesses, corporations, and public institutions across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="bg-muted rounded-xl p-6 mb-8">
                      <h4 className="font-semibold text-primary mb-4">Who It's For</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.forWho}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                          <benefit.icon className="h-4 w-4 text-secondary" />
                          <span className="text-sm font-medium text-primary">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button className="btn-gold border-0">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div className={`bg-card rounded-2xl p-8 shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-display font-semibold text-primary mb-6">
                      Coverage Includes
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="border-b border-border mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Not Sure What Coverage You Need?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our expert advisors are here to help. Contact us for a free consultation 
              and personalized risk assessment.
            </p>
            <Link to="/contact">
              <Button className="btn-gold border-0 px-8 py-6 text-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
