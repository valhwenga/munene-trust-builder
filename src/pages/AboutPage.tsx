import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, TrendingUp, ArrowRight, Target, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "We invest time in understanding each client's unique business environment to offer accurate, expert advice tailored to their specific needs.",
  },
  {
    icon: Shield,
    title: "Professional Excellence",
    description: "Our management team brings extensive technical training and industry experience, ensuring the highest standards of service delivery.",
  },
  {
    icon: Heart,
    title: "Community Commitment",
    description: "We are dedicated to community upliftment, job creation, and skills development as part of our contribution to South Africa's growth.",
  },
  {
    icon: Award,
    title: "Ethical Operations",
    description: "We operate with integrity and full compliance with FSCA regulations, ensuring your interests are always protected.",
  },
];

const milestones = [
  { year: "2011", event: "Company Founded" },
  { year: "2013", event: "FSCA License Obtained" },
  { year: "2015", event: "Public Sector Expansion" },
  { year: "2018", event: "Corporate Portfolio Growth" },
  { year: "2020", event: "CSI Program Launch" },
  { year: "2024", event: "Continued Excellence" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Johannesburg skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              About Munene Risk Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A dynamic, 100% Black Woman-owned insurance brokerage committed to excellence, 
              community upliftment, and protecting South Africa's future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-secondary mb-8" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Munene Risk Services is a dynamic multi-disciplinary insurance and risk management 
                  services organisation, focusing on short-term insurance products. As an independent 
                  broker and service provider licensed by the FSCA, we focus exclusively on supplying 
                  customers with comprehensive short-term insurance services tailored to meet their 
                  specific requirements.
                </p>
                <p>
                  Established in 2011, our company was founded on the principles of taking charge of 
                  the South African economy by adding value through provision of insurance and risk 
                  management services. We aim to meet the demands of the country's growing population, 
                  create jobs, and ultimately contribute to the growth of the South African economy at large.
                </p>
                <p>
                  As a 100% Black Woman-owned and managed company, we proudly serve the objectives of 
                  B-BBEE as set out by the South African Government. Our commitment to transformation 
                  extends beyond ownership—it's embedded in our approach to business, community 
                  engagement, and skills development.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Our Capabilities
                </h3>
                <ul className="space-y-4">
                  {[
                    "Commercial sector insurance solutions",
                    "Corporate risk management",
                    "Public sector and municipal coverage",
                    "Personal lines insurance",
                    "Specialist and niche insurance products",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                  Our Commitment
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  As a top-quality, service-driven company, our management invests time in 
                  understanding each client's business environment. This enables us to offer 
                  accurate, expert advice gained from extensive technical training and industry 
                  experience across all insurance classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card p-6 rounded-lg shadow-md inline-block">
                        <div className="text-2xl font-display font-bold text-secondary mb-1">
                          {milestone.year}
                        </div>
                        <div className="text-muted-foreground">
                          {milestone.event}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the Munene difference—where expertise meets integrity, and your 
            protection is our priority.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-gold border-0 px-8 py-6 text-lg">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="btn-outline px-8 py-6 text-lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
