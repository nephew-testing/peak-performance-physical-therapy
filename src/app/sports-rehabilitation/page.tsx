import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Sports Physical Therapy Boulder CO | Peak Performance PT",
  description: "Expert sports physical therapy in Boulder CO. Dr. Sarah Mitchell helps athletes recover faster with evidence-based treatment. Book your appointment today.",
};

export default function SportsRehabilitationPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get Back in the Game with Expert Sports Physical Therapy in Boulder</h1>
          <p className="mt-4 text-lg text-muted-foreground">Dr. Sarah Mitchell and our team specialize in helping athletes and active adults recover from sports injuries using proven manual therapy and movement analysis techniques.</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Appointment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Specialized Sports Injury Treatment That Gets Results</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Peak Performance Physical Therapy, we understand that every athlete's injury is unique. Dr. Sarah Mitchell, DPT, brings 15 years of specialized experience treating sports injuries for everyone from weekend warriors to elite competitors in Boulder and surrounding areas.</p><p>Our evidence-based approach combines manual therapy, dry needling, and comprehensive movement analysis to identify the root cause of your injury—not just treat the symptoms. We don't just want to get you pain-free; we want to get you back to peak performance and help prevent future injuries.</p><p>Whether you're dealing with a sudden injury or chronic pain that's keeping you off the field, court, or trail, our sports physical therapy in Boulder CO is designed to get you back to doing what you love as quickly and safely as possible.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Sports Rehabilitation Specialties</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">ACL & Knee Injury Recovery</h3>
                <p className="mt-2 text-muted-foreground">Comprehensive post-surgical and non-surgical knee rehabilitation to restore strength, stability, and confidence in movement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Shoulder & Rotator Cuff Treatment</h3>
                <p className="mt-2 text-muted-foreground">Targeted therapy for throwing athletes, swimmers, and anyone with shoulder impingement or rotator cuff injuries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Running Injury Prevention & Treatment</h3>
                <p className="mt-2 text-muted-foreground">Biomechanical analysis and treatment for runners dealing with IT band syndrome, plantar fasciitis, and overuse injuries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Back & Spine Rehabilitation</h3>
                <p className="mt-2 text-muted-foreground">Manual therapy and core strengthening for athletes with herniated discs, muscle strains, and chronic back pain.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Ankle & Foot Injury Recovery</h3>
                <p className="mt-2 text-muted-foreground">Treatment for sprains, fractures, and chronic instability to get you back on your feet with confidence.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Return-to-Sport Testing</h3>
                <p className="mt-2 text-muted-foreground">Comprehensive movement screening and strength testing to ensure you're ready to safely return to competition.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Common Questions About Sports Physical Therapy</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How soon can I start sports physical therapy after an injury?</h3>
              <p className="mt-2 text-muted-foreground">You can typically begin physical therapy within 24-48 hours of most sports injuries, even before swelling completely subsides. Early intervention often leads to faster recovery and better outcomes. Dr. Mitchell will assess your specific injury and create a treatment plan that starts where you are.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do I need a referral from my doctor for sports physical therapy in Colorado?</h3>
              <p className="mt-2 text-muted-foreground">No, Colorado allows direct access to physical therapy. You can schedule directly with Peak Performance Physical Therapy without a physician referral. However, some insurance plans may require a referral for coverage, so check with your provider.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does sports injury rehabilitation typically take?</h3>
              <p className="mt-2 text-muted-foreground">Recovery time varies based on the injury type, severity, and your goals. Minor sprains may resolve in 2-4 weeks, while post-surgical recovery can take 3-6 months. Dr. Mitchell will provide realistic timelines and milestones during your initial evaluation.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What makes sports physical therapy different from regular PT?</h3>
              <p className="mt-2 text-muted-foreground">Sports physical therapy focuses on the specific demands of athletic performance. We emphasize sport-specific movements, higher-level strengthening, plyometrics, and return-to-sport protocols that regular PT may not address. Our goal is getting you back to competition, not just daily activities.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Will my insurance cover sports physical therapy at Peak Performance?</h3>
              <p className="mt-2 text-muted-foreground">We accept most major insurance plans and will verify your benefits before your first visit. Our team at 789 Pearl St in Boulder will handle the paperwork and explain any out-of-pocket costs upfront so there are no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Get Back to Peak Performance?</h2>
          <p className="mt-2 opacity-80">Don't let a sports injury keep you on the sidelines. Dr. Sarah Mitchell and our team are ready to help you recover stronger than before.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Schedule Your Evaluation</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
