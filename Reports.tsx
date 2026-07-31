import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Search, ChevronRight, BookOpen, BarChart3, FileCheck, X } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const domains = ['All', 'Public Finance', 'Urban Planning', 'Education', 'Health', 'Digitization', 'Governance'];

const studies = [
  {
    id: 1, title: 'Digital Transformation of Public Administration 2024', domain: 'Digitization', date: 'Oct 2024', pages: 82, icon: BarChart3,
    summary: "Comprehensive analysis of Morocco's e-government initiatives, assessing adoption rates, barriers and success indicators across 14 ministries.",
    detail: `OVERVIEW
This study assesses the implementation of Morocco's National Digital Administration Strategy 2020–2025 across 14 federal ministries, evaluating the progress of the e-government agenda against key performance indicators.

METHODOLOGY
• Document analysis of ministry digitization roadmaps and progress reports.
• Interviews with 68 senior civil servants and 12 technology project managers.
• Benchmarking against GovTech maturity models (OECD, UN E-Government Index).

KEY FINDINGS
1. Online Service Availability: 74% of citizen-facing services now have a digital interface, up from 41% in 2020. However, end-to-end processing (without physical fallback) remains at 38%.
2. Interoperability: The national data exchange platform (Massar) connects 9 of 14 ministries; 5 remain on siloed legacy systems, creating procedural bottlenecks.
3. Digital ID Adoption: The national eID (CNIE digital) has 2.1 million active users, representing 19% of the adult population.
4. Main Barriers: Infrastructure gaps in rural areas (34% of communes), lack of digital literacy among civil servants (avg. 2.1h training/year), and procurement delays averaging 18 months for major IT projects.

RECOMMENDATIONS
• Accelerate interoperability of remaining ministries by Q2 2025.
• Mandate minimum 20h/year digital literacy training for civil servants.
• Simplify IT procurement rules to reduce time-to-deployment for cloud-based services.

RATING: Moderate Progress — Digital foundations established but last-mile implementation lags.`
  },
  {
    id: 2, title: 'Urban Planning Governance in Casablanca-Settat Region', domain: 'Urban Planning', date: 'Sep 2024', pages: 56, icon: Building,
    summary: 'Evaluation of metropolitan planning frameworks and inter-institutional coordination mechanisms in the CFC economic zone.',
    detail: `OVERVIEW
This study evaluates governance structures and coordination mechanisms in the Casablanca-Settat Region, focusing on the tension between municipal autonomy and regional planning coherence under the 2015 Regionalization Reform.

METHODOLOGY
• Review of Schémas Directeurs d'Aménagement Urbain (SDAU) for Grand Casablanca, Settat, and Berrechid.
• Analysis of CRI (Centre Régional d'Investissement) project approval timelines.
• Interviews with 22 commune presidents and 8 Agence Urbaine officials.

KEY FINDINGS
1. Fragmentation: 22 municipalities operate with partially conflicting urban zoning plans, creating legal uncertainty for large-scale investors in peri-urban zones.
2. CFC Zone: The Casablanca Finance City governance framework (Loi 44-10) is cited as a model for streamlined approvals — average time-to-permit: 47 days vs. 180 days in adjacent communes.
3. Green Space Deficit: Only 3.2 m²/inhabitant vs. WHO recommended 9 m² — 68% of planned green zones have been reallocated to residential or commercial use since 2015.
4. Transport Integration: The BHNS and tramway master plan lacks legal coordination mechanisms with municipal road authorities, causing implementation delays.

RECOMMENDATIONS
• Create a legally binding inter-municipal planning council for Greater Casablanca.
• Extend the CFC one-stop-shop model to the full CFC economic perimeter.
• Introduce green space conservation easements enforceable against municipal rezoning.`
  },
  {
    id: 3, title: 'Public Procurement Reform: Post-Decree 2-22-431 Analysis', domain: 'Public Finance', date: 'Aug 2024', pages: 44, icon: FileCheck,
    summary: 'Study on the practical implementation challenges and efficiency gains from the revised public procurement framework.',
    detail: `OVERVIEW
Decree 2-22-431 (promulgated June 2023) overhauled Morocco's public procurement framework, introducing mandatory e-tendering for contracts above MAD 500,000, new SME preferences, and sustainability clauses. This study evaluates 8 months of implementation data.

METHODOLOGY
• Analysis of 1,240 procurement notices published on Marchés Publics portal (Jul 2023 – Feb 2024).
• Survey of 89 contracting authorities and 145 bidding enterprises.
• Comparison with pre-reform baseline (Decree 2-12-349 data, 2020–2022).

KEY FINDINGS
1. E-Tendering Adoption: 91% of eligible contracts now use the electronic portal — a significant improvement. However, 34% of contracting authorities report technical capacity gaps in using the system.
2. SME Participation: SME bid submissions increased 28% vs. the 2020–2022 average, though SME award rates remain flat at 31%, suggesting evaluation criteria still favor incumbents.
3. Processing Time: Average time from publication to contract award decreased from 94 to 71 days for standard procedures.
4. Sustainability Clauses: Only 12% of contracts include the optional environmental performance clauses, well below the government's 40% target for 2024.

RECOMMENDATIONS
• Mandate sustainability clause inclusion for contracts above MAD 5M.
• Create a national procurement training center for contracting authorities.
• Redesign SME scoring criteria to weight technical capacity over past contract volume.`
  },
  {
    id: 4, title: 'Higher Education Quality Assurance in Morocco', domain: 'Education', date: 'Jul 2024', pages: 63, icon: BookOpen,
    summary: 'Assessment of CNACES institutional audit outcomes and recommendations for aligning with European qualification frameworks.',
    detail: `OVERVIEW
This study reviews the first full cycle of institutional audits conducted by the National Centre for the Evaluation, Accreditation, and Quality Assurance of Higher Education (CNACES), covering 34 public universities and 18 accredited private institutions.

METHODOLOGY
• Review of 52 published CNACES audit reports (2020–2024).
• Benchmarking against the European Standards and Guidelines (ESG 2015).
• Interviews with 29 university governance officers and 14 CNACES evaluators.

KEY FINDINGS
1. Research Output: Average annual peer-reviewed publications per faculty member: 0.6 (public) vs. 0.3 (private). Target was 1.5 by 2025.
2. Student-Faculty Ratio: National average 28:1, significantly above the OECD reference of 15:1.
3. Accreditation Outcomes: 76% of programs received accreditation; 24% required corrective action plans, primarily for program alignment with labor market needs.
4. International Benchmarking: Morocco ranks 73rd in the 2024 QS Arab Region — up 12 places but below regional peers UAE (28th) and Egypt (32nd).

RECOMMENDATIONS
• Introduce performance-linked funding tied to CNACES audit outcomes.
• Fast-track joint degree programs with European universities to accelerate internalization.
• Mandate annual industry advisory board reviews for professional programs.`
  },
  {
    id: 5, title: 'Primary Healthcare Accessibility in Rural Provinces', domain: 'Health', date: 'Jun 2024', pages: 39, icon: BarChart3,
    summary: 'Quantitative study on geographic and financial barriers to RAMED beneficiary access across 8 rural provinces.',
    detail: `OVERVIEW
This study quantifies geographic, financial, and administrative barriers facing RAMED (Régime d'Assistance Médicale) beneficiaries in 8 rural provinces: Azilal, Béni Mellal, Errachidia, Guelmim, Ifrane, Midelt, Sidi Ifni, and Zagora.

METHODOLOGY
• Survey of 2,340 RAMED-registered households (stratified random sample).
• GIS mapping of healthcare facility locations vs. population centers.
• Analysis of RAMED card renewal rates and service utilization data from Ministry of Health.

KEY FINDINGS
1. Geographic Access: 41% of surveyed households live more than 10km from the nearest primary healthcare center (ESSB); 18% live more than 30km.
2. Transport Cost: Average round-trip transport cost to an ESSB consumes 4.8% of monthly household expenditure for the poorest quintile.
3. RAMED Renewal: Card renewal rate at 3-year cycle: 58% — meaning 42% of eligible beneficiaries lose coverage due to administrative burden of renewal.
4. Service Utilization: Despite coverage, only 34% of RAMED holders used the formal health system for their last illness (vs. 67% urban benchmark).

RECOMMENDATIONS
• Deploy 45 additional mobile health units in high-need zones identified by GIS analysis.
• Introduce automatic RAMED renewal for confirmed beneficiaries (income threshold met).
• Integrate RAMED verification into the national eID system to reduce administrative friction.`
  },
  {
    id: 6, title: 'Local Governance & Fiscal Decentralization', domain: 'Governance', date: 'May 2024', pages: 71, icon: Building,
    summary: 'Review of commune-level financial autonomy and capacity constraints under the 2021 Organic Law on Communes.',
    detail: `OVERVIEW
This study assesses the fiscal and administrative capacity of Moroccan communes following the implementation of Organic Law 113-14 on Communes (2021), which expanded local fiscal powers while imposing new accountability requirements.

METHODOLOGY
• Financial analysis of budget data from 350 communes (stratified sample across urban, peri-urban, rural tiers).
• Review of Court of Accounts (Cour des Comptes) audit reports 2021–2023.
• Interviews with 31 commune presidents and 18 regional finance ministry officers.

KEY FINDINGS
1. Own-Revenue Capacity: Communes generate an average of only 28% of their budget from own revenues (local taxes, fees); 72% comes from central transfers (FEC, TVA share).
2. Urban-Rural Gap: The 12 metropolitan communes represent 34% of all commune revenue despite housing 22% of the total commune population.
3. Debt: 14% of communes are in technical financial difficulty (service deficit >3 consecutive years); the Fonds d'Équipement Communal holds MAD 4.2B in restructured commune debt.
4. Accountability: Only 61% of communes with a budget above MAD 10M filed the mandatory external audit within the legal deadline.

RECOMMENDATIONS
• Reform the local tax framework to broaden the communal tax base (currently excluding most commercial real estate).
• Create a commune fiscal capacity-building program delivered jointly by the Ministry of Interior and IGAT.
• Strengthen the FEC's early warning system for communes at financial risk.`
  },
];

export default function AdministrativeStudies() {
  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = studies.filter(s => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.summary.toLowerCase().includes(search.toLowerCase());
    const matchDomain = activeDomain === 'All' || s.domain === activeDomain;
    return matchSearch && matchDomain;
  });

  const toggle = (id: number) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <PageLayout>
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Module — 04</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Administrative Studies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Professional administrative studies and analysis for public institutions, streamlining bureaucratic research and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-card/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={e => { setSearch(e.target.value); setExpandedId(null); }}
              placeholder="Search studies, domains, keywords..."
              className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {domains.map(d => (
              <button
                key={d}
                onClick={() => { setActiveDomain(d); setExpandedId(null); }}
                className={`text-xs font-mono px-3 py-1.5 rounded-sm border transition-all ${activeDomain === d ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono text-muted-foreground mb-8 uppercase tracking-wider">{filtered.length} Studies Available</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((s, i) => {
              const isOpen = expandedId === s.id;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`bg-card border rounded-sm transition-all duration-300 flex flex-col ${isOpen ? 'border-primary/60 shadow-[0_0_24px_rgba(0,200,255,0.15)] md:col-span-2' : 'border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,200,255,0.08)]'}`}
                >
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-background border rounded-sm flex items-center justify-center text-primary transition-colors ${isOpen ? 'border-primary/50' : 'border-border'}`}>
                          <s.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-sm">{s.domain}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-muted-foreground">{s.date}</div>
                        <div className="text-xs font-mono text-muted-foreground">{s.pages} pages</div>
                      </div>
                    </div>
                    <h3 className={`font-bold text-lg mb-2 leading-tight transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>{s.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{s.summary}</p>
                    <button
                      onClick={() => toggle(s.id)}
                      className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all w-fit"
                    >
                      {isOpen ? <><X className="w-4 h-4" /> Close Study</> : <><ChevronRight className="w-4 h-4" /> Read Study</>}
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
                        <div className="border-t border-primary/20 mx-7" />
                        <div className="p-7 pt-5">
                          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Study Summary</p>
                          <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-background/50 border border-border/50 rounded-sm p-4">
                            {s.detail}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-24 text-muted-foreground">
                <Building className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="font-mono text-sm">No studies match your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
