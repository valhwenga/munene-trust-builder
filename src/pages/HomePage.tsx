import { Link } from "react-router-dom";
import { Shield, Users, Building2, Landmark, CheckCircle, ArrowRight, Award, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-business.jpg";

const services = [
  {
    icon: Users,
    title: "Personal Insurance",
    description: "Comprehensive coverage for your household, motor vehicles, and personal possessions.",
    href: "/services#personal",
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    description: "Protect your small to medium business assets, property, and motor fleets.",
    href: "/services#commercial",
  },
  {
    icon: Landmark,
    title: "Corporate Insurance",
    description: "Tailored solutions for blue-chip companies with assets locally and abroad.",
    href: "/services#corporate",
  },
  {
    icon: Shield,
    title: "Public Sector Insurance",
    description: "Specialized coverage for state-owned entities and municipalities.",
    href: "/services#public",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Independent Advice",
    description: "We work for you, not the insurers. Our recommendations are based solely on your best interests.",
  },
  {
    icon: Shield,
    title: "Tailored Solutions",
    description: "Every client receives customized risk management strategies designed for their unique needs.",
  },
  {
    icon: Heart,
    title: "Client-First Philosophy",
    description: "Your protection and peace of mind are at the heart of everything we do.",
  },
  {
    icon: CheckCircle,
    title: "FSCA Compliant",
    description: "Fully licensed and compliant with all regulatory requirements for your protection.",
  },
];

const trustBadges = [
  "FSCA Licensed",
  "100% Black Woman Owned",
  "Since 2011",
  "Independent Broker",
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional business meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative container-custom pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-8 fade-in-up">
              <Shield className="h-4 w-4 text-secondary" />
              <span>FSCA Licensed Insurance Broker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 fade-in-up fade-in-up-delay-1">
              Specialist Short-Term Insurance & Risk Management Solutions
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed fade-in-up fade-in-up-delay-2">
              Independent insurance brokerage delivering client-focused advice with unwavering 
              commitment to professionalism, ethics, and FSCA compliance.
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up fade-in-up-delay-3">
              <Link to="/contact">
                <Button className="btn-gold text-lg px-8 py-6 border-0">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-outline text-lg px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Product Offering
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive short-term insurance solutions tailored to protect what matters most 
              to individuals, businesses, and public institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.href}
                className="service-card group"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Why Choose Munene Risk Services?
              </h2>
              <div className="w-20 h-1 bg-secondary mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As an independent broker, we put your interests first. Our team brings decades 
                of industry experience to deliver expert advice and tailored risk solutions 
                that truly protect your assets and future.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-display font-bold">13+</div>
                    <div className="text-primary-foreground/80">Years of Excellence</div>
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed mb-8">
                  Founded in 2011, Munene Risk Services has built a reputation for integrity, 
                  expertise, and unwavering commitment to client success. We've helped countless 
                  individuals and organizations protect their most valuable assets.
                </p>
                <Link to="/about">
                  <Button className="btn-gold border-0">
                    Learn About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
            Get in touch with our expert team today for a comprehensive risk assessment 
            and personalized insurance solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-navy-dark px-8 py-6 text-lg">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+27123456789">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
