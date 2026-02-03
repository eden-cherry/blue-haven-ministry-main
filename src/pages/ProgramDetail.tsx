import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, Star, Calendar, Target, Heart } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ProgramData {
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  objectives?: string[];
  whoCanJoin?: string;
  schedule?: string;
  icon: LucideIcon;
}

const programsData: Record<string, ProgramData> = {
  "leadership-school": {
    title: "Leadership School",
    tagline: "Training the Next Generation of Visionaries",
    description: "Our Leadership School is designed to equip and empower emerging leaders with practical ministry skills and deep spiritual foundations.",
    fullDescription: [
      "The Leadership School at Infinite Spring Ministries is a transformative program designed to raise up the next generation of kingdom leaders who will impact their spheres of influence.",
      "Our curriculum combines biblical foundations with practical leadership principles, equipping participants with the tools they need to lead effectively in the church, marketplace, and community.",
      "Under the guidance of Pastor SD Kalu and experienced ministry leaders, students are mentored and developed to become visionaries who carry the DNA of Infinite Spring Ministries."
    ],
    objectives: [
      "Develop strong biblical foundations for leadership",
      "Build practical ministry and organizational skills",
      "Cultivate a heart for service and excellence",
      "Prepare leaders for various spheres of influence",
      "Foster a culture of accountability and growth"
    ],
    whoCanJoin: "The Leadership School is open to all committed members of Infinite Spring Ministries who have a desire to grow in leadership and serve in greater capacity.",
    schedule: "Classes are held periodically throughout the year with intensive training sessions.",
    icon: BookOpen
  },
  "wellspring": {
    title: "Wellspring",
    tagline: "Foundation and Leadership Training Arm",
    description: "Wellspring is the official training arm of Infinite Spring Ministries, providing foundational and advanced training for believers at every stage of their journey.",
    fullDescription: [
      "Wellspring is more than a training program—it is the foundational arm of Infinite Spring Ministries dedicated to grounding believers in the faith and equipping them for kingdom impact.",
      "Whether you're a new believer looking to understand the basics of Christianity or a seasoned Christian seeking to deepen your understanding, Wellspring has a pathway for you.",
      "Our comprehensive curriculum covers everything from salvation and water baptism to spiritual gifts, prayer, and walking in your divine purpose."
    ],
    objectives: [
      "Ground new believers in foundational truths",
      "Develop a consistent devotional and prayer life",
      "Understand and operate in spiritual gifts",
      "Discover your divine purpose and calling",
      "Prepare for service and ministry involvement"
    ],
    whoCanJoin: "Wellspring is open to everyone—from first-time believers to those who want a refresher on foundational truths. It's the starting point for all who want to grow at Infinite Spring.",
    schedule: "Wellspring classes run in cohorts throughout the year. New sessions are announced regularly.",
    icon: Heart
  },
  "spring-kids": {
    title: "Spring Kids",
    tagline: "Nurturing the Next Generation of Tributaries",
    description: "Spring Kids is our vibrant children's ministry designed to teach children about God's love in fun, engaging, and age-appropriate ways.",
    fullDescription: [
      "At Spring Kids, we believe that every child is a treasure with a divine purpose. Our ministry is dedicated to nurturing the spiritual growth of children in a safe, loving, and fun environment.",
      "Through creative Bible lessons, worship, games, and activities, we teach children the foundational truths of the gospel and help them develop a personal relationship with Jesus.",
      "Our trained and passionate volunteers ensure that every child feels loved, valued, and excited about learning more about God."
    ],
    objectives: [
      "Teach children about God's love and the Bible",
      "Create a safe and fun learning environment",
      "Build foundational faith from an early age",
      "Encourage children to develop their gifts",
      "Partner with parents in spiritual development"
    ],
    whoCanJoin: "Spring Kids is for children from toddlers through pre-teens. We have age-appropriate classes for every stage of childhood.",
    schedule: "Spring Kids meets every Sunday during our main service, allowing parents to worship while children learn.",
    icon: Star
  },
  "youth-flow": {
    title: "Youth Flow",
    tagline: "For Teenagers and Young Adults Finding Their Path",
    description: "Youth Flow is our dynamic youth ministry designed to help teenagers and young adults navigate life while building a strong foundation in Christ.",
    fullDescription: [
      "Youth Flow is where the young people of Infinite Spring Ministries come together to worship, learn, and grow in an environment that understands their unique challenges and opportunities.",
      "We address real-life issues that young people face—identity, purpose, relationships, peer pressure, and more—all through the lens of God's Word.",
      "Our goal is to raise a generation of young people who are confident in their identity in Christ and equipped to impact their schools, communities, and eventually the world."
    ],
    objectives: [
      "Build authentic faith in teenagers and young adults",
      "Address real-life issues from a biblical perspective",
      "Create a community of like-minded young believers",
      "Develop leadership skills in young people",
      "Prepare youth for adulthood and purpose"
    ],
    whoCanJoin: "Youth Flow is for teenagers (13-19) and young adults (20-30) who want to grow in their faith and connect with peers.",
    schedule: "Youth Flow meets regularly with special events, retreats, and programs throughout the year.",
    icon: Target
  },
  "home-cell": {
    title: "Home Cell",
    tagline: "Where the Water is Deep and Fellowship is Real",
    description: "Home Cells are small group gatherings that meet in homes across Umuahia, providing intimate fellowship, Bible study, and mutual support.",
    fullDescription: [
      "Home Cells are the heartbeat of community life at Infinite Spring Ministries. These small groups meet in homes throughout the week, providing an intimate setting for deeper fellowship and spiritual growth.",
      "In Home Cells, members study the Word together, pray for one another, and build relationships that go beyond Sunday services. It's where the church family truly becomes family.",
      "Led by trained cell leaders, these groups are designed to ensure that no member of Infinite Spring walks alone. Everyone has a place to belong, share, and grow."
    ],
    objectives: [
      "Foster deep, authentic relationships among members",
      "Provide a platform for interactive Bible study",
      "Create accountability and pastoral care",
      "Identify and develop emerging leaders",
      "Extend the reach of the church into communities"
    ],
    whoCanJoin: "Everyone is welcome to join a Home Cell! We have cells located in various neighborhoods to make it convenient for you to connect.",
    schedule: "Home Cells meet weekly at various times and locations. Contact us to find a cell near you.",
    icon: Users
  }
};

const ProgramDetail = () => {
  const { programSlug } = useParams<{ programSlug: string }>();
  const program = programSlug ? programsData[programSlug] : null;

  if (!program) {
    return <Navigate to="/events" replace />;
  }

  const IconComponent = program.icon;

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
              Back to Events & Programs
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/80 text-lg font-medium">
                {program.tagline}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {program.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {program.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  About {program.title}
                </h2>
                {program.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {program.objectives && (
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Our Objectives
                  </h3>
                  <ul className="space-y-3">
                    {program.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Star className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection animation="slide-in-right">
              <Card className="border-border/50 sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Program Info
                  </h3>
                  
                  {program.whoCanJoin && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <p className="font-medium text-foreground text-sm">Who Can Join?</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.whoCanJoin}</p>
                    </div>
                  )}

                  {program.schedule && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <p className="font-medium text-foreground text-sm">Schedule</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.schedule}</p>
                    </div>
                  )}

                  <div className="pt-4 space-y-3">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        Get Involved
                      </Button>
                    </Link>
                    <Link to="/events" className="block">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View All Programs
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

export default ProgramDetail;
