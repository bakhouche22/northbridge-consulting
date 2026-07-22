import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Target,
} from "lucide-react";
import { useEffect, useState, type SVGProps } from "react";
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

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __northbridgeAnalyticsLoaded?: boolean;
  }
}

const siteUrl = "https://northbridgeconsulting.solutions";
const contactEmail = "contact@northbridgeconsulting.solutions";
const gaMeasurementId = "G-4348K6E53L";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/northbridge-consulting-solutions-144819423/",
    icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com/Northbridgecons",
    icon: XIcon,
  },
];

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Northbridge Consulting | Business Consulting Across Europe",
    description:
      "Northbridge Consulting is a UK-founded business consulting firm helping European organisations with strategy, operations, digital transformation, growth, and human capital.",
  },
  "/about": {
    title: "About Northbridge Consulting | UK-Founded European Advisory Firm",
    description:
      "Learn about Northbridge Consulting, a UK-founded advisory firm supporting European organisations with clear, practical, and commercially grounded consulting.",
  },
  "/services": {
    title: "Consulting Services | Strategy, Operations, Digital and Growth",
    description:
      "Explore Northbridge Consulting services across business strategy, operational excellence, digital transformation, and growth advisory for European organisations.",
  },
  "/recruitment": {
    title: "Recruitment & Human Capital | Northbridge Consulting",
    description:
      "Human capital consulting, executive search, talent acquisition strategy, workforce planning, HR process optimization, and recruitment support across Europe.",
  },
  "/contact": {
    title: "Contact Northbridge Consulting | European Business Consulting",
    description:
      "Contact Northbridge Consulting for strategy, operations, digital transformation, growth advisory, recruitment, and human capital consulting across Europe.",
  },
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Recruitment", href: "/recruitment" },
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

const recruitmentServices = [
  {
    title: "Executive Search",
    icon: Target,
    summary:
      "Discreet senior-level search for leadership roles, specialist appointments, and growth-critical positions.",
  },
  {
    title: "Talent Acquisition Strategy",
    icon: BarChart3,
    summary:
      "Recruitment operating models, sourcing channels, assessment frameworks, and hiring governance built around business priorities.",
  },
  {
    title: "Workforce Planning",
    icon: Network,
    summary:
      "Practical workforce plans that connect future capability needs with structure, cost, timing, and delivery risk.",
  },
  {
    title: "HR Process Optimization",
    icon: CheckCircle2,
    summary:
      "Cleaner hiring workflows, clearer role approvals, better candidate experience, and more reliable recruitment reporting.",
  },
  {
    title: "Employer Branding",
    icon: ShieldCheck,
    summary:
      "Positioning, messaging, and candidate-facing materials that help organisations compete for the right talent.",
  },
  {
    title: "Recruitment Across Europe",
    icon: Building2,
    summary:
      "Support for cross-border hiring, local market understanding, and consistent recruitment standards across European teams.",
  },
];

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.25h4.4V23H.3V8.25Zm7.24 0h4.22v2.02h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V23h-4.4v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V23H7.54V8.25Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.41l-5.8-7.58L4.15 22H.47l8.6-9.83L0 2h7.59l5.24 6.93L18.9 2Zm-1.29 18.1h2.04L6.48 3.8H4.29L17.61 20.1Z" />
    </svg>
  );
}

function SocialLinks({ variant = "contact" }: { variant?: "contact" | "footer" }) {
  const linkClassName =
    variant === "footer"
      ? "border-white/15 bg-white/5 text-white/78 hover:bg-white/12 hover:text-white focus-visible:ring-white/50"
      : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground focus-visible:ring-accent";

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Northbridge Consulting ${link.label} profile in a new tab`}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            linkClassName,
            variant === "footer" && "focus-visible:ring-offset-primary",
          )}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function shouldLoadAnalytics() {
  return (
    import.meta.env.PROD &&
    typeof window !== "undefined" &&
    ["northbridgeconsulting.solutions", "www.northbridgeconsulting.solutions"].includes(
      window.location.hostname,
    )
  );
}

function loadAnalytics() {
  if (!shouldLoadAnalytics() || window.__northbridgeAnalyticsLoaded) {
    return;
  }

  window.__northbridgeAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.id = "northbridge-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  document.head.appendChild(script);
}

function trackPageView(pathname: string) {
  if (!shouldLoadAnalytics() || !window.gtag) {
    return;
  }

  const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
  window.gtag("config", gaMeasurementId, {
    page_title: metadata.title,
    page_path: pathname,
    page_location: `${siteUrl}${pathname}`,
  });
}

function SeoAndAnalytics() {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
  const isKnownPage = Boolean(pageMetadata[pathname]);
  const canonicalUrl = `${siteUrl}${isKnownPage && pathname !== "/" ? pathname : ""}`;
  const imageUrl = `${siteUrl}/assets/northbridge-hero.jpg`;

  useEffect(() => {
    document.title = metadata.title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "robots", isKnownPage ? "index, follow" : "noindex, follow");
    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Northbridge Consulting");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:site", "@Northbridgecons");
    upsertMeta("name", "twitter:url", canonicalUrl);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertCanonical(canonicalUrl);
  }, [canonicalUrl, imageUrl, isKnownPage, metadata.description, metadata.title]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

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
          <div className="mt-5">
            <SocialLinks variant="footer" />
          </div>
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

function Recruitment() {
  return (
    <>
      <PageIntro
        eyebrow="Recruitment & Human Capital"
        title="Human capital advisory for companies building stronger teams across Europe."
        body="Northbridge Consulting supports organisations that need sharper hiring decisions, clearer workforce plans, and recruitment processes that reflect the quality of the business they are building."
      />
      <section className="section-spacing">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Badge>People, capability, and growth</Badge>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Recruitment support designed for strategic and operational impact.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              Effective hiring is more than filling vacancies. We help clients define
              the capabilities they need, improve how they attract and assess talent,
              and build recruitment processes that are credible, consistent, and
              scalable across markets.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recruitmentServices.map((service) => (
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

      <section className="bg-secondary/60 section-spacing">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">How we help</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A practical partner from role definition to hiring execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              We work with leadership, HR, and functional teams to clarify hiring
              priorities, strengthen candidate evaluation, and reduce friction in
              recruitment delivery. The result is a more disciplined hiring process
              and a stronger connection between talent decisions and business goals.
            </p>
          </div>
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Typical engagement outcomes</CardTitle>
              <CardDescription>
                Focused work that improves hiring confidence and organisational readiness.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm text-muted-foreground">
                {[
                  "Clearer role briefs and leadership success profiles",
                  "Improved recruitment workflows and decision points",
                  "Stronger sourcing and assessment approach for priority roles",
                  "Workforce plans aligned with growth, transformation, and cost goals",
                  "Employer messaging that supports credible candidate engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page rounded-lg bg-primary p-8 text-primary-foreground shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                Recruitment across Europe
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Build the team your next stage requires.
              </h2>
              <p className="mt-4 max-w-3xl text-white/74">
                Whether you are entering a new market, strengthening leadership, or
                improving hiring performance, Northbridge brings structured thinking
                and hands-on recruitment support to help you move with confidence.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 lg:justify-self-end">
              <a href={`mailto:${contactEmail}`}>Discuss recruitment support</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a focused conversation about your next business priority."
        body="For strategy, operating performance, digital transformation, growth advisory, or recruitment enquiries, contact Northbridge Consulting to arrange a focused introductory conversation."
      />
      <section className="section-spacing">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Contact information</CardTitle>
              <CardDescription>
                Senior-led support for organisations working across Europe.
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
              <div className="flex items-start gap-4">
                <Network className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Social profiles</p>
                  <div className="mt-2">
                    <SocialLinks />
                  </div>
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
                <CardTitle>Engagement focus</CardTitle>
                <CardDescription>
                  Practical consulting support shaped around clear business priorities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {[
                    "Business strategy and operating model decisions",
                    "Operational excellence and performance improvement",
                    "Digital transformation planning and adoption",
                    "Recruitment and human capital advisory",
                    "Growth advisory and European market support",
                    "Practical delivery support for leadership teams",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response approach</CardTitle>
                <CardDescription>
                  Initial conversations are focused, confidential, and practical.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Share the business priority you want to discuss and a member of the
                  team will respond with a suggested next step.
                </p>
                <p>
                  Typical first discussions cover context, objectives, timing, and the
                  practical support needed to move from intent to delivery.
                </p>
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
      <SeoAndAnalytics />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
