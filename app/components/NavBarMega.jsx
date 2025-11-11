import { useState } from 'react';

// Fixing the "next/link" dependency error by defining a simple Link component
// that renders a standard anchor tag.
const Link = ({ href, children, className, onClick }) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

// Lucide icons defined as inline SVG for cross-compatibility
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);


export default function NavBarMega({ COLORS = {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Collections" }, // Collections as a simple link for mobile
  ];

  const collections = [
    { tag: "WARM DUSK", title: "Sundrop Reveries", color: "bg-amber-100", href: "/collections/sundrop-reveries" },
    { tag: "DREAMCORE", title: "Valley of Paper Moons", color: "bg-indigo-100", href: "/collections/valley-of-paper-moons" },
    { tag: "INDUSTRIAL", title: "Dieselpunk Retrofuture", color: "bg-zinc-100", href: "/collections/dieselpunk-retrofuture" },
    { tag: "WHIMSY", title: "Lemon Cloud Rider", color: "bg-cyan-100", href: "/collections/lemon-cloud-rider" },
    { tag: "GRIT & FAITH", title: "Rusty Chapel", color: "bg-teal-100", href: "/collections/rusty-chapel" },
    { tag: "SCI-FANTASY", title: "Sunlit Orchard Android", color: "bg-amber-100", href: "/collections/sunlit-orchard-android" },
  ];

  const primaryColorClasses = COLORS?.Primary ?? "bg-indigo-600 hover:bg-indigo-700";

  return (
    // REMOVED 'backdrop-blur-md' to make the header completely solid white
    <header className="sticky sm:py-4 max-w-7xl mx-auto sm:rounded-2xl sm:top-10 z-30 border-b border-zinc-200/60 bg-white/60 backdrop-blur-md">
      {/* --- DESKTOP/TABLET NAVIGATION (MD+) --- */}
      <div className="mx-auto flex h-16 max-w-7xl  items-center justify-between px-4 sm:px-6 lg:px-8 relative">

        {/* 1. LEFT: Brand/Logo */}
        <Link href="/" className="group inline-flex items-center gap-3 z-10">
          <span className="text-xl font-extrabold tracking-tight text-zinc-900">SUNDROP VALLEY</span>
        </Link>

        {/* 2. CENTER: Navigation Links and Mega Menu (Desktop Only) */}
        <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 z-0">
          
          {/* Regular items */}
          {navItems.slice(0, 3).map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-semibold text-zinc-800 hover:text-zinc-900">
              {n.label}
            </Link>
          ))}

          {/* Collections (mega menu - Desktop only) */}
          <div className="relative group">
            <Link
              href="/collections"
              className="text-sm font-semibold text-zinc-800 hover:text-zinc-900"
            >
              Collections
              <span aria-hidden className="ml-1 inline-block align-middle">▾</span>
            </Link>

            {/* MEGA PANEL */}
            <div
              className={[
                "invisible absolute left-1/2 top-full z-30 w-[min(100vw,72rem)] -translate-x-1/2",
                "rounded-3xl bg-white shadow-2xl",
                "opacity-0 transition duration-200 ease-out",
                "group-hover:visible group-hover:opacity-100"
              ].join(" ")}
            >
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-zinc-700">
                    Browse curated collections. No clutter—just solid colors & bold type.
                  </p>
                  <Link
                    href="/collections"
                    className="whitespace-nowrap rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    View all
                  </Link>
                </div>

                {/* Tall grid; big cards; scroll if needed on small screens */}
                <div className="grid max-h-[420px] grid-cols-1 gap-4 overflow-y-auto rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
                  {collections.map((c) => (
                    <Link
                      key={c.title}
                      href={c.href}
                      className={[
                        "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4",
                        "hover:-translate-y-0.5 hover:shadow-lg transition"
                      ].join(" ")}
                    >
                      <div className={["relative aspect-[5/3] w-full rounded-xl", c.color].join(" ")} />
                      <div className="mt-4">
                        <span className="text-[10px] font-black tracking-widest text-zinc-500">{c.tag}</span>
                        <h4 className="mt-1 text-lg font-extrabold text-zinc-900">{c.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* 3. RIGHT: CTA Button (Desktop Only) */}
        <Link
          href="#cta"
          className={[
            "hidden md:block rounded-lg px-4 py-4 text-sm font-semibold text-white transition ",
            primaryColorClasses
          ].join(" ")}
        >
          Submit Concept
        </Link>
        
        {/* --- MOBILE MENU TOGGLE (MD-) --- */}
        <div className="md:hidden flex items-center gap-3 z-10">
           {/* Mobile Submit Concept Button */}
           <Link
              href="#cta"
              className={[
                "rounded-lg px-3 py-1.5 text-sm font-semibold text-white transition",
                primaryColorClasses
              ].join(" ")}
            >
              Submit
            </Link>

            {/* Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-full bg-zinc-100/70 hover:bg-zinc-200 transition"
            >
                {isMenuOpen ? <XIcon className="h-5 w-5 text-zinc-800" /> : <MenuIcon className="h-5 w-5 text-zinc-800" />}
            </button>
        </div>
      </div>

      {/* --- MOBILE FULL-SCREEN MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 p-6 flex flex-col items-start space-y-4 md:hidden">
          <nav className="flex flex-col w-full space-y-2">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-extrabold text-zinc-900 py-3 block hover:text-indigo-600 transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          
          <div className="w-full pt-8">
            <Link
              href="#cta"
              onClick={() => setIsMenuOpen(false)}
              className={[
                "block w-full text-center py-4 text-white text-lg font-semibold rounded-xl transition",
                primaryColorClasses
              ].join(" ")}
            >
              Submit Concept
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}