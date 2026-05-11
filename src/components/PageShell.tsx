import { SiteFooter, SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-hero border-b hairline">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
