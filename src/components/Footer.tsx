import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "CSI Initiatives", href: "/csi" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Personal Insurance", href: "/services#personal" },
    { name: "Commercial Insurance", href: "/services#commercial" },
    { name: "Corporate Insurance", href: "/services#corporate" },
    { name: "Public Sector Insurance", href: "/services#public" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <MuneneLogo className="h-10 w-auto" />
              <div>
                <div className="font-display font-bold text-lg leading-tight">MUNENE</div>
                <div className="text-xs tracking-wider opacity-80">RISK SERVICES</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Independent short-term insurance broker and risk management services provider, 
              licensed by the FSCA. Protecting what matters most to you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+27123456789" className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+27 12 345 6789</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@munenerisk.co.za" className="flex items-start gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>admin@munenerisk.co.za</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Johannesburg, South Africa</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Munene Risk Services. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <span>FSCA Licensed Insurance Broker</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">100% Black Woman Owned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MuneneLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M15 30L25 20L35 30L25 40L15 30Z" fill="hsl(43, 72%, 52%)" />
        <path d="M25 30L35 20L45 30L35 40L25 30Z" fill="hsl(43, 72%, 62%)" />
        <path d="M25 30L30 25L35 30L30 35L25 30Z" fill="hsl(43, 72%, 45%)" />
        <path d="M25 15L30 10L35 15L30 20L25 15Z" fill="hsl(43, 72%, 52%)" />
      </g>
    </svg>
  );
}

export default Footer;
