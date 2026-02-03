import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logoImage} 
              alt="Infinite Spring Ministries" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : isScrolled
                    ? "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/give">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow"
              >
                Give Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[70vh] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-xl shadow-lg p-5 space-y-3 max-h-[65vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-5 py-4 rounded-lg font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/give" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-3 py-6 bg-gradient-hero hover:opacity-90">
                Give Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
