import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mazin Salah" },
      { name: "description", content: "Professional experience, leadership, and skills of Mazin Salah." },
      { property: "og:title", content: "Experience — Mazin Salah" },
      { property: "og:description", content: "Internships, leadership, and technical skills." },
    ],
  }),
  component: Experience,
});

const skills = [
  { label: "Languages", value: "Java, Python, C, JavaScript, SQL, Assembly, HTML/CSS" },
  { label: "Software", value: "JUnit Testing, GitHub, MySQL, Postman, PowerBI, Intune, Assyst, Docker, Google Cloud Dialogflow" },
  { label: "Tools", value: "GDB, Maven, React, OWASP ZAP, OWASP Dependency Checker" },
  { label: "Core Competencies", value: "System Testing, Unit Testing, Debugging, Algorithm Design, Program Design, Leadership, Teamwork, Communication" },
  { label: "Security", value: "Web exploitation including SQL Injection, XSS, CSRF, SSRF, and security misconfigurations" },
];

const professional = [
  { role: "IT Intern", org: "Parexel", period: "May 2025 – May 2026", body: "Upgraded and provisioned 4,000+ laptops with team across North and South America, ensuring compliance and security through Microsoft Intune and asset assignments in Assyst. Developed automation scripts with AI tools in Python and VBA to streamline workflows, processing 17,000+ data entries and reducing weeks of manual effort to near-zero. Contributed to cost savings of $900,000+ by improving efficiency." },
  { role: "Coding Instructor", org: "Muslim Youth and Community Center (MYCC)", period: "May 2024 – Aug 2024", body: "Designed and delivered Python and block-based coding curriculums for over 40 students, creating an engaging and accessible learning environment. Led interactive workshops emphasizing problem-solving and programming fundamentals." },
  { role: "Assistant Tech Director", org: "Yumna Jewelers", period: "", body: "Played a key role in enhancing the user experience by contributing to the design and development of the company website. Worked closely with the marketing team on website optimization strategies to improve navigation and accessibility. Developed a user-friendly chatbot to streamline customer interactions and support." },
];

const leadership = [
  { role: "Business Owner", org: "Little Nablus Cafe (Nablus LLC)", period: "Jan 2025 – Present", body: "Founded and currently operate a local coffee business, applying entrepreneurial skills and project management expertise to establish and grow the venture." },
  { role: "Vice President", org: "Muslim Student Association @ NCSU", period: "Aug 2024 – April 2025", body: "Managed day-to-day operations and coordinated activities within the organization. Delegated tasks to board members and ensured the completion of events, initiatives, and outreach programs." },
  { role: "Co-Outreach Chairman", org: "Muslim Student Association @ NCSU", period: "Feb 2023 – Aug 2024", body: "Managed three outreach teams focused on Islamic, political, and service-based initiatives. Organized interfaith events ranging from small group discussions to gatherings with over 1,000 attendees." },
];

function Experience() {
  return (
    <PageShell>
      <PageHeader eyebrow="Experience" title="Work, leadership, and craft." subtitle="A timeline of professional, technical, and community experience." />

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-2xl bg-surface border hairline p-8 shadow-soft flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl">Resume</h2>
            <p className="text-muted-foreground text-sm mt-1">Download a PDF copy of my latest resume.</p>
          </div>
          <a href="/Mazin_Salah_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-accent-gradient text-accent-warm-foreground font-medium hover:opacity-90 transition">Download Resume</a>
        </div>
      </section>

      <Section title="Skills & Technologies">
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="rounded-xl bg-surface border hairline p-5">
              <div className="text-xs uppercase tracking-wider text-accent mb-2">{s.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{s.value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Professional Experience">
        <Timeline items={professional} />
      </Section>

      <Section title="Technical & Software Development">
        <p className="text-muted-foreground mb-4">I have worked on a variety of software development projects focused on data structures, system testing, security, and application development:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="pl-5 relative"><span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" />Data Structures & Algorithms Program</li>
          <li className="pl-5 relative"><span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" />Student Scheduler Program</li>
          <li className="pl-5 relative"><span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" />System Test Plan Manager</li>
        </ul>
        <p className="mt-4 text-muted-foreground">For more details, visit my <Link to="/projects" className="text-accent hover:underline">Projects page</Link>.</p>
      </Section>

      <Section title="Leadership & Community">
        <Timeline items={leadership} />
      </Section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="font-display text-3xl mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ items }: { items: { role: string; org: string; period: string; body: string }[] }) {
  return (
    <ol className="relative border-l hairline space-y-8 pl-6">
      {items.map((it, i) => (
        <li key={i}>
          <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-accent-gradient shadow-glow" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl">{it.role} <span className="text-muted-foreground font-sans text-base">— {it.org}</span></h3>
            <span className="text-xs uppercase tracking-wider text-accent">{it.period}</span>
          </div>
          <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
        </li>
      ))}
    </ol>
  );
}
