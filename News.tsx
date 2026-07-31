import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Scale, Filter, ChevronRight, ChevronDown, BookOpen, FileText, Globe, Landmark, X } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const categories = ['All', 'Constitution', 'Civil Code', 'Commercial', 'Administrative', 'International', 'Penal Code'];

const legalTexts = [
  {
    id: 1, title: 'Constitution of the Kingdom of Morocco', category: 'Constitution', date: '2011',
    description: 'Fundamental law of Morocco, establishing the political framework and guaranteeing individual rights and freedoms.',
    icon: Landmark,
    detail: `The Constitution of Morocco, adopted by referendum on 1 July 2011, is the supreme law of the Kingdom. It enshrines the separation of powers among the legislative, executive, and judicial branches, and guarantees a broad catalogue of fundamental rights.

Key provisions include:
• Article 1 — Morocco is a constitutional, democratic, parliamentary, and social monarchy.
• Articles 19–40 — Fundamental rights and freedoms: equality, privacy, fair trial, freedom of expression and assembly.
• Article 71 — Exclusive legislative domain of Parliament (criminal law, civil status, commercial law, etc.).
• Articles 107–128 — Independent judiciary; creation of the Supreme Council of the Judiciary.

The 2011 reform significantly expanded Parliament's powers and enshrined Amazigh as an official language alongside Arabic.`
  },
  {
    id: 2, title: 'Code of Obligations and Contracts', category: 'Civil Code', date: '2019',
    description: 'Regulation of contractual relations, civil obligations and liability in Moroccan law.',
    icon: FileText,
    detail: `The Code of Obligations and Contracts (COC — Dahir of 9 Ramadan 1331 / 12 August 1913), as amended most recently in 2019, is the cornerstone of Moroccan private law, governing all civil and commercial obligations.

Key provisions:
• Book I (Arts. 1–241) — Sources of obligations: contracts, quasi-contracts, torts, quasi-delicts, unjust enrichment.
• Art. 2 — General principle of good faith in all contractual relations.
• Arts. 65–107 — Formation of contracts: offer, acceptance, capacity, consent, object, cause.
• Arts. 230–241 — Effects of obligations: performance, mora debitoris, damages.
• Arts. 383–397 — Extinction of obligations: payment, novation, compensation, confusion, prescription.

The 2019 amendments introduced provisions governing electronic contracts and digital signatures, aligning Moroccan law with international e-commerce standards.`
  },
  {
    id: 3, title: 'Commercial Code', category: 'Commercial', date: '2018',
    description: 'Governing commercial acts, merchants and commercial companies in Morocco.',
    icon: BookOpen,
    detail: `Law 15-95 (the Commercial Code), as amended in 2018, governs commercial acts, the status of merchants, commercial companies, and trading relationships in Morocco.

Key divisions:
• Title I — Definition of commercial acts; who qualifies as a merchant; obligations of merchants (registration, accounting, commercial correspondence).
• Title II — Commercial companies (SA, SARL, SNC, SCS, SCA) — formation, governance, dissolution.
• Title III — Commercial papers: cheques, bills of exchange, promissory notes.
• Title IV — Commercial contracts: sale, agency, commission, carriage, insurance.
• Title V — Collective proceedings: preventive conciliation, safeguard, judicial reorganization, liquidation.

The 2018 reform introduced a simplified SARL-AU (single-member LLC) vehicle and updated insolvency procedures to align with OHADA best practices.`
  },
  {
    id: 4, title: 'Code of Administrative Justice', category: 'Administrative', date: '2020',
    description: 'Procedural rules for appeals before administrative courts and tribunals.',
    icon: Scale,
    detail: `Law 41-90 (Administrative Courts Act), supplemented by Law 80-03 (Administrative Courts of Appeal Act) and as consolidated to 2020, establishes the framework for administrative justice in Morocco.

Key provisions:
• Arts. 1–9 — Jurisdiction of Administrative Tribunals: disputes arising from administrative decisions, administrative contracts, public liability, tax matters, electoral disputes.
• Arts. 10–30 — Procedure before Administrative Tribunals: mandatory prior administrative appeal in certain cases, 60-day filing deadline from decision notification.
• Arts. 31–45 — Urgent procedures: référé (interlocutory injunction), suspension of enforcement.
• Arts. 56–70 — Appeals to the Administrative Courts of Appeal, and cassation before the Cour de Cassation (Administrative Division).

A major 2020 reform introduced electronic filing for all administrative courts and extended full jurisdiction (plein contentieux) to administrative contract disputes.`
  },
  {
    id: 5, title: 'Vienna Convention on Diplomatic Relations', category: 'International', date: '1961',
    description: 'International treaty governing diplomatic relations between sovereign states.',
    icon: Globe,
    detail: `The Vienna Convention on Diplomatic Relations (1961), ratified by Morocco, establishes the framework governing the rights and duties of diplomatic missions and their personnel.

Key provisions:
• Art. 22 — Inviolability of diplomatic premises; host State has special duty of protection.
• Art. 27 — Freedom of communication of the mission; inviolability of the diplomatic bag.
• Art. 29 — Personal inviolability of the diplomatic agent.
• Arts. 31–37 — Diplomatic immunity from jurisdiction (civil, criminal, administrative) and its exceptions.
• Art. 39 — Privileges and immunities begin from moment of entry into territory.
• Art. 41 — Duty to respect laws and regulations of the receiving State.

Morocco implements the Convention through the Ministry of Foreign Affairs and has entered bilateral agreements with numerous states modifying certain immunity provisions for non-official acts.`
  },
  {
    id: 6, title: 'Penal Code of Morocco', category: 'Penal Code', date: '2022',
    description: 'Classification of offences and penalties applicable under Moroccan criminal law.',
    icon: FileText,
    detail: `The Moroccan Penal Code (Dahir No. 1-59-413, as substantially reformed through 2022) classifies criminal offences into three categories and sets out the applicable penalties and defences.

Structure:
• Book I — General Principles: criminal responsibility, attempted offences, complicity, recidivism, aggravating/mitigating circumstances.
• Book II — Crimes against the State: high treason, espionage, terrorism, offences against public authorities.
• Book III — Crimes against persons: homicide, assault, sexual offences, trafficking.
• Book IV — Crimes against property: theft, fraud, embezzlement, money laundering.
• Book V — Offences against public morality and social order.

The 2022 reform package introduced specific provisions on cybercrime (Arts. 607-1 to 607-11), updated the definition of sexual harassment, and strengthened protections for minors and victims of domestic violence.`
  },
  {
    id: 7, title: 'Labor Code (Law 65-99)', category: 'Administrative', date: '2004',
    description: 'Comprehensive regulation of employment relations, workers rights and labor disputes.',
    icon: BookOpen,
    detail: `Law 65-99 (Labor Code), in force since June 2004, comprehensively regulates employment relationships in the private sector.

Key provisions:
• Arts. 1–5 — Scope; non-discrimination principle; definition of employment contract.
• Arts. 25–81 — Individual dismissal: grounds, procedure, notice periods, severance pay (96h/year for first 5 years).
• Arts. 184–210 — Working hours: 44h/week; overtime rates (+25%, +50%, +100%).
• Arts. 396–430 — Trade unions: right to organize, collective bargaining, strike conditions.
• Arts. 532–580 — Labor Inspectorate: powers, obligations, sanctions.

Social security contributions (CNSS): employer 8.6% + 7.93% + 1.6%; employee 4.48% + 3.96%.

The Ministry of Labor has announced a reform package for 2025–2026 to introduce remote-work provisions and update occupational health standards.`
  },
  {
    id: 8, title: 'Family Code (Moudawwana)', category: 'Civil Code', date: '2004',
    description: 'Moroccan family law covering marriage, divorce, child custody and inheritance.',
    icon: Scale,
    detail: `The Moudawwana (Family Code), reformed in 2004 by Dahir No. 1-04-22, is the primary source of Moroccan personal status law, governing marriage, divorce, filiation, guardianship, and succession.

Key provisions:
• Arts. 4–12 — Marriage: minimum age (18, with judicial exception), consent requirement, prohibition of polygamy without court authorization and first wife's knowledge.
• Arts. 13–35 — Marriage contract; impediments; rights and duties of spouses.
• Arts. 78–105 — Dissolution: talaq (repudiation under court supervision), khul' (divorce initiated by wife), judicial dissolution, reconciliation procedures.
• Arts. 163–186 — Child custody (hadana): priority framework; best-interest-of-child standard.
• Arts. 329–393 — Succession: fixed Quranic shares (fard), residuaries ('asaba), principles of exclusion.

A significant reform proposal presented to Parliament in 2024 proposes changes to polygamy restrictions, equal inheritance for daughters, and enhanced custody rights for divorced mothers.`
  },
  {
    id: 9, title: 'Investment Charter', category: 'Commercial', date: '2023',
    description: 'Legal framework governing foreign and domestic investment incentives in Morocco.',
    icon: Globe,
    detail: `The new Investment Charter (Law 03-22), promulgated by Dahir No. 1-22-74 and in force since January 2023, replaces the 1995 Charter and introduces a substantially revised incentive framework.

Key incentive pillars:
• Common Investment Premium — State contributes up to 30% of eligible investment for projects ≥ MAD 50 million.
• Territorial Premium — Additional 10% for investments in less-developed regions.
• Sectoral Premium — Additional 5–10% for priority sectors (manufacturing, digital, renewable energy, healthcare).
• SME Enhancement — Projects ≥ MAD 10 million qualify for a simplified premium of 20%.

Procedural framework:
• Regional Investment Centers (CRI) serve as one-stop shops for applications.
• Contractual stability clause: fiscal and legal framework frozen for 10 years.
• Dispute resolution: Moroccan administrative courts and optionally ICSID for cross-border disputes.

Foreign exchange: full repatriation of profits, dividends, and capital for foreign investors registered with Bank Al-Maghrib.`
  },
];

export default function LegalTexts() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = legalTexts.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  const toggle = (id: number) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Module — 01</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Legal Texts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive repository of national and international legal texts, updated in real time with AI-assisted semantic search.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-border bg-card/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={e => { setSearch(e.target.value); setExpandedId(null); }}
              placeholder="Search legal texts, codes, treaties..."
              className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setExpandedId(null); }}
                  className={`text-xs font-mono px-3 py-1.5 rounded-sm border transition-all ${activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono text-muted-foreground mb-8 uppercase tracking-wider">{filtered.length} Documents Found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(text => {
              const isOpen = expandedId === text.id;
              return (
                <motion.div
                  key={text.id}
                  layout
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate="visible"
                  className={`group bg-card border rounded-sm transition-all duration-300 flex flex-col ${isOpen ? 'border-primary/60 shadow-[0_0_24px_rgba(0,200,255,0.15)] md:col-span-2 lg:col-span-3' : 'border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,200,255,0.1)]'}`}
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 bg-background border rounded-sm flex items-center justify-center text-primary shrink-0 transition-colors ${isOpen ? 'border-primary/50' : 'border-border group-hover:border-primary/50'}`}>
                        <text.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono px-2 py-1 bg-background border border-border rounded-sm text-muted-foreground">{text.category}</span>
                      <span className="text-xs font-mono text-muted-foreground ml-auto">{text.date}</span>
                    </div>
                    <h3 className={`font-bold mb-2 leading-tight transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{text.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{text.description}</p>

                    <button
                      onClick={() => toggle(text.id)}
                      className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all w-fit"
                    >
                      {isOpen ? (
                        <><X className="w-4 h-4" /> Close Document</>
                      ) : (
                        <><ChevronRight className="w-4 h-4" /> Open Document</>
                      )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-primary/20 mx-6" />
                        <div className="p-6 pt-5">
                          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Full Summary</p>
                          <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-background/50 border border-border/50 rounded-sm p-4">
                            {text.detail}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <Scale className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-mono text-sm">No documents match your query.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}