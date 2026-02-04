import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import teamReginah from "@/assets/team-reginah.jpg";

const teamMembers = [
  {
    name: "Reginah Thomo",
    role: "Managing Director",
    image: teamReginah,
    bio: "The founder and managing director Reginah Thomo is a household name in the property and vehicle insurance space. She has worked for almost all the big players in the industry including the likes of Santam, Mutual and Federal, Alexander Forbes, Indwe Risk Services, Aon SA and Lion of Africa. She started as an underwriting clerk at Santam which gave her the needed introduction to the industry. She then progressed well and ended as an executive level with Lion of Africa. Reginah is experienced in all the classes of insurance ranging from personal lines, commercial, corporate, niche and public-sector lines.",
    featured: true,
    companies: ["Santam", "Mutual & Federal", "Alexander Forbes", "Indwe Risk Services", "Aon SA", "Lion of Africa"],
    email: "reginah@munenerisk.co.za",
    linkedin: "#"
  },
  // Add more team members here
  {
    name: "John Smith",
    role: "Senior Insurance Broker",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face&auto=format",
    bio: "John brings over 15 years of experience in commercial and corporate insurance specialization. He has a proven track record of developing tailored risk management solutions for medium to large enterprises across various industries.",
    featured: false,
    companies: ["Hollard", "Old Mutual", "Discovery Insure"],
    email: "john@munenerisk.co.za",
    linkedin: "#"
  },
  {
    name: "Sarah Johnson",
    role: "Claims Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face&auto=format",
    bio: "Sarah specializes in claims management with expertise in complex commercial claims and dispute resolution. She ensures our clients receive fair and prompt claim settlements while maintaining strong relationships with insurers.",
    featured: false,
    companies: ["Momentum", "Santam", "Liberty"],
    email: "sarah@munenerisk.co.za",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Risk Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face&auto=format",
    bio: "Michael is a certified risk consultant with extensive experience in enterprise risk assessment and mitigation strategies. He helps clients identify potential risks and implement comprehensive insurance programs.",
    featured: false,
    companies: ["AIG", "Allianz", "Zurich"],
    email: "michael@munenerisk.co.za",
    linkedin: "#"
  }
];

export default function TeamPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Experienced professionals dedicated to protecting your interests with 
              expertise, integrity, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Team Member */}
      <section className="section-padding">
        <div className="container-custom">
          {teamMembers.filter(m => m.featured).map((member, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Image */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <div className="aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-secondary rounded-xl -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    Founder & CEO
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg text-secondary font-medium mb-6">
                    {member.role}
                  </p>

                  <div className="prose prose-lg text-muted-foreground max-w-none mb-8">
                    <p className="leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Key Experience */}
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-primary mb-4">Industry Experience</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.companies?.map((company, idx) => (
                        <span key={idx} className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex gap-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-navy-light transition-colors"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-navy-light transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Team Members */}
      {teamMembers.filter(m => !m.featured).length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of professionals brings together diverse expertise and experience 
                to deliver exceptional insurance solutions for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {teamMembers.filter(m => !m.featured).map((member, index) => (
                <div key={index} className="team-card group">
                  {/* Image */}
                  <div className="aspect-[3/4] w-48 h-64 mx-auto rounded-lg overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center px-2">
                    <h3 className="text-lg font-display font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium mb-3 text-sm">
                      {member.role}
                    </p>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Companies */}
                    {member.companies && member.companies.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {member.companies.slice(0, 2).map((company, idx) => (
                          <span key={idx} className="px-2 py-1 bg-background rounded-full text-xs text-muted-foreground">
                            {company}
                          </span>
                        ))}
                        {member.companies.length > 2 && (
                          <span className="px-2 py-1 bg-background rounded-full text-xs text-muted-foreground">
                            +{member.companies.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Contact Links */}
                    <div className="flex justify-center gap-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:bg-navy-light transition-colors"
                      >
                        <Mail className="h-3 w-3 text-white" />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:bg-navy-light transition-colors"
                      >
                        <Linkedin className="h-3 w-3 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Company Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              What Drives Our Team
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </div>

          <div className="team-values-scroll py-8">
            <div className="team-values-track">
              {/* First set of values */}
              {[
                {
                  title: "Expertise",
                  description: "Decades of combined experience across all classes of insurance, from personal lines to complex corporate programmes.",
                  icon: "🎯"
                },
                {
                  title: "Integrity",
                  description: "We operate with complete transparency and always put our clients' interests first in every recommendation we make.",
                  icon: "🤝"
                },
                {
                  title: "Dedication",
                  description: "We invest time to understand your unique situation and deliver solutions that truly protect what matters to you.",
                  icon: "💪"
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new insurance solutions and technologies to provide cutting-edge risk management strategies.",
                  icon: "💡"
                },
                {
                  title: "Client-Centric",
                  description: "Our clients are at the heart of everything we do, ensuring personalized service and long-term partnerships.",
                  icon: "❤️"
                },
                {
                  title: "Excellence",
                  description: "We strive for exceptional service delivery, maintaining the highest standards in all our professional interactions.",
                  icon: "⭐"
                },
                {
                  title: "Trust",
                  description: "Building lasting relationships based on reliability, honesty, and consistent delivery of our promises.",
                  icon: "🛡️"
                },
                {
                  title: "Collaboration",
                  description: "We work together as a team and with our clients to achieve the best possible outcomes for every challenge.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <div key={index} className="team-value-card">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {[
                {
                  title: "Expertise",
                  description: "Decades of combined experience across all classes of insurance, from personal lines to complex corporate programmes.",
                  icon: "🎯"
                },
                {
                  title: "Integrity",
                  description: "We operate with complete transparency and always put our clients' interests first in every recommendation we make.",
                  icon: "🤝"
                },
                {
                  title: "Dedication",
                  description: "We invest time to understand your unique situation and deliver solutions that truly protect what matters to you.",
                  icon: "💪"
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new insurance solutions and technologies to provide cutting-edge risk management strategies.",
                  icon: "💡"
                },
                {
                  title: "Client-Centric",
                  description: "Our clients are at the heart of everything we do, ensuring personalized service and long-term partnerships.",
                  icon: "❤️"
                },
                {
                  title: "Excellence",
                  description: "We strive for exceptional service delivery, maintaining the highest standards in all our professional interactions.",
                  icon: "⭐"
                },
                {
                  title: "Trust",
                  description: "Building lasting relationships based on reliability, honesty, and consistent delivery of our promises.",
                  icon: "🛡️"
                },
                {
                  title: "Collaboration",
                  description: "We work together as a team and with our clients to achieve the best possible outcomes for every challenge.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <div key={`duplicate-${index}`} className="team-value-card">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our team is ready to provide you with expert guidance and personalized 
            insurance solutions. Get in touch today.
          </p>
          <Link to="/contact">
            <Button className="btn-gold border-0 px-8 py-6 text-lg">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
