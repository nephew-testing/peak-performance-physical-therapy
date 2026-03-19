import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/config"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Back to Peak Performance with Expert Physical Therapy in Boulder, CO
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Dr. Sarah Mitchell and our team specialize in sports rehabilitation, post-surgical recovery, and chronic pain management using evidence-based treatments that get results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(303) 555-7890">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Book Your Appointment
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Physical Therapy Services in Boulder
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-primary">Sports Rehabilitation</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get back in the game faster with specialized treatment for athletic injuries, movement analysis, and performance optimization for active adults and athletes.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-primary">Post-Surgical Recovery</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evidence-based rehabilitation programs designed to restore function, reduce pain, and accelerate healing after orthopedic and sports surgeries.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-primary">Chronic Pain Management</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Break the cycle of persistent pain with manual therapy, dry needling, and personalized movement strategies that address root causes.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-primary">Manual Therapy & Dry Needling</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced hands-on techniques and trigger point dry needling to improve mobility, reduce muscle tension, and accelerate tissue healing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              Why Choose Peak Performance Physical Therapy?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                Founded by Dr. Sarah Mitchell, DPT, Peak Performance Physical Therapy brings 15 years of specialized experience treating athletes and active adults in Boulder. We believe in patient-centered care that goes beyond just treating symptoms — we identify and address the underlying movement patterns and imbalances that cause pain and injury.
              </p>
              <p className="leading-relaxed">
                Our clinic on Pearl Street combines the latest evidence-based treatments with personalized attention in a welcoming environment. Whether you're recovering from surgery, dealing with chronic pain, or looking to prevent future injuries, we'll create a treatment plan tailored to your specific goals and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Trusted by Boulder's Active Community
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-100">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1000+</div>
                <div className="text-blue-100">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">6</div>
                <div className="text-blue-100">Days Per Week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Patient-Centered Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Back to Doing What You Love?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Call Peak Performance Physical Therapy today to schedule your consultation. We're located at 789 Pearl St in Boulder and accept most insurance plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(303) 555-7890">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Call (303) 555-7890
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}