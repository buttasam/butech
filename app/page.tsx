import Image from "next/image";
import { Building2, ChevronRight, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { SiteHeader } from "./components/site-header";

const companyDetails = [
  {
    label: "Údaje o společnosti",
    value: "BuTech s.r.o. (původně Butta Trade s.r.o.)"
  },
  { label: "IČ", value: "02850109" },
  {
    label: "DIČ / EORI",
    value: "CZ02850109\n(jsme měsíční plátce DPH)"
  },
  {
    label: "Adresa",
    value: "Pod turnovskou tratí 170/3, Hloubětín, 198 00 Praha 9"
  },
  { label: "Jednatel", value: "Jonáš Butta" },
  {
    label: "Kontakty",
    value: "+420 730 844 366\nbutech@butech.cz"
  },
  {
    label: "Datum vzniku a zápisu",
    value: "2. dubna 2014"
  },
  {
    label: "Spisová značka",
    value: "C 224591 vedená u Městského soudu v Praze"
  },
  {
    label: "Bankovní spojení",
    value: "Bankovní spojení pro platby v CZK v ČR:\n2900571262 / 2010"
  },
  { label: "IBAN", value: "CZ8320100000002900571262" },
  { label: "BIC kód / SWIFT", value: "FIOBCZPPXXX" },
  {
    label: "Adresa banky pro mezinárodní platby a platby v cizích měnách",
    value: "Fio banka, a.s., V Celnici 1028/10, Praha 1"
  },
  {
    label: "Právní zastoupení",
    value: "Advokátní kancelář Karel Fischer\nSídlo: Kaprova 42/14, 110 00 Praha 1"
  }
];

const projects = [
  {
    name: "TopSpy.cz",
    logo: "/butech-topspy-logo.svg",
    logoAlt: "TopSpy.cz logo",
    subtitle: "TopSpy.cz - detektivní technika",
    paragraphs: [
      "Specializovaný e-shop, kamenná prodejna a servis zaměřený na detektivní a bezpečnostní techniku.",
      "V nabídce naleznete široký sortiment zařízení pro ochranu majetku a informací – od odposlechů a záznamových zařízení přes miniaturní kamery až po GPS lokátory a detektory odposlechů.",
      "Poskytujeme odborné služby v oblasti bezpečnosti."
    ],
    services: [
      "profesionální vyhledávání odposlechů (TSCM prohlídky)",
      "kontrolu mobilních telefonů a počítačů na únik informací",
      "návrh a realizaci technických řešení na míru"
    ],
    closing:
      "Součástí je také záruční i pozáruční servis a odborné poradenství pro zákazníky.",
    href: "https://www.topspy.cz"
  },
  {
    name: "SatCar.cz",
    logo: "/butech-logo-satcar-cz.png",
    logoAlt: "SatCar.cz logo",
    subtitle: "SatCar.cz - sledování vozidel",
    paragraphs: [
      "Specializované řešení pro satelitní sledování vozidel, správu vozového parku a zabezpečení majetku.",
      "Nabízíme moderní GPS lokátory a systémy pro online sledování polohy, historii jízd a efektivní kontrolu provozu vozidel.",
      "Poskytujeme služby v oblasti sledování a zabezpečení."
    ],
    services: [
      "sledování vozidel v reálném čase (GPS monitoring)",
      "přehled tras, historie jízd a automatické reporty",
      "zabezpečení vozidel proti odcizení",
      "řešení pro firmy i jednotlivce"
    ],
    closing:
      "Součástí je odborné poradenství, instalace na míru a technická podpora.",
    href: "https://www.satcar.cz"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-(--surface) text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-12">
        <section id="kontakty">
          <div className="mx-auto max-w-5xl">
            <h2 className="brand-heading text-center text-2xl text-(--brand-green) sm:text-3xl">
              Kontakty
            </h2>
            <div className="mt-10 grid gap-x-12 gap-y-4 md:grid-cols-1">
              {companyDetails.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-(--brand-green)">
                    {label}
                  </div>
                  <div className="mt-1.5 whitespace-pre-line text-[0.92rem] leading-5.5 text-slate-700 sm:text-[0.96rem]">
                    {label === "Kontakty" ? (
                      <div className="space-y-1.5">
                        <a
                          className="inline-flex items-center gap-2 font-semibold transition hover:text-(--brand)"
                          href="tel:+420730844366"
                        >
                          <Phone size={14} strokeWidth={2} />
                          +420 730 844 366
                        </a>
                        <a
                          className="inline-flex items-center gap-2 font-semibold transition hover:text-(--brand)"
                          href="mailto:butech@butech.cz"
                        >
                          <Mail size={14} strokeWidth={2} />
                          butech@butech.cz
                        </a>
                      </div>
                    ) : label === "Adresa" ? (
                      <div className="inline-flex items-start gap-1.5 text-left">
                        <MapPin
                          size={14}
                          strokeWidth={2}
                          className="mt-1 shrink-0 text-(--brand)"
                        />
                        <span className="font-semibold text-slate-900">{value}</span>
                      </div>
                    ) : label === "Jednatel" ? (
                      <div className="inline-flex items-center gap-1.5">
                        <UserRound size={14} strokeWidth={2} className="text-(--brand)" />
                        <span className="font-semibold text-slate-900">{value}</span>
                      </div>
                    ) : label === "Údaje o společnosti" ? (
                      <div className="inline-flex items-start gap-1.5 text-left">
                        <Building2
                          size={14}
                          strokeWidth={2}
                          className="mt-1 shrink-0 text-(--brand)"
                        />
                        <span>
                          <span className="font-semibold text-slate-900">
                            {value.split("\n")[0]}
                          </span>
                          {value.includes("\n")
                            ? `\n${value.split("\n").slice(1).join("\n")}`
                            : ""}
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="font-semibold text-slate-900">
                          {value.split("\n")[0]}
                        </span>
                        {value.includes("\n") ? `\n${value.split("\n").slice(1).join("\n")}` : ""}
                      </>
                    )}
                  </div>
                  {label === "Právní zastoupení" ? (
                    <div className="mt-2 text-sm leading-6 text-slate-500">
                      <a
                        className="text-(--brand) transition hover:text-slate-700"
                        href="https://www.akfischer.cz/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.akfischer.cz/
                      </a>
                    </div>
                  ) : null}
                  {label === "Spisová značka" ? (
                    <div className="mt-1.5 inline-flex items-start gap-1 text-sm text-slate-500">
                      <ChevronRight
                        size={13}
                        strokeWidth={2}
                        className="mt-1 shrink-0 text-(--brand)"
                      />
                      <span>Zapsána u Městského soudu v Praze</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projekty" className="mt-16 border-t border-(--line) pt-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="brand-heading text-center text-2xl text-(--brand-green) sm:text-3xl">
              Naše projekty
            </h2>
            <div className="mt-8 space-y-12">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="border border-(--line) bg-white px-6 py-8 shadow-[0_18px_50px_rgba(8,50,72,0.06)] sm:px-10"
                >
                  <div className="flex flex-col items-center gap-8 text-center">
                    <div className="relative flex w-full max-w-[320px] shrink-0 items-center justify-center lg:max-w-[360px]">
                      <Image
                        src={project.logo}
                        alt={project.logoAlt}
                        width={360}
                        height={130}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="brand-heading text-2xl">{project.name}</h3>
                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {project.subtitle}
                      </p>
                      <div className="mt-6 space-y-4 text-left text-base leading-8 text-slate-700">
                        {project.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        <ul className="list-disc space-y-1 pl-6 marker:text-(--brand-green)">
                          {project.services.map((service) => (
                            <li key={service}>{service}</li>
                          ))}
                        </ul>
                        <p>{project.closing}</p>
                      </div>
                      <a
                        className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-(--brand)"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.href.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--line) bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 BuTech s.r.o.</p>
          <p>butech@butech.cz • +420 730 844 366</p>
        </div>
      </footer>
    </div>
  );
}
