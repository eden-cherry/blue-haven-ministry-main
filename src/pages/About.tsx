import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target } from "lucide-react";
import pastorImage from "@/assets/pastor-portrait.jpg";
import heroImage from "@/assets/hero-church.jpg";

const About = () => {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Story & Mission
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Learn about our journey, our leadership, and the values that guide everything we do.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "He who believes in Me, as the Scripture has said, out of his heart will flow rivers of living water."
            </blockquote>
            <p className="text-primary mt-4 text-lg font-semibold">
              — John 7:38
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="space-y-8">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Our History
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                  A Divine Encounter
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  The story of Infinite Spring Ministries did not begin with a human plan, but with a divine encounter. Our Senior Pastor received a clear mandate from the Lord to establish a sanctuary where the thirsty could find refreshment and the weary could find strength. The vision was set: <strong className="text-foreground">To demonstrate God's love and His divine presence to the nations.</strong> We were called to be a place where the presence of God is not just talked about, but tangibly felt.
                </p>

                <p className="text-lg leading-relaxed">
                  In March 2020, the first ripples of this stream began in a humble and private setting. Infinite Spring Ministries started as a small, fervent prayer group meeting in the living room of Pastor Sunday Daniel Kalu. Amidst a global season of uncertainty, a small group of tributaries gathered to seek the face of God. It was in this atmosphere of intimacy and honor that the spiritual DNA of our house was forged.
                </p>

                <p className="text-lg leading-relaxed">
                  What began as a living room gathering quickly gained momentum as the Lord added to our numbers. On November 27th, 2025, the ministry made a prophetic transition into a full-blown ministry. The stream expanded into a structured river of life, established with powerful Sunday Services, Mid-week Refreshes, and a robust framework of departments and outreaches designed to serve the Kingdom with excellence.
                </p>

                <p className="text-lg leading-relaxed">
                  Throughout our journey, our mission has remained our compass: <strong className="text-foreground">To help people find God, grow their faith, and discover their divine purpose.</strong> We have moved beyond traditional religion to provide "predictable steps for success and impact." Through our Visionary Board and our leadership systems, we empower every member to move from being a seeker to becoming a kingdom influencer, equipped to make a global impact.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, the stream of Infinite Spring Ministries is flowing toward the nations. We are no longer a local brook; we are a rising river. With active ministries for all ages and outreaches reaching the broken, the lost, and the sick, we remain committed to our DNA of love and our pursuit of God's presence. We invite you to step into the stream and become part of our history as we continue to bring the living water of Christ to a thirsty world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-in-left">
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Demonstrating God's love and divine presence to the nations.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To help people find God; to grow their faith, and help them to discover their divine purpose while providing predictable steps for success and impact.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl" />
                  <img
                    src={pastorImage}
                    alt="Pastor SD Kalu"
                    className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto aspect-[3/4] object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <div className="space-y-6">
                  <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                    The Office of the Visionary
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Pastor SD Kalu
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Led by our Senior Pastor, Pastor SD Kalu, the Office of the Visionary guides the spiritual direction of Infinite Spring Ministries. With a clear mandate from God, Pastor SD Kalu carries the vision of demonstrating God's love and divine presence to the nations.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Alongside the Visionary Board members dedicated to protecting the purity of the house, our leadership team is committed to nurturing every member toward their divine destiny and purpose.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    "We are called to be a place where the presence of God is not just talked about, but tangibly felt."
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our DNA
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These values guide everything we do as a ministry.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Love",
                description: "Our foundation is the unconditional love of God demonstrated in all we do.",
              },
              {
                icon: Users,
                title: "Honor",
                description: "We cultivate an atmosphere of respect, dignity, and honor for all people.",
              },
              {
                icon: Globe,
                title: "Presence",
                description: "We pursue the tangible presence of God in every gathering and encounter.",
              },
              {
                icon: Target,
                title: "Purpose",
                description: "We help every person discover and walk in their divine destiny.",
              },
            ].map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="scale-in"
                delay={index * 100}
              >
                <Card className="h-full hover-lift bg-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
