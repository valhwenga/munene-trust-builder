import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "CSI", href: "/csi" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isScrolled || !isHome
    ? "bg-white shadow-lg"
    : "bg-transparent";

  const textColor = isScrolled || !isHome
    ? "text-primary"
    : "text-white";

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+27 12 345 6789</span>
            </a>
            <a href="mailto:admin@munenerisk.co.za" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span>admin@munenerisk.co.za</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">FSCA Licensed Insurance Broker</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn("header-sticky transition-all duration-300", headerBg)}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <MuneneLogo className="h-12 w-auto" />
              <div className={cn("hidden sm:block", textColor)}>
                <div className="font-display font-bold text-lg leading-tight">MUNENE</div>
                <div className="text-xs tracking-wider opacity-80">RISK SERVICES</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary relative group",
                    textColor,
                    location.pathname === item.href && "text-secondary"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://munene.allbroker.co.za/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className={cn(
                  "border-2 transition-all duration-300",
                  isScrolled || !isHome
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-white text-white hover:bg-white hover:text-primary"
                )}>
                  Client Portal
                </Button>
              </a>
              <Link to="/contact">
                <Button className="btn-gold border-0">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn("lg:hidden p-2", textColor)}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-slide-in-right">
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 text-primary font-medium hover:text-secondary transition-colors",
                    location.pathname === item.href && "text-secondary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t">
                <a
                  href="https://munene.allbroker.co.za/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full border-primary text-primary">
                    Client Portal
                  </Button>
                </a>
                <Link to="/contact" className="block">
                  <Button className="w-full btn-gold border-0">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                <a href="tel:+27123456789" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+27 12 345 6789</span>
                </a>
                <a href="mailto:admin@munenerisk.co.za" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>admin@munenerisk.co.za</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function MuneneLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Interlocking diamond shapes - representing security and interconnection */}
      <g>
        {/* Left diamond - Navy */}
        <path
          d="M15 30L25 20L35 30L25 40L15 30Z"
          fill="hsl(213, 52%, 24%)"
          stroke="hsl(213, 52%, 24%)"
          strokeWidth="1"
        />
        {/* Right diamond - Gold */}
        <path
          d="M25 30L35 20L45 30L35 40L25 30Z"
          fill="hsl(43, 72%, 52%)"
          stroke="hsl(43, 72%, 52%)"
          strokeWidth="1"
        />
        {/* Overlap effect */}
        <path
          d="M25 30L30 25L35 30L30 35L25 30Z"
          fill="hsl(213, 52%, 30%)"
          opacity="0.9"
        />
        {/* Top accent diamond */}
        <path
          d="M25 15L30 10L35 15L30 20L25 15Z"
          fill="hsl(213, 52%, 24%)"
        />
      </g>
    </svg>
  );
}

export default Header;
