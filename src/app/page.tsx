import Navbar from "@/components/Navbar";
import {
  Zap,
  ShieldCheck,
  Users,
  Cpu,
  Cable,
  Gauge,
  Radio,
  Flame,
  BatteryCharging,
  Network,
  Phone,
  MapPin,
  Mail,
  Award,
  HardHat,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Zap,
    title: "Electrical Installations",
    desc: "Complete electrical system design and installation for industrial and commercial facilities.",
  },
  {
    icon: Gauge,
    title: "Motor Controls",
    desc: "Precision motor control systems, VFDs, and starters for heavy industrial applications.",
  },
  {
    icon: BatteryCharging,
    title: "Medium & High Voltage",
    desc: "Certified terminations and splicing for medium and high-voltage distribution systems.",
  },
  {
    icon: Cpu,
    title: "PLC Installation & Troubleshooting",
    desc: "Programmable logic controller integration, programming, and diagnostics for automated processes.",
  },
  {
    icon: Cable,
    title: "Instrumentation",
    desc: "Industrial instrumentation calibration, installation, and process control solutions.",
  },
  {
    icon: Network,
    title: "Fiber & Communications",
    desc: "Fiber optic cabling, structured network infrastructure, and communication system installation.",
  },
  {
    icon: Radio,
    title: "Communications Systems",
    desc: "Facility communication networks, intercom systems, and data infrastructure.",
  },
  {
    icon: Flame,
    title: "Heat Trace",
    desc: "Electric heat tracing systems for freeze protection, temperature maintenance, and process heating.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ========== HERO ========== */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/landing.jpg')" }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-950/70" />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            United Electrical Installations, INC.
          </p>
          <h1 className="mb-6 text-7xl font-black tracking-tight text-white sm:text-8xl lg:text-9xl">
            UEI
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Industrial electrical expertise backed by 60+ years of combined
            experience. Precision installations, PLC systems, and high-voltage
            solutions across Oklahoma, Kansas, and beyond.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded border border-slate-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-200 transition-all hover:border-white hover:text-white"
            >
              About Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              ISNetworld Member
            </span>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-orange-400" />
              BBB Accredited
            </span>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <span className="flex items-center gap-2">
              <HardHat className="h-4 w-4 text-orange-400" />
              60+ Years Experience
            </span>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Who We Are
              </p>
              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Built on Six Decades of Hands-On Expertise
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                United Electrical Installations, INC. is a professional
                electrical contracting partnership with over 60 years of
                combined field experience. We deliver highly skilled, certified
                technicians to residential, commercial, and industrial
                projects&mdash;with a particular focus on the specialized
                demands of industrial facilities.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                From PLC programming and instrumentation to medium- and
                high-voltage terminations, UEI brings a depth of expertise that
                sets us apart from standard electrical contractors. We don&apos;t
                just install&mdash;we consult, engineer solutions, and deliver
                excellence in every connection.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Industrial & Commercial Focus",
                  "PLC & Instrumentation Specialists",
                  "ISNetworld Verified",
                  "BBB Accredited Business",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "60+", label: "Years Combined Experience" },
                { value: "2", label: "States Served" },
                { value: "100%", label: "Safety Commitment" },
                { value: "24/7", label: "Emergency Response" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
                >
                  <p className="text-3xl font-black text-orange-500 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              What We Do
            </p>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Specialized Electrical Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From precision PLC integration to high-voltage terminations, every
              service we offer is delivered with industrial-grade quality and
              uncompromising safety standards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <svc.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SAFETY ========== */}
      <section id="safety" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Safety First
              </p>
              <h2 className="mb-6 text-4xl font-bold">
                Uncompromising Safety Standards
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                At UEI, safety isn&apos;t a checkbox&mdash;it&apos;s the
                foundation of every project we undertake. Every UEI employee
                completes annual comprehensive safety training covering all
                areas of our qualified safety program.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                Our ISNetworld membership reflects our commitment to maintaining
                the highest contractor safety, insurance, and regulatory
                standards demanded by major industrial clients.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "ISNetworld Member",
                  desc: "Verified contractor meeting rigorous industrial safety and compliance requirements.",
                },
                {
                  icon: Award,
                  title: "BBB Accredited",
                  desc: "Recognized by the Better Business Bureau for ethical business practices and reliability.",
                },
                {
                  icon: HardHat,
                  title: "Annual Safety Training",
                  desc: "Every employee completes comprehensive safety certification each year without exception.",
                },
                {
                  icon: Users,
                  title: "Certified Technicians",
                  desc: "Highly skilled and fully certified workforce for residential, commercial, and industrial projects.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-700 bg-slate-800/50 p-6"
                >
                  <item.icon className="mb-3 h-8 w-8 text-orange-400" />
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Get In Touch
            </p>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Serving Oklahoma, Kansas, and surrounding areas. Reach out to
              schedule service or discuss your next electrical project.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Schedule Service */}
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 text-center">
              <Phone className="mx-auto mb-3 h-8 w-8 text-orange-500" />
              <h3 className="mb-1 font-bold text-slate-900">
                Schedule Service
              </h3>
              <a
                href="tel:5803705780"
                className="text-lg font-semibold text-orange-600 hover:underline"
              >
                580.370.5780
              </a>
            </div>

            {/* Key Contacts */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-slate-600" />
              <h3 className="mb-2 font-bold text-slate-900">Key Contacts</h3>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Jared Tovar</span>
                <br />
                <a href="tel:5803705000" className="hover:text-orange-500">
                  580.370.5000
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium">Vic Tovar</span>
                <br />
                <a href="tel:5803368185" className="hover:text-orange-500">
                  580.336.8185
                </a>
              </p>
            </div>

            {/* Office */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <Mail className="mx-auto mb-3 h-8 w-8 text-slate-600" />
              <h3 className="mb-2 font-bold text-slate-900">Office</h3>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:5807107017" className="hover:text-orange-500">
                  580.710.7017
                </a>
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <span className="font-medium">Fax:</span> 580.710.7005
              </p>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-slate-600" />
              <h3 className="mb-2 font-bold text-slate-900">Location</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                7650 John Wayne
                <br />
                Perry, Oklahoma 73077
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="font-bold tracking-wider text-white">UEI</span>
              <span className="text-sm text-slate-500">
                &mdash; United Electrical Installations, INC.
              </span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} UEI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
