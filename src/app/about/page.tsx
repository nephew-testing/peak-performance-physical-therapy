import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Dr Sarah Mitchell Physical Therapist Boulder | Peak PT",
  description: "Meet Dr. Sarah Mitchell, DPT - Boulder's trusted physical therapist with 15 years helping athletes recover. Book your appointment today.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Meet Dr. Sarah Mitchell, Your Boulder Physical Therapist</h1>
          <p className="mt-4 text-lg text-muted-foreground">15 years of helping athletes and active adults get back to peak performance</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Appointment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">From Athlete to Doctor: Dr. Mitchell's Journey</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Dr. Sarah Mitchell founded Peak Performance Physical Therapy in Boulder after experiencing her own sports injury as a collegiate runner. That pivotal moment showed her the difference exceptional physical therapy makes in an athlete's recovery and return to sport.</p><p>After earning her Doctorate in Physical Therapy from the University of Colorado, Dr. Mitchell spent 15 years perfecting her craft treating everyone from weekend warriors to professional athletes. She's witnessed firsthand how the right combination of manual therapy, movement analysis, and patient education transforms lives.</p><p>&quot;I became a physical therapist because I understand what it feels like to be sidelined by injury,&quot; says Dr. Mitchell. &quot;Every patient who walks through our doors at 789 Pearl Street gets the same level of care I wished I had received during my own recovery.&quot;</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Philosophy: Evidence-Based Care That Works</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Peak Performance Physical Therapy, we believe every Boulder resident deserves access to cutting-edge treatment methods. Dr. Mitchell stays current with the latest research in sports rehabilitation, post-surgical recovery, and chronic pain management.</p><p>Our approach combines proven manual therapy techniques with innovative treatments like dry needling and comprehensive movement analysis. We don't just treat symptoms – we identify and correct the root causes keeping you from peak performance.</p><p>Every treatment plan is tailored specifically to your goals, whether you're returning to competitive sports, recovering from surgery, or simply want to play with your kids without pain. We measure success by one thing: getting you back to doing what you love.</p></div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Recovery Journey?</h2>
          <p className="mt-2 opacity-80">Dr. Mitchell is accepting new patients. Call today to schedule your evaluation and take the first step back to peak performance.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (303) 555-7890</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
