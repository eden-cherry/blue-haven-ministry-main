import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    slug: "thanksgiving-miracle-service",
    title: "Thanksgiving/Miracle Service",
    date: "Last Sunday of Every Month",
    description: "A powerful time of gratitude and testimony as we celebrate God's faithfulness and witness His miraculous power.",
    category: "Monthly",
    featured: true,
  },
  {
    id: 2,
    slug: "leadership-retreats",
    title: "Leadership Retreats",
    date: "April (Annually)",
    description: "Intensive leadership development and spiritual refreshing for our leaders and those being raised in ministry.",
    category: "Annual",
    featured: false,
  },
  {
    id: 3,
    slug: "evangelism-outreach",
    title: "Evangelism Outreach",
    date: "May (Annually)",
    description: "Taking the gospel to the streets and communities, sharing God's love with the lost and broken.",
    category: "Outreach",
    featured: false,
  },
  {
    id: 4,
    slug: "manifest-conference",
    title: "Manifest Conference",
    date: "October (Annually)",
    description: "Our flagship conference bringing together believers from across the region for powerful encounters with God.",
    category: "Conference",
    featured: true,
  },
  {
    id: 5,
    slug: "anniversary-celebration",
    title: "Anniversary Celebration",
    date: "November (Annually)",
    description: "Celebrating another year of God's faithfulness to Infinite Spring Ministries with worship, thanksgiving, and fellowship.",
    category: "Celebration",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Monthly: "bg-primary text-primary-foreground",
  Annual: "bg-accent text-accent-foreground",
  Outreach: "bg-church-gold text-foreground",
  Conference: "bg-secondary text-secondary-foreground",
  Celebration: "bg-primary text-primary-foreground",
};

const Events = () => {
  const featuredEvents = events.filter((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);

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
              Events
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Stay connected with what's happening at Infinite Spring Ministries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Highlights
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Featured Events
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredEvents.map((event, index) => (
              <AnimatedSection
                key={event.id}
                animation="scale-in"
                delay={index * 150}
              >
                <Card className="h-full overflow-hidden border-2 border-primary/20 bg-gradient-card hover-lift">
                  <CardContent className="p-0">
                    <div className="bg-gradient-hero p-6 flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <Star className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-1 ${categoryColors[event.category]} text-xs font-medium rounded-full mb-1`}>
                          {event.category}
                        </span>
                        <p className="text-primary-foreground/90 font-medium">
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                      <Link to={`/events/${event.slug}`}>
                        <Button className="bg-gradient-hero hover:opacity-90 mt-2">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Annual Calendar
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mark your calendar for these important dates throughout the year.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <AnimatedSection
                key={event.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="h-full hover-lift bg-card border-border/50 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <span className={`inline-block px-3 py-1 ${categoryColors[event.category]} text-xs font-medium rounded-full`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Special Programs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Ongoing Ministries
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection animation="slide-in-left">
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Leadership School
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Training the next generation of visionaries with practical ministry skills and spiritual foundations.
                  </p>
                  <Link to="/programs/leadership-school">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Wellspring
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our foundation and leadership training arm, equipping believers for kingdom impact.
                  </p>
                  <Link to="/programs/wellspring">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Get Connected
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Want to stay updated on all our events and programs? Connect with us and be part of the Infinite Spring family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
