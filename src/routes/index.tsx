import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mazin Salah — Computer Science Student & Software Developer" },
      { name: "description", content: "Portfolio of Mazin Salah, NC State CS student passionate about software development, security, and AI." },
      { property: "og:title", content: "Mazin Salah — Portfolio" },
      { property: "og:description", content: "Computer Science student at NC State. Software development, security, and AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="bg-hero">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-28">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">Portfolio</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.02] max-w-4xl">
            Hi, I'm <span className="text-accent-gradient">Mazin Salah</span> — building thoughtful software at the intersection of engineering, security, and AI.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Computer Science graduate from NC State University (May 2026), with a passion for software development, security, and AI.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="px-6 py-3 rounded-full bg-accent-gradient text-accent-warm-foreground font-medium shadow-glow hover:opacity-90 transition">
              View Projects
            </Link>
            <Link to="/experience" className="px-6 py-3 rounded-full border hairline text-foreground hover:bg-surface transition">
              Experience
            </Link>
            <a href="mailto:mbsalah@ncsu.edu" className="px-6 py-3 rounded-full border hairline text-foreground hover:bg-surface transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Software Development", d: "Full-stack web applications, system design, and algorithm work in Java, Python, C, and JavaScript." },
            { t: "Security & Research", d: "Penetration testing, vulnerability analysis, and applied web exploitation techniques." },
            { t: "Leadership", d: "Founder of Little Nablus Cafe, former Vice President of MSA at NCSU, and experienced coding instructor and community organizer." },
          ].map((c) => (
            <div key={c.t} className="p-6 rounded-2xl bg-surface border hairline shadow-soft">
              <h3 className="font-display text-xl mb-2">{c.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-surface border hairline p-10 md:p-14 shadow-soft">
          <h2 className="font-display text-3xl md:text-4xl mb-4">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>I began my journey with little experience and have since built a strong foundation in coding, problem-solving, and software engineering principles. My time at NC State was one of continuous learning, collaboration, and growth.</p>
            <p>I have developed and contributed to projects using C, Java, HTML, JavaScript, and more, applying problem-solving techniques to build efficient solutions. I've also conducted research and hacking exercises, utilizing penetration testing tools and vulnerability analysis to identify and mitigate security threats.</p>
            <p>Beyond technical skills, I actively network with industry professionals to gain insights into career development, software engineering best practices, and research advancements.</p>
          </div>
          <div className="mt-8">
            <Link to="/about" className="text-accent hover:underline underline-offset-4">Read more about me →</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
