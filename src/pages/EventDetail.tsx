import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowLeft, Users, Star } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

const eventsData: Record<string, {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  description: string;
  fullDescription: string[];
  highlights?: string[];
}> = {
  "thanksgiving-miracle-service": {
    title: "Thanksgiving/Miracle Service",
    date: "Last Sunday of Every Month",
    time: "8:00 AM",
    location: "Azikiwe Junction by Aba Road, Opposite Michelin, Umuahia",
    category: "Monthly",
    description: "A powerful time of gratitude and testimony as we celebrate God's faithfulness and witness His miraculous power.",
    fullDescription: [
      "Every last Sunday of the month, we gather as a family to celebrate God's faithfulness and witness His miraculous power in our midst.",
      "This special service is dedicated to thanksgiving, testimonies, and creating an atmosphere for God's supernatural intervention in every area of life.",
      "Come expecting miracles, breakthroughs, and divine encounters as we honor God together."
    ],
    highlights: [
      "Powerful praise and worship",
      "Testimony sharing session",
      "Miracle and healing prayers",
      "Special anointing service",
      "Communion and fellowship"
    ]
  },
  "leadership-retreats": {
    title: "Leadership Retreats",
    date: "April (Annually)",
    time: "Full Day Event",
    location: "Various Locations",
    category: "Annual",
    description: "Intensive leadership development and spiritual refreshing for our leaders and those being raised in ministry.",
    fullDescription: [
      "Our annual Leadership Retreat is a time of intensive training, spiritual refreshing, and strategic planning for all leaders within Infinite Spring Ministries.",
      "This retreat is designed to sharpen leadership skills, deepen spiritual foundations, and align our vision for the coming year.",
      "Leaders from all departments and ministries come together for workshops, prayer sessions, and fellowship that strengthen the bonds of unity."
    ],
    highlights: [
      "Leadership development workshops",
      "Strategic planning sessions",
      "Prayer and intercession",
      "Team building activities",
      "Vision casting for the year"
    ]
  },
  "evangelism-outreach": {
    title: "Evangelism Outreach",
    date: "May (Annually)",
    time: "Various Times",
    location: "Communities across Umuahia and beyond",
    category: "Outreach",
    description: "Taking the gospel to the streets and communities, sharing God's love with the lost and broken.",
    fullDescription: [
      "Every May, Infinite Spring Ministries takes the gospel beyond our walls into the streets, markets, and communities of Umuahia and surrounding areas.",
      "Our evangelism outreach is a time of intentional soul-winning, community service, and demonstrating God's love in practical ways.",
      "Teams are deployed to various locations to share the good news, pray for the sick, and connect people with the life-changing power of Jesus Christ."
    ],
    highlights: [
      "Street evangelism and gospel sharing",
      "Door-to-door visitation",
      "Community service projects",
      "Hospital and prison ministry",
      "Free medical outreach"
    ]
  },
  "manifest-conference": {
    title: "Manifest Conference",
    date: "October (Annually)",
    time: "Multiple Sessions",
    location: "Azikiwe Junction by Aba Road, Opposite Michelin, Umuahia",
    category: "Conference",
    description: "Our flagship conference bringing together believers from across the region for powerful encounters with God.",
    fullDescription: [
      "Manifest Conference is the flagship annual event of Infinite Spring Ministries, bringing together believers from across the region for days of powerful encounters with God.",
      "This conference features anointed ministers, life-changing teachings, and an atmosphere charged with the presence of God.",
      "Many have received healing, deliverance, and fresh direction for their lives during Manifest. It's a time when destinies are unlocked and purposes are revealed."
    ],
    highlights: [
      "Powerful keynote sessions",
      "Anointed guest ministers",
      "Worship and praise encounters",
      "Breakout sessions and workshops",
      "Networking and fellowship"
    ]
  },
  "anniversary-celebration": {
    title: "Anniversary Celebration",
    date: "November (Annually)",
    time: "8:00 AM",
    location: "Azikiwe Junction by Aba Road, Opposite Michelin, Umuahia",
    category: "Celebration",
    description: "Celebrating another year of God's faithfulness to Infinite Spring Ministries with worship, thanksgiving, and fellowship.",
    fullDescription: [
      "Every November, we pause to celebrate another year of God's faithfulness to Infinite Spring Ministries.",
      "Our Anniversary Celebration is a time of reflection, thanksgiving, and joyful worship as we recount the testimonies of God's goodness throughout the year.",
      "Join us for special music, testimonies, guest ministers, and a grand celebration of all that God has done in and through our ministry."
    ],
    highlights: [
      "Special anniversary service",
      "Testimonies of God's faithfulness",
      "Guest ministers and special music",
      "Awards and recognition",
      "Fellowship and celebration dinner"
    ]
  }
};

const categoryColors: Record<string, string> = {
  Monthly: "bg-primary text-primary-foreground",
  Annual: "bg-accent text-accent-foreground",
  Outreach: "bg-church-gold text-foreground",
  Conference: "bg-secondary text-secondary-foreground",
  Celebration: "bg-primary text-primary-foreground",
};

const EventDetail = () => {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const event = eventSlug ? eventsData[eventSlug] : null;

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Link to="/events" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
            <span className={`inline-block px-3 py-1 ${categoryColors[event.category]} text-sm font-medium rounded-full mb-4`}>
              {event.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {event.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {event.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <AnimatedSection className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                About This Event
              </h2>
              {event.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {event.highlights && (
                <div className="pt-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Star className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection animation="slide-in-right">
              <Card className="border-border/50 sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Event Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Date</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>

                    {event.time && (
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Time</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 space-y-3">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        <Users className="mr-2 h-4 w-4" />
                        Contact Us for Details
                      </Button>
                    </Link>
                    <Link to="/events" className="block">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View All Events
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
