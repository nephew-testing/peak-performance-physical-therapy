import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Physical Therapy Questions Boulder - Peak Performance PT FAQ",
  description: "Get answers to common physical therapy questions from Boulder's Peak Performance PT. Ready to start your recovery? Book your appointment today.",
};

export default function FaqPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Physical Therapy Questions Boulder Patients Ask Most</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get clear answers from Dr. Sarah Mitchell and the Peak Performance PT team</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Schedule Your Consultation</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do I need a referral to see a physical therapist in Boulder?</h3>
              <p className="mt-2 text-muted-foreground">No, Colorado allows direct access to physical therapy. You can schedule directly with Peak Performance PT without a doctor's referral. However, some insurance plans may require a referral for coverage, so we recommend checking with your provider first.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What should I expect during my first physical therapy appointment?</h3>
              <p className="mt-2 text-muted-foreground">Your initial visit at Peak Performance PT includes a comprehensive evaluation with Dr. Sarah Mitchell. We'll discuss your injury history, assess your movement patterns, and create a personalized treatment plan. The appointment typically lasts 60 minutes and may include some initial hands-on treatment.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does physical therapy take to work?</h3>
              <p className="mt-2 text-muted-foreground">Recovery time varies based on your condition, but most patients see improvement within 2-4 weeks. Sports injuries and post-surgical recovery typically take 6-12 weeks, while chronic pain management may require ongoing care. Dr. Mitchell will provide realistic timelines during your evaluation.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Does Peak Performance PT accept my insurance?</h3>
              <p className="mt-2 text-muted-foreground">We accept most major insurance plans including Anthem, Cigna, Aetna, and United Healthcare. Our team will verify your benefits before your first visit and explain any out-of-pocket costs. We also offer cash-pay options for uninsured patients.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What types of conditions do you treat at your Boulder clinic?</h3>
              <p className="mt-2 text-muted-foreground">Peak Performance PT specializes in sports rehabilitation, post-surgical recovery, and chronic pain management. We treat everything from ACL injuries and rotator cuff repairs to back pain and headaches. Our evidence-based approach includes manual therapy, dry needling, and movement analysis.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How often will I need physical therapy appointments?</h3>
              <p className="mt-2 text-muted-foreground">Most patients start with 2-3 visits per week, then reduce frequency as they improve. Dr. Mitchell designs treatment schedules based on your specific needs and goals. We're located at 789 Pearl St in Boulder for convenient access to regular appointments.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can physical therapy help prevent future injuries?</h3>
              <p className="mt-2 text-muted-foreground">Absolutely. At Peak Performance PT, we don't just treat current injuries—we identify movement patterns and weaknesses that could lead to future problems. Our 15 years of experience with Boulder athletes has shown that proper movement education significantly reduces re-injury rates.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What makes Peak Performance PT different from other Boulder clinics?</h3>
              <p className="mt-2 text-muted-foreground">Dr. Sarah Mitchell's patient-centered approach combines 15 years of experience with cutting-edge techniques like dry needling and movement analysis. We focus on getting active adults and athletes back to doing what they love, not just pain-free but performing at their peak.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Recovery Journey?</h2>
          <p className="mt-2 opacity-80">Join hundreds of Boulder residents who've returned to peak performance with Dr. Mitchell's expert care</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Book Your Appointment</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
