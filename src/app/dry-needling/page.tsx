import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Dry Needling Boulder CO | Peak Performance Physical Therapy",
  description: "Expert dry needling therapy in Boulder, CO. Dr. Sarah Mitchell uses this proven technique for pain relief & recovery. Book your appointment today.",
};

export default function DryNeedlingPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Dry Needling Therapy in Boulder, CO</h1>
          <p className="mt-4 text-lg text-muted-foreground">Fast, effective pain relief using precision needle techniques to release muscle tension and restore movement</p>
          <div className="mt-8"><a href="tel:(303)555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Appointment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Is Dry Needling and How Can It Help You?</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Dry needling Boulder CO patients trust at Peak Performance Physical Therapy is a specialized technique that uses thin needles to target trigger points in tight muscles. Unlike acupuncture, dry needling focuses specifically on musculoskeletal pain and dysfunction.</p><p>Dr. Sarah Mitchell uses this evidence-based treatment to release muscle knots, improve blood flow, and reduce pain signals to your brain. The result? Faster healing and improved movement so you can get back to your active Boulder lifestyle.</p><p>This technique works exceptionally well for athletes, weekend warriors, and anyone dealing with chronic muscle tension or sports injuries. Many patients experience immediate relief after their first session.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Conditions We Treat With Dry Needling</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Sports Injuries</h3>
                <p className="mt-2 text-muted-foreground">Tennis elbow, runner's knee, shoulder impingement, and other athletic injuries that keep you off the field or trail</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Chronic Pain</h3>
                <p className="mt-2 text-muted-foreground">Persistent neck pain, lower back pain, and muscle tension that hasn't responded to other treatments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Headaches & Migraines</h3>
                <p className="mt-2 text-muted-foreground">Tension headaches and cervicogenic headaches caused by tight neck and shoulder muscles</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Post-Surgical Recovery</h3>
                <p className="mt-2 text-muted-foreground">Scar tissue, muscle guarding, and movement restrictions following orthopedic surgery</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Muscle Spasms</h3>
                <p className="mt-2 text-muted-foreground">Acute muscle cramps and spasms that limit your daily activities and exercise routine</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Joint Stiffness</h3>
                <p className="mt-2 text-muted-foreground">Limited range of motion in shoulders, hips, and other joints due to muscle tightness</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Dry Needling Questions & Answers</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Does dry needling hurt?</h3>
              <p className="mt-2 text-muted-foreground">Most patients feel minimal discomfort during needle insertion. You may experience a brief muscle twitch when we hit the trigger point, which is actually a good sign that the treatment is working. Any soreness typically resolves within 24-48 hours.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How is dry needling different from acupuncture?</h3>
              <p className="mt-2 text-muted-foreground">Dry needling targets specific muscle trigger points based on Western medicine and anatomy. Acupuncture follows traditional Chinese medicine principles and energy meridians. Both use needles, but the approach and goals are different.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How many dry needling sessions will I need?</h3>
              <p className="mt-2 text-muted-foreground">Most patients see improvement within 2-3 sessions, though this varies based on your condition and how long you've had symptoms. Dr. Mitchell will create a personalized treatment plan during your initial evaluation.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can I exercise after dry needling?</h3>
              <p className="mt-2 text-muted-foreground">Light movement and stretching are encouraged after treatment. Avoid intense exercise for 24 hours to allow your muscles to recover. Dr. Mitchell will provide specific post-treatment guidelines based on your condition.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Is dry needling covered by insurance?</h3>
              <p className="mt-2 text-muted-foreground">Many insurance plans cover dry needling when performed by a licensed physical therapist. We'll verify your coverage and help you understand your benefits before starting treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Experience Pain Relief With Dry Needling?</h2>
          <p className="mt-2 opacity-80">Dr. Sarah Mitchell is ready to help you move better and feel stronger. Call Peak Performance Physical Therapy at (303) 555-7890 or visit us at 789 Pearl St in Boulder.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303)555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Schedule Your Consultation</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
