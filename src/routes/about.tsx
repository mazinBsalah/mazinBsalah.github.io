import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mazin Salah" },
      { name: "description", content: "Learn about Mazin Salah, a Palestinian-American CS student at NC State passionate about software engineering and system design." },
      { property: "og:title", content: "About — Mazin Salah" },
      { property: "og:description", content: "Palestinian-American Computer Science student at NC State University." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHeader eyebrow="About" title="Curious, collaborative, and always building." />
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm Mazin Salah, a Palestinian-American Computer Science graduate of NC State University with a passion for software development, problem-solving, and building efficient solutions. My primary interests include software engineering, algorithms, and system design.
        </p>
        <p>
          Feel free to explore my <Link to="/projects" className="text-accent hover:underline">Projects</Link> and <Link to="/experience" className="text-accent hover:underline">Experience</Link> to learn more about my work. I'm open to making new connections and helping others out, so always feel free to reach out.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-surface border hairline p-8 shadow-soft">
          <h2 className="font-display text-2xl mb-3">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">I'm open to making new connections and helping others out. Feel free to reach out via email or LinkedIn.</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mbsalah@ncsu.edu" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-accent-gradient text-accent-warm-foreground font-medium hover:opacity-90 transition">Email Me</a>
            <a href="https://www.linkedin.com/in/mazin-salah" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border hairline hover:bg-surface-elevated transition">Connect on LinkedIn</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
