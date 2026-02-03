import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Headphones, Video, Radio, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const mediaLinks = {
  youtube: "https://youtube.com",
  facebook: "https://facebook.com",
  mixlr: "https://mixlr.com",
};

const Sermons = () => {
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
              Sermons & Media
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Listen & Learn
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Access our library of messages through video, audio, and live streams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Media Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Watch & Listen
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Access Our Content
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your preferred platform to access our sermons and live streams.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Video */}
            <AnimatedSection animation="scale-in" delay={0}>
              <Card className="h-full hover-lift bg-card border-border/50 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <Video className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Video Sermons
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Watch our sermons on YouTube and Facebook for the full visual experience.
                  </p>
                  <div className="space-y-3">
                    <a href={mediaLinks.youtube} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        Watch on YouTube
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href={mediaLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4">
                        Watch on Facebook
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Audio */}
            <AnimatedSection animation="scale-in" delay={150}>
              <Card className="h-full hover-lift bg-card border-border/50 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <Headphones className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Audio Sermons
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Listen to audio versions of our sermons on Mixlr, perfect for on-the-go.
                  </p>
                  <a href={mediaLinks.mixlr} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Listen on Mixlr
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Live Stream */}
            <AnimatedSection animation="scale-in" delay={300}>
              <Card className="h-full hover-lift bg-card border-border/50 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <Radio className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Live Stream
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join us live during service times on multiple platforms.
                  </p>
                  <div className="space-y-3">
                    <a href={mediaLinks.mixlr} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        Mixlr Live
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href={mediaLinks.youtube} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4">
                        YouTube Live
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-5xl mx-auto">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Latest Message
            </span>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl" />
                <a href="https://www.youtube.com/watch?v=E9NbyW2Pe1M" target="_blank" rel="noopener noreferrer">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={heroImage}
                      alt="Latest sermon"
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Sunday Infinite Streams
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Rivers of Living Water
                </h2>
                <p className="text-muted-foreground">
                  Pastor SD Kalu
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the refreshing power of God's Word as we dive deep into the scriptures and discover the living water that flows from Christ.
                </p>
                <a href={mediaLinks.youtube} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-hero hover:opacity-90 mt-4">
                    Watch Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Times CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Us Live
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Tune in to our live streams during service times and be part of the experience from anywhere in the world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto text-left">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <p className="text-primary-foreground font-semibold">Sunday Infinite Streams</p>
                  <p className="text-primary-foreground/80">8:00 AM</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <p className="text-primary-foreground font-semibold">Mid-Week Believers Service</p>
                  <p className="text-primary-foreground/80">Wednesday 4:30 PM</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
