import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  CloudCog,
  FileCheck2,
  FileSearch,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  Menu,
  Network,
  ScanText,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  X,
} from 'lucide-react';
import './styles.css';

const navigation = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Performance', href: '#performance' },
  { label: 'Use cases', href: '#use-cases' },
];

const capabilities = [
  {
    icon: FileSearch,
    title: 'Configurable document extraction',
    description:
      'Specify which documents to locate in a PDF and define the fields to extract from each document type.',
  },
  {
    icon: ScanText,
    title: 'Two extraction approaches',
    description:
      'Choose cost-efficient OCR for structured documents or LLM-based processing for more context-heavy material.',
  },
  {
    icon: CloudCog,
    title: 'AWS infrastructure controls',
    description:
      'Configure the cloud resources behind your workflow, including compute fleets, storage buckets, and queue settings.',
  },
  {
    icon: ShieldCheck,
    title: 'External verification providers',
    description:
      'Select supported API vendors and use their verification responses as part of the configured claim process.',
  },
  {
    icon: GitBranch,
    title: 'Brand-independent workflows',
    description:
      'Adapt document requirements, field mappings, and validation steps to the processes of each automotive client.',
  },
  {
    icon: Settings2,
    title: 'Client-specific business rules',
    description:
      'Set claim conditions, validation logic, exception handling, and the rules used to evaluate eligibility.',
  },
];

const workflowSteps = [
  {
    icon: FileText,
    number: '01',
    title: 'Ingest documents',
    description: 'Receive claim PDFs and supporting documents.',
  },
  {
    icon: ScanText,
    number: '02',
    title: 'Extract configured fields',
    description: 'Identify required documents and capture the specified data.',
  },
  {
    icon: BadgeCheck,
    number: '03',
    title: 'Verify information',
    description: 'Run field checks and optional external API verification.',
  },
  {
    icon: GitBranch,
    number: '04',
    title: 'Apply claim rules',
    description: 'Evaluate the extracted data against client-defined conditions.',
  },
  {
    icon: ClipboardCheck,
    number: '05',
    title: 'Review outcomes',
    description: 'Make results and exceptions available for follow-up.',
  },
];

const useCases = [
  {
    icon: FileCheck2,
    title: 'Vehicle sales claims',
    description: 'Validate sales documents and vehicle-related claim information.',
  },
  {
    icon: ArrowDownRight,
    title: 'Exchange programmes',
    description: 'Review supporting documents against configured exchange criteria.',
  },
  {
    icon: Building2,
    title: 'Corporate claims',
    description: 'Evaluate company, employee, and corporate eligibility evidence.',
  },
  {
    icon: CircleDollarSign,
    title: 'Customer benefits',
    description: 'Apply configured conditions for customer benefits and claim qualification.',
  },
];

const comparisonRows = [
  ['Documents processed per day', 'Around 100', 'Around 250–300'],
  ['People / compute required', '3–4 people', '1 EC2 instance'],
  ['Operating hours', 'Limited by working hours', 'Can operate continuously'],
  ['Process consistency', 'Can vary by reviewer and workload', 'Repeatable, configured workflow'],
  ['Accuracy', 'Depends on reviewer and document quality', 'Comparable to human verification in the tested workflow'],
  ['Best suited for', 'Manual review and exceptions', 'Higher-volume processing with exception review'],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <ShieldCheck size={22} strokeWidth={1.9} />
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function WorkflowPanel() {
  const stages = [
    { icon: FileText, title: 'Documents received', detail: 'PDFs and supporting files' },
    { icon: ScanText, title: 'Fields extracted', detail: 'Client-defined document rules' },
    { icon: BadgeCheck, title: 'Checks completed', detail: 'Rules and optional API checks' },
  ];

  return (
    <div className="workflow-panel" aria-label="Claim verification workflow overview">
      <div className="panel-heading">
        <div>
          <span className="panel-kicker">CLAIM PROCESSING</span>
          <h2>One workflow. Configured to your process.</h2>
        </div>
        <span className="panel-status"><span /> Workflow ready</span>
      </div>
      <div className="panel-body">
        <div className="panel-rail" aria-hidden="true">
          <span className="rail-dot active" />
          <span className="rail-line" />
          <span className="rail-dot active" />
          <span className="rail-line" />
          <span className="rail-dot active" />
        </div>
        <div className="panel-stages">
          {stages.map(({ icon: Icon, title, detail }) => (
            <div className="panel-stage" key={title}>
              <span className="stage-icon"><Icon size={19} strokeWidth={1.8} /></span>
              <span className="stage-copy">
                <strong>{title}</strong>
                <small>{detail}</small>
              </span>
              <CheckCircle2 className="stage-check" size={19} />
            </div>
          ))}
        </div>
      </div>
      <div className="panel-footer">
        <div className="panel-footer-icon"><SlidersHorizontal size={17} /></div>
        <p><strong>Client-controlled configuration</strong><span>Documents · Fields · Verification rules · Infrastructure</span></p>
        <ChevronRight className="panel-footer-arrow" size={18} />
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="comparison-wrap">
      <div className="comparison-scroll">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">Measure</th>
              <th scope="col">Manual verification</th>
              <th scope="col">DocuVerity software-based verification</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([measure, manual, software]) => (
              <tr key={measure}>
                <th scope="row">{measure}</th>
                <td>{manual}</td>
                <td className="software-cell">{software}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="comparison-note">
        <Gauge size={20} aria-hidden="true" />
        <p><strong>Based on tested operating results.</strong> The figures reflect an observed automotive claim-verification workflow. Actual throughput can vary with document complexity, configuration, instance sizing, API limits, and the proportion of cases requiring manual review.</p>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="DocuVerity home">
            <BrandMark />
            <span className="brand-copy"><strong>DocuVerity</strong><small>Automotive Verification Platform</small></span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navigation.map(({ label, href }) => (
              <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-contact mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Talk to our team <ArrowUpRight size={16} /></a>
          </nav>
          <a className="nav-contact desktop-contact" href="#contact">Talk to our team <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">AUTOMOTIVE CLAIM OPERATIONS</p>
              <h1>Claim verification, built around <span>your business.</span></h1>
              <p className="hero-description">A configurable platform for automotive businesses to extract document data, verify information, and apply claim rules across different brands and programmes.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#capabilities">Explore capabilities <ArrowRight size={17} /></a>
                <a className="button button-quiet" href="#workflow">See the workflow <ChevronRight size={17} /></a>
              </div>
              <div className="hero-assurances">
                <span><Check size={15} /> Configurable by client</span>
                <span><Check size={15} /> OCR and LLM options</span>
                <span><Check size={15} /> API-enabled verification</span>
              </div>
            </div>
            <div className="hero-visual"><WorkflowPanel /></div>
          </div>
        </section>

        <section className="capability-strip" aria-label="Platform flexibility">
          <div className="container capability-strip-inner">
            <div><Layers3 size={21} /><span><strong>Multi-brand ready</strong><small>Independent client configurations</small></span></div>
            <div><FileSearch size={21} /><span><strong>Document-defined</strong><small>Choose the fields that matter</small></span></div>
            <div><Network size={21} /><span><strong>Integration-ready</strong><small>External verification providers</small></span></div>
            <div><Settings2 size={21} /><span><strong>Configurable rules</strong><small>Workflows that fit your process</small></span></div>
          </div>
        </section>

        <section className="section section-capabilities" id="capabilities">
          <div className="container">
            <SectionHeading
              eyebrow="Platform capabilities"
              title="The controls to shape your verification process"
              description="Configure what the system looks for, how information is extracted, which checks are applied, and how each client workflow is operated."
            />
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, title, description }, index) => (
                <article className="capability-card" key={title}>
                  <span className={`card-icon card-icon-${index + 1}`}><Icon size={22} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="workflow">
          <div className="container">
            <SectionHeading
              eyebrow="A connected process"
              title="From incoming documents to verification outcomes"
              description="Each stage follows the configuration established for the client's documents, data fields, integrations, and claim rules."
            />
            <div className="workflow-steps">
              {workflowSteps.map(({ icon: Icon, number, title, description }, index) => (
                <article className="workflow-step" key={number}>
                  <div className="step-topline"><span className="step-number">{number}</span>{index < workflowSteps.length - 1 && <span className="step-connector" />}</div>
                  <span className="step-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section performance-section" id="performance">
          <div className="container">
            <SectionHeading
              eyebrow="Operational performance"
              title="Designed to process more, without adding manual capacity"
              description="Observed throughput from an automotive claim-verification workflow shows the operational difference between manual review and software-based processing."
            />
            <ComparisonTable />
          </div>
        </section>

        <section className="section extraction-section" id="extraction">
          <div className="container">
            <SectionHeading
              eyebrow="Flexible extraction"
              title="Choose the right approach for each workflow"
              description="Select the processing approach that best fits the document type, complexity, cost requirements, and verification needs."
            />
            <div className="mode-grid">
              <article className="mode-card">
                <span className="mode-icon mode-icon-ocr"><ScanText size={23} /></span>
                <div className="mode-heading"><div><h3>OCR processing</h3><p>Cost-conscious document extraction</p></div><span className="mode-tag">OCR</span></div>
                <p className="mode-description">A practical approach for structured documents and predictable layouts, with configured field extraction and validation.</p>
                <ul><li><CheckCircle2 size={17} /> Efficient for repeatable document formats</li><li><CheckCircle2 size={17} /> Supports high-volume processing flows</li><li><CheckCircle2 size={17} /> Suitable where field positions and formats are consistent</li></ul>
              </article>
              <article className="mode-card">
                <span className="mode-icon mode-icon-llm"><Layers3 size={23} /></span>
                <div className="mode-heading"><div><h3>LLM-based processing</h3><p>Context-aware document understanding</p></div><span className="mode-tag">LLM</span></div>
                <p className="mode-description">Use AWS Bedrock-hosted models, including Claude models, to interpret complex documents and extract structured information.</p>
                <ul><li><CheckCircle2 size={17} /> Better suited to context-heavy documents</li><li><CheckCircle2 size={17} /> Helps handle varied document layouts</li><li><CheckCircle2 size={17} /> Can be selected for workflows requiring deeper interpretation</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section use-cases-section" id="use-cases">
          <div className="container">
            <SectionHeading
              eyebrow="Use cases"
              title="One platform for different automotive programmes"
              description="Client-specific configurations allow the same platform to support different claim types, document sets, verification requirements, and eligibility rules."
            />
            <div className="use-case-grid">
              {useCases.map(({ icon: Icon, title, description }) => (
                <article className="use-case-card" key={title}>
                  <span className="use-case-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="use-case-cta" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <a className="button button-primary" href="#contact">Discuss your workflow <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow">Let's talk about your workflow</p>
                <h2>Bring your claim process into a configurable system.</h2>
                <p>Discuss document requirements, verification rules, infrastructure options, and the integrations your organisation needs.</p>
              </div>
              <a
                className="button button-primary contact-button"
                href="mailto:asmitdash44@gmail.com,zain.fataks@gmail.com,harsh21doshi@gmail.com,sarat.k.alane@gmail.com?subject=DocuVerity%20Enquiry"
              >
                Contact our team <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home"><BrandMark /><span className="brand-copy"><strong>DocuVerity</strong><small>Automotive Verification Platform</small></span></a>
          <p className="footer-summary">Configurable automotive document extraction, verification, and claim processing for different business requirements.</p>
          <div className="footer-links"><a href="#capabilities">Capabilities</a><a href="#workflow">Workflow</a><a href="#performance">Performance</a><a href="#use-cases">Use cases</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} DocuVerity</span><span>Configurable automotive document verification and workflow automation</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
