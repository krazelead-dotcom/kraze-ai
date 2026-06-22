import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  X
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { faqs, pillars, pricingPlans, services, stats, testimonials } from "./data.js";

const navItems = ["Services", "Solutions", "Demo", "Pricing", "FAQ"];

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-signal">
      <Sparkles size={14} />
      {children}
    </span>
  );
}

function Button({ children, className = "", variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-signal text-obsidian shadow-glow hover:bg-white"
      : "border border-white/12 bg-white/8 text-white hover:bg-white/14";

  return (
    <a
      href="#booking"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-obsidian/78 backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal text-sm font-black text-obsidian shadow-glow">
            K
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white">KRAZE AI</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/68 hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="min-h-10 px-4">Get Free Consultation</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/8 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/8 bg-obsidian/95 md:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/78 hover:bg-white/8"
              >
                {item}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="animate-slideUp">
          <Badge>KRAZE AI</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            AI Systems That Turn Your Business Into a Customer Machine
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            We build AI automation + websites that get you leads, bookings, and sales.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">
            Book a free strategy call and see how AI can automate your business in 24 hours.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button>Get Free Consultation <ArrowRight size={18} /></Button>
            <Button variant="secondary" className="text-white">Get Free Consultation</Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {pillars.map(({ label, icon: Icon }) => (
              <div key={label} className="glass flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-white/80">
                <Icon size={17} className="text-signal" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-float">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-signal/20 via-ion/10 to-ember/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-2xl p-4 shadow-panel">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Live command center</p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">KRAZE AI Assistant</h2>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-signal/14 px-3 py-1 text-xs font-bold text-signal">
                <span className="h-2 w-2 rounded-full bg-signal animate-pulseSoft" />
                Online
              </span>
            </div>
            <div className="grid gap-4 py-5">
              <div className="rounded-xl bg-white/8 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">New lead</p>
                <p className="mt-2 text-white">Detail Pro Studio needs more recurring customers.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-obsidian/54 p-4">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/45">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-signal/20 bg-signal/10 p-4">
                <p className="text-sm font-semibold text-signal">AI action queued</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Capture contact details, offer two appointment slots, then send a follow-up if no response after 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad">
      <Container>
        <div className="max-w-2xl">
          <Badge>Services</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">AI systems built around your revenue workflow.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, price, icon: Icon }) => (
            <article key={title} className="glass group rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-signal/12 text-signal">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/62">{description}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-display text-lg font-bold text-white">{price}</span>
                <a href="#problem-solver" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-signal hover:text-obsidian">
                  Get Free Consultation <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProblemSolverForm() {
  const fields = ["Business Name", "Industry", "Main Problem", "Current Website", "Email", "Phone Number"];

  return (
    <section id="solutions" className="section-pad">
      <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <Badge>Problem solver</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">Tell the AI what is slowing your business down.</h2>
          <p className="mt-5 text-base leading-7 text-white/64">
            Tell us what you need fixed and we will map the best AI solution.
          </p>
        </div>
        <form id="problem-solver" className="glass grid gap-4 rounded-2xl p-5 sm:grid-cols-2 sm:p-6">
          {fields.map((field) => {
            const isLarge = field === "Main Problem";
            const isWebsite = field === "Current Website";
            return (
              <label key={field} className={`grid gap-2 ${isLarge ? "sm:col-span-2" : ""}`}>
                <span className="text-sm font-semibold text-white/78">{field}</span>
                {isLarge ? (
                  <textarea
                    rows="5"
                    placeholder="What should AI fix first?"
                    className="min-h-32 resize-none rounded-lg border border-white/10 bg-obsidian/72 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-signal/60"
                  />
                ) : (
                  <input
                    type={field === "Email" ? "email" : field === "Phone Number" ? "tel" : "text"}
                    placeholder={isWebsite ? "Paste your website, or type 'I need one'" : field}
                    className="h-12 rounded-lg border border-white/10 bg-obsidian/72 px-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-signal/60"
                  />
                )}
                {isWebsite ? (
                  <span className="text-xs leading-5 text-white/46">
                    No website yet? KRAZE AI can build your site with lead capture, booking, and AI chat already included.
                  </span>
                ) : null}
              </label>
            );
          })}
          <div className="rounded-lg border border-ion/20 bg-ion/10 px-4 py-3 text-sm leading-6 text-white/72 sm:col-span-2">
            Already have a website? We can add AI to it. Need a website? We can build the full website + AI system for you.
          </div>
          <button type="button" className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-signal px-5 text-sm font-black text-obsidian transition hover:bg-white sm:col-span-2">
            Get Free Consultation <Send size={17} />
          </button>
        </form>
      </Container>
    </section>
  );
}

function Booking() {
  const slots = ["Today, 2:30 PM", "Tomorrow, 10:00 AM", "Friday, 1:15 PM"];

  return (
    <section id="booking" className="section-pad">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="glass rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-semibold text-signal">Free AI consultation</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-white">Request a strategy call</h2>
            </div>
            <CalendarDays className="text-signal" size={32} />
          </div>
          <div className="mt-5 grid gap-3">
            {slots.map((slot, index) => (
              <button
                key={slot}
                type="button"
                className={`flex items-center justify-between rounded-lg border px-4 py-4 text-left transition ${
                  index === 1 ? "border-signal/45 bg-signal/12" : "border-white/10 bg-white/6 hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-3 text-sm font-bold text-white">
                  <Clock3 size={18} className="text-signal" />
                  {slot}
                </span>
                <Check size={18} className={index === 1 ? "text-signal" : "text-white/26"} />
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <input placeholder="Your name" className="h-12 rounded-lg border border-white/10 bg-obsidian/72 px-4 text-sm text-white outline-none focus:border-signal/60" />
            <input placeholder="Business email" className="h-12 rounded-lg border border-white/10 bg-obsidian/72 px-4 text-sm text-white outline-none focus:border-signal/60" />
          </div>
          <button type="button" className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-signal font-black text-obsidian transition hover:bg-white">
            Get Free Consultation <ArrowRight size={18} />
          </button>
        </div>
        <div>
          <Badge>Scheduling UI</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">Let leads book while their intent is highest.</h2>
          <p className="mt-5 text-base leading-7 text-white/64">
            Automatically qualifies leads and books them into appointments without manual work.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ChatDemo() {
  return (
    <section id="demo" className="section-pad">
      <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <Badge>AI chat demo</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">A homepage chatbot that turns questions into booked work.</h2>
        </div>
        <div className="glass overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="font-display font-bold text-white">KRAZE AI Chat</p>
              <p className="text-xs text-white/45">Demo conversation</p>
            </div>
            <span className="rounded-full bg-signal/14 px-3 py-1 text-xs font-bold text-signal">Typing ready</span>
          </div>
          <div className="grid gap-4 p-5">
            <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm font-medium leading-6 text-obsidian">
              I need more customers for my detailing business.
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-signal/20 bg-signal/12 px-4 py-3 text-sm leading-6 text-white">
              I can automate lead capture, appointment booking, and follow-ups for your business.
            </div>
            <div className="grid gap-2 rounded-xl border border-white/10 bg-obsidian/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">Suggested workflow</p>
              {["Ask service area and vehicle type", "Offer booking slots", "Send reminder and reactivation follow-up"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/72">
                  <Check size={16} className="text-signal" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="section-pad">
      <Container>
        <div className="mb-10 max-w-2xl">
          <Badge>Dashboard</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">See every lead, booking, and automation in one place.</h2>
        </div>
        <div className="glass rounded-2xl p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-obsidian/60 p-5">
                <p className="text-sm text-white/48">{stat.label}</p>
                <p className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-bold text-signal">{stat.delta}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-white/10 bg-obsidian/60 p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-lg font-bold text-white">Lead volume</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Last 7 days</p>
              </div>
              <div className="flex h-48 items-end gap-3">
                {[44, 62, 51, 76, 68, 91, 84].map((height, index) => (
                  <div key={height + index} className="flex flex-1 items-end rounded-lg bg-white/6">
                    <div className="w-full rounded-lg bg-gradient-to-t from-signal to-ember" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-obsidian/60 p-5">
              <p className="font-display text-lg font-bold text-white">Automation queue</p>
              <div className="mt-5 grid gap-3">
                {["New lead reply sent", "Consultation reminder queued", "Support ticket routed", "Follow-up sequence active"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-white/7 px-4 py-3">
                    <span className="text-sm text-white/72">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-signal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad">
      <Container>
        <Badge>Testimonials</Badge>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass rounded-xl p-6">
              <p className="text-sm leading-7 text-white/70">"{item.quote}"</p>
              <p className="mt-5 font-bold text-white">{item.name}</p>
              <p className="text-sm text-white/42">{item.role}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <Container>
        <div className="max-w-2xl">
          <Badge>Pricing</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">Start with the system your business needs now.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`rounded-xl p-6 ${plan.featured ? "border border-signal/45 bg-signal/12 shadow-glow" : "glass"}`}>
              <p className="font-display text-xl font-bold text-white">{plan.name}</p>
              <p className="mt-4 font-display text-4xl font-bold text-white">{plan.price}</p>
              <p className="mt-3 min-h-14 text-sm leading-6 text-white/62">{plan.summary}</p>
              <div className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm text-white/72">
                    <Check size={16} className="text-signal" />
                    {feature}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WebsiteAiBundle() {
  const websitePlans = [
    {
      name: "Starter Website",
      description: "Simple landing page + contact form",
      price: "$100–$300"
    },
    {
      name: "Growth Website",
      tag: "Most Popular",
      description: "Full website + AI chatbot + lead capture + booking system",
      price: "$500–$900",
      featured: true
    },
    {
      name: "Pro AI Website",
      description: "Full system + automation + follow-ups + smart AI replies",
      price: "$1000–$1500"
    }
  ];

  return (
    <section className="section-pad">
      <Container>
        <div className="glass relative overflow-hidden rounded-2xl p-6 text-center sm:p-8 lg:p-10">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-ion to-transparent" />
          <Badge>Website + AI bundle</Badge>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl">
            Don't Have a Website? We Build One With AI Built-In
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/70">
            Most businesses without websites use this as their complete online system.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/64">
            We create high-converting websites with AI systems that capture leads, answer customers, and book appointments automatically.
            Perfect for businesses that want more customers without manual work.
          </p>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
            {websitePlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-xl p-6 transition duration-300 hover:-translate-y-1 ${
                  plan.featured ? "border border-ion/55 bg-ion/12 shadow-glow" : "border border-white/10 bg-obsidian/60"
                }`}
              >
                <div className="flex min-h-14 items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-white">
                    {plan.name}
                    {plan.tag ? <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-ion">{plan.tag}</span> : null}
                  </h3>
                  {plan.featured ? <Sparkles size={20} className="shrink-0 text-ion" /> : null}
                </div>
                <p className="mt-4 min-h-16 text-sm leading-6 text-white/64">{plan.description}</p>
                <p className="mt-4 font-display text-2xl font-bold text-white">{plan.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ion px-6 text-sm font-black text-obsidian shadow-glow transition hover:bg-white"
            >
              Get Free Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Badge>FAQ</Badge>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">Questions before the first call.</h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass group rounded-xl p-5">
              <summary className="cursor-pointer list-none font-display text-lg font-bold text-white">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-white/64">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-display text-2xl font-bold text-white">KRAZE AI</p>
        </div>
        <div className="grid gap-3 text-sm text-white/68">
          <a href="mailto:krazelead@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail size={16} /> krazelead@gmail.com</a>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="noise" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WebsiteAiBundle />
        <ProblemSolverForm />
        <Booking />
        <ChatDemo />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Contact />
    </>
  );
}
