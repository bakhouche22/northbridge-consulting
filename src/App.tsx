import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Network,
  Phone,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contactEmail = "contact@northbridgeconsulting.com";
const recommendedDomain = "northbridgeconsulting.com";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    title: "Business Strategy",
    icon: Target,
    summary:
      "Market positioning, operating choices, transformation roadmaps, and practical plans that leadership teams can act on.",
  },
  {
    title: "Operational Excellence",
    icon: CheckCircle2,
    summary:
      "Process improvement, performance management, cost discipline, and delivery models designed for measurable execution.",
  },
  {
    title: "Digital Transformation",
    icon: Network,
    summary:
      "Digital operating models, technology adoption, data-enabled workflows, and change programmes that reduce complexity.",
  },
  {
    title: "Growth Advisory",
    icon: BarChart3,
    summary:
      "Commercial planning, European market entry, partnership strategy, and revenue initiatives for sustainable expansion.",
  },
];

const values = [
  "Clear thinking before complexity",
  "Evidence-led recommendations",
  "Practical delivery, not slideware",
  "Long-term trust with clients",
];

const socialProfiles = [
  {
    channel: "LinkedIn",
    handle: "Northbridge Consulting",
    icon: Linkedin,
    description:
      "A professional company page focused on strategy insight, transformation lessons, leadership commentary, and European business growth.",
  },
  {
    channel: "X",
    handle: "@NorthbridgeEU",
    icon: X,
    description:
      "Short, thoughtful updates on market shifts, operating discipline, digital adoption, and practical growth ideas for executives.",
  },
  {
    channel: "Facebook",
    handle: "Northbridge Consulting",
    icon: MessageSquare,
    description:
      "A credibility page for company updates, hiring announcements, local business content, and selected long-form posts.",
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-base font-bold leading-none">Northbridge</p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Consulting
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={`mailto:${contactEmail}`}>Contact us</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t bg-background md:hidden">
          <div className="container-page grid gap-3 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted"
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2">
              <a href={`mailto:${contactEmail}`}>Contact us</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold">Northbridge Consulting</p>
              <p className="text-sm text-white/70">Founded in the UK, 2024</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/72">
            Business consulting for organisations across Europe seeking sharper
            strategy, stronger operations, and credible digital transformation.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            Pages
          </p>
          <div className="grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/78 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            Contact
          </p>
          <a href={`mailto:${contactEmail}`} className="text-sm text-white/78 hover:text-white">
            {contactEmail}
          </a>
          <p className="mt-2 text-sm text-white/72">Serving clients across Europe</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-sm text-white/60">
          Copyright 2024 Northbridge Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-secondary/60">
      <div className="container-page py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{body}</p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/northbridge-hero.jpg"
            alt="Consultants and executives reviewing strategy in a modern boardroom"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/18" />
        </div>
        <div className="container-page relative min-h-[690px] py-24 text-primary-foreground sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="border-white/20 bg-white/12 text-white">
              UK-founded consulting firm, serving Europe
            </Badge>
            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Practical strategy for ambitious European businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">
              Northbridge Consulting helps leadership teams make confident decisions,
              improve performance, and deliver transformation with clarity and pace.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/services">
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/35 bg-white/5 text-white hover:bg-white/12">
                <a href={`mailto:${contactEmail}`}>Contact {contactEmail}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Senior advisory with a bias for execution.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              Founded in 2024 in the UK, Northbridge Consulting works with clients
              across Europe on the moments that matter: sharper strategy, operating
              discipline, digital progress, and sustainable growth.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="border-border/80 shadow-soft">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-accent/12 text-accent">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-6">{service.summary}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid gap-12 py-16 md:grid-cols-3">
          {[
            ["2024", "Founded in the United Kingdom"],
            ["Europe", "Serving cross-border business clients"],
            ["4", "Core consulting specialisms"],
          ].map(([metric, label]) => (
            <div key={metric}>
              <p className="text-5xl font-bold">{metric}</p>
              <p className="mt-2 text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A focused consulting partner for the next stage of growth."
        body="Northbridge Consulting was founded to give European organisations clear, senior, commercially grounded advice without unnecessary complexity."
      />
      <section className="section-spacing">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/assets/northbridge-about.jpg"
              alt="Consultants collaborating with an executive team"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
            />
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              We help leaders move from strategic intent to measurable progress.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our work blends structured analysis, operational judgement, and careful
              stakeholder engagement. We support clients from diagnosis through to
              delivery, helping teams make choices, align resources, and build the
              habits needed to sustain change.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Consulting services designed around clear choices and visible outcomes."
        body="Northbridge works across strategy, operations, digital transformation, and growth advisory. Each engagement is scoped carefully to keep the work practical, senior-led, and commercially useful."
      />
      <section className="section-spacing">
        <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <img
            src="/assets/northbridge-services.jpg"
            alt="Business technology consulting dashboards and strategy documents"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft lg:sticky lg:top-28"
          />
          <div className="grid gap-5">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/12 text-accent">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="mt-2 leading-6">
                        {service.summary}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {serviceDetails(service.title).map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function serviceDetails(title: string) {
  const details: Record<string, string[]> = {
    "Business Strategy": [
      "Strategic review and prioritisation",
      "Market and competitor assessment",
      "Operating model choices",
      "Board-ready strategic roadmaps",
    ],
    "Operational Excellence": [
      "Process diagnostics",
      "Performance dashboards",
      "Cost and productivity programmes",
      "Delivery governance routines",
    ],
    "Digital Transformation": [
      "Digital maturity assessment",
      "Technology adoption roadmap",
      "Data-enabled workflow redesign",
      "Change management support",
    ],
    "Growth Advisory": [
      "European market entry planning",
      "Revenue and channel strategy",
      "Partnership opportunity mapping",
      "Commercial due diligence support",
    ],
  };

  return details[title] ?? [];
}

function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a focused conversation about your next business priority."
        body="For strategy, operating performance, digital transformation, or growth advisory enquiries, contact Northbridge Consulting using the company domain email below."
      />
      <section className="section-spacing">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Contact information</CardTitle>
              <CardDescription>
                Professional business email using the recommended company domain.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${contactEmail}`} className="text-muted-foreground hover:text-foreground">
                    {contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Serving clients across Europe.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Consultation</p>
                  <p className="text-muted-foreground">Introductory calls by appointment.</p>
                </div>
              </div>
              <Button asChild size="lg" className="mt-2">
                <a href={`mailto:${contactEmail}`}>Email Northbridge Consulting</a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <Card>
              <CardHeader>
                <CardTitle>Recommended domain and hosting</CardTitle>
                <CardDescription>
                  A practical setup for a credible online presence.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Recommended domain: <strong className="text-foreground">{recommendedDomain}</strong>.
                  It aligns with the company name, supports UK credibility, and keeps the email address clean.
                </p>
                <p>
                  Recommended hosting: <strong className="text-foreground">Hostinger Business Web Hosting</strong>,
                  paired with Hostinger Business Email or Google Workspace for professional mailboxes.
                </p>
                <p>
                  Primary mailbox: <strong className="text-foreground">{contactEmail}</strong>.
                  Additional aliases can include hello@, partners@, and careers@ as the firm grows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social media profile kit</CardTitle>
                <CardDescription>
                  Launch-ready positioning for LinkedIn, X, and Facebook.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {socialProfiles.map((profile) => (
                  <div key={profile.channel} className="flex gap-4 rounded-md border p-4">
                    <profile.icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold">{profile.channel}: {profile.handle}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="section-spacing">
      <div className="container-page text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <Button asChild className="mt-8">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
