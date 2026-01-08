"use client";

import { Button } from "@/components/ui/Button";

export default function SamplePromo() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <img
            src="/images/premium-collection.jpg"
            alt="Flooring Samples"
            className="h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="order-1 space-y-6 md:order-2 md:pl-8">
          <div className="inline-block rounded-full bg-[var(--color-accent)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-accent)]">
            Free Samples
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
            Touch & Feel the Quality
          </h2>
          <p className="text-lg text-[var(--color-muted)]">
            We know seeing is believing. Order up to 3 samples for free and
            experience the texture, color, and finish of our premium floors in
            your own home lighting.
          </p>
          <ul className="space-y-3">
            {[
              "Free express shipping Australia-wide",
              "Large format samples",
              "Yours to keep",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[var(--color-foreground)]">
                <svg
                  className="h-5 w-5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button size="lg" className="shadow-md">
              Order Free Samples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
