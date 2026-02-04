import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
=======
import { Menu, X, Phone, Mail } from "lucide-react";
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
<<<<<<< HEAD
  { name: "The Munene Way", href: "#", dropdown: [
    { name: "Our Product Offering", href: "/services" },
    { name: "Specialized Insurance", href: "/specialist-insurance" }
  ]},
=======
  { name: "Services", href: "/services" },
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
  { name: "CSI", href: "/csi" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
=======
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
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
<<<<<<< HEAD
      <div className="bg-primary text-primary-foreground py-2 relative z-50">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+27 12 345 6789</span>
              <span className="sm:hidden">+27 12 345 6789</span>
            </a>
            <a href="mailto:admin@munenerisk.co.za" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">admin@munenerisk.co.za</span>
              <span className="sm:hidden text-xs">admin@munenerisk.co.za</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80 text-xs sm:text-sm">FSCA Licensed Insurance Broker</span>
=======
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
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn("header-sticky transition-all duration-300", headerBg)}>
        <div className="container-custom">
<<<<<<< HEAD
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 lg:gap-3">
              <MuneneLogo className="h-10 lg:h-12 w-auto" />
              <div className={cn("hidden sm:block", textColor)}>
                <div className="font-display font-bold text-base lg:text-lg leading-tight">MUNENE</div>
                <div className="text-xs lg:text-xs tracking-wider opacity-80">RISK SERVICES</div>
=======
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <MuneneLogo className="h-12 w-auto" />
              <div className={cn("hidden sm:block", textColor)}>
                <div className="font-display font-bold text-lg leading-tight">MUNENE</div>
                <div className="text-xs tracking-wider opacity-80">RISK SERVICES</div>
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
<<<<<<< HEAD
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-secondary relative group flex items-center gap-1",
                          textColor,
                          (location.pathname === "/services" || location.pathname === "/specialist-insurance") && "text-secondary"
                        )}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {isDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                          onMouseEnter={() => setIsDropdownOpen(true)}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className={cn(
                                "block px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                                location.pathname === dropdownItem.href ? "bg-secondary text-primary" : "text-primary"
                              )}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
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
                  )}
                </div>
=======
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
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
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
<<<<<<< HEAD
                    : "border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary"
=======
                    : "border-white text-white hover:bg-white hover:text-primary"
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
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
<<<<<<< HEAD
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="py-2 text-primary font-semibold flex items-center gap-2">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={cn(
                              "block py-2 text-sm text-primary font-medium hover:text-secondary transition-colors",
                              location.pathname === dropdownItem.href && "text-secondary"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-2 text-primary font-medium hover:text-secondary transition-colors",
                        location.pathname === item.href && "text-secondary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
=======
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
>>>>>>> a23eb9027c10d299975eef7194819d3937154fbe
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
