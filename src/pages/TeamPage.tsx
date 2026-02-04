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
  },
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
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-2xl -z-10" />
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
                      {["Santam", "Mutual & Federal", "Alexander Forbes", "Indwe Risk Services", "Aon SA", "Lion of Africa"].map((company, idx) => (
                        <span key={idx} className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex gap-4">
                    <a 
                      href="mailto:admin@munenerisk.co.za"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-navy-light transition-colors"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href="#"
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

      {/* Company Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              What Drives Our Team
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Expertise",
                description: "Decades of combined experience across all classes of insurance, from personal lines to complex corporate programmes.",
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency and always put our clients' interests first in every recommendation we make.",
              },
              {
                title: "Dedication",
                description: "We invest time to understand your unique situation and deliver solutions that truly protect what matters to you.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
