"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const infoItems = [
  ["Age", "34 Years"],
  ["Job", "IT and Cybersecurity Leader"],
  ["Citizenship", "United States"],
  ["Address", "Port Saint Lucie, Florida"],
  ["Phone", "561.699.5006"],
  ["E-mail", "racardobrown@gmail.com"],
];

const skillProfessional = [
  ["Microsoft 365 and Azure", 95],
  ["Cybersecurity Operations", 90],
  ["Power Automate and SharePoint", 92],
  ["Power BI and Reporting", 88],
];

const skillPersonal = [
  ["Communication", 91],
  ["Leadership", 94],
  ["Team Work", 90],
  ["Project Delivery", 89],
];

const experience = [
  ["2025-Now", "CPM", "Senior Implementation Specialist", "Led 8+ initiatives across operations, finance, and field services, implementing automation and KPI dashboards."],
  ["2023-2025", "All American Shutter & Glass", "C.I.S Manager", "Directed cloud migration, security tooling, MDM rollout, and governance while improving cost efficiency."],
  ["2023", "Palm Beach Accountable Care Organization", "IT Manager", "Managed infrastructure, automated onboarding/offboarding, and improved reliability across systems."],
  ["2022-2023", "NationsBenefits", "Cybersecurity Analyst / Lead IT Support", "Strengthened security operations, incident response workflows, and enterprise support processes."],
];

const services = [
  [
    "Enterprise System and ERP Implementations",
    "Lead end-to-end deployments across operations, finance, and field services, aligning enterprise systems to business workflows and adoption goals.",
  ],
  [
    "Infrastructure Modernization and Cloud Migration",
    "Modernize legacy environments into secure, scalable Microsoft 365 and Azure-first architectures with strong identity, device, and access foundations.",
  ],
  [
    "Cybersecurity Operations and Governance",
    "Implement security controls, policy enforcement, auditing, and endpoint protection to reduce risk, improve compliance readiness, and strengthen resilience.",
  ],
  [
    "Workflow Automation and Integration",
    "Build automated workflows across SharePoint, Power Automate, HubSpot, and field platforms to reduce manual effort and improve process speed.",
  ],
  [
    "Power BI and Executive Reporting",
    "Design KPI dashboards and centralized reporting models that provide leadership with real-time operational visibility and decision support.",
  ],
  [
    "IT Strategy, Process Design, and Delivery",
    "Partner with cross-functional leadership to standardize technology processes, manage timelines and risks, and drive successful organization-wide rollouts.",
  ],
];

const education = [
  ["2023-2024", "Nova Southeastern University", "M.S. Cybersecurity Management"],
  ["2023", "Florida International University", "Project Management Certificate"],
  ["2022", "Cisco", "CCNA Enterprise Networking, Security, and Automation"],
  ["2024", "TestOut", "Security Pro Certification"],
];

const portfolioProjects = [
  {
    title: "YaadHelp",
    url: "https://yaadhelp.com/",
    tag: "Web app",
    description:
      "Marketplace to find trusted local service providers across Jamaica—plumbing, electrical, cleaning, landscaping, and more.",
    image: "https://yaadhelp.com/og-logo.png",
    imageAlt: "YaadHelp — Find trusted help across Jamaica",
  },
  {
    title: "FieldMint",
    url: "https://fieldmint.ai/",
    tag: "Web app",
    description:
      "Field service management for teams: jobs, scheduling, crews, proposals, and billing—aligned with enterprise field operations.",
    image:
      "https://storage.googleapis.com/gpt-engineer-file-uploads/LmU1BduCzdT8BMXYenEPu8TZziu2/social-images/social-1774632852425-82f210246_logo.webp",
    imageAlt: "FieldMint field service dashboard",
  },
] as const;

const testimonials = [
  {
    image: "/testimonial-ceo.png",
    name: "Matthew Levinson",
    title: "CEO",
    quote:
      "Racardo implemented scalable systems and security controls that improved efficiency, reduced risk, and brought structure to our IT operations.",
  },
  {
    image: "/testimonial-mark-scott.png",
    name: "Mark Scott",
    title: "Director of Information Technology",
    quote:
      "Racardo streamlined our infrastructure and automation processes, drastically reducing onboarding time and improving overall system efficiency.",
  },
  {
    image: "/testimonial-cfo-v2.png",
    name: "Patricia L Sines - CPA",
    title: "Chief Financial Officer",
    quote:
      "Racardo implemented solutions that improved efficiency, reduced unnecessary spend, and gave us better control over our technology environment.",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".mcard-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="mcard-shell min-h-screen text-slate-900">
      <button className="mcard-menu-btn" aria-label="menu">≡</button>

      <header className="mcard-hero" id="home">
        <div className="mcard-hero-overlay" />
      </header>

      <main className="mx-auto max-w-[1120px] px-4 pb-16">
        <section className="-mt-16 text-center mcard-reveal">
          <div className="relative mx-auto h-28 w-28 rounded-full border-[8px] border-[#ececec] bg-white shadow-lg">
            <Image src="/headshot.png" alt="Racardo Brown" fill className="rounded-full object-cover" />
          </div>
          <a href="mailto:racardobrown@gmail.com" className="mcard-plus-btn" aria-label="email plus">
            +
          </a>
          <h1 className="mt-3 text-[64px] leading-none font-light text-slate-700">Racardo Brown</h1>
          <p className="mt-2 text-lg text-slate-500">IT / Cybersecurity Leader & Automation Specialist</p>
          <div className="mt-5 flex justify-center gap-3">
            <a className="mcard-social" href="https://www.linkedin.com/in/racardob/" target="_blank" rel="noopener noreferrer">in</a>
            <a className="mcard-social" href="https://github.com/Racardo876" target="_blank" rel="noopener noreferrer">gh</a>
            <a className="mcard-social" href="mailto:racardobrown@gmail.com">@</a>
            <a className="mcard-social" href="/rb-resume.pdf" download>cv</a>
          </div>
        </section>

        <section id="about" className="mcard-panel mt-10 mcard-reveal">
          <div className="grid gap-5 md:grid-cols-2">
            <ul className="text-base">
              {infoItems.map(([k, v]) => (
                <li key={k} className="mcard-info-row">
                  <span className="mcard-tag">{k}:</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <div className="text-base text-slate-600">
              <p className="font-semibold text-slate-700">Hello! I&apos;m Racardo Brown</p>
              <p className="mt-3">
                I drive infrastructure modernization and lead enterprise system and ERP deployments that align
                technology with business operations. From architecture to implementation, I ensure organizations
                operate on scalable, secure, and data-driven platforms.
              </p>
              <p className="mt-3">
                My focus spans cybersecurity, Microsoft ecosystems, and full-lifecycle technology delivery,
                enabling leadership with the visibility and control needed to scale effectively.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="/rb-resume.pdf" download className="mcard-btn mcard-btn-primary">Download CV</a>
                <a href="#contact" className="mcard-btn">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Skills</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel text-left">
              <div className="mcard-icon-badge">⚙</div>
              <h3 className="mcard-subtitle mt-8">Professional</h3>
              <ul className="mt-5 space-y-3">
                {skillProfessional.map(([name, level]) => (
                  <li key={String(name)}>
                    <div className="mb-1 text-base text-slate-700">{name}</div>
                    <div className="mcard-progress"><span style={{ width: `${level}%` }} /></div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="mcard-panel text-left">
              <div className="mcard-icon-badge">👤</div>
              <h3 className="mcard-subtitle mt-8">Personal</h3>
              <ul className="mt-5 space-y-3">
                {skillPersonal.map(([name, level]) => (
                  <li key={String(name)}>
                    <div className="mb-1 text-base text-slate-700">{name}</div>
                    <div className="mcard-progress"><span style={{ width: `${level}%` }} /></div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="experience" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Experience</h2>
          <div className="mcard-timeline-center mt-10">
            {experience.map((item, i) => (
              <article key={item[1]} className={`mcard-timeline-row ${i % 2 ? "right" : "left"}`}>
                <div className="mcard-timeline-card">
                  <h3 className="font-semibold text-slate-700">{item[1]}</h3>
                  <p className="text-xs text-slate-500">{item[2]}</p>
                  <p className="mt-2 text-base text-slate-600">{item[3]}</p>
                </div>
                <span className="mcard-date-badge">{item[0]}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map(([title, text]) => (
              <article key={String(title)} className="mcard-panel text-left">
                <div className="mcard-icon-badge">●</div>
                <h3 className="mcard-subtitle mt-8">{title}</h3>
                <p className="mt-3 text-base text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Education</h2>
          <div className="mcard-timeline-center mt-10">
            {education.map((item, i) => (
              <article key={item[2]} className={`mcard-timeline-row ${i % 2 ? "right" : "left"}`}>
                <div className="mcard-timeline-card">
                  <h3 className="font-semibold text-slate-700">{item[1]}</h3>
                  <p className="text-base text-slate-600">{item[2]}</p>
                </div>
                <span className="mcard-date-badge">{item[0]}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Portfolio</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base text-slate-600">
            Live web applications I built—open each project to explore the full experience.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mcard-panel group block overflow-hidden p-0 text-left transition-shadow hover:shadow-md"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-500">{project.tag}</p>
                  <h3 className="font-semibold text-slate-700">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                    Visit site →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Clients</h2>
          <article className="mcard-panel mt-8">
            <div key={activeTestimonial} className="mcard-testimonial-slide">
              <Image src={currentTestimonial.image} alt={currentTestimonial.name} width={96} height={96} className="mx-auto h-20 w-20 rounded-full object-cover" />
              <p className="mt-3 text-sm italic text-slate-600">
                — {currentTestimonial.name}, {currentTestimonial.title}
              </p>
              <p className="mt-3 text-sm text-slate-500">{currentTestimonial.quote}</p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${idx === activeTestimonial ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>
          </article>
        </section>

        <section className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Pricing</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Basic", "15", ["UI/UX Design", "Web Development", "IOS Application", "Android Application"]],
              ["Start-Up", "29", ["UI/UX Design", "Web Development", "IOS Application", "Android Application"]],
              ["Business", "49", ["UI/UX Design", "Web Development", "IOS Application", "Android Application"]],
              ["Enterprise", "89", ["UI/UX Design", "Web Development", "IOS Application", "Android Application"]],
            ].map(([name, rate, features], idx) => (
              <article key={String(name)} className="mcard-panel p-4">
                <div className="mcard-icon-badge">▭</div>
                <h3 className="mt-8 text-lg font-light text-slate-700">{name}</h3>
                <p className="mt-1 text-5xl font-semibold text-slate-800">
                  <span className="mr-1 text-base align-top font-normal">$</span>
                  {rate}
                  <span className="ml-1 text-base align-middle font-normal">/hr</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {(features as string[]).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full py-2 text-sm ${idx === 2 ? "mcard-btn" : "mcard-btn mcard-btn-primary"}`}>Buy Now</button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Blog</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel overflow-hidden p-0 text-left">
              <Image src="/blog1.png" alt="Blog post 1" width={900} height={520} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-700">Operational Automation Playbook</h3>
                <p className="mt-2 text-sm text-slate-600">How to reduce manual process bottlenecks with secure workflow automation.</p>
                <button className="mcard-btn mcard-btn-primary mt-4">Read more</button>
              </div>
            </article>
            <article className="mcard-panel overflow-hidden p-0 text-left">
              <Image src="/blog2.png" alt="Blog post 2" width={900} height={520} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-700">Security Operations in Hybrid Teams</h3>
                <p className="mt-2 text-sm text-slate-600">Practical controls for endpoint visibility, identity, and governance.</p>
                <button className="mcard-btn mcard-btn-primary mt-4">Read more</button>
              </div>
            </article>
          </div>
          <button className="mcard-btn mcard-btn-primary mt-6">View Blog</button>
        </section>

        <section className="mt-14 text-center">
          <h2 className="mcard-section-title">Text Section</h2>
          <article className="mcard-panel mt-8 text-left text-sm text-slate-600">
            <p>
              I focus on practical transformation: modern cloud-first architecture, mature security processes,
              and automation that improves execution across operations and leadership.
            </p>
            <p className="mt-3">
              My goal is to align people, process, and technology for durable business outcomes.
            </p>
          </article>
        </section>

        <section id="contact" className="mt-14 text-center mcard-reveal">
          <h2 className="mcard-section-title">Contact Me</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel text-left text-sm">
              <div className="space-y-3 border-b border-slate-200 pb-4">
                <p><span className="mcard-tag">Address:</span> Port Saint Lucie, Florida</p>
                <p><span className="mcard-tag">Phone:</span> 561.699.5006</p>
                <p><span className="mcard-tag">E-mail:</span> racardobrown@gmail.com</p>
              </div>
              <div className="relative mt-4 h-48 overflow-hidden rounded-sm">
                <Image src="/map-main.webp" alt="Map" fill className="object-cover" />
              </div>
            </article>
            <article className="mcard-panel text-left">
              <h3 className="text-3xl font-light text-slate-600">Write a message:</h3>
              <form className="mt-6 space-y-4">
                <input className="mcard-input" type="text" placeholder="Your Name" />
                <input className="mcard-input" type="email" placeholder="Your Email" />
                <input className="mcard-input" type="text" placeholder="Subject" />
                <textarea className="mcard-input" rows={4} placeholder="Message" />
                <button type="button" className="mcard-btn mcard-btn-primary">Send Message</button>
              </form>
            </article>
          </div>
        </section>
      </main>

      <footer className="pb-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} mCard style rebuild by Racardo Brown.
      </footer>
    </div>
  );
}
