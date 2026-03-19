import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Post Surgical Physical Therapy Boulder | Peak Performance PT",
  description: "Expert post surgical physical therapy in Boulder, CO. Dr. Sarah Mitchell helps you recover faster with evidence-based treatment. Book today!",
};

export default function PostSurgicalRecoveryPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Expert Post-Surgical Physical Therapy in Boulder</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get back to your active lifestyle faster with specialized rehabilitation from Dr. Sarah Mitchell, DPT. 15 years of experience helping Boulder patients recover from surgery.</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Recovery Session</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Comprehensive Post-Surgical Recovery Programs</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Peak Performance Physical Therapy in Boulder, we understand that surgery is just the beginning of your recovery journey. Dr. Sarah Mitchell, DPT, has spent 15 years developing evidence-based protocols specifically for post-surgical rehabilitation. Whether you've had knee replacement, rotator cuff repair, ACL reconstruction, or spinal surgery, we create personalized treatment plans that accelerate healing while preventing complications. Our Boulder clinic on Pearl Street combines manual therapy, targeted exercises, and advanced techniques like dry needling to restore your strength, mobility, and confidence. We work closely with your surgeon to ensure every phase of recovery follows best practices for optimal outcomes.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Post-Surgical Specialties</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Orthopedic Surgery Recovery</h3>
                <p className="mt-2 text-muted-foreground">Knee, hip, shoulder, and ankle surgeries including joint replacements, arthroscopic procedures, and fracture repairs with specialized protocols.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Sports Surgery Rehabilitation</h3>
                <p className="mt-2 text-muted-foreground">ACL/MCL reconstruction, meniscus repair, rotator cuff surgery, and other sports-related procedures with return-to-sport focus.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Spinal Surgery Recovery</h3>
                <p className="mt-2 text-muted-foreground">Post-operative care for fusion, discectomy, and decompression surgeries with emphasis on core stability and proper movement patterns.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Hand & Wrist Surgery</h3>
                <p className="mt-2 text-muted-foreground">Carpal tunnel, tendon repairs, and fracture recovery with specialized manual therapy and functional retraining.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Post-Surgical Recovery Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">When should I start physical therapy after surgery?</h3>
              <p className="mt-2 text-muted-foreground">Timing varies by surgery type, but most patients begin within 1-2 weeks post-operatively. We coordinate with your surgeon to determine the optimal start date for your specific procedure and healing progress.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does post-surgical physical therapy take?</h3>
              <p className="mt-2 text-muted-foreground">Recovery timelines depend on the surgery and your goals. Typical programs range from 6-12 weeks, with some complex cases requiring 4-6 months. We track your progress closely and adjust treatment duration accordingly.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Will physical therapy after surgery be painful?</h3>
              <p className="mt-2 text-muted-foreground">Some discomfort is normal as we restore movement and strength, but therapy should never cause severe pain. Dr. Mitchell uses gentle manual therapy techniques and progresses exercises gradually to minimize discomfort while maximizing results.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you work directly with surgeons in Boulder?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we collaborate closely with Boulder orthopedic surgeons and follow their specific protocols. We provide regular progress reports and communicate any concerns to ensure coordinated care throughout your recovery.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What makes Peak Performance different for post-surgical care?</h3>
              <p className="mt-2 text-muted-foreground">Dr. Mitchell's 15 years of experience includes specialized training in post-operative rehabilitation. We use evidence-based manual therapy, movement analysis, and dry needling techniques that many clinics don't offer, leading to faster, more complete recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Start Your Recovery Journey Today</h2>
          <p className="mt-2 opacity-80">Don't let post-surgical complications slow you down. Call Peak Performance Physical Therapy in Boulder at (303) 555-7890 to schedule your evaluation with Dr. Sarah Mitchell, DPT.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Book Appointment Now</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
