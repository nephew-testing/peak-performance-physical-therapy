import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Blog | Peak Performance Physical Therapy",
  description: "Read the latest news, tips, and updates from Peak Performance Physical Therapy.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-muted px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Tips, news, and updates from our team.</p>
          
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Blog posts coming soon. Check back for helpful articles and updates.</p></div>
        </div>
      </section>
    </main>
  );
}
