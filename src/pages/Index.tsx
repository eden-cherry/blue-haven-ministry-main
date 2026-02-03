import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Clock, MapPin, Heart, Users, BookOpen, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Infinite Spring Ministries worship service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection animation="fade-in-up" delay={200}>
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
                Welcome to Infinite Spring Ministries
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={400}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Drink from the Source.
                <br />
                <span className="text-primary">Flow in Your Destiny.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={600}>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Welcome to a spring that never runs dry. Experience the refreshing power of God's Word and a community built on love, honor, and purpose.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6"
                  >
                    Plan Your Visit
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/sermons">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-gradient-hero hover:bg-primary-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
                  >
                    Watch Sermons
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Us This Week
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'd love to have you worship with us. Here are our service times.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                day: "Sunday",
                times: ["8:00 AM"],
                type: "Infinite Streams",
              },
              {
                day: "Wednesday",
                times: ["4:30 PM"],
                type: "Believers Service (Mid-week)",
              },
            ].map((service, index) => (
              <AnimatedSection
                key={service.day}
                animation="scale-in"
                delay={index * 150}
              >
                <Card className="text-center hover-lift bg-card border-border/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {service.day}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-1">
                      {service.times.join(" & ")}
                    </p>
                    <p className="text-muted-foreground">{service.type}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10" delay={500}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Azikiwe Junction by Aba Road, Opposite Michelin, Umuahia, Abia State</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl" />
                  <img
                    src={heroImage}
                    alt="Church community"
                    className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <div className="space-y-6">
                  <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                    Welcome to Our Family
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    A Community Built on Love, Honor & Purpose
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At Infinite Spring Ministries, we believe that everyone deserves a place to
                    belong. Our doors are open to all who seek spiritual growth,
                    meaningful connections, and a deeper relationship with God.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We are committed to helping people find God, grow their faith, and discover their divine purpose while providing predictable steps for success and impact.
                  </p>
                  <Link to="/about">
                    <Button size="lg" className="mt-4 bg-gradient-hero hover:opacity-90">
                      Learn More About Us
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Get Involved
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Ministries
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how you can connect, grow, and serve through our various ministries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Spring Kids",
                description: "Nurturing the next generation of tributaries",
              },
              {
                icon: Users,
                title: "Youth Flow",
                description: "For teenagers and young adults finding their path",
              },
              {
                icon: BookOpen,
                title: "Home Cell",
                description: "Small circles where the water is deep, and fellowship is real",
              },
              {
                icon: GraduationCap,
                title: "Wellspring",
                description: "Foundation and leadership training arm of the ministry",
              },
            ].map((ministry, index) => (
              <AnimatedSection
                key={ministry.title}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="group hover-lift bg-card border-border/50 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-hero transition-colors duration-300">
                      <ministry.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {ministry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {ministry.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Whether you want to learn more about our church, connect with our
              community, or support our mission, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/give">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
