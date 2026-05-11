import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — Mazin Salah" },
      { name: "description", content: "Games by Mazin Salah, including The Burger Saga quartet built in Godot, plus standalone projects in Godot, PuzzleScript, and Twine." },
      { property: "og:title", content: "Games — Mazin Salah" },
      { property: "og:description", content: "The Burger Saga and other game projects across Godot, PuzzleScript, and Twine." },
    ],
  }),
  component: Games,
});

type Link = { label: string; href: string };

const ITCH_LABEL = "Download from itch.io";

const saga = [
  {
    n: "1",
    title: "The Burgers Strike Back",
    genre: "Interactive narrative",
    platform: "PC",
    intro:
      "You wake up inside a max-security space prison with only fragments of who you used to be. An attack hits, panic spreads, and a voice in your head starts whispering that survival might cost you more than your freedom. Branching dialogue quietly defines the kind of person you become on the way out.",
    bullets: [
      "Comedic sci-fi tone wrapped around a prison breakout told as interactive fiction.",
      "Branching conversations where early decisions reshape later options.",
      "Themes of moral reform versus corruption, mirrored by optional body modifications that test how human you stay.",
      "Built for replay—several endings to map and a hoped-for path to find.",
    ],
    links: [{ label: ITCH_LABEL, href: "https://elmos-minion.itch.io/the-burgers-strike-back" }] as Link[],
  },
  {
    n: "2",
    title: "The Phantom Sandwich",
    genre: "Dungeon crawler",
    platform: "PC",
    intro:
      "An escape pod, a crash, and an ancient sandwich temple buried in lore that nobody was supposed to find. First-person combat carries you room to room while murals hint at a forgotten race and the war that erased them. Every fight asks the same quiet question: take the easy power, or hold the line on who you are.",
    bullets: [
      "First-person combat with a gun and grappling hook tuned for speed and verticality.",
      "Temple progression through chambers and lore that bridges into the next chapter.",
      "Mechanical tension between sparing and consuming enemies.",
    ],
    links: [{ label: ITCH_LABEL, href: "https://elmos-minion.itch.io/the-phantom-sandwich" }] as Link[],
  },
  {
    n: "3",
    title: "Revenge of the Hot Dogs",
    genre: "Escape room",
    platform: "PC",
    intro:
      "Sealed inside the temple after exposing the wrong secret, you and Bob have to think your way out. Hidden keys, mural-linked statues, ciphered riddles, and laser puzzles gate every door—and something larger is waiting once you reach the surface.",
    bullets: [
      "Layered puzzles that ramp in difficulty as new rooms open up.",
      "Sets up the saga's final confrontation.",
    ],
    links: [{ label: ITCH_LABEL, href: "https://elmos-minion.itch.io/revenge-of-the-hotdogs" }] as Link[],
  },
  {
    n: "4",
    title: "Return of the Sandwiches",
    genre: "Resource management / tower defense hybrid",
    platform: "PC",
    intro:
      "The saga's finale: a wave-based stand where you command burger units directly and build out a defense as enemies escalate from hyperspace. Tomato artillery, stealth shadowburgers, seed swarms, lettuce shields—mix the right kit, hold the line, and decide what survives.",
    bullets: [
      "Hybrid of player-controlled action and automated tower defense.",
      "Escalating waves with steadily heavier enemy compositions.",
      "Upgrade arsenal that evolves alongside the threat.",
      "Closes out the saga after the narrative, crawler, and puzzle chapters.",
    ],
    links: [{ label: ITCH_LABEL, href: "https://elmos-minion.itch.io/return-of-the-sandwiches" }] as Link[],
  },
];

const others: Array<{
  title: string;
  genre: string;
  platform: string;
  meta?: string;
  intro: string;
  bullets: string[];
  links: Link[];
}> = [
  {
    title: "Hostile Environment",
    genre: "Roguelike action",
    platform: "PC · Godot, C#, GDScript",
    intro:
      "Play as native life on a lush planet that humans are setting on fire. Survive escalating waves, evolve through tough either-or perk choices, and push toward the final stand that decides whether the colonists stay or go.",
    bullets: [
      "Two random upgrades per evolution—pick one and the other is locked for the run.",
      "Movement-driven combat with a forgiving dodge built around bursts, swarms, and wax structures.",
      "Runs build from light skirmishes to dense crowd pressure, with mini-bosses gating progress and a ~20-minute climax.",
    ],
    links: [{ label: ITCH_LABEL, href: "https://wanderingcrescent.itch.io/hostile-environment" }],
  },
  {
    title: "Mercy or Iron",
    genre: "Branching narrative",
    platform: "Browser · Twine",
    meta: "Solo",
    intro:
      "You are a king who has just taken a city after a long siege. How you treat the people inside the walls today quietly decides who stands beside you—or against you—when the next threat arrives. A short, replayable story where mercy and cruelty both come back around.",
    bullets: [
      "Choices chain into consequences instead of resolving in isolation.",
      "Multiple endings that reward a second run rather than telegraphing a 'right' path.",
      "Tight, sub-15-minute loops designed to compare against your last attempt.",
    ],
    links: [{ label: "Play in browser", href: "/games/Mercy_or_Iron.html" }],
  },
  {
    title: "Puzzle Artist",
    genre: "Puzzle prototype",
    platform: "Browser · PuzzleScript",
    meta: "Solo",
    intro:
      "A small block-pushing puzzler where the goal isn't an exit—it's a finished picture. Tight grids and limited room turn each level into a question of order: which block moves first, and which one you have to set up before you can touch it.",
    bullets: [
      "Five hand-tuned levels that introduce a new mechanic each time—pushing, vaulting, painting, polishing.",
      "Spatial-reasoning focus with no timers and no fail states.",
    ],
    links: [{ label: "Play in browser", href: "/games/Puzzle_Artist.html" }],
  },
];

function GameCard({
  badge,
  title,
  genre,
  platform,
  meta,
  intro,
  bullets,
  links,
}: {
  badge?: string;
  title: string;
  genre: string;
  platform: string;
  meta?: string;
  intro: string;
  bullets: string[];
  links?: Link[];
}) {
  return (
    <article className="rounded-2xl bg-surface border hairline p-8 shadow-soft">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <h3 className="font-display text-2xl">
          {badge && <span className="text-accent mr-2">{badge}</span>}
          {title}
        </h3>
        <span className="text-xs uppercase tracking-wider text-accent">
          {genre} · {platform}
          {meta ? ` · ${meta}` : ""}
        </span>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-4">{intro}</p>
      <ul className="space-y-2 text-muted-foreground leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i} className="pl-5 relative">
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
            {b}
          </li>
        ))}
      </ul>
      {links && links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border hairline bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              {l.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function Games() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Games"
        title="Game projects"
        subtitle="A connected sci-fi quartet plus a handful of standalone projects across Godot, PuzzleScript, and Twine."
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <a
          href="https://itch.io/profile/wanderingcrescent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border hairline bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
        >
          itch.io profile
          <span aria-hidden>↗</span>
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">The Burger Saga</p>
          <h2 className="font-display text-3xl mb-3">A four-part absurdist sci-fi arc</h2>
          <p className="text-muted-foreground leading-relaxed">
            Built in Godot with C# as semester projects by teams of four in 2–3 week sprints. Each entry uses a different genre to continue one story about metamorphosis—moral change, physical change, and factions torn apart by power.
          </p>
        </div>

        <div className="space-y-8">
          {saga.map((g) => (
            <GameCard
              key={g.title}
              badge={`${g.n}.`}
              title={g.title}
              genre={g.genre}
              platform={g.platform}
              intro={g.intro}
              bullets={g.bullets}
              links={g.links}
            />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Other Games</p>
          <h2 className="font-display text-3xl mb-3">Standalone projects</h2>
          <p className="text-muted-foreground leading-relaxed">
            Smaller projects built outside the saga, across different genres, tools, and team sizes.
          </p>
        </div>

        <div className="space-y-8">
          {others.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              genre={g.genre}
              platform={g.platform}
              meta={g.meta}
              intro={g.intro}
              bullets={g.bullets}
              links={g.links}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
