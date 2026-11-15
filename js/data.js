/**
 * data.js - TJ Portfolio Content
 * ================================
 * This is YOUR content file. Edit anything here to update the site.
 * - Add a project  → push an object to DATA.projects
 * - Add a blog post → push an object to DATA.blog
 * - Add a cert     → push an object to DATA.certifications
 * - Change any text → edit the string directly
 * No HTML knowledge needed for content changes.
 */

const DATA = {

  /* ─────────────────────────────────────────
     PERSONAL - Hero, nav brand, contact
  ───────────────────────────────────────── */
  personal: {
    name:       'Tushar Joshi',
    initials:   'TJ',
    tagline:    'Product, Program & Strategy Leader · Digital Transformation · AI Execution ',
    headline:   "Hi, I'm <em>Tushar Joshi</em>",
    bio:        'Consultant at Samagra Governance Consulting, driving digital transformation &amp; AI product execution across state-level government programs. Ex-Deputy Manager R&amp;D at Mahindra · MBA Gold Medalist, IIM Udaipur · M.Tech 10/10 CPI, IIT Kanpur.',
    photo:      'assets/images/headshot.png',
    email:      'tusharj.iitk@gmail.com',
    email2:     'tusharjoshi.dem2024@iimu.ac.in',
    linkedin:   'https://www.linkedin.com/in/tushar-profile/',
    location:   'India',
    resume:     'https://drive.google.com/file/d/17k-6KG361ABrCkHEWKXsWIJfDkZzDktp/view?usp=sharing',
    available:  false,
  },

  /* ─────────────────────────────────────────
     NAVIGATION
  ───────────────────────────────────────── */
  nav: [
    { label: 'About',          href: 'index.html#about',          page: 'index' },
    { label: 'Experience',     href: 'index.html#experience',      page: 'index' },
    { label: 'Education',      href: 'index.html#education',       page: 'index' },
    { label: 'Projects',       href: 'index.html#projects',        page: 'index' },
    { label: 'Skills',         href: 'index.html#skills',          page: 'index' },
    { label: 'Research',       href: 'index.html#research',        page: 'index' },
    { label: 'Recognition',   href: 'index.html#awards',          page: 'index' },
    { label: 'Blog',           href: 'blog.html',                  page: 'blog'  },
  ],

  /* ─────────────────────────────────────────
     STATS BAR - 5 key numbers below hero
  ───────────────────────────────────────── */
  stats: [
    { num: '5+',   label: 'Years Cross-sector Exp.',  icon: '⚡', color: 'blue'   },
    { num: '7+',    label: 'Articles Published',        icon: '✍️', color: 'indigo' },
    { num: '30+',  label: 'Certifications',            icon: '📜', color: 'gold'   },
    { num: '3',    label: 'Academic Honours',           icon: '🥇', color: 'green'  },
    { num: '5',    label: 'Research & Patents',        icon: '🔬', color: 'purple' },
  ],

  /* ─────────────────────────────────────────
     ABOUT - Bento highlights
  ───────────────────────────────────────── */
  about: {
    heading: 'Engineer by training. Strategist by practice. Builder by instinct.',
    body:    "I'm drawn to work that sits between disciplines - where engineering rigour meets strategy and ground-level execution. Three-institution gold medalist. Patent holder. 4 peer-reviewed papers. Always building something that matters.",
    highlights: [
     /* { row:'top',    num:'4.5+', title:'Cross-sector Experience',    desc:'GovTech · Automotive R&D · MBA · Engineering',                              color:'#1e3a8a', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&auto=format' },*/
       { row:'top',    num:'5+',   title:'Cross-sector Experience',    desc:'GovTech · Automotive R&D · MBA · Engineering',                              color:'#1e3a8a', image:'assets/images/About_CSExp.webp' },
      { row:'top',    num:'3',    title:'Gold Medals',                desc:'IIMU Scholastic · IITK Top 7% · GBPUAT Vice-Chancellor\'s Gold',            color:'#92400e', image:'assets/images/About_Gold.webp' },
      { row:'top',    num:'',     title:'Digital Transformation',     desc:'Digital sectoral programmes at state scale - policy to Go-Live',   color:'#0f4c75', image:'assets/images/About_Digital.webp' },
      { row:'top',    num:'',     title:'AI Product Execution',       desc:'PRDs, Figma, vendor mgmt & A/B experiments - deployed at scale',           color:'#3b0764', image:'assets/images/About_AIproduct.webp' },
      { row:'bottom', num:'',     title:'Program Management',         desc:'Cross-functional R&D & GovTech programmes at Mahindra & Samagra',           color:'#064e3b', image:'assets/images/About_Program.webp' },
      { row:'bottom', num:'30+',  title:'Certifications',             desc:'CSPO · Six Sigma GB · AI · Product Strategy & more',                        color:'#1a3a1a', image:'assets/images/About_Certifications.webp' },
      { row:'bottom', num:'7',    title:'Articles Published',         desc:'AI, product strategy, engineering & society - LinkedIn',                    color:'#312e81', image:'assets/images/About_Articles.webp' },
      { row:'bottom', num:'5',    title:'Research & Patents',         desc:'Peer-reviewed publications & 1 patent under examination',                  color:'#4a1942', image:'assets/images/About_Research.webp' },
    ],
  },

  /* ─────────────────────────────────────────
     EXPERIENCE
  ───────────────────────────────────────── */
  experience: [
    {
      id:             'samagra',
      role:           'Program Manager (Consultant)',
      company:        'Samagra Governance Consulting',
      period:         'Mar 2025 - Present',
      duration:       'Current',
      icon:           '🏛️',
      logo:           'assets/images/logo-samagra.jpg',
      type:           'full-time',
      location:       'Bhubaneswar, Odisha',
      employmentType: 'Full-time',
      teamSize:       'Cross-functional',
      tags:     ['GovTech', 'Digital Transformation', 'AI/Product', 'Program Strategy', 'AgriTech', 'DPI', 'Change Management', 'PRD'],
      summary:  'Driving mission-mode program management, digital transformation & AI product execution for large-scale government programmes — from policy to ground-level delivery at state scale.',
      focusAreas: [
        { icon: '📊', label: 'Program Management' },
        { icon: '💻', label: 'Digital Public Infrastructure' },
        { icon: '🤖', label: 'AI Product Execution' },
        { icon: '🥗', label: 'Change Management' },
        { icon: '📈', label: 'Impact Measurement' },
      ],
      achievements: [
        { icon: '🥗', text: 'Driving mission-mode change management for a statewide child-nutrition elimination programme — architecting system inputs, field motivation & assessments, review/monitoring cadences, and district-level ownership structures across Odisha' },
        { icon: '🌐', text: 'Leading agriculture-sector digital transformation through DPI layers and farmer-centric AI use case activation — advisory personalisation, automation, smart implements, digital twins, AI-based parametric insurance, and AI-driven farmer decision-support systems' },
        { icon: '🐄', text: 'Led execution of Odisha\'s ₹1,500 Cr dairy mission (Mukhyamantri Kamdhenu Yojana), targeting 2× milk production by FY2030 across the state' },
        { icon: '🤖', text: 'Drove On-Call AI from PRD to scale-up: a livestock service-booking platform now live in 10 districts of Odisha, with 3.71 lakh+ bookings' },
        { icon: '📋', text: 'Authored SoWs and RFPs for a ₹9 Cr multi-module digital transformation programme' },
        { icon: '📊', text: 'Designed A/B experiments and analytics to optimise a farmer advisory helpline\'s engagement model; 1,880-farmer survey, 4 experiments' },
        { icon: '🌾', text: 'Activated 7+ Agri-AI use cases — crop advisory, weather forecasting, pricing, and insurance — partnering with leading agri-tech and research institutions' },
        { icon: '🗃️', text: 'Managed 90 lakh+ citizen records with 82% saturation across a multi-source data sanitisation framework integrating Aadhaar and PM-KISAN records' },
      ],
    },
    {
      id:             'mahindra',
      role:           'Deputy Manager, Product Development (R&D)',
      company:        'Mahindra & Mahindra Ltd · Swaraj Division',
      period:         'Jul 2018 - Feb 2022',
      duration:       '3.5 years',
      icon:           '⚙️',
      logo:           'assets/images/logo-mahindra.png',
      type:           'full-time',
      location:       'Mohali, Punjab',
      employmentType: 'Full-time',
      teamSize:       '5+ cross-functional teams',
      tags:     ['CATIA V5', 'PowerBI', 'DFMEA', 'Change Management', 'Quality'],
      summary:  'Led design & quality delivery of ₹100 Cr+ capex projects across tractor families at Swaraj Division, from concept to production.',
      focusAreas: [
        { icon: '⚙️', label: 'Product Development' },
        { icon: '🔍', label: 'Quality Engineering' },
        { icon: '📊', label: 'Data Analytics' },
        { icon: '👥', label: 'Team Leadership' },
        { icon: '🔄', label: 'Change Management' },
      ],
      achievements: [
        { icon: '💰', text: 'Led ₹100 Cr+ styling programme releasing 150+ components across Swaraj 855 & 744 tractors on quality, cost and delivery' },
        { icon: '📋', text: 'Owned full product lifecycle; built DFMEA-based failure mode analysis at 85% traceability and design validation plans' },
        { icon: '⚡', text: 'Drove 220+ quality issue closures in 3 weeks, coordinating quality, manufacturing, testing and programme management' },
        { icon: '📊', text: 'Built Power BI dashboards for project metrics and component analytics, achieving 80%+ component commonality across tractors' },
        { icon: '🔍', text: 'Benchmarked 5 competitors; drove lightweighting within 5% of segment weight and built cost-impact models for design changes' },
        { icon: '🔄', text: 'Developed Change Management Framework in Power BI ensuring 90%+ release traceability across 10+ projects' },
        { icon: '👥', text: 'Mentored 4 CAD engineers; coordinated 5+ cross-functional teams across quality and procurement for on-time delivery' },
        { icon: '🎖', text: 'Filed 1 patent; multiple awards - AFS Divisional Excellence (CEO), SPOT 2019/2020/2021, Collaboration Award' },
      ],
    },
    {
      id:             'trainer',
      role:           'Workshop Trainer & Competition Judge',
      company:        'IIT Kanpur · Premier Institutions · SAE India',
      period:         '2016 - 2022',
      duration:       'Multiple engagements',
      icon:           '🎓',
      type:           'other',
      location:       'Multiple Locations',
      employmentType: 'Part-time / Volunteer',
      teamSize:       'Various cohorts',
      tags:     ['Vehicle Dynamics', 'MATLAB', 'CATIA V5', 'Teaching'],
      summary:  'Conducted technical workshops on engineering topics and served as a national-level judge at Baja SAE India events.',
      focusAreas: [
        { icon: '🎤', label: 'Technical Training' },
        { icon: '⚖️', label: 'Competition Judging' },
        { icon: '🌟', label: 'Mentoring' },
      ],
      impactMetrics: [],
      achievements: [
        { icon: '🎤', text: 'Workshops on Vehicle Dynamics, Automobile Mechanics, MATLAB, CATIA V5' },
        { icon: '⚖️', text: 'Judge, Baja SAE India 2021 & 2022 (virtual rounds)' },
        { icon: '🌟', text: 'CAB Certified (Collaborate, Agile, Bold) - Harvard Manage Mentor' },
      ],
    },
  ],

  /* ─────────────────────────────────────────
     EDUCATION
  ───────────────────────────────────────── */
  education: [
    {
      id:       'gbpuat',
      degree:   'B.Tech',
      field:    'Mechanical Engineering',
      school:   'GB Pant University',
      short:    'GBPUAT',
      period:   '2012 - 2016',
      score:    '83.4%',
      badge:    'B.TECH',
      theme:    'green',
      logoIcon: '<img src="assets/images/logo-gbpuat.jpg" alt="GBPUAT" style="width:80px;height:80px;object-fit:contain;border-radius:50%;">',
      medal:    'Vice Chancellor\'s Gold Medal',
      overview: 'Strong foundation in Mechanical Engineering with leadership experience across Formula SAE, BAJA SAE, research, and technical innovation. Graduated as the Vice Chancellor\'s Gold Medalist, combining academic excellence with hands-on vehicle design, manufacturing, and team leadership experience.',
      overviewStats: [
        { label: 'Score',    val: '83.4%'       },
        { label: 'Duration', val: '2012 - 2016'  },
        { label: 'Program',  val: 'B.Tech'       },
      ],
      keyHighlights: [
        'Vice-Captain, SAE SUPRA 2015 - F1 prototype team (25 members)',
        'Technical Head, SAE BAJA 2016 - ATV prototype (12 members)',
        'Published 2 research papers and secured 1st place in national CAD competitions (2014, 2015)',
      ],
      keyLearnings: ['Mechanical Design & Product Development', 'CAD / CATIA V5', 'Vehicle Dynamics', 'Design Validation & Testing', 'Team Leadership', 'Manufacturing Processes', 'Project Management'],
      focusAreas:   ['Automotive Engineering', 'Mechanical', 'Design', 'Manufacturing', 'SAE', 'Technical Leadership', 'CAD & Simulation', 'Research & Innovation'],
      details: [
        'Vice Chancellor\'s Gold Medal for being the Best Graduating Student of the batch',
        'Vice-Captain, SAE SUPRA India 2015 leading a 25-member Formula Student team',
        'Technical Head, BAJA SAE India 2016 leading a 12-member ATV design team',
        'Chairperson, SAEIndia Collegiate Club 2015-16',
        'Cadventure CAD Competition: 1st Place (2014, 2015)',
        'Innovention Paper Presentation: 2nd Place 2015',
        'Delivered workshops on Automobile Mechanics, CATIA, and Vehicle Dynamics',
        'Published 2 Research Papers on vehicle design, and advanced manufacturing applications',
      ],
    },
    {
      id:       'iitk',
      degree:   'M.Tech',
      field:    'Mechanical Engineering',
      school:   'IIT Kanpur',
      short:    'IITK',
      period:   '2016 – 2018',
      score:    'CPI: 10.0 / 10.0',
      badge:    'M.TECH',
      theme:    'gold',
      logoIcon: '<img src="assets/images/logo-iitk.jpg" alt="IITK" style="width:80px;height:80px;object-fit:contain;border-radius:50%;">',
      medal:    '🏆 Academic Excellence Award (Top 7%)',
      overview: 'Specialized in Solid Mechanics and Design with a perfect CGPA of 10.0/10. Conducted advanced research in computational materials science, structural health monitoring, and numerical modeling while actively contributing to academic leadership and student development initiatives.',
      overviewStats: [
        { label: 'CPI',      val: '10.0 / 10.0' },
        { label: 'Duration', val: '2016 - 2018'  },
        { label: 'Program',  val: 'M.Tech'       },
      ],
      keyHighlights: [
        'Academic Excellence Award recipient with a perfect 10.0/10 CGPA',
        'Published 2 research papers spanning computational materials science and machine learning-based structural monitoring',
        'President, Association of Mechanical Engineers, IIT Kanpur, leading technical and academic initiatives',
      ],
      keyLearnings: ['Computational Materials Science', 'Numerical Modeling & Simulation', 'MATLAB', 'Research Methodology', 'Finite Element Analysis', 'Scientific Writing'],
      focusAreas:   ['Research & Innovation', 'Materials Science', 'Computational', 'Numerical Methods', 'Academic Excellence', 'Machine Learning Applications'],
      details: [
        'Thesis: Shape evolution of precipitates with anisotropic energies - Dr. Anurag Gupta',
        'Academic Excellence Award awarded to the Top 7% students of the batch (2016-17)',
        'Published Journal Paper on Equilibrium Shape of Misfitting Precipitates with Anisotropic Elasticity and Interfacial Energy',
        'Published Conference Paper on Wavelet Analysis & Machine Learning for Structural Health Monitoring of Gas Pipelines',
        'President, Association of Mechanical Engineers (AME), IIT Kanpur',
        'Volunteer, N.K. Batra Metals & Materials Quiz, IIT Kanpur',
        'Conducted 2 MATLAB workshops for undergraduate and postgraduate students',
      ],
    },
    {
      id:       'iim',
      degree:   'MBA (DEM)',
      field:    'Digital Enterprise Management',
      school:   'IIM Udaipur',
      short:    'IIMU',
      period:   '2023 - 2025',
      score:    'CPI: 3.89 / 4.0',
      badge:    'MBA',
      theme:    'blue',
      logoIcon: '<img src="assets/images/logo-iimu.png" alt="IIMU" style="width:80px;height:80px;object-fit:contain;border-radius:50%;">',
      medal:    '🥇 Scholastic Gold Medal',
      overview: 'Specialized in Digital Enterprise Management with a focus on Product Management, Digital Transformation, Analytics, AI, and Business Strategy. Graduated as the Scholastic Gold Medalist while working on industry projects spanning product strategy, AI, digital marketing, analytics, and enterprise transformation.',
      overviewStats: [
        { label: 'CPI',      val: '3.89 / 4.0' },
        { label: 'Duration', val: '2023 - 2025' },
        { label: 'Program',  val: 'MBA (DEM)'   },
      ],
      keyHighlights: [
        'Scholastic Gold Medalist with CPI 3.89/4.00',
        'Winner of Product Management Case Competition and delivered industry consulting projects',
        'Built expertise across Product Management, AI, Analytics, Strategy, and Digital Transformation',
      ],
      keyLearnings: ['Product Management', 'Agile & DevOps', 'Design Thinking', 'AI & Emerging Technologies', 'Digital Transformation', 'Agile Product Development', 'Business Strategy & Enterprise Management'],
      focusAreas:   ['Product Management', 'Digital Transformation', 'Artificial Intelligence', 'Business Strategy', 'Product', 'Digital', 'Data Analytics', 'Design Thinking'],
      details: [
        'Scholastic Gold Medal for outstanding academic performance',
        'Winner, ProdXcelerate\'24 Product Management Case Competition',
        'Developed multiple AI, Product Management, and Digital Transformation projects across industries',
        'CSPO Certified (Scrum Alliance) during program',
        'Delivered industry consulting project for DataCat (Codewave) on product strategy and GTM',
        'Conducted extensive user research, customer interviews, and product prototyping exercises',
      ],
    },
    {
      id:       'school',
      degree:   'Class XII & X',
      field:    'Secondary Education',
      school:   'CBSE Board',
      short:    'School',
      period:   'Up to 2012',
      score:    'XII: 88.2% · X: 92%',
      badge:    'SCHOOL',
      theme:    'gray',
      logoIcon: '<img src="assets/images/logo-campus.jpg" alt="School" style="width:80px;height:80px;object-fit:contain;border-radius:50%;">',
      medal:    '',
      overview: 'Completed schooling at Campus School, Pantnagar, building a strong foundation in academics, leadership, and extracurricular activities. Developed early interest in science, engineering, and problem-solving that later shaped my academic and professional journey.',
      overviewStats: [
        { label: 'Class XII', val: '88.2%' },
        { label: 'Class X',   val: '92%'   },
        { label: 'Board',     val: 'CBSE'  },
      ],
      keyHighlights: [
        'Math Power Test: 1st Place (Class XI)',
        'Limca Book of Record Quiz: Inter-school (2009, 2010)',
        'Certificate of Merit - Academic Performance',
        'Consistently among the top-performing students of the school',
      ],
      keyLearnings: ['Mathematics', 'Physics', 'Chemistry', 'Science', 'Critical Thinking', 'Analytical Thinking'],
      focusAreas:   ['Mathematics', 'Science', 'Academics', 'Competitions', 'Extracurricular Development'],
      details: [
        'Math Power Test: 1st Place (Class XI)',
        'Limca Book of Record Quiz: Inter-school (2009, 2010)',
        'Science Exhibition participation (2008, 2009)',
        'Certificate of Merit - Academic Performance (Class VII, IX)',
      ],
    },
  ],

  /* ─────────────────────────────────────────
     PROJECTS
     categories: mba | engineering | self | competition
  ───────────────────────────────────────── */
  projects: [
    {
      "id": "oncall-ai",
      "title": "On-Call AI - Doorstep Artificial Insemination Booking Platform",
      "category": "work",
      "result": "🚀 Live · 10 Districts · 3.7L+ Bookings",
      "featured": true,
      "image": "assets/images/projects/oncall-ai.webp",
      "tags": [
        "GovTech",
        "Product Management",
        "PRD",
        "Figma",
        "Sprint Planning",
        "Livestock",
        "Odisha"
      ],
      "summary": "Led product for On-Call AI (Artificial Insemination) - Odisha's centralised platform for booking doorstep AI services through the 155333 helpline, with OTP-verified delivery. 3.7 lakh+ bookings across 10 districts.",
      "detail": {
        "desc": "On-Call AI (Artificial Insemination) is a centralised service booking platform for livestock farmers in Odisha, run by the F&ARD Department under the LEAP programme. A farmer calls the 155333 helpline, the request becomes a ticket auto-assigned to the Gram Panchayat's AI technician, and the service is closed with the farmer's OTP. Piloted in Puri (July 2023) and scaled to 10 districts (January 2024). Owned the product roadmap: authored PRDs and the feature-wise scope for the web portal, AIT mobile app and helpline toolkit, built Figma wireframes, and drove sprint planning and vendor management. Technician incentives are paid quarterly against verified deliveries (5 rounds so far, ~₹27 lakh in round 5).",
        "outcome": "3.71 lakh bookings, 2,400+ technicians mapped, pregnancy-positive rate up from 28% to ~48% (as of Oct 2025)",
        "link": "https://olrds.odisha.gov.in/en/on-call-ai/",
        "highlights": [
          {
            "label": "Organisation",
            "val": "Samagra Governance (for F&ARD Dept, Odisha)"
          },
          {
            "label": "Scale",
            "val": "3.71 lakh bookings · 10 districts · 2,400+ technicians"
          },
          {
            "label": "Channel",
            "val": "155333 helpline · OTP-verified closure"
          },
          {
            "label": "Tools",
            "val": "PRD, Figma, Agile / Sprint Planning"
          }
        ]
      }
    },
    {
      "id": "n8n-agents",
      "title": "n8n AI Agent Workflows - Resume & Research",
      "category": "self",
      "result": "⚙️ Built & Demoed",
      "featured": false,
      "image": "assets/images/projects/n8n-agents.webp",
      "tags": [
        "n8n",
        "AI Agents",
        "OpenAI",
        "SerpApi",
        "Automation",
        "No-code/Low-code"
      ],
      "summary": "Built two n8n agent workflows: a Resume Optimisation Agent and a Research Agent that searches, synthesises and emails a 2-page brief.",
      "detail": {
        "desc": "Independently built two end-to-end AI agent workflows in n8n. (1) Resume Optimisation Agent: takes a resume PDF and a job description, analyses both, and suggests crisp, relevant edits without filler. (2) Research Agent: a chat trigger receives the query, then a chain of API calls runs web search (SerpApi), content extraction and OpenAI for query refinement and synthesis; the output is a 2-page report with key findings, summary and source links, mailed automatically via Gmail. Shared the deck and a demo video on LinkedIn.",
        "outcome": "Two working agents, demoed publicly (LinkedIn post: 1.8k impressions, 31 reactions)",
        "link": "https://www.linkedin.com/posts/tushar-profile_ai-agents-automation-ugcPost-7393058418145558530-5cxR/",
        "highlights": [
          {
            "label": "Stack",
            "val": "n8n · OpenAI · SerpApi · Gmail"
          },
          {
            "label": "Agent 1",
            "val": "Resume Optimisation - PDF + JD → targeted edits"
          },
          {
            "label": "Agent 2",
            "val": "Research Agent → 2-page brief → auto email"
          }
        ]
      }
    },
    {
      "id": "datacat",
      "title": "DataCat (Codewave) - Product Strategy for an SME Ad-Analytics Tool",
      "category": "mba",
      "result": "🏢 Industry Project · Codewave",
      "featured": false,
      "image": "assets/images/projects/datacat.webp",
      "tags": [
        "Product Strategy",
        "Competitive Analysis",
        "User Research",
        "API Integration",
        "Pricing",
        "GTM"
      ],
      "summary": "Industry project with Codewave: competitor benchmarking, a Meta Ads API integration plan, user interviews and a tiered pricing model for DataCat, an SME ad-analytics MVP.",
      "detail": {
        "desc": "IIM Udaipur DEM industry project with Codewave, in a team of 3 (industry mentor: Karthik Ramesh; faculty mentor: Dr. Avadhoot Jathar). DataCat was an MVP connected only to Google Ads. Benchmarked it against Funnel.io, Supermetrics, Adzooma, HubSpot, Optmyzr and BCG Marketing Catalyst: compliance monitoring was its differentiator, single-platform integration its main gap. Mapped Google Ads vs Meta Ads API metrics and wrote an integration plan (request batching, caching, retries, incremental sync, rate limits). Interviewed a brand strategy manager, IIMU's digital marketing manager and faculty, a B2B head of digital marketing and a VP at PureTech Digital. Recommended a simpler insight dashboard, automated reporting, multi-touch attribution, CRM integration and a tiered pricing model (15-day free trial, self-service Basic, agent-assisted Premium).",
        "outcome": "Final report + presentation to Codewave: competitor benchmark, Meta Ads integration plan, pricing model",
        "link": "https://drive.google.com/file/d/1hDNItUndjsQESLupwowUguPAW_EaR6pn/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "Industry Project - Codewave, IIM Udaipur"
          },
          {
            "label": "Client",
            "val": "DataCat (SME Analytics Platform)"
          },
          {
            "label": "Deliverable",
            "val": "Platform benchmarking, API roadmap, GTM strategy"
          }
        ]
      }
    },
    {
      "id": "maruti",
      "title": "Maruti Suzuki - CNG Expansion Decision Framework",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/maruti.webp",
      "tags": [
        "Decision Modelling",
        "DMN",
        "Data Strategy",
        "AI Strategy",
        "Pareto Analysis"
      ],
      "summary": "Decision framework for Maruti Suzuki's CNG expansion: Pareto-ranked strategic decisions, a DMN decision model, data-gap analysis and AI/automation feasibility.",
      "detail": {
        "desc": "Building Data-Driven Organisations (BDDO) group project, IIM Udaipur. Reviewed Maruti's 5-year financials and peer ratios against Hyundai, Tata Motors and M&M. Ranked five strategic decisions (diesel phase-out, CNG expansion, NEXA, localisation, EV plan) by monetary impact using Pareto analysis, and picked CNG expansion. Mapped the data behind that decision, built a DMN decision model, classified each data need as available, partial or missing with ways to close the gaps, and proposed AI use cases (CNG demand forecasting, refuelling-infrastructure mapping, competitor and customer insight). Concluded the decision can only be partly automated. My part: identifying the key decisions and the data behind them.",
        "outcome": "DMN decision model + data-gap and AI strategy report",
        "link": "https://drive.google.com/file/d/1HfPhoGLW7IWSmR3vI9ASGRtNDS-ba1gc/view",
        "highlights": [
          {
            "label": "Course",
            "val": "Building Data-Driven Organisations, IIM Udaipur"
          },
          {
            "label": "Methods",
            "val": "Pareto analysis · DMN decision model · data-gap analysis"
          },
          {
            "label": "My part",
            "val": "Key decisions and the data behind them"
          }
        ]
      }
    },
    {
      "id": "churn",
      "title": "Bank Customer Churn Prediction & Retention",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/churn.webp",
      "tags": [
        "Advanced Analytics",
        "JMP",
        "Logistic Regression",
        "Random Forest",
        "KNN",
        "Decision Trees"
      ],
      "summary": "Predicted bank customer churn with 5 ML models in JMP; picked random forest (AUC 0.89) and turned the key drivers into retention strategies.",
      "detail": {
        "desc": "Advanced Analytics I group project, IIM Udaipur. Prepared a bank churn dataset in JMP (encoding, binning age and credit score, oversampling exited customers). Built a forward-selection logistic regression (84% accuracy, AUC 0.83), then compared logistic regression, discriminant analysis, KNN, decision tree and random forest. Picked random forest (250 trees): 81% accuracy, 75% precision, AUC 0.89, with the cut-off lowered to 0.3 to catch more churners. Age, number of products and balance were the strongest churn drivers. Turned these into retention strategies: cross-selling to single-product customers, age-based engagement, re-activating inactive users and targeted offers for high-risk customers.",
        "outcome": "Random forest churn model (AUC 0.89) + segmented retention strategy",
        "link": "https://drive.google.com/file/d/1dyxXu7VQZayntAFEfRABk2ABwz2DHKX-/view",
        "highlights": [
          {
            "label": "Course",
            "val": "Advanced Analytics I, IIM Udaipur"
          },
          {
            "label": "Tool",
            "val": "JMP"
          },
          {
            "label": "Best model",
            "val": "Random forest · AUC 0.89 · 81% accuracy"
          }
        ]
      }
    },
    {
      "id": "quicify",
      "title": "Quicify - Q-Commerce Product Strategy",
      "category": "self",
      "result": "🏆 1st Place",
      "featured": true,
      "image": "assets/images/projects/quicify.webp",
      "tags": [
        "Product Strategy",
        "Q-Commerce",
        "GTM",
        "Financial Model"
      ],
      "summary": "Won 1st place at ProdXcelerate'24 (BITS Goa). Full product strategy for a quick-commerce platform.",
      "detail": {
        "desc": "Developed an end-to-end product strategy for a quick-commerce platform — covering pain point identification, market sizing, competitive landscape, product roadmap, go-to-market plan, and 3-year financial projections. Presented and won against competing MBA teams at ProdXcelerate'24, organised by the Consulting Club and CEL, BITS Goa.",
        "outcome": "🏆 1st Place — ProdXcelerate'24, BITS Goa",
        "link": "https://drive.google.com/file/d/1LqnL8wQ2IZOZlM1MYHfu5Lh1xPMbBoiS/view",
        "highlights": [
          {
            "label": "Competition",
            "val": "ProdXcelerate'24 — BITS Goa"
          },
          {
            "label": "Result",
            "val": "1st Place"
          },
          {
            "label": "Deliverable",
            "val": "Full product strategy + GTM + financial model"
          }
        ]
      }
    },
    {
      "id": "rapido",
      "title": "Rapido - Urban Transport for Female Users",
      "category": "self",
      "result": "Participation",
      "featured": false,
      "image": "assets/images/projects/rapido.webp",
      "tags": [
        "Urban Mobility",
        "Design Thinking",
        "User Research",
        "Safety"
      ],
      "summary": "Design Thinking-based product strategy to improve Rapido's safety and adoption among female urban users.",
      "detail": {
        "desc": "Applied Design Thinking to redesign Rapido's experience for female users — empathy-led research including quantitative surveys, contextual interviews, and feasibility-impact balancing to identify safety gaps. Proposed a user-centric product feature set addressing safety, trust, and discoverability on the platform.",
        "outcome": "Case Competition Participation",
        "link": "https://drive.google.com/file/d/1WYV7U4XXanRa5Z56-zfhs5nVaJsgILDO/view",
        "highlights": [
          {
            "label": "Type",
            "val": "Case Competition"
          },
          {
            "label": "Method",
            "val": "Design Thinking — Empathy → Ideate → Prototype"
          },
          {
            "label": "Research",
            "val": "Quantitative surveys + contextual interviews"
          },
          {
            "label": "Focus",
            "val": "Urban Mobility, Women Safety, Ride-hailing"
          }
        ]
      }
    },
    {
      "id": "piced",
      "title": "PicED - Gen-AI Product Strategy",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/piced.webp",
      "tags": [
        "Gen-AI",
        "B2B",
        "Agile",
        "DevOps",
        "Product Roadmap",
        "GTM"
      ],
      "summary": "End-to-end PM for a Gen-AI B2B EdTech platform — BMC, user personas, MOSCOW, roadmap, GTM, Agile implementation.",
      "detail": {
        "desc": "Two-course project for PicED — a Gen-AI B2B platform that turns complex teaching concepts into visuals, memes and animations for educators. Course 1, Product Management (IIM Udaipur, guide: Prof. Malthi Satish): user research (73% of educators said making visually appealing content takes too much effort), competitor and market analysis, Business Model Canvas, personas, MoSCoW feature prioritisation, low-fidelity wireframes, MVP, product roadmap, success metrics (DAU, NPS, retention, ARPU, MRR) and GTM strategy. Course 2, Agile & DevOps: a vocabulary-learning version with user segmentation and a pricing survey, run over 3 sprints with a Kanban board, story points, sprint backlogs, daily scrums and retrospectives on Miro.",
        "outcome": "Full PM lifecycle deliverable — Strategy + Agile implementation",
        "link": "https://drive.google.com/file/d/15guY8D0Vj-kcsezJL1NhrcmxqJlmSftL/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "Malthi Satish, IIM Udaipur"
          },
          {
            "label": "Courses",
            "val": "Product Management + Agile & DevOps"
          },
          {
            "label": "Methods",
            "val": "BMC · MOSCOW · Kanban · Sprints · GTM"
          },
          {
            "label": "Market",
            "val": "B2B Enterprise EdTech"
          }
        ]
      }
    },
    {
      "id": "finzo",
      "title": "FinZo - AI Investment Platform",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/finzo.webp",
      "tags": [
        "FinTech",
        "AI/ML",
        "GTM",
        "Business Model",
        "Portfolio Optimisation"
      ],
      "summary": "AI-powered retail investment platform simplifying stock selection and portfolio optimisation for time-strapped investors.",
      "detail": {
        "desc": "Conceptualised FinZo — a GenAI investment assistant for time-strapped retail investors, built around the persona 'Anita', a busy professional investing on friends' tips. Provides stock-selection insights, portfolio optimisation and risk profiling. Covered customer journey, Business Model Canvas, market research, feature prioritisation and roadmap, technical architecture (React / React Native, Node.js, PostgreSQL + Redis, AWS, Alpha Vantage and Plaid APIs), 5-year financial projections (30k users in year 1), GTM and valuation (₹6 Cr ask for 10% equity, ₹60 Cr post-money). Industry FinTech course project, IIM Udaipur (guide: Sriram Natarajan).",
        "outcome": "Full business plan + GTM deliverable",
        "link": "https://drive.google.com/file/d/12TeYRD8fd0uqm3CeOatCXmfKb4wZ4YTP/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "Sriram Natarajan, IIM Udaipur"
          },
          {
            "label": "Domain",
            "val": "FinTech / Retail Investment"
          },
          {
            "label": "Problem",
            "val": "Time-strapped investors need smart, simplified investing"
          },
          {
            "label": "Deliverable",
            "val": "Business plan + market sizing + GTM + financial projections"
          }
        ]
      }
    },
    {
      "id": "purepaws",
      "title": "PurePaws - D2C Startup Pitch",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/purepaws.webp",
      "tags": [
        "D2C",
        "Startup",
        "Subscription",
        "Pitch Deck",
        "Pet Care"
      ],
      "summary": "Monthly protein-rich, preservative-free dog treats subscription brand — full investor pitch with market research and brand narrative.",
      "detail": {
        "desc": "Conceived and pitched a D2C subscription brand for premium dog nutrition — monthly boxes of protein-rich, preservative-free treats (dehydrated chicken instead of preservatives). Told through a customer story ('Timi' and her dog 'Buddy'), with problem research, value against alternatives, marketing and traction plan, market analysis, financial projections, investment ask and an online store concept. Entrepreneurship course project, IIM Udaipur (guide: Prof. Rajesh Pandit).",
        "outcome": "Investor-ready pitch deck + brand strategy",
        "link": "https://drive.google.com/file/d/1JFgKt0GMsYSR_uQwtMtWOyS5z1H7VzTf/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "Rajesh Pandit, IIM Udaipur"
          },
          {
            "label": "Model",
            "val": "D2C Monthly Subscription — Pet Nutrition"
          },
          {
            "label": "Product",
            "val": "Protein-rich, preservative-free dog treats"
          },
          {
            "label": "Deliverable",
            "val": "Market research + brand narrative + financial model"
          }
        ]
      }
    },
    {
      "id": "colgate",
      "title": "Colgate Rebranding - Design Thinking",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/colgate.webp",
      "tags": [
        "Design Thinking",
        "Rebranding",
        "User Research",
        "Brand Strategy"
      ],
      "summary": "Redesigned Colgate's brand and product ecosystem using Design Thinking — bundled oral hygiene solution addressing freshness and value needs.",
      "detail": {
        "desc": "Design Thinking course project, IIM Udaipur. Reframed the brief to 'a branding-based product and promotion strategy for Colgate Fresh for customers who value freshness'. Ran 8 user interviews with empathy maps, clustered insights into 9 themes and 3 key insights (value-conscious buyers want discount bundles; they want a complementary freshness range from a trusted brand; family habits make people stick to brands). Built the persona 'Ashok' and a POV/HMW, then ideated and prioritised a bundled oral-care kit: Colgate Max Fresh, a hybrid toothbrush with tongue cleaner, a germ-cleaning 'phantom candy', a flavoured freshness inhaler and a teeth wiper, promoted through family-themed TV ads.",
        "outcome": "Rebranding strategy + bundled product concept",
        "link": "https://drive.google.com/file/d/1JELtYNcKQYCNb0X5hRYPb9tyHdhGDLuO/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "IIM Udaipur"
          },
          {
            "label": "Framework",
            "val": "Stanford Design Thinking — Empathise → Define → Ideate → Prototype"
          },
          {
            "label": "Deliverable",
            "val": "Bundled oral hygiene ecosystem (brush + paste + inhaler + candy)"
          }
        ]
      }
    },
    {
      "id": "industry",
      "title": "Mahindra & Mahindra - Strategic Analysis",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/industry.webp",
      "tags": [
        "Porter's Five Forces",
        "Strategy",
        "Automotive",
        "Financial Analysis"
      ],
      "summary": "Industry structure and competitive strategy analysis of the 4-wheeler automotive sector with M&M as focal firm.",
      "detail": {
        "desc": "Deep-dive structural analysis of the Indian 4-wheeler automotive sector with Mahindra & Mahindra as the focal firm. Applied Porter's Five Forces, financial performance analysis, and competitive positioning against Tata Motors and Maruti Suzuki to derive strategic recommendations. Strategic Management course project, IIM Udaipur (guide: Prof. Shaleen Gopal).",
        "outcome": "Industry analysis + strategic recommendations report",
        "link": "https://drive.google.com/file/d/1u6JBLkzAW7GnMhk3GPMhag1zGTAZUIDh/view",
        "highlights": [
          {
            "label": "Guide",
            "val": "Shaleen Gopal, IIM Udaipur"
          },
          {
            "label": "Tools",
            "val": "Porter's Five Forces · Financial Analysis · Strategic Group Map"
          },
          {
            "label": "Competitors",
            "val": "Tata Motors · Maruti Suzuki"
          },
          {
            "label": "Focal Firm",
            "val": "Mahindra & Mahindra — 4-Wheeler Division"
          }
        ]
      }
    },
    {
      "id": "thesis",
      "title": "Shape Evolution of Precipitates with Anisotropic Interfacial Energies - M.Tech Thesis",
      "category": "engineering",
      "result": "📄 Journal Published",
      "featured": false,
      "image": "assets/images/projects/thesis.webp",
      "tags": [
        "XFEM",
        "Level Set Method",
        "MATLAB",
        "C++",
        "Computational Mechanics",
        "LaTeX"
      ],
      "summary": "Built an XFEM + level-set framework to find the equilibrium shape of precipitates in alloys with anisotropic interfacial energy. Published in MSMSE (2020).",
      "detail": {
        "desc": "M.Tech thesis, Department of Mechanical Engineering, IIT Kanpur (July 2018; supervisor: Dr. Anurag Gupta). Developed a general numerical technique for the equilibrium shape of a misfitting precipitate in a matrix, accounting for anisotropy in both interfacial and elastic bulk energies; earlier shape-optimisation work had ignored anisotropic interfacial energy. Coded in MATLAB and C++: the extended finite element method (XFEM) computes the stress field around a moving interface, and a level set method moves the interface using interfacial and elastic velocity components. Verified the code against known isotropic results, then studied single and interacting precipitates with anisotropic interfaces, covering stability, bifurcation and loss of symmetry. CPI: 10/10. Published as T. Joshi, R. Arora, A. Basak and A. Gupta, 'Equilibrium shape of misfitting precipitates with anisotropic elasticity and anisotropic interfacial energy', Modelling Simul. Mater. Sci. Eng. 28 (2020) 075009.",
        "outcome": "Published in Modelling and Simulation in Materials Science and Engineering 28 (2020) 075009 · doi.org/10.1088/1361-651X/abae12",
        "link": "https://drive.google.com/file/d/1gkJJs5b7EnkZl5FGzZwxpa2QSIU6nOSO/view",
        "highlights": [
          {
            "label": "Institute",
            "val": "IIT Kanpur, 2018"
          },
          {
            "label": "Supervisor",
            "val": "Dr. Anurag Gupta"
          },
          {
            "label": "Method",
            "val": "XFEM + level set (MATLAB, C++)"
          },
          {
            "label": "Publication",
            "val": "MSMSE 28 (2020) 075009"
          }
        ]
      }
    },
    {
      "id": "supra",
      "title": "SAE SUPRA 2015 - F1 Prototype",
      "category": "engineering",
      "result": "Vice-Captain",
      "featured": false,
      "image": "assets/images/projects/supra.webp",
      "tags": [
        "CATIA V5",
        "SolidWorks",
        "HyperMesh",
        "SolidWorks Simulation",
        "Suspension Design",
        "Steering",
        "FEA",
        "SAE"
      ],
      "summary": "Vice-Captain & Technical Head. Designed, simulated and validated full F1 prototype chassis, suspension & steering. Paper published.",
      "detail": {
        "desc": "Led a 25-member team as Vice-Captain and Technical Head at SAE SUPRA India 2015. Responsibilities spanned Chassis Design, CAE Analysis, Steering Geometry, Ergonomics, and overall design leadership — from concept through simulation, manufacturing, and validation. Modelled in CATIA V5 and SolidWorks; analysed in HyperMesh and SolidWorks Simulation. Design work covered the roll cage, steering system and impact attenuator. Wrote a chassis design report: a space-frame chassis built up from the suspension hard points in AISI 1018 steel, with front, side and rear impact analysis at 60 km/h using Euro NCAP inputs, torsional and bending analysis, and CFD on the bodywork for drag. Sponsored by JBM Group and Tata Motors. Research published in Imperial Journal of Interdisciplinary Research.",
        "outcome": "Competition vehicle built + Research paper published",
        "link": "https://drive.google.com/file/d/0B5u_OTPvyacbeXlpRlNVNVBGVFk/view?resourcekey=0-9dUGRJx_NXt6l9q6n8CetQ",
        "highlights": [
          {
            "label": "Role",
            "val": "Vice-Captain · Technical Head · Chassis & CAE Lead"
          },
          {
            "label": "Team Size",
            "val": "25 students"
          },
          {
            "label": "Sponsors",
            "val": "JBM Group · Tata Motors"
          },
          {
            "label": "Publication",
            "val": "Imperial Journal of Interdisciplinary Research"
          },
          {
            "label": "Tools",
            "val": "CATIA V5 · SolidWorks · Hypermesh · Lotus Shark"
          }
        ]
      }
    },
    {
      "id": "baja",
      "title": "SAE BAJA 2016 - ATV Prototype",
      "category": "engineering",
      "result": "Technical Head",
      "featured": false,
      "image": "assets/images/projects/baja.webp",
      "tags": [
        "ATV Design",
        "CATIA V5",
        "Lotus Shark",
        "ANSYS",
        "Simulation",
        "Team Lead"
      ],
      "summary": "Technical Head overseeing all departments for national ATV buggy design, simulation, manufacturing and racing.",
      "detail": {
        "desc": "Led the complete technical delivery of an All-Terrain Vehicle buggy for SAE BAJA India 2016 as Technical Head of a 20-member team — overseeing all engineering departments: chassis, drivetrain, suspension, brakes, and ergonomics. Designed in CATIA, Lotus Shark and ANSYS; built in the college workshop. Covered design, simulation, manufacturing, and race-day operations. Sponsored by JBM Group and Tata Motors.",
        "outcome": "ATV buggy built and competed nationally",
        "link": "https://drive.google.com/open?id=1QZC8dgOzfLZqzNeMz49WM1uF794Wv2ma",
        "highlights": [
          {
            "label": "Role",
            "val": "Technical Head — All Departments"
          },
          {
            "label": "Team Size",
            "val": "20 members"
          },
          {
            "label": "Sponsors",
            "val": "JBM Group · Tata Motors"
          },
          {
            "label": "Year",
            "val": "2016 — SAE BAJA India"
          },
          {
            "label": "Tools",
            "val": "CATIA V5 · ANSYS · Lotus Shark"
          }
        ]
      }
    },
    {
      "id": "bikestand",
      "title": "Automatic Bike Stand - B.Tech Project",
      "category": "engineering",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/bikestand.webp",
      "tags": [
        "Mechanism Design",
        "SolidWorks Simulation",
        "FEA",
        "Fabrication",
        "B.Tech"
      ],
      "summary": "B.Tech final-year project: a chain-driven mechanism that automatically retracts a two-wheeler's side stand if the rider forgets, to prevent accidents.",
      "detail": {
        "desc": "B.Tech final-year project at GBPUAT Pantnagar, in a team of 7 (advisor: Dr. Lokesh Varshney). Designed and fabricated a mechanism that draws power from the chain drive: a modified sprocket turns an axle and pushing lever, which pushes a lifting lever pivoted on the side stand and retracts it once the vehicle moves. Sized parts (high-carbon steel sprocket, AISI 1018 axle and levers) and ran static and fatigue FEA in SolidWorks Simulation for a 60 Nm peak torque (e.g. sprocket: 33 MPa max stress vs 450 MPa yield, minimum load factor 6.4). Built a working prototype on a bicycle for about ₹2,180; the design adapts to any chain-driven two-wheeler.",
        "outcome": "Working prototype + FEA-validated design, ~₹2,180 build cost",
        "link": "https://drive.google.com/file/d/0B5u_OTPvyacbbVpGY1I5cmNVaTA/view?resourcekey=0-VWbNLuyAKvTqO02lt-RrTw",
        "highlights": [
          {
            "label": "Team",
            "val": "7 members · advisor Dr. Lokesh Varshney"
          },
          {
            "label": "Analysis",
            "val": "SolidWorks Simulation (static + fatigue)"
          },
          {
            "label": "Prototype cost",
            "val": "~₹2,180"
          }
        ]
      }
    },
    {
      "id": "patent",
      "title": "Hood Latch Assembly for Tractors - Patent",
      "category": "work",
      "result": "📜 Patent Published (2024)",
      "featured": true,
      "image": "assets/images/projects/patent.webp",
      "tags": [
        "IP",
        "Patent",
        "Automotive",
        "Tractor",
        "Mechanism Design",
        "R&D"
      ],
      "summary": "Co-inventor of a double-locking hood latch for tractors, filed by Mahindra & Mahindra in 2022 and published in 2024.",
      "detail": {
        "desc": "Co-inventor (with Muneet Sharma) of a hood latch assembly for tractors, filed by Mahindra & Mahindra (Swaraj Division). Tractor hoods can unlock from improper locking or be opened by mistake during operation, which can cause serious accidents. The latch adds an independent second lock so the hood stays secured in all conditions, while being lighter, simpler and cheaper than existing latches. The application also covers methods for opening and closing the hood. Indian patent application 202211015024, filed 18 March 2022, published in the Patent Journal (issue 02/2024).",
        "outcome": "Application 202211015024 · published 2024 · awaiting examination",
        "link": "https://drive.google.com/file/d/1G1Gi6Muw5GU1iHYXD21rxgQ-Nb1NOlWf/view",
        "highlights": [
          {
            "label": "Application",
            "val": "202211015024"
          },
          {
            "label": "Filed",
            "val": "18 March 2022"
          },
          {
            "label": "Published",
            "val": "2024 (Patent Journal 02/2024)"
          },
          {
            "label": "Status",
            "val": "Awaiting examination"
          },
          {
            "label": "Applicant",
            "val": "Mahindra & Mahindra · co-inventor Muneet Sharma"
          }
        ]
      }
    },
    {
      "id": "powerbi",
      "title": "Power BI Dashboards - NSM Program & Engineering Change Tracking (Swaraj)",
      "category": "work",
      "result": "Deployed at M&M",
      "featured": false,
      "image": "assets/images/projects/powerbi.webp",
      "tags": [
        "Power BI",
        "Data Visualisation",
        "Program Management",
        "DFMEA",
        "Engineering Change Management"
      ],
      "summary": "Built Power BI dashboards at Mahindra Swaraj to track the NSM tractor-styling program across 6 families and engineering change/design-review compliance.",
      "detail": {
        "desc": "Independently designed and deployed two Power BI dashboards at Mahindra & Mahindra (Swaraj Division) R&D. (1) NSM dashboard for the program restyling the tractor portfolio: stage status of 6 tractor families (concept to VP1), DFMEA effectiveness by part criticality, open-review-comment (ORC) status by stage, sheet-metal and electrical parts commonality and configurability across families, and weight benchmarks against competitor tractors. (2) Aggregate change dashboard (F22): engineering changes from ECN data by feedback source (sourcing, NPD, quality, R&D, manufacturing, assembly, field quality), alteration rate and release type by project, and design-review adherence and closure days by project and sub-aggregate.",
        "outcome": "Used for program and design-review tracking across R&D projects",
        "highlights": [
          {
            "label": "Tool",
            "val": "Microsoft Power BI"
          },
          {
            "label": "Dashboards",
            "val": "NSM program (6 tractor families) + F22 engineering change"
          },
          {
            "label": "Use",
            "val": "Program and design-review tracking in R&D"
          }
        ]
      }
    },
    {
      "id": "fracture",
      "title": "Crack Analysis - Fracture & Fatigue",
      "category": "engineering",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/fracture.webp",
      "tags": [
        "Abaqus",
        "Fracture Mechanics",
        "FEA",
        "Stress Intensity Factor"
      ],
      "summary": "Abaqus crack analysis of a plate with an elliptical hole, comparing stress intensity factors from several methods with analytic results.",
      "detail": {
        "desc": "IIT Kanpur course project (guide: Dr. P. Venkitanarayanan). Modelled a plate with an elliptical hole in Abaqus and computed stress intensity factors using several numerical methods, then compared them with analytic solutions.",
        "outcome": "Course project report",
        "link": "https://drive.google.com/file/d/0B5u_OTPvyacbdXNiTTFOV0Q3LXc/view?resourcekey=0-8nwBhlEcCaLLsylg16caHQ"
      }
    },
    {
      "id": "composites",
      "title": "Composite Preparation & Analysis",
      "category": "engineering",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/composites.webp",
      "tags": [
        "Composites",
        "Tensile Testing",
        "MATLAB",
        "Classical Laminate Theory"
      ],
      "summary": "Prepared and tested 2-layer and 4-layer composites, compared with classical laminate theory in MATLAB.",
      "detail": {
        "desc": "IIT Kanpur course project (guide: Dr. P. Venkitanarayanan). Fabricated 2-layer and 4-layer composite laminates, measured density with a burn test and ran tensile tests, then compared results with analytic values and classical laminate theory implemented in MATLAB.",
        "outcome": "Lab-tested composites + project report",
        "link": "https://drive.google.com/open?id=1t2EiNV8evAiXcXunV4MHq86tC4Tjcr4c"
      }
    },
    {
      "id": "gradient-elasticity",
      "title": "Gradient Elasticity - Mode I Crack & Continuum Mechanics Reports",
      "category": "engineering",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/gradient-elasticity.webp",
      "tags": [
        "Continuum Mechanics",
        "Gradient Elasticity",
        "Abaqus",
        "Tensor Calculus"
      ],
      "summary": "Mode I crack displacement using gradient elasticity, compared with the classical solution and validated in Abaqus.",
      "detail": {
        "desc": "IIT Kanpur Continuum Mechanics course (guide: Dr. B. L. Sharma). Derived Mode I crack displacement under gradient elasticity, compared it with the classical solution and validated it in Abaqus. Other course reports: shape bifurcations of inclusions in a matrix, derivatives with respect to second-order tensors, kinematics of a 3D body accreting/declining with time, and a proof of the Cayley-Hamilton theorem.",
        "outcome": "Main report + 4 supporting course reports",
        "link": "https://drive.google.com/file/d/1sq8146Otqz_913ES7VVmzg5lRbN4nc1s/view"
      }
    },
    {
      "id": "swaraj-dt",
      "title": "Swaraj Tractors - Digital Transformation Strategy",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/swaraj-dt.webp",
      "tags": [
        "Digital Transformation",
        "Strategy",
        "Agri-Equipment",
        "Roadmap",
        "Change Management"
      ],
      "summary": "Digital transformation strategy for Swaraj Tractors across R&D, customer experience and supply chain, with a phased roadmap and enablers.",
      "detail": {
        "desc": "Digital Transformation (DTM) group project, IIM Udaipur. Diagnosed Swaraj's challenges (manual processes, little real-time data, weak supply-chain coordination, low customer engagement) and built a 'Mera Swaraj' transformation framework on three pillars: data-driven, collaborative R&D with agile testing; customer experience (modular tractors, online portal and virtual showroom, mobile service units, subscription maintenance); and a connected, IoT-enabled supply chain with built-in quality checks. Added a phased roadmap and enablers: BU digital champions, upskilling and cross-functional teams.",
        "outcome": "Transformation framework + phased roadmap",
        "link": "https://drive.google.com/file/d/1Ro4X2onxEypJZV8UrF58GelhdPRetRCj/view"
      }
    },
    {
      "id": "swaraj-iot",
      "title": "Smart Farming IoT System for Swaraj Tractors",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/swaraj-iot.webp",
      "tags": [
        "IoT",
        "AgriTech",
        "AWS",
        "Sensors",
        "Solution Architecture",
        "Precision Farming"
      ],
      "summary": "Soil-health IoT system for Swaraj tractor owners: on-tractor sensors, AWS analytics and a farmer app, with architecture, roadmap and cost viability.",
      "detail": {
        "desc": "Internet of Things group project, IIM Udaipur. Designed a soil-health monitoring system for Swaraj tractor owners: pH, moisture and NPK sensors (e.g. SEN0169, Teros 12, CropX) mounted on the tractor, AWS cloud analytics and a farmer mobile app. Mapped capabilities from first-order (real-time soil data, variable-rate input dispensing) to higher-order (AI crop selection, weather-linked crop management) and business outcomes (yield, input cost, sustainability). Covered user persona, high- and low-level architecture, tech stack, roadmap and cost and viability analysis.",
        "outcome": "IoT solution design + architecture + viability analysis",
        "link": "https://drive.google.com/file/d/1mHO41ApaPEKsA7d0y-sbSiWF4DRjpcyV/view"
      }
    },
    {
      "id": "shopping-trends",
      "title": "Customer Shopping Insights - Segmentation, ANN & Market Basket",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/shopping-trends.webp",
      "tags": [
        "R",
        "Python",
        "Clustering",
        "ANN",
        "Market Basket Analysis",
        "Recommender Systems"
      ],
      "summary": "Retail analytics on a year of shopping data: customer clustering, an ANN to predict spend, market basket analysis and a recommendation system.",
      "detail": {
        "desc": "Advanced Analytics II group project, IIM Udaipur. Cleaned and encoded a year of retail shopping data (outliers capped at 5th/95th percentile). Clustered customers into 3 segments (older high spenders, younger budget-conscious, middle-aged moderate spenders), built an ANN to predict purchase amount, ran market basket analysis (min support 10%, confidence 60%) and a recommendation system, in R and Python. Recommended segment-specific offers, retention incentives for the at-risk younger segment, and high-lift bundles for cross-selling.",
        "outcome": "Segmentation + purchase prediction + cross-sell recommendations",
        "link": "https://drive.google.com/file/d/1NlfBecPqSeD0PPfu5Jzb9c-dHE91mI9o/view"
      }
    },
    {
      "id": "cnn-retinopathy",
      "title": "CNN for Diabetic Retinopathy Detection",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/cnn-retinopathy.webp",
      "tags": [
        "Deep Learning",
        "CNN",
        "Computer Vision",
        "Python",
        "Google Colab"
      ],
      "summary": "Built a CNN in Google Colab to classify diabetic retinopathy from retina images, and compared CNNs with DNNs and YOLO.",
      "detail": {
        "desc": "AI course project (AIFW), IIM Udaipur. Built a CNN on a public Kaggle retina-image dataset (224x224, Gaussian-filtered) to detect diabetic retinopathy: convolution and max-pooling layers, batch normalisation, ReLU and softmax, trained with Adam (learning rate 1e-5) for 30 epochs. Explained CNN architecture, compared it with DNNs and covered YOLO for real-time detection.",
        "outcome": "Working CNN notebook + explainer deck",
        "link": "https://drive.google.com/file/d/15hLEw1Y-agj8ctalnmT3jV_kjxGCAeHV/view"
      }
    },
    {
      "id": "blockchain-ipr",
      "title": "Blockchain-based IP Rights Management",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/blockchain-ipr.webp",
      "tags": [
        "Blockchain",
        "Smart Contracts",
        "IP Management"
      ],
      "summary": "Blockchain platform concept for IP ownership records, automated royalties and transparent licensing.",
      "detail": {
        "desc": "Blockchain course project (BTM), IIM Udaipur. Proposed a blockchain platform for intellectual property rights: an immutable ownership ledger, smart contracts that pay royalties automatically, and transparent licensing terms. It targets piracy and counterfeiting, slow royalty payouts, ownership disputes and the single point of failure in central IP registries.",
        "outcome": "Solution concept deck",
        "link": "https://drive.google.com/file/d/1sTlcPmx7EKtg_EJM3eZFNJCgTwnIuj4i/view"
      }
    },
    {
      "id": "bewakoof-dm",
      "title": "Bewakoof.com - Digital Marketing Strategy",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/bewakoof-dm.webp",
      "tags": [
        "Digital Marketing",
        "Content Strategy",
        "Social Media",
        "GenAI Creatives",
        "D2C"
      ],
      "summary": "Digital marketing strategy for Bewakoof.com targeting Gen Z and millennials, with personas, content pillars, a UGC campaign and AI-made creatives.",
      "detail": {
        "desc": "Digital Marketing group project (3 milestones), IIM Udaipur. Built a digital marketing strategy for Bewakoof.com aimed at 18–35 year-olds: personas ('Trendy Tara', 'Casual Karan'), customer journey, content pillars (fashion, memes and pop culture, user-generated content, sustainability), a #BewakoofStyleChallenge UGC campaign, a metaverse styling concept and sample posts. Made reels, lookbooks and campaign creatives with AI tools (InVideo, DALL·E) and benchmarked Instagram presence against The Souled Store and Urban Monkey.",
        "outcome": "Strategy deck + AI-generated campaign creatives",
        "link": "https://drive.google.com/file/d/1clExNRjwnFM81WyUrFyJzULlablS4AJo/view"
      }
    },
    {
      "id": "nothing-phone",
      "title": "Nothing Phone - India Market Positioning",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/nothing-phone.webp",
      "tags": [
        "Marketing Strategy",
        "STP",
        "5C Analysis",
        "Positioning",
        "Consumer Tech"
      ],
      "summary": "5C analysis, STP and marketing mix for Nothing's entry into the Indian smartphone market.",
      "detail": {
        "desc": "Marketing Management project, Term 1, IIM Udaipur. Ran a 5C analysis, segmentation, targeting and positioning, and a marketing mix for Nothing in India, using Statista market data. Picked 'Pragmatics' (tech-savvy 25–40 year-olds earning ₹8L+ who value design, privacy and performance) as the target segment, defined points of difference and parity, and proposed value-based pricing and a promotion plan.",
        "outcome": "Positioning strategy report",
        "link": "https://drive.google.com/file/d/16WtQWOBaMZR5xhevuZcPoN0HWJWLtKIK/view"
      }
    },
    {
      "id": "inr-internationalisation",
      "title": "INR Internationalisation - Strengthening Indian Financial Markets",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/inr-internationalisation.webp",
      "tags": [
        "Policy Analysis",
        "Financial Markets",
        "FPI",
        "KYC",
        "Regulation"
      ],
      "summary": "Policy review of measures to prepare Indian financial markets for wider INR internationalisation, focused on easing KYC for foreign portfolio investors.",
      "detail": {
        "desc": "Group project (FTM course), IIM Udaipur, team of 7. Reviewed measures to strengthen Indian financial markets for wider INR internationalisation: FPI KYC and registration, onshore–offshore market integration, a 24x5 INR market, BISIP in INR and bond-index inclusion. Owned the KYC section: mapped SEBI vs RBI inconsistencies and paperwork bottlenecks for foreign portfolio investors, recommended digital KYC (digital signatures, SWIFT confirmation from global custodians, KYC at investment-manager level), and checked them against FTP 2023 and the SEBI Master Circular 2023.",
        "outcome": "Policy recommendations deck",
        "link": "https://drive.google.com/file/d/1jqaM2VSWTPQIbTK-XAZPhDIWwzkJMCBa/view"
      }
    },
    {
      "id": "ob-structural-audit",
      "title": "Structural Audit - Udaipur Field Club",
      "category": "mba",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/ob-structural-audit.webp",
      "tags": [
        "Organisational Behaviour",
        "Structural Audit",
        "Interviews"
      ],
      "summary": "Organisational structure audit of a local club through staff interviews, identifying promotion gaps and functional silos.",
      "detail": {
        "desc": "Organisational Behaviour project, Term 1, IIM Udaipur. Interviewed 5 employees at different levels of Udaipur Field Club using a structured questionnaire, and audited its structure across division of labour, coordination, hierarchy and informal relationships. Found inconsistent, discretion-based promotions with no performance appraisal or feedback system, and functional silos with no formal cross-team collaboration.",
        "outcome": "Structural audit paper",
        "link": "https://drive.google.com/file/d/1mtILFfWdcPYjEG-WGKa0QkfV4MNcxcdn/view"
      }
    },
    {
      "id": "confianza",
      "title": "Data Strategy & Governance Turnaround - Confianza (Case)",
      "category": "mba",
      "result": "Individual",
      "featured": false,
      "image": "assets/images/projects/confianza.webp",
      "tags": [
        "Data Strategy",
        "Data Governance",
        "MDM",
        "Single Source of Truth"
      ],
      "summary": "Individual case study: a data strategy and governance roadmap for a 50-country firm with 100+ unintegrated applications.",
      "detail": {
        "desc": "Individual BDDO case study, IIM Udaipur. Writing as a consultant to Confianza, a firm in 50+ countries with 100+ unintegrated applications and high SG&A, diagnosed its poor data strategy (4–5 week quarterly close, manual reconciliation). Proposed rationalising applications by stability and usage, a single source of truth, master data management and a four-phase roadmap (discovery, planning, execution, institutionalisation) with a risk–reward matrix.",
        "outcome": "One-page consulting case report",
        "link": "https://drive.google.com/file/d/1Ej2wyZQ1zAMySSADl0DHr4D9w-txm_QX/view"
      }
    },
    {
      "id": "involuntary-car-safety",
      "title": "Enhancing Car Safety Using Involuntary Actions",
      "category": "self",
      "result": "",
      "featured": false,
      "image": "assets/images/projects/involuntary-car-safety.webp",
      "tags": [
        "Automotive Safety",
        "Sensors",
        "Biometrics",
        "Concept Design",
        "ECU"
      ],
      "summary": "B.Tech concept for theft-proof car ignition that verifies the driver from involuntary actions (door opening, foot and seat pressure, posture, steering grip).",
      "detail": {
        "desc": "B.Tech paper and presentation at College of Technology, GBPUAT Pantnagar, in a team of 3. Proposed using a driver's involuntary actions as an identity check before ignition: door-opening time and speed, first-foot pressure, seat pressure and settling time, head distance from the roof, and steering grip position. These are sensed with Hall-effect sensors, a door-velocity gauge, S-type load cells, occupant-classification pressure sensors, IR and touch/position sensors feeding an electronic control module. Benchmarked against OnStar, LoJack and Viper/Cobra systems, and set out merits (no password, hard to fake) and limits (needs high accuracy; suits cars with one or two drivers).",
        "outcome": "Concept paper + presentation",
        "link": "https://drive.google.com/file/d/1xOP_-Y6cJetNog5pSZwotOYnmQY7Cgdu/view"
      }
    },
  ],

  /* ─────────────────────────────────────────
     SKILLS
  ───────────────────────────────────────── */
  skills: {
    intro: 'Bars show depth of hands-on, professional use.',
    capabilities: [
      { name: 'Program & change management',   level: 4, keywords: 'Governance · SoW & RFP · vendors · stakeholders · adoption' },
      { name: 'Engineering & R&D',             level: 4, keywords: 'DFMEA–DVP · stage-gate · CAD / CAE · XFEM modelling' },
      { name: 'Product management',            level: 3, keywords: 'PRDs · user research · prioritisation · roadmap & GTM' },
      { name: 'Digital transformation & AI',   level: 3, keywords: 'DT roadmaps · AI use cases · data strategy · AI agents' },
      { name: 'Data & analytics',              level: 3, keywords: 'Power BI · predictive models · segmentation · experiments' },
    ],
    toolGroups: [
      { title: 'Product', tools: [
        { name: 'Excel', level: 4 }, { name: 'Miro', level: 3 }, { name: 'Stitch', level: 3 },
        { name: 'Lovable', level: 3 }, { name: 'Figma', level: 2 }, { name: 'JIRA', level: 2 },
      ]},
      { title: 'Data & AI', tools: [
        { name: 'Power BI', level: 3 }, { name: 'Python', level: 2 }, { name: 'R', level: 2 },
        { name: 'JMP', level: 2 }, { name: 'n8n', level: 2 }, { name: 'OpenAI API', level: 2 },
      ]},
      { title: 'Other tools', tools: [
        { name: 'CATIA V5', level: 4 }, { name: 'MATLAB', level: 4 }, { name: 'SolidWorks', level: 3 },
        { name: 'Abaqus', level: 3 }, { name: 'NX', level: 2 }, { name: 'C++', level: 2 },
      ]},
    ],
  },

  /* ─────────────────────────────────────────
     RESEARCH - Publications & Patent
  ───────────────────────────────────────── */
  research: {
    patent: {
      id:        'patent-hood',
      title:     'Hood Latch Assembly for Vehicles and a Method Thereof',
      body:      'Double-locking hood latch for tractors; Indian application 202211015024 (co-inventor). Applicant: Mahindra &amp; Mahindra.',
      filed:     '2022',
      pub:       '2024',
      status:    'Awaiting Examination',
      office:    'Indian Patent Office',
      link:      'https://drive.google.com/file/d/1G1Gi6Muw5GU1iHYXD21rxgQ-Nb1NOlWf/view',
    },
    publications: [
      {
        id:       'pub1',
        featured: true,
        type:     'Journal',
        title:    'Equilibrium Shape of Misfitting Precipitates with Anisotropic Elasticity and Anisotropic Interfacial Energy',
        venue:    'Modelling and Simulation in Materials Science and Engineering',
        pub:      'IOP Publishing',
        year:     '2020',
        doi:      'https://doi.org/10.1088/1361-651X/abae12',
        tags:     ['Computational Mechanics', 'XFEM', 'Level Set', 'Materials Science'],
      },
      {
        id:       'pub2',
        featured: true,
        type:     'Conference',
        title:    'Application of Wavelet Analysis and Machine Learning on Vibration Data from Gas Pipelines for Structural Health Monitoring',
        venue:    'Procedia Structural Integrity · SICE 2018, Hyderabad',
        pub:      'Elsevier',
        year:     '2019',
        doi:      'https://doi.org/10.1016/j.prostr.2019.05.089',
        tags:     ['Wavelet Analysis', 'Machine Learning', 'Structural Health Monitoring', 'Vibration'],
      },
      {
        id:       'pub3',
        featured: false,
        type:     'Journal',
        title:    'Design and Analysis of Suspension and Steering Components of F1 Prototype',
        venue:    'Imperial Journal of Interdisciplinary Research (IJIR)',
        pub:      'IJIR',
        year:     '2016',
        doi:      'https://drive.google.com/file/d/0B5u_OTPvyacbdnBQbUVMeXdvYTA/view?resourcekey=0-963OvVhihnYyhPwzfFjJRw',
        tags:     ['Suspension Design', 'FEA', 'Lotus Shark', 'CATIA V5'],
      },
      {
        id:       'pub4',
        featured: false,
        type:     'Journal',
        title:    'Composite Boring Bar for Better Performance',
        venue:    'International Journal of Engineering Science and Computing (IJESC)',
        pub:      'IJESC',
        year:     '2016',
        doi:      'https://drive.google.com/file/d/0B5u_OTPvyacbajFkZG9iaUtBa1E/view?resourcekey=0-9DR_QHf8I6N0o-O63sJepA',
        tags:     ['Composites', 'Vibration Damping', 'FEA', 'SolidWorks'],
      },
    ],
  },

  /* ─────────────────────────────────────────
     MORE - Test Scores · Co-Curriculars
  ───────────────────────────────────────── */
  more: {
    scores: [
      { name: 'GMAT', score: '710', total: '800',  year: '2024', icon: '📊', color: 'blue'  },
      { name: 'GRE',  score: '317', total: '340',  year: '2019', icon: '📝', color: 'navy'  },
      { name: 'TOEFL',score: '106', total: '120',  year: '2019', icon: '🌐', color: 'green' },
      { name: 'GATE', score: '826', total: '1000', year: '2016', icon: '⚙️', color: 'gold'  },
    ],
    cocurricular: [
      { name: 'Innovention - Paper Presentation',    result: '🥈 2nd Place (2015)',            org: 'GBPUAT'      },
      { name: 'Junkyard Wars - Problem Solving',     result: '🥈 2nd Place (2015)',            org: 'GBPUAT'      },
      { name: 'Poster Presentation',                 result: 'Research Scholar Day',           org: 'IIT Kanpur'  },
      { name: 'Cognizance 2014 Tech Fest',           result: 'Paper Presentation + Robowars', org: 'IIT Roorkee' },
    ],
  },

  /* ─────────────────────────────────────────
     AWARDS
  ───────────────────────────────────────── */
  awards: [
    { icon: '🏅', name: 'Scholastic Gold Medal',                                   from: 'IIM Udaipur'                                    },
    { icon: '🏅', name: 'Academic Excellence Award',                               from: 'IIT Kanpur · Top 7% of Batch'                   },
    { icon: '🏅', name: "Vice Chancellor's Gold Medal",                            from: 'GB Pant University'                             },
    { icon: '🏅', name: 'Excellence Award, New Sheet Metal (NSM)',                 from: 'Mahindra & Mahindra'                            },
    { icon: '🏅', name: 'Divisional Excellence Award, Auto & Farm Sector (AFS)',  from: 'Mahindra Swaraj Division · presented by CEO'   },
    { icon: '🏅', name: 'SPOT Awards ×3 + Collaboration Award',                   from: 'Mahindra & Mahindra · 2019, 2020, 2021'        },
    { icon: '🏅', name: '1st Place – Quicify Case',                               from: "ProdXcelerate'24, BITS Goa"                    },
    { icon: '🏅', name: 'Cadventure 1st Place',                                   from: 'CAD design competition · GBPUAT (2014 & 2015)' },
  ],

  /* ─────────────────────────────────────────
     LEADERSHIP (positions of responsibility)
  ───────────────────────────────────────── */
  leadership: [
    { role: 'President',                                           org: 'Association of Mechanical Engineers, IIT Kanpur' },
    { role: 'Chairperson (2015–16) · Programme Chair (2014–15)', org: 'SAEIndia Collegiate Club, GBPUAT'               },
    { role: 'Judge',                                               org: 'Baja SAE India 2021 & 2022 · Virtual Rounds'    },
    { role: 'SAE NIS Convention Representative',                   org: 'UPES, Dehradun'                                 },
    { role: 'Volunteer',                                           org: 'Science Education Models for Students'          },
    { role: 'Volunteer',                                           org: 'Prof. N.K. Batra Metals & Material Quiz 2016'   },
  ],

  /* ─────────────────────────────────────────
     CERTIFICATIONS
     categories: product-agile | data-ai | quality | security | engineering | management
  ───────────────────────────────────────── */
  certifications: [
    // Product & Agile
    { name: 'Certified Scrum Product Owner (CSPO)',                                   issuer: 'Scrum Alliance',                          year: '2024', cat: 'product-agile', url: ''                                                        },
    { name: 'The Ultimate Introduction to Agile Product Management',                  issuer: 'Udemy (Jonathan Gibson)',                  year: '2024', cat: 'product-agile', url: 'https://ude.my/UC-b403f5ee-41f3-41c7-bfee-5d1774858312' },
    { name: 'Technology for Product Managers',                                        issuer: 'LinkedIn Learning (PMI-registered)',       year: '2024', cat: 'product-agile', url: ''                                                        },
    { name: 'Project Management',                                                     issuer: 'LearnTube',                               year: '2024', cat: 'product-agile', url: ''                                                        },
    { name: 'Enterprise Design Thinking Practitioner',                                issuer: 'IBM',                                     year: '2024', cat: 'product-agile', url: 'https://www.credly.com/go/TFxU207x'                      },
    { name: 'Digital Adoption Certification',                                         issuer: 'Pendo',                                   year: '2024', cat: 'product-agile', url: ''                                                        },
    // Data & AI
    { name: 'Generative AI: Introduction and Applications',                           issuer: 'IBM · Coursera',                          year: '2024', cat: 'data-ai',       url: 'https://coursera.org/verify/GZE6LC6P49WJ'                },
    { name: 'Introduction to Data Analytics',                                         issuer: 'IBM · Coursera',                          year: '2024', cat: 'data-ai',       url: 'https://coursera.org/verify/KP3SLT76Z9GH'                },
    { name: 'Introduction to R Programming for Data Science',                         issuer: 'IBM · Coursera',                          year: '2024', cat: 'data-ai',       url: 'https://coursera.org/verify/4PZUY934G6PV'                },
    { name: 'Data Analytics Workshop',                                                issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'data-ai',       url: ''                                                        },
    { name: 'Power BI: Beginner to Pro (Avi Singh, Microsoft MVP)',                   issuer: 'Mahindra (internal learning)',             year: '2021', cat: 'data-ai',       url: ''                                                        },
    { name: 'Python Tutorial Course',                                                 issuer: 'Unknown',                                 year: '2018', cat: 'data-ai',       url: ''                                                        },
    { name: 'C++ Tutorial Course',                                                    issuer: 'Unknown',                                 year: '2017', cat: 'data-ai',       url: ''                                                        },
    // Quality
    { name: 'Lean Six Sigma Green Belt',                                              issuer: 'KPMG in India',                           year: '2024', cat: 'quality',       url: ''                                                        },
    // Security
    { name: 'Certified in Cybersecurity (CC)',                                        issuer: 'ISC2',                                    year: '2024', cat: 'security',      url: ''                                                        },
    // Engineering
    { name: 'AutoCAD (Basic to Advanced)',                                             issuer: 'Unknown',                                 year: '2013', cat: 'engineering',   url: ''                                                        },
    { name: 'CATIA V5 (Basic to Advanced)',                                            issuer: 'Unknown',                                 year: '2013', cat: 'engineering',   url: ''                                                        },
    { name: 'Additive Manufacturing – Introduction',                                  issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Basics of Automotive Ergonomics',                                        issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Introduction to Body Systems & Subsystems',                              issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Introduction to Formability of Automotive Sheets',                       issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Fundamentals of Vehicle Crash',                                          issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Heat Treatment',                                                         issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Plastic Joining Methodology & Mechanical Fasteners',                     issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Farm Basics & Tractor Applications',                                     issuer: 'Mahindra Technical Academy',               year: '2018', cat: 'engineering',   url: ''                                                        },
    { name: 'Introduction to Trims Manufacturing Processes (Understanding Plastics)', issuer: 'Mahindra Technical Academy',               year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Advanced Strength of Materials',                                         issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'engineering',   url: ''                                                        },
    { name: 'Insights on Industry 4.0',                                              issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'engineering',   url: ''                                                        },
    // Management
    { name: 'Finance for Non-Finance (Advanced)',                                      issuer: 'Mahindra (internal learning)',             year: '2020', cat: 'management',    url: ''                                                        },
    { name: 'Management Communications (Planning · Writing · Presenting)',            issuer: 'Harvard Business Publishing',             year: '2024', cat: 'management',    url: ''                                                        },
    { name: 'Quantitative Methods',                                                   issuer: 'Harvard Business Publishing',             year: '2024', cat: 'management',    url: ''                                                        },
    { name: 'Spreadsheet Modeling',                                                   issuer: 'Harvard Business Publishing',             year: '2024', cat: 'management',    url: ''                                                        },
    { name: 'Mathematics for Management',                                             issuer: 'Harvard Business Publishing',             year: '2024', cat: 'management',    url: ''                                                        },
    { name: 'Digital Transformation',                                                 issuer: 'University of Virginia & BCG · Coursera', year: '2024', cat: 'management',    url: 'https://coursera.org/verify/WAPCL8ZVHGOA'                },
    { name: 'CAB Leadership Behaviours — Collaborate · Agile · Bold',                issuer: 'Mahindra × Harvard ManageMentor Spark',   year: '2021', cat: 'management',    url: ''                                                        },
    { name: 'Logistics & Supply Chain Fundamentals, Design, Operations',              issuer: 'Udemy (Operational Excellence Training)',  year: '2025', cat: 'management',    url: 'https://ude.my/UC-ced251c9-293b-4d26-8147-52441b365299'  },
  ],

  /* ─────────────────────────────────────────
     BLOG POSTS
     platforms: linkedin | medium | personal
     categories: product | engineering | career | ai | ideas
     ─────────────────────────────────────────
     📝 TO ADD: Paste your LinkedIn post URL in the `link` field.
                Add a short excerpt (2–3 sentences) in `excerpt`.
                Set `image` to a cover image path if you have one.
  ───────────────────────────────────────── */
  blog: [
    {
      title:    'Building My Own Personal Kanban',
      category: 'product-strategy',
      date:     'Jun 2026',
      sortDate: '20 Jun 2026',
      type:     'Post',
      readTime: '',
      excerpt:  'Tired of fighting Microsoft Lists and Google Sheets, I wrote my own requirements and built a personal Kanban with React, Supabase and Vercel, with AI as the engineering partner. 355 tasks tracked, 272 done.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7473943966090944512/',
      tags:     ['Kanban', 'Product Building', 'Productivity', 'AI-assisted Development'],
    },
    {
      title:    'Right Idea. Wrong Moment — A Product Story',
      category: 'product-strategy',
      date:     'May 2026',
      sortDate: '24 May 2026',
      type:     'Article',
      readTime: '6 min',
      excerpt:  'Why Google Glass collapsed despite elite engineering while Meta’s smart glasses now sell in millions, seen through the desirability–viability–feasibility lens. Sometimes timing matters more than the innovation itself.',
      url:      'https://www.linkedin.com/pulse/right-idea-wrong-moment-product-story-tushar-joshi-uxdmc',
      tags:     ['Product Strategy', 'Product Management', 'Wearables', 'DVF Framework'],
    },
    {
      title:    'When the Customer Journey Disappears',
      category: 'product-strategy',
      date:     'Mar 2026',
      sortDate: '29 Mar 2026',
      type:     'Article',
      readTime: '5 min',
      excerpt:  'Agentic AI is rewriting the consumer journey. When one prompt can replace five browser tabs, the consideration layer collapses — and Amazon vs Perplexity’s Comet is the first courtroom evidence that the battle has begun.',
      url:      'https://www.linkedin.com/pulse/when-customer-journey-disappears-tushar-joshi-6zf4c',
      tags:     ['Agentic AI', 'Product Strategy', 'Consumer Behaviour', 'Digital Transformation'],
    },
    {
      title:    'AI Agents on n8n: Resume and Research Agents',
      category: 'ai-tech',
      date:     'Nov 2025',
      sortDate: '9 Nov 2025',
      type:     'Post',
      readTime: '',
      excerpt:  'Two agent workflows built on n8n: a resume optimiser that tailors a CV to a job description, and a research agent that searches, synthesises and emails a two-page report with sources.',
      url:      'https://www.linkedin.com/posts/tushar-profile_ai-agents-automation-ugcPost-7393058418145558530-5cxR/',
      tags:     ['AI Agents', 'n8n', 'Automation', 'OpenAI'],
    },
    {
      title:    'The Average Depth of a Stream',
      category: 'society-workplace',
      date:     'Oct 2025',
      sortDate: '29 Oct 2025',
      type:     'Post',
      readTime: '',
      excerpt:  'A man steps into a stream because its average depth is three feet. The data didn’t deceive him; his question did. On asking data the questions that actually matter.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7389363214255570944/',
      tags:     ['Data Thinking', 'Statistics', 'Decision Making'],
    },
    {
      title:    'Automation Isn’t the Answer — Transformation Is',
      category: 'product-strategy',
      date:     'Oct 2025',
      sortDate: '23 Oct 2025',
      type:     'Post',
      readTime: '',
      excerpt:  'Automating a broken process doesn’t fix it; it scales the problem — the ‘garbage multiplier effect’. Why transformation has to start by asking what we are automating.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7387152076226686976/',
      tags:     ['Digital Transformation', 'Process Design', 'Automation'],
    },
    {
      title:    'When Machines Campaign: AI and the ECI’s Call for Responsibility',
      category: 'ai-tech',
      date:     'Oct 2025',
      sortDate: '12 Oct 2025',
      type:     'Post',
      readTime: '',
      excerpt:  'A deepfake of Bihar’s Chief Minister promising a loan waiver, and the Election Commission’s order to label AI-generated campaign content. Why that matters when most Indians can’t spot a deepfake.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7383188713373323264/',
      tags:     ['Deepfakes', 'AI Governance', 'Elections', 'Responsible AI'],
    },
    {
      title:    'Is ATS Turning Hiring into a ‘Lemons Market’?',
      category: 'society-workplace',
      date:     'Mar 2025',
      sortDate: '21 Mar 2025',
      type:     'Post',
      readTime: '',
      excerpt:  'Keyword-stuffed resumes get through the filters while genuinely skilled candidates are screened out, and employers conclude there’s a talent shortage. Akerlof’s lemons market, applied to hiring.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7308908980720803843/',
      tags:     ['Hiring', 'ATS', 'Economics', 'Future of Work'],
    },
    {
      title:    'India’s Leap into Industry 4.0: Transforming Manufacturing, Empowering the Future',
      category: 'engineering-industry',
      date:     'Jan 2025',
      sortDate: '1 Jan 2025',
      type:     'Article',
      readTime: '6 min',
      excerpt:  'India’s history in textiles and craftsmanship once made it the world’s industrial leader. As Industry 4.0 reshapes manufacturing, here is how India is positioning itself at the meeting point of automation, AI and scale.',
      url:      'https://www.linkedin.com/pulse/indias-leap-industry-40-transforming-manufacturing-empowering-joshi-ndvzc',
      tags:     ['Industry 4.0', 'Manufacturing', 'India', 'Automation'],
    },
    {
      title:    'Microsoft OneNote – Product Study',
      category: 'product-strategy',
      date:     'Dec 2024',
      sortDate: '5 Dec 2024',
      type:     'Post',
      readTime: '',
      excerpt:  'A product deep dive into OneNote: users and use cases, the competitive landscape, a focused persona, and a Kano-model assessment of its features.',
      url:      'https://www.linkedin.com/feed/update/urn:li:activity:7270534322611249152/',
      tags:     ['Product Study', 'Kano Model', 'User Persona', 'Competitive Analysis'],
    },
    {
      title:    'Giving Deserved Attention to Self-Attention: A Revolution in AI (A Review)',
      category: 'ai-tech',
      date:     'Nov 2024',
      sortDate: '17 Nov 2024',
      type:     'Article',
      readTime: '5 min',
      excerpt:  'Self-attention is the breakthrough behind every large language model. How a sentence about sitting on a river bank teaches AI to read context, not just sequence.',
      url:      'https://www.linkedin.com/pulse/giving-deserved-attention-self-attention-revolution-ai-tushar-joshi-dj1fc',
      tags:     ['Transformers', 'Deep Learning', 'LLMs', 'AI Architecture'],
    },
    {
      title:    'Beyond ‘Candlelight’: Cultural Revolution to Realise the True Independence',
      category: 'society-workplace',
      date:     'Aug 2024',
      sortDate: '15 Aug 2024',
      type:     'Article',
      readTime: '4 min',
      excerpt:  'Written on the eve of the 78th Independence Day, after the Kolkata rape case. Candle marches and outrage are not enough; real independence needs structural change, accountability and a shift in culture.',
      url:      'https://www.linkedin.com/pulse/beyond-candlelight-cultural-revolution-realise-true-tushar-joshi-inbtc',
      tags:     ['Society', 'Women’s Safety', 'Social Change', 'India'],
    },
    {
      title:    'Enchanting Minds: AI’s Impact (Magic & Risks) on Mental Health',
      category: 'ai-tech',
      date:     'July 2024',
      sortDate: '6 Jul 2024',
      type:     'Article',
      readTime: '5 min',
      excerpt:  'AI companions are being used for therapy, emotional support and mental wellness with promising results. But dependency, hallucination and data privacy risks deserve equal attention.',
      url:      'https://www.linkedin.com/pulse/enchanting-minds-ais-impact-magic-risks-mental-health-tushar-joshi-g3jbc',
      tags:     ['AI', 'Mental Health', 'Ethics', 'Deepfakes'],
    },
    {
      title:    'From History to Workplace: Attitude Change Theories in Indian Narratives',
      category: 'society-workplace',
      date:     'Jun 2024',
      sortDate: '17 Jun 2024',
      type:     'Article',
      readTime: '5 min',
      excerpt:  'How attitude-change theories from psychology play out across Indian history and today’s workplaces, from motivating a team to persuading customers and citizens.',
      url:      'https://www.linkedin.com/pulse/from-history-workplace-attitude-change-theories-indian-tushar-joshi-kxngc',
      tags:     ['Leadership', 'Organisational Behaviour', 'Change Management', 'India'],
    },
    {
      title:    'Data Don’t Lie or Does It!',
      category: 'society-workplace',
      date:     'Jun 2024',
      sortDate: '8 Jun 2024',
      type:     'Article',
      readTime: '4 min',
      excerpt:  'We trust data because it feels objective, but it is collected, cleaned and interpreted by people, and every step can add bias. When numbers mislead, and how to read them critically.',
      url:      'https://www.linkedin.com/pulse/data-dont-lie-does-tushar-joshi-agf8c',
      tags:     ['Data Analytics', 'Decision Making', 'Bias', 'Critical Thinking'],
    },
  ],

  /* ─────────────────────────────────────────
     BLOG CATEGORIES (for filters on blog page)
  ───────────────────────────────────────── */
  blogCategories: [
    { id: 'all',                  label: 'All'                   },
    { id: 'product-strategy',     label: 'Product & Strategy'    },
    { id: 'ai-tech',              label: 'AI & Tech'             },
    { id: 'engineering-industry', label: 'Engineering & Industry' },
    { id: 'society-workplace',    label: 'Society & Workplace'   },
  ],

  /* ─────────────────────────────────────────
     FOOTER LINKS
  ───────────────────────────────────────── */
  footer: {
    copy: '© 2025 Tushar Joshi',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-profile/' },
      { label: 'Blog',     href: 'blog.html' },
      { label: 'Resume',   href: 'https://drive.google.com/file/d/17k-6KG361ABrCkHEWKXsWIJfDkZzDktp/view?usp=sharing' },
    ],
  },
};
