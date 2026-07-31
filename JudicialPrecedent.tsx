import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  ShieldAlert, Scale, Landmark, FileText, Building, TrendingUp, Newspaper, ChevronRight, Sparkles,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const modules = [
  { href: '/legal-texts', title: 'Legal Texts', desc: 'Search Moroccan codes, dahirs, and international instruments.', icon: Scale, tag: 'Module — 01' },
  { href: '/judicial-precedent', title: 'Judicial Precedent', desc: 'Browse indexed rulings from the Supreme Court and appellate courts.', icon: Landmark, tag: 'Module — 02' },
  { href: '/reports', title: 'Intelligent Reports', desc: 'Generate structured legal, financial, and compliance reports with AI.', icon: FileText, tag: 'Module — 03' },
  { href: '/administrative-studies', title: 'Administrative Studies', desc: 'Research on public institutions, governance, and digitization.', icon: Building, tag: 'Module — 04' },
  { href: '/financial-studies', title: 'Financial Studies', desc: 'Banking, capital markets, and public finance analysis.', icon: TrendingUp, tag: 'Module — 05' },
  { href: '/news', title: 'News', desc: 'Daily legal, financial, and administrative news for Morocco.', icon: Newspaper, tag: 'Module — 06' },
];

export default function AIFA() {
  return (
    <PageLayout>
      <section className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/6 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs font-mono text-primary tracking-widest uppercase mb-6 border border-primary/30 bg-primary/5 rounded-sm px-3 py-1.5">
              <Sparkles className="w-3.5 h-3.5" /> AIFA — AI Legal &amp; Financial Assistant
            </div>
            <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center rounded-sm shadow-[0_0_30px_rgba(0,200,255,0.3)] mb-6">
              <ShieldAlert className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 max-w-3xl">
              The Intelligence Platform for Moroccan Law, Finance &amp; Administration
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              LAIFA centralizes legal texts, judicial precedent, financial and administrative research, and AI-generated
              reports into a single secure workspace for professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reports"
                className="bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 shadow-[0_0_15px_rgba(0,200,255,0.3)] hover:shadow-[0_0_25px_rgba(0,200,255,0.5)] transition-all"
              >
                Generate a Report <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/login"
                className="border border-border px-8 py-3.5 rounded-sm font-semibold text-foreground hover:border-primary/50 transition-all"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Platform Modules</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything in one place</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div key={m.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Link
                  href={m.href}
                  className="group block h-full bg-card border border-border rounded-sm p-7 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,200,255,0.08)] transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-background border border-border rounded-sm flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{m.tag}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.desc}</p>
                  <span className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all w-fit">
                    Explore <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
