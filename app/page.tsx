const menuItems = [
  { label: "Domu", href: "#" },
  { label: "O projektu", href: "#obsah" },
  { label: "Kontakt", href: "#paticka" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a className="text-lg font-semibold tracking-[0.2em] uppercase" href="#">
            Butech
          </a>

          <nav aria-label="Hlavni menu">
            <ul className="flex items-center gap-6 text-sm text-slate-300">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="obsah"
        className="mx-auto flex min-h-[calc(100vh-145px)] max-w-6xl items-center px-6 py-24"
      >
        <section className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Jednoducha kostra
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Staticky web v Next.js pripraveny pro GitHub Pages.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tohle je vychozi struktura s hornim menu, hlavnim obsahem a patickou.
            Odsud muzes doplnit dalsi sekce nebo upravit styl podle projektu.
          </p>
        </section>
      </main>

      <footer
        id="paticka"
        className="border-t border-white/10 bg-slate-950/90"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-slate-400">
          <p>© 2026 Butech</p>
          <p>Next.js + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
