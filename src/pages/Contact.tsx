import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/InfiniteSpringMinistries/?_rdc=1&_rdr#", label: "Facebook" },
    { icon: Twitter, href: "https://www.x.com/infinitespringministry/", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/infinitespringministry/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@InfiniteSpringministries", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              We'd love to hear from you. Reach out with any questions or prayer requests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animation="slide-in-left">
                <Card className="border-border/50 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+234 XXX XXX XXXX"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-hero hover:opacity-90 shadow-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slide-in-right">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground">
                      Have questions? We're here to help. Reach out to us through any of the following methods.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-border/50 hover-lift">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Our Location
                          </h3>
                          <p className="text-muted-foreground">
                            Azikiwe Junction by Aba Road,<br />
                            Opposite Michelin, Umuahia,<br />
                            Abia State, Nigeria
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 hover-lift">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Phone
                          </h3>
                          <a
                            href="tel:+2347031757729"
                            className="text-primary hover:underline"
                          >
                            +234 703 175 7729
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 hover-lift">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shrink-0">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Email
                          </h3>
                          <a
                            href="mailto:infinitespringintl@gmail.com"
                            className="text-primary hover:underline"
                          >
                            infinitespringintl@gmail.com
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-gradient-hero hover:text-primary-foreground transition-all duration-300 group"
                          title={social.label}
                        >
                          <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us
              </h2>
              <p className="text-muted-foreground">
                We're located at Azikiwe Junction, Umuahia. Come visit us!
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold text-lg mb-2">
                    Azikiwe Junction by Aba Road, Opposite Michelin
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Umuahia, Abia State, Nigeria
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Azikiwe+Junction+Umuahia+Abia+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-hero hover:opacity-90">
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
