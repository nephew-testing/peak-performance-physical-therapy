import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Chronic Pain Physical Therapy Boulder | Peak Performance PT",
  description: "Expert chronic pain physical therapy in Boulder, CO. Dr. Sarah Mitchell, DPT uses proven techniques to reduce pain without medication. Book today!",
};

export default function ChronicPainManagementPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Break Free from Chronic Pain with Expert Physical Therapy in Boulder</h1>
          <p className="mt-4 text-lg text-muted-foreground">Dr. Sarah Mitchell, DPT helps Boulder residents overcome persistent pain using evidence-based manual therapy, dry needling, and movement analysis — without relying on medications.</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Consultation</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Comprehensive Chronic Pain Management That Actually Works</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Living with chronic pain doesn't have to be your reality. At Peak Performance Physical Therapy, Dr. Sarah Mitchell combines 15 years of clinical experience with cutting-edge treatment approaches to address the root causes of your persistent pain. Our Boulder clinic specializes in treating chronic conditions like fibromyalgia, arthritis, chronic back pain, and post-injury pain syndromes. We understand that every patient's pain experience is unique, which is why we develop personalized treatment plans using proven techniques including manual therapy, dry needling, therapeutic exercise, and comprehensive movement analysis. Our patient-centered approach focuses on not just managing your symptoms, but helping you reclaim your active lifestyle and return to the activities you love.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Proven Chronic Pain Treatment Methods</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Manual Therapy & Soft Tissue Work</h3>
                <p className="mt-2 text-muted-foreground">Hands-on techniques to reduce muscle tension, improve joint mobility, and decrease pain signals throughout your body.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Dry Needling for Pain Relief</h3>
                <p className="mt-2 text-muted-foreground">Targeted trigger point therapy that releases muscle knots and reduces chronic pain patterns effectively.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Movement Analysis & Correction</h3>
                <p className="mt-2 text-muted-foreground">Identify and correct movement patterns that contribute to ongoing pain and prevent future flare-ups.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Therapeutic Exercise Programs</h3>
                <p className="mt-2 text-muted-foreground">Customized strengthening and mobility exercises designed to support long-term pain management and functional improvement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Pain Education & Self-Management</h3>
                <p className="mt-2 text-muted-foreground">Learn evidence-based strategies to understand your pain and develop tools for managing symptoms independently.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Lifestyle Modification Guidance</h3>
                <p className="mt-2 text-muted-foreground">Practical advice on ergonomics, activity modification, and daily habits that support your pain management goals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Common Questions About Chronic Pain Physical Therapy</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How is chronic pain physical therapy different from regular PT?</h3>
              <p className="mt-2 text-muted-foreground">Chronic pain physical therapy focuses on understanding persistent pain patterns and uses specialized techniques like pain neuroscience education, graded exposure therapy, and multimodal approaches. We address not just the physical symptoms but also the neurological aspects of chronic pain.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Will physical therapy help if I've had pain for years?</h3>
              <p className="mt-2 text-muted-foreground">Yes, even long-standing chronic pain can improve with the right approach. Dr. Mitchell has successfully treated patients with pain lasting decades using evidence-based techniques that retrain the nervous system and improve function.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does chronic pain treatment take?</h3>
              <p className="mt-2 text-muted-foreground">Treatment timelines vary based on your specific condition and goals. Most patients begin seeing improvements within 4-6 weeks, with significant progress typically occurring over 3-6 months of consistent treatment.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you accept insurance for chronic pain treatment?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we accept most major insurance plans. Our team will verify your benefits and help you understand your coverage before beginning treatment. Call (303) 555-7890 to check your specific plan.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What should I expect during my first appointment?</h3>
              <p className="mt-2 text-muted-foreground">Your initial evaluation includes a comprehensive pain history, movement assessment, and discussion of your goals. Dr. Mitchell will explain your condition and develop a personalized treatment plan tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Take Control of Your Chronic Pain?</h2>
          <p className="mt-2 opacity-80">Don't let persistent pain control your life. Dr. Sarah Mitchell and the team at Peak Performance Physical Therapy are here to help you find lasting relief. Call (303) 555-7890 or visit us at 789 Pearl St in Boulder.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Schedule Your Appointment</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
