"use client";

import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import NavBarMega from "./components/NavBarMega";


export default function Home() {
  // Pastel Palette & Multi-Color Theme (Violet/Indigo primary)
  const OFF_WHITE = "bg-gray-50";
  const TEXT_COLOR = "text-zinc-900";

  const COLORS = {
    Primary: "bg-indigo-500 hover:bg-indigo-600",
    PrimaryText: "text-indigo-600",
    Secondary: "bg-cyan-500 hover:bg-cyan-600",
    Accent1: "bg-yellow-200",
    Accent2: "bg-cyan-200",
    Accent3: "bg-indigo-200",
    Accent4: "bg-teal-200",
  };

  const GALLERY_CARDS = [
    { id: 1, title: "Sunlit Orchard Android", tag: "Sci-fantasy", bg: "bg-yellow-200" },
    { id: 2, title: "Valley of Paper Moons", tag: "Dreamcore", bg: "bg-indigo-200" },
    { id: 3, title: "Rusty Chapel", tag: "Dieselpunk", bg: "bg-teal-200" },
    { id: 4, title: "Lemon Cloud Rider", tag: "Whimsy", bg: "bg-cyan-200" },
  ];

  // --- Collections Data (>= 5) ---
  const COLLECTIONS = [
    {
      id: "col-01",
      name: "Sundrop Reveries",
      tag: "Warm dusk • Reflective",
      blurb:
        "Honeyed skies, glassy water, and quiet silhouettes. A meditation on soft light and memory.",
      bg: "from-amber-200 via-orange-100 to-yellow-100",
      chip: "Dusk Hues",
    },
    {
      id: "col-02",
      name: "Paper Moon Procession",
      tag: "Dreamcore • Processional",
      blurb:
        "Delicate lanterns drift above pale fields as paper effigies parade under moonlit ribbons.",
      bg: "from-indigo-200 via-indigo-100 to-cyan-100",
      chip: "Dreamcore",
    },
    {
      id: "col-03",
      name: "Rust & Chapel",
      tag: "Dieselpunk • Sacred steel",
      blurb:
        "Cathedral rivets, soot-kissed stained glass, and quiet engines humming psalms.",
      bg: "from-zinc-200 via-stone-100 to-amber-100",
      chip: "Dieselpunk",
    },
    {
      id: "col-04",
      name: "Citrus Aeronauts",
      tag: "Whimsy • Skycraft",
      blurb:
        "Lemon-peel dirigibles and kitewings catching late afternoon laughter above tiled roofs.",
      bg: "from-yellow-200 via-lime-100 to-emerald-100",
      chip: "Whimsy",
    },
    {
      id: "col-05",
      name: "Quiet Coast Monoliths",
      tag: "Hard sci-fi • Minimal",
      blurb:
        "Solar slabs and wind-cut foam lines; engineering as poetry along the tideline.",
      bg: "from-sky-200 via-sky-100 to-indigo-100",
      chip: "Hard Sci-Fi",
    },
  ];

  // --- Carousel State ---
  const [active, setActive] = useState(0);
  const total = COLLECTIONS.length;
  const trackRef = useRef(null);

  const go = useCallback(
    (dir) => {
      setActive((prev) => {
        if (dir === "next") return (prev + 1) % total;
        if (dir === "prev") return (prev - 1 + total) % total;
        return prev;
      });
    },
    [total]
  );

  // Keyboard navigation for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className={`relative min-h-screen bg-[#f0eee6] font-sans ${TEXT_COLOR} antialiased`}>
      {/* NAV */}
     <NavBarMega />

     {/* HERO — ultra-minimal, solid colors, bold type */}
<section className="relative ">
  <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl text-center">
      {/* Small badge */}
      <div
        className={[
          "mx-auto mb-8 inline-flex items-center gap-2 rounded-full",
          "border border-zinc-300  px-3 py-1.5",
          "text-[11px] font-semibold uppercase tracking-widest text-zinc-700"
        ].join(" ")}
      >
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${COLORS?.Secondary ?? "bg-indigo-500"}`} />
        New: Curated Collections
      </div>

      {/* Headline */}
      <h1
        className={[
          "font-black tracking-tight text-zinc-900 leading-[0.95]",
          "text-[clamp(2.75rem,8vw,6.25rem)]"
        ].join(" ")}
      >
        Super fast{" "}
        <span className="underline decoration-zinc-300 underline-offset-8">inspiration</span>
        <br className="hidden sm:block" />
        for every <span className={COLORS?.PrimaryText ?? "text-indigo-600"}>collection</span>.
      </h1>

      {/* Subtext */}
      <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-zinc-600">
        Browse clean, directed sets of concept art paired with tiny narratives. No clutter—just
        solid colors, bold type, and references that get you moving.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#collections"
          className={[
            "inline-flex items-center justify-center rounded-2xl px-7 py-4 text-lg font-bold text-white",
            COLORS?.Primary ?? "bg-indigo-600",
            "shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50"
          ].join(" ")}
          aria-label="Explore Collections"
        >
          Explore Collections
          <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>

        <a
          href="#gallery"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white px-7 py-4 text-lg font-bold text-zinc-900 transition hover:bg-zinc-100"
          aria-label="Open Quick Reference"
        >
          Quick Reference
        </a>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-14 h-px w-28 bg-zinc-200" />
    </div>
  </div>
</section>


      {/* 4. GALLERY / COLOR-BLOCK FEATURE GRID */}
      <section id="featured-gallery" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className={`mb-12 text-3xl font-extrabold ${TEXT_COLOR} sm:text-4xl text-center sm:text-left`}>Quick Reference Gallery.</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_CARDS.map((card) => (
              <a
                key={card.id}
                href="#"
                className="group relative overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Visual Block */}
                <div className={`relative aspect-[4/5] w-full rounded-t-2xl ${card.bg}`}>
                  <div className="absolute inset-0 grid grid-cols-6 opacity-40">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border border-white/60" />
                    ))}
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-zinc-800 px-3 py-1 text-xs font-bold text-white shadow-md">
                    FREE
                  </span>
                </div>
                {/* Text Block */}
                <div className="flex items-center justify-between gap-2 p-5">
                  <div>
                    <h3 className="text-lg font-extrabold text-zinc-900">{card.title}</h3>
                    <p className="text-sm font-medium text-zinc-600">{card.tag}</p>
                  </div>
                  <svg
                    className="h-5 w-5 text-zinc-500 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLECTIONS (intro + carousel) */}
      <section id="collections" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
<div>
  <h2 className={`text-center sm:text-left mb-12 text-4xl font-extrabold ${TEXT_COLOR} sm:text-5xl`}>
    Collections
  </h2>

</div>
          {/* Carousel */}
          <div id="sample-collections" className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous collection"
                  onClick={() => go("prev")}
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100"
                >
                  ←
                </button>
                <button
                  aria-label="Next collection"
                  onClick={() => go("next")}
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100"
                >
                  →
                </button>
              </div>
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              className="relative overflow-hidden"
              role="region"
              aria-roledescription="carousel"
              aria-label="Collections carousel"
            >
              <ul
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {COLLECTIONS.map((c) => (
                  <li key={c.id} className="min-w-full px-1">
                    <div className="grid gap-6 lg:grid-cols-12">
                      {/* Visual */}
                      <div className="lg:col-span-7">
                        <div className={`relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br ${c.bg}`}>
                          {/* abstract overlay */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,#ffffff_0,transparent_50%),repeating-linear-gradient(45deg,rgba(255,255,255,0.6)_0_2px,transparent_2px_8px)]" />
                          </div>
                          {/* corner chip */}
                          <span className="absolute right-4 top-4 rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-bold text-white shadow-md">
                            {c.chip}
                          </span>
                        </div>
                      </div>
                      {/* Copy */}
                      <div className="lg:col-span-5">
                        <div className="h-full flex flex-col justify-between rounded-3xl border-2 border-zinc-200 bg-white p-6 shadow-sm">
                          <div>
                            <span className={`text-xs font-semibold uppercase tracking-wider ${COLORS.PrimaryText}`}>
                              Collection
                            </span>
                            <h4 className="mt-2 text-3xl font-black text-zinc-900">{c.name}</h4>
                            <p className="mt-1 text-sm font-medium text-zinc-600">{c.tag}</p>
                            <p className="mt-4 text-base leading-relaxed text-zinc-700">{c.blurb}</p>
                          </div>
                          <div className="mt-6 flex items-center gap-3">
                            <a
                              href="#"
                              className={`rounded-xl ${COLORS.Primary} w-full text-center px-4 py-2 text-sm font-bold text-white shadow-sm transition`}
                            >
                              View Collection
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Dots */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {COLLECTIONS.map((c, i) => (
                  <button
                    key={c.id}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === active ? "bg-indigo-600" : "bg-zinc-300 hover:bg-zinc-400",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* 3. BENTO GRID - GALLERY */}
      {/* 3. BENTO GRID - GALLERY (with bottom-right SVG accents) */}
<section id="gallery" className="relative">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 className={`mb-12 text-4xl font-extrabold ${TEXT_COLOR} text-center sm:text-left sm:text-5xl`}>Explore the Library.</h2>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Large feature */}
      <a
        href="#"
        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl transition hover:border-zinc-300 hover:shadow-2xl lg:col-span-2"
      >
        {/* Decorative SVG */}
        <img
          src="/megalith-svgrepo-com.svg"
          alt="megalith icon"
          className="pointer-events-none absolute -right-0 -bottom-2 h-40 w-40 opacity-10 sm:h-56 sm:w-56"
          aria-hidden="true"
        />

        <div className="flex h-full flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold uppercase tracking-wider ${COLORS.PrimaryText}`}>
                Featured Concept
              </span>
              <svg
                className="h-6 w-6 text-zinc-400 transition group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <h3 className="mt-3 text-5xl font-black leading-tight text-zinc-900">
              The Solar-Powered Monolith of the Quiet Coastline
            </h3>
            <p className="mt-4 text-lg text-zinc-600">
              A deep dive into the latest featured piece. Study the composition, color theory, and narrative potential.
            </p>
          </div>
          <div className="mt-8 text-sm text-zinc-500">Concept ID: SV-0412 • Tag: Hard Sci-Fi, Minimalist</div>
        </div>
      </a>

      {/* Collections card */}
     <a
  href="#collections"
  className={`group relative overflow-hidden rounded-3xl ${COLORS.Accent4}/50 border border-teal-300 p-8 shadow-lg transition hover:border-teal-400 hover:shadow-xl`}
>
  {/* Decorative SVG Accent */}
  <img
    src="/miscellaneous-collection-svgrepo-com.svg"
    alt=""
    className="pointer-events-none absolute right-0 -bottom-2 h-28 w-28 opacity-10 sm:h-40 sm:w-40 select-none"
    aria-hidden="true"
  />

  <div className="flex h-full flex-col justify-between relative">
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
        Collections
      </span>
      <h3 className="mt-3 text-2xl font-extrabold text-zinc-900">
        Where Each Image Belongs
      </h3>
      <p className="mt-2 text-base text-zinc-700">
        Browse by mood, palette, and narrative thread — find a world to build on.
      </p>
    </div>

    <div className="mt-6">
      <span className="text-sm font-semibold text-teal-700 group-hover:underline">
        Browse →
      </span>
    </div>
  </div>
</a>


      {/* Small card: Technical Insight */}
      <a
        href="#"
        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-[#c46686] p-6 shadow-md transition hover:shadow-lg lg:col-span-1"
      >
        {/* Decorative SVG */}
        <img
          src="/ratio-svgrepo-com.svg"
          alt="ratio icon"
          className="pointer-events-none absolute -right-0 -bottom-2 h-28 w-28 opacity-15 sm:h-40 sm:w-40"
          aria-hidden="true"
        />

        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-100/90">Technical Insight</span>
        <h3 className="mt-1 text-xl font-extrabold text-white">The Golden Ratio in Composition</h3>
        <p className="mt-1 text-sm text-white/90">A technical reference breakdown for artists.</p>
      </a>

      {/* Small card: Concept Vault */}
      <a
        href="#"
        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-[#6a9bcc] p-6 shadow-md transition hover:shadow-lg lg:col-span-1"
      >
        {/* Decorative SVG */}
        <img
          src="/retro-record-player-svgrepo-com.svg"
          alt="retro record icon"
          className="pointer-events-none absolute right-2 -bottom-2 h-32 w-32 opacity-15 sm:h-40 sm:w-40"
          aria-hidden="true"
        />

        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">Concept Vault</span>
        <h3 className="mt-1 text-xl font-extrabold text-white">Dieselpunk Retrofuture</h3>
        <p className="mt-1 text-sm text-white/90">See the full tag collection and inspire your next piece.</p>
      </a>

      {/* CTA card */}
      <div className="group relative overflow-hidden rounded-3xl bg-indigo-500 p-8 shadow-xl lg:col-span-1">

  {/* Decorative SVG */}
  <img
    src="/idea-svgrepo-com.svg"
    alt=""
    className="pointer-events-none absolute -right-2 -bottom-2 h-28 w-28 opacity-15 sm:h-32 sm:w-32 select-none"
    aria-hidden="true"
  />

  <h3 className="text-2xl font-extrabold text-white">Submit Your Idea</h3>
  <p className="mt-2 text-base text-indigo-100">
    Help us expand the library. Send us a prompt or a theme!
  </p>
  <a
    href="#cta"
    className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-zinc-100"
  >
    Get Started →
  </a>
</div>

    </div>
  </div>
</section>

 {/* 2. QUOTE / FEATURE BLOCK */}
<section className="relative">
  <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">

    <div className="relative grid gap-8 rounded-3xl bg-indigo-500 p-10 shadow-2xl lg:grid-cols-2 lg:p-16 overflow-hidden">

      {/* Decorative SVG (bottom-right) */}
      <img
        src="/flower5-svgrepo-com.svg"
        alt=""
        className="
          pointer-events-none
          absolute bottom-5 right-5
          translate-x-4 translate-y-4
          h-40 w-40 sm:h-52 sm:w-52
          opacity-[0.12]
          select-none
        "
        aria-hidden="true"
      />

      <div>
        <h2 className="text-6xl font-black leading-tight text-white lg:text-7xl">
          Reading the <br />
          <span className="text-indigo-100">Mind of an Artist.</span>
        </h2>
      </div>

      <div className="flex items-center">
        <blockquote className="border-l-4 border-white pl-6 text-xl font-medium italic text-white/90">
          <p>
            "When you're looking at a piece of concept art, what exactly is it that you're referencing,
            and what story does it whisper back?"
          </p>
          <footer className="mt-4 text-sm font-normal text-white/70">— The Director</footer>
        </blockquote>
      </div>

    </div>

  </div>
</section>


{/* 6. ABOUT / HOW IT WORKS - Minimal, Solid Colors, No Icons */}
<section id="about" className="relative pb-24 pt-10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Intro */}
    <div className="max-w-3xl ">
      <h2 className="text-4xl text-center sm:text-left font-extrabold tracking-tight sm:text-5xl text-zinc-900">
        How It Works
      </h2>
      
    </div>

    {/* Grid */}
    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Browse Collections */}
      <a
        href="#featured-gallery"
        className="group rounded-3xl bg-[#d97757] p-8 text-black shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <h3 className="text-2xl font-extrabold">Browse Collections</h3>
        <p className="mt-2 mb-16 text-base/relaxed text-black/90">
          Filter by mood, genre, or palette to find the right spark.
        </p>
        <span className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
          Start browsing →
        </span>
      </a>

      {/* Read Micro-Stories */}
      <a
        href="#stories"
        className="group rounded-3xl bg-[#bcd1ca] p-8 text-black shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <h3 className="text-2xl font-extrabold">Read Micro-Stories</h3>
        <p className="mt-2 mb-16 text-base/relaxed text-black/90">
          Short prompts that add mood and context to every piece.
        </p>
        <span className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
          Read the chronicle →
        </span>
      </a>

      {/* Contribute (Full Width) */}
      <div className="lg:col-span-2 rounded-3xl border-4 border-gray-900 bg-gray-700 p-12 text-white shadow-xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="sm:max-w-2xl">
            <h3 className="text-3xl font-extrabold">Contribute a Concept</h3>
            <p className="mt-2 text-lg text-zinc-200">
              Send a theme or prompt. We curate or generate new pieces and credit contributors.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center rounded-xl bg-white px-6 py-10 text-base font-bold text-zinc-900 transition hover:bg-zinc-100"
          >
            Submit your idea
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* 7. FINAL CTA */}
      <section id="cta" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-4 border-[#bcd1ca] bg-white p-2 shadow-2xl">
            <div className="rounded-[calc(theme(borderRadius.3xl)-8px)] bg-[#bcd1ca] p-10">
              <div className="grid items-center gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Ready to Contribute a Concept?
                  </h3>
                  <p className="mt-3 text-lg text-zinc-700">
                    Send a theme, mood, or seed line to the director. We're always looking for fresh inspiration!
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-end">
                  <a
                    href="mailto:hello@sundrop.valley"
                    className={`rounded-xl bg-[#acbfb8] px-6 py-10 text-base font-bold text-black shadow-lg transition`}
                  >
                    Email the Director
                  </a>
                  <a
                    href="#"
                    className="rounded-xl border-2 border-[#acbfb8] bg-white px-6 py-10 text-base font-bold text-zinc-800 transition hover:bg-zinc-100"
                  >
                    Submit via Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER — subtle + fun, no SVGs, solid colors */}
<footer className="relative border-t border-zinc-300 ">
  {/* Corner confetti blocks (solid colors, very light) */}
  <div
    className="pointer-events-none absolute -top-3 right-6 h-3 w-3 rotate-12 rounded-md bg-indigo-500/15"
    aria-hidden="true"
  />
  <div
    className="pointer-events-none absolute -top-3 right-10 h-2 w-2 -rotate-6 rounded-sm bg-amber-500/20"
    aria-hidden="true"
  />
  <div
    className="pointer-events-none absolute -top-3 right-14 h-2.5 w-2.5 rotate-3 rounded-sm bg-cyan-500/20"
    aria-hidden="true"
  />

  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">


    {/* Main grid */}
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {/* Brand + blurb */}
      <div>
        <p className="text-lg font-extrabold tracking-tight text-zinc-900">SUNDROP VALLEY</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600">
          A tidy little library of directed art. Browse collections, borrow vibes, make something you love.
        </p>

        {/* Tiny status row (CSS-only pulse using opacity, no keyframes) */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500 opacity-80" aria-hidden />
          <span className="text-xs font-medium text-zinc-700">Open for submissions</span>
        </div>
      </div>

      {/* Site map as playful pills */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-zinc-700">Explore</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50"
             href="/">Home</a>
          <a className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50"
             href="/collections">Collections</a>
          <a className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50"
             href="/gallery">Gallery</a>
          <a className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50"
             href="/about">About</a>
          <a className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50"
             href="#cta">Submit</a>
        </div>
      </div>

      {/* Fun actions (no icons, solid colors, emoji-only) */}
      <div>
  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-700">Do a thing</p>

  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
    <a
      href="mailto:hello@sundrop.valley"
      className="rounded-2xl border-2 border-indigo-300 bg-white px-4 py-6 text-sm font-bold text-zinc-900 text-center transition hover:bg-zinc-50"
    >
      Email the Director
    </a>

    <a
      href="/licensing"
      className="rounded-2xl border-2 border-amber-300 bg-white px-4 py-6 text-sm font-bold text-zinc-900 text-center transition hover:bg-zinc-50"
    >
      Licensing Notes
    </a>

    <a
      href="/credits"
      className="rounded-2xl border-2 border-cyan-300 bg-white px-4 py-6 text-sm font-bold text-zinc-900 text-center transition hover:bg-zinc-50"
    >
      Credits & Thanks
    </a>
  </div>
</div>

    </div>

    {/* Bottom bar */}
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-600 sm:flex-row">
      <p>
        © 2025 Sundrop Valley • <span className="font-medium text-zinc-700">Free inspirations for artists</span>
      </p>
      <div className="flex items-center gap-4">
        <a href="/terms" className="rounded-full px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900">Terms</a>
        <a href="/privacy" className="rounded-full px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900">Privacy</a>
        <a href="mailto:hello@sundrop.valley" className="rounded-full px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900">Contact</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
