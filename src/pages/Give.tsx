import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, CreditCard, Shield, ExternalLink, Check } from "lucide-react";

const PAYSTACK_LINK = "https://paystack.shop/pay/infinitespringglobal";

const Give = () => {
  const handleGiveNow = () => {
    window.open(PAYSTACK_LINK, "_blank", "noopener,noreferrer");
  };

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
              Online Giving
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Generosity Changes Lives
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Your generous giving enables us to share God's love and make a lasting impact in our community and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Giving Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Giving Card */}
              <AnimatedSection animation="slide-in-left" className="lg:col-span-3">
                <Card className="border-border/50 shadow-lg overflow-hidden">
                  <div className="bg-gradient-hero p-6 text-center">
                    <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-foreground">
                      Give to Infinite Spring Ministries
                    </h2>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Missions Focus */}
                      <div className="bg-secondary rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Globe className="h-6 w-6 text-primary" />
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            Missions
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          "Funding the gospel to reach the unreached."
                        </p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Your giving supports evangelism outreach, community service, and the advancement of God's kingdom locally and globally.
                        </p>
                      </div>

                      {/* Paystack Button */}
                      <Button
                        onClick={handleGiveNow}
                        size="lg"
                        className="w-full bg-gradient-hero hover:opacity-90 text-lg py-6 shadow-glow"
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Give Now with Paystack
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>

                      {/* Payment Methods */}
                      <div className="text-center text-sm text-muted-foreground">
                        <p className="font-medium mb-2">Seamless checkout with:</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                          <span className="px-3 py-1 bg-secondary rounded-full">Card Payment</span>
                          <span className="px-3 py-1 bg-secondary rounded-full">Bank Transfer</span>
                          <span className="px-3 py-1 bg-secondary rounded-full">USSD</span>
                        </div>
                      </div>

                      {/* Security Note */}
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>Secure, encrypted payment processing via Paystack</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Why Give */}
              <AnimatedSection animation="slide-in-right" className="lg:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Why We Give
                    </h2>
                    <p className="text-muted-foreground">
                      Giving is an act of worship and obedience. Your generosity enables us to:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Fund evangelism outreach programs",
                      "Support local community initiatives",
                      "Reach the unreached with the gospel",
                      "Maintain ministry operations",
                      "Train leaders through Wellspring",
                      "Help families and individuals in need",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-secondary border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">
                          Every Gift Matters
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No gift is too small. Together, we are demonstrating God's love and divine presence to the nations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <blockquote className="font-heading text-2xl md:text-3xl text-primary-foreground italic leading-relaxed">
              "Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver."
            </blockquote>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              — 2 Corinthians 9:7
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Giving CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your generosity is a seed sown into the kingdom. Click below to give securely through Paystack.
            </p>
            <Button
              onClick={handleGiveNow}
              size="lg"
              className="bg-gradient-hero hover:opacity-90 shadow-glow"
            >
              <Heart className="mr-2 h-5 w-5" />
              Give Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Give;
