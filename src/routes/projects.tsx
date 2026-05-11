import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mazin Salah" },
      { name: "description", content: "Selected software development projects by Mazin Salah, including full-stack apps, algorithms work, and EA virtual experience." },
      { property: "og:title", content: "Projects — Mazin Salah" },
      { property: "og:description", content: "Full-stack apps, algorithms, system testing, and more." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "UGCC Syllabus Creation & Feedback Tool",
    period: "Fall 2025",
    bullets: [
      "Continued development of a full-stack web application for the Undergraduate Curriculum Committee to streamline syllabus creation, review, and management with a team of 5.",
      "Attended and frequently facilitated weekly sponsor meetings to coordinate progress, discuss requirements, and ensure alignment with stakeholder expectations.",
      "Collaborated to develop wireframes, sequence diagrams, and a review system with returning, viewing, editing, and deleting feedback comments with threaded replies and approval states.",
      "Implemented semester date management allowing UGCC Chairs to add and edit important dates with automatic propagation to all derived syllabi.",
      "Completed a revision history tracking system providing read-only historical views of syllabus versions with approval status and comments.",
      "Conducted usability testing with professors and faculty to gather feedback and improve user experience.",
      "Wrote comprehensive documentation for the program and future development teams.",
    ],
  },
  {
    title: "Electronic Arts — Software Engineering Virtual Experience",
    period: "Forage",
    bullets: [
      "Proposed a new feature for a football game and wrote a Feature Proposal describing it to other stakeholders.",
      "Built a class diagram and created a header file in C++ with class definitions for each object.",
      "Patched a bugfix and optimized the Sims 4 codebase by implementing an improved data structure.",
    ],
  },
  {
    title: "Data Structures & Algorithms Program",
    period: "",
    bullets: [
      "Implemented and tested positional lists, stacks, queues, maps, and trees for practical applications.",
      "Applied algorithmic techniques to optimize performance and scalability.",
      "Gained hands-on experience with Java, object-oriented programming, and problem-solving.",
    ],
  },
  {
    title: "Student Scheduler Program",
    period: "",
    bullets: [
      "Developed the back-end of a student scheduling system to help users manage courses and events.",
      "Implemented features for adding, removing, and editing schedules, ensuring a user-friendly interface.",
    ],
  },
  {
    title: "System Test Plan Manager",
    period: "",
    bullets: [
      "Designed a System Test Plan manager with a partner, implementing test case creation, editing, and I/O operations.",
      "Developed custom array and linked list structures.",
      "Applied system testing methodologies to ensure software reliability.",
    ],
  },
];

function Projects() {
  return (
    <PageShell>
      <PageHeader eyebrow="Projects" title="Software development work." subtitle="A selection of full-stack, systems, and coursework projects." />
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl bg-surface border hairline p-8 shadow-soft">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <h2 className="font-display text-2xl">{p.title}</h2>
              <span className="text-xs uppercase tracking-wider text-accent">{p.period}</span>
            </div>
            <ul className="space-y-2 text-muted-foreground leading-relaxed">
              {p.bullets.map((b, i) => (
                <li key={i} className="pl-5 relative">
                  <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
