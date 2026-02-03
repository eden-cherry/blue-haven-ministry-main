import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  IS
                </span>
              </div>
              <span className="font-heading text-xl font-semibold">
                Infinite Spring
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Drink from the Source. Flow in Your Destiny. Experience the refreshing power of God's Word and a community built on love, honor, and purpose.
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/InfiniteSpringMinistries/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/infinitespringministry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@InfiniteSpringministries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.x.com/infinitespringministry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Sermons", path: "/sermons" },
                { name: "Events", path: "/events" },
                { name: "Give", path: "/give" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Service Times
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-primary font-semibold">Sunday Infinite Streams</span>
                <span className="text-primary-foreground/70">8:00 AM</span>
              </li>
              <li>
                <span className="block text-primary font-semibold">Mid-Week Believers Service</span>
                <span className="text-primary-foreground/70">Wednesday 4:30 PM</span>
              </li>
              <li>
                <span className="block text-primary font-semibold">Thanksgiving/Miracle Service</span>
                <span className="text-primary-foreground/70">Last Sunday of Every Month</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Azikiwe Junction by Aba Road,
                  <br />
                  Opposite Michelin, Umuahia,
                  <br />
                  Abia State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+2347031757729"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +234 703 175 7729
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:infinitespringintl@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  infinitespringintl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Infinite Spring Ministries. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
