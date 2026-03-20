import Image from "next/image";

const services = [
  {
    title: "IT Infrastructure Modernization",
    description:
      "Design and implement scalable cloud-first environments with Microsoft 365, Azure, Intune, and hybrid identity across multi-site operations.",
  },
  {
    title: "Security and Compliance Operations",
    description:
      "Strengthen security posture with endpoint protection, policy enforcement, auditing, and compliance-aligned controls for enterprise systems.",
  },
  {
    title: "Business Systems and Automation",
    description:
      "Build AI-powered workflow automations and integrated reporting with Power Automate, SharePoint, and Power BI to reduce manual work, accelerate decisions, and improve KPI visibility.",
  },
];

const techStack = [
  "Microsoft 365",
  "Azure",
  "Intune",
  "SharePoint",
  "Power Automate",
  "Power BI",
  "Exchange",
  "Active Directory",
  "Hyper-V",
  "SentinelOne",
  "Arctic Wolf",
  "Microsoft Sentinel",
  "ServiceNow",
  "Atera",
  "Meraki",
  "UniFi",
  "Zapier",
  "HubSpot",
  "PowerShell",
];

const highlights = [
  "Led 8+ technology initiatives across operations, finance, and field services.",
  "Supported modernization for a 400+ user workforce across multiple branches.",
  "Built Power BI dashboards tracking 20+ operational KPIs in real time.",
  "Reduced IT asset loss by 82% through improved management controls.",
  "Reduced security incidents by 49% via policy and platform hardening.",
  "Cut onboarding from days to minutes using SharePoint and Power Automate.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-6 lg:flex">
        <div className="flex flex-col gap-5 text-slate-400">
          <a
            href="https://github.com/Racardo876"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/racardob/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="/test.pdf"
            download
            className="transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            aria-label="Download Resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
              <path d="M14 2v5a1 1 0 0 0 1 1h5" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </a>
        </div>
        <div className="h-24 w-px bg-slate-300" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Racardo <span className="text-blue-600">Brown</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-slate-600 hover:text-blue-600">
              Services
            </a>
            <a href="#highlights" className="text-slate-600 hover:text-blue-600">
              Highlights
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600">
              Contact
            </a>
            <a
              href="/test.pdf"
              download
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Available for new IT and cybersecurity projects
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block">Enterprise IT Solutions.</span>
              <span className="block text-blue-600">Secure. Automated. Scalable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              IT and Cybersecurity leader with 10+ years of experience delivering enterprise technology
              solutions across infrastructure, security, and business systems. I help organizations modernize
              operations with Microsoft ecosystems, automation, and data-driven decision support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Microsoft 365 and Azure</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Cybersecurity Operations</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Workflow Automation</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                Contact Me
              </a>
              <a
                href="/test.pdf"
                download
                className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/headshot.png"
                alt="Portrait of Racardo Brown"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="p-5">
                <p className="text-lg font-bold">Racardo Brown</p>
                <p className="text-sm text-slate-600">IT and Cybersecurity Leader</p>
                <p className="mt-2 text-sm text-slate-500">Port Saint Lucie, FL</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold tracking-tight">Services</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
              Strategic IT leadership focused on secure systems, modern infrastructure, and operational efficiency.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_45%)]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-8">
          <div className="tech-scroll flex w-max gap-10 px-4 text-lg font-medium">
            {techStack.concat(techStack).map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="cursor-default whitespace-nowrap text-slate-500 transition-colors hover:text-blue-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="highlights" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Career Highlights</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-extrabold">Let&apos;s work together.</h2>
              <p className="mt-4 text-slate-300">
                Reach out for IT leadership, cybersecurity improvements, and automation initiatives.
              </p>
              <div className="mt-8 space-y-3 text-slate-200">
                <p>Email: racardobrown@gmail.com</p>
                <p>Phone: 561.699.5006</p>
                <p>Location: Port Saint Lucie, Florida</p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-xl font-bold">Connect</h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:racardobrown@gmail.com"
                  className="rounded-md bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/racardob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-600 px-4 py-3 text-center font-medium text-slate-100 transition-colors hover:bg-slate-700"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Racardo876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-600 px-4 py-3 text-center font-medium text-slate-100 transition-colors hover:bg-slate-700"
                >
                  GitHub
                </a>
                <a
                  href="/test.pdf"
                  download
                  className="rounded-md border border-slate-600 px-4 py-3 text-center font-medium text-slate-100 transition-colors hover:bg-slate-700"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <p className="text-base text-slate-400">
            <span className="mr-1">©</span>
            <span>{new Date().getFullYear()}</span> Racardo Brown. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com/Racardo876"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/racardob/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="/test.pdf"
              download
              className="transition-colors hover:text-white"
              aria-label="Download Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
