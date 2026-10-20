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
    resume:     'assets/resume.pdf',            // ← drop your PDF here
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
    { label: 'Blog',           href: 'blog.html',                  page: 'blog'  },
    { label: 'Certifications', href: 'certifications.html',        page: 'certs' },
  ],

  /* ─────────────────────────────────────────
     STATS BAR - 5 key numbers below hero
  ───────────────────────────────────────── */
  stats: [
    { num: '4.5+', label: 'Years Cross-sector Exp.',  icon: '⚡', color: 'blue'   },
    { num: '7+',    label: 'Articles Published',        icon: '✍️', color: 'indigo' },
    { num: '30+',  label: 'Certifications',            icon: '📜', color: 'gold'   },
    { num: '3',    label: 'Gold Medals',               icon: '🥇', color: 'green'  },
    { num: '4',    label: 'Research & Patents',        icon: '🔬', color: 'purple' },
  ],

  /* ─────────────────────────────────────────
     ABOUT - Bento highlights
  ───────────────────────────────────────── */
  about: {
    heading: 'Engineer by training. Strategist by practice. Builder by instinct.',
    body:    "I'm drawn to work that sits between disciplines - where engineering rigour meets strategy and ground-level execution. Three-institution gold medalist. Patent holder. 4 peer-reviewed papers. Always building something that matters.",
    highlights: [
     /* { row:'top',    num:'4.5+', title:'Cross-sector Experience',    desc:'GovTech · Automotive R&D · MBA · Engineering',                              color:'#1e3a8a', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&auto=format' },*/
       { row:'top',    num:'4.5+', title:'Cross-sector Experience',    desc:'GovTech · Automotive R&D · MBA · Engineering',                              color:'#1e3a8a', image:'assets/images/About_CSExp.png' },
      { row:'top',    num:'3',    title:'Gold Medals',                desc:'IIMU Scholastic · IITK Top 7% · GBPUAT Vice-Chancellor\'s Gold',            color:'#92400e', image:'assets/images/About_Gold.png' },
      { row:'top',    num:'',     title:'Digital Transformation',     desc:'Digital sectoral programmes at state scale - policy to Go-Live',   color:'#0f4c75', image:'assets/images/About_Digital.png' },
      { row:'top',    num:'',     title:'AI Product Execution',       desc:'PRDs, Figma, vendor mgmt & A/B experiments - 14L+ farmers reached',         color:'#3b0764', image:'assets/images/About_AIproduct.png' },
      { row:'bottom', num:'',     title:'Program Management',         desc:'Cross-functional R&D & GovTech programmes at Mahindra & Samagra',           color:'#064e3b', image:'assets/images/About_Program.png' },
      { row:'bottom', num:'30+',  title:'Certifications',             desc:'CSPO · Six Sigma GB · AI · Product Strategy & more',                        color:'#1a3a1a', image:'assets/images/About_Certifications.png' },
      { row:'bottom', num:'7',    title:'Articles Published',         desc:'AI, product strategy, engineering & society - LinkedIn',                    color:'#312e81', image:'assets/images/About_Articles.png' },
      { row:'bottom', num:'3',    title:'Research & Patents',         desc:'Peer-reviewed publications & 1 granted patent - IIT Kanpur',                color:'#4a1942', image:'assets/images/About_Research.png' },
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
        { icon: '🤖', text: 'Drove full lifecycle of On-Call AI — PRD to statewide rollout — deploying service booking platform to 14+ lakh farmers across 30 districts' },
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
    // ── PROFESSIONAL WORK ───────────────────
    {
      id:       'oncall-ai',
      title:    'On-Call AI - Farmer Service Booking Platform',
      category: 'work',
      result:   '🚀 Live · 14L+ Farmers',
      featured: true,
      image:    'assets/images/projects/oncall-ai.png',
      tags:     ['AI/ML', 'GovTech', 'PRD', 'Figma', 'Sprint Planning', 'Odisha'],
      summary:  'Led On-Call AI from product requirements to Go-Live - a service booking platform connecting 14+ lakh farmers to agri services across 30 districts.',
      detail: {
        desc:    'Owned the product roadmap for an AI-powered On-Call service booking platform for farmers in Odisha. Authored PRDs, built Figma wireframes, drove sprint planning and vendor management through pilot to full rollout. The system uses text-to-speech and voice response - 11 modules automating the farmer service booking pipeline.',
        outcome: '14+ lakh farmers reached across 30 districts, Odisha',
        highlights: [
          { label: 'Organisation', val: 'Samagra Governance Consulting' },
          { label: 'Scale',        val: '14+ lakh farmers · 30 districts' },
          { label: 'Modules',      val: '11-module AI pipeline (TTS + voice)' },
          { label: 'Tools',        val: 'PRD, Figma, Agile / Sprint Planning' },
        ],
        achievements: [
          'Built 11-module AI automation of farmer advisory with text-to-speech and voice response',
          'Activated 7+ Agri-AI use cases - crop advisory, weather & insurance',
          'Optimised helpline via 1,880-farmer survey and 4 A/B experiments',
        ],
      },
    },
    {
      id:       'n8n-agents',
      title:    'n8n AI Agent Workflows - Resume & Research',
      category: 'work',
      result:   '⚙️ Deployed',
      featured: false,
      image:    'assets/images/projects/n8n-agents.png',
      tags:     ['n8n', 'AI Agents', 'OpenAI', 'Automation', 'SerpApi'],
      summary:  'Built n8n-based agent workflows: Resume Optimisation Agent and Research Agent using OpenAI + SerpApi.',
      detail: {
        desc:    'Independently built two end-to-end AI agent workflows using n8n. (1) Resume Optimisation Agent: ingests PDF resume + JD and outputs ATS-aligned edits via OpenAI. (2) Research Agent: takes a query → SerpApi web search → synthesises a 2-page brief → auto-emails via Gmail.',
        outcome: 'Deployed and actively used for job applications and research',
        highlights: [
          { label: 'Stack',  val: 'n8n · OpenAI · SerpApi · Gmail API' },
          { label: 'Agent 1', val: 'Resume Optimisation - PDF + JD → ATS edits' },
          { label: 'Agent 2', val: 'Research Agent → 2-page brief → Auto email' },
        ],
      },
    },

    {
      id:       'datacat',
      title:    'DataCat - Digital Product Strategy',
      category: 'mba',
      result:   '🏢 Industry Project',
      featured: false,
      image:    'assets/images/projects/datacat.png',
      tags:     ['Product Strategy', 'SME Analytics', 'API Roadmap', 'GTM', 'User Research'],
      summary:  'Industry project with Codewave - positioned DataCat as a competitive SME analytics tool; defined API roadmap and GTM strategy.',
      detail: {
        desc:    'Benchmarked competing platforms and conducted user interviews to position DataCat as a competitive SME analytics tool. Defined an API roadmap integrating Google and Meta data sources, and collaborated directly with the firm on go-to-market strategy and pricing.',
        outcome: 'Product positioning, API roadmap (Google/Meta), GTM & pricing strategy delivered to firm',
        highlights: [
          { label: 'Guide',      val: 'Industry Project - Codewave, IIM Udaipur' },
          { label: 'Client',     val: 'DataCat (SME Analytics Platform)' },
          { label: 'Deliverable',val: 'Platform benchmarking, API roadmap, GTM strategy' },
        ],
      },
    },
    {
      id:       'maruti',
      title:    'Maruti Suzuki - Strategic Decision Framework',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/maruti.png',
      tags:     ['Strategy', 'Decision Framework', 'CNG Expansion', 'Dashboard', 'BDDO'],
      summary:  'Built a data-driven decision framework for Maruti\'s CNG expansion with a real-time governance dashboard model.',
      detail: {
        desc:    'Applied Big Data-Driven Organisational (BDDO) frameworks to build a structured decision model for Maruti Suzuki\'s CNG vehicle expansion. Proposed a real-time governance dashboard for cross-functional performance tracking across business units.',
        outcome: 'Strategic decision framework + governance dashboard design',
        highlights: [
          { label: 'Guide',      val: 'BDDO Course, IIM Udaipur' },
          { label: 'Company',    val: 'Maruti Suzuki India Ltd' },
          { label: 'Focus',      val: 'CNG expansion strategy & cross-functional governance' },
        ],
      },
    },
    {
      id:       'churn',
      title:    'Bank Customer Churn Analysis & Retention',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/churn.png',
      tags:     ['Advanced Analytics', 'ML', 'Logistic Regression', 'Decision Trees', 'KNN'],
      summary:  'Built predictive ML models to identify churn risk and designed segmented retention strategies.',
      detail: {
        desc:    'Developed and evaluated multiple predictive models - logistic regression, decision trees, and KNN - to identify bank customers at risk of churning. Designed segmented retention strategies and personalised campaign targeting frameworks based on model outputs.',
        outcome: 'ML-powered churn prediction model + segmented retention strategy',
        highlights: [
          { label: 'Guide',   val: 'Advanced Analytics, IIM Udaipur' },
          { label: 'Models',  val: 'Logistic Regression · Decision Trees · KNN' },
          { label: 'Output',  val: 'Churn risk scoring + personalised retention campaigns' },
        ],
      },
    },

    // ── COMPETITION ─────────────────────────
    {
      id:       'quicify',
      title:    'Quicify - Q-Commerce Product Strategy',
      category: 'competition',
      result:   '🏆 1st Place',
      featured: true,
      image:    'assets/images/projects/quicify.png',
      tags:     ['Product Strategy', 'Q-Commerce', 'GTM', 'Financial Model'],
      summary:  'Won 1st place at ProdXcelerate\'24 (BITS Goa). Full product strategy for a quick-commerce platform.',
      detail: {
        link:    'https://drive.google.com/file/d/1LqnL8wQ2IZOZlM1MYHfu5Lh1xPMbBoiS/view',
        desc:    'Developed an end-to-end product strategy for a quick-commerce platform — covering pain point identification, market sizing, competitive landscape, product roadmap, go-to-market plan, and 3-year financial projections. Presented and won against competing MBA teams at ProdXcelerate\'24, BITS Goa.',
        outcome: '🏆 1st Place — ProdXcelerate\'24, BITS Goa',
        highlights: [
          { label: 'Competition', val: 'ProdXcelerate\'24 — BITS Goa' },
          { label: 'Result',      val: '1st Place' },
          { label: 'Deliverable', val: 'Full product strategy + GTM + financial model' },
        ],
      },
    },
    {
      id:       'rapido',
      title:    'Rapido - Urban Transport for Female Users',
      category: 'competition',
      result:   'Participation',
      featured: false,
      image:    'assets/images/projects/rapido.png',
      tags:     ['Urban Mobility', 'Design Thinking', 'User Research', 'Safety'],
      summary:  'Design Thinking-based product strategy to improve Rapido\'s safety and adoption among female urban users.',
      detail: {
        link:    'https://drive.google.com/file/d/1WYV7U4XXanRa5Z56-zfhs5nVaJsgILDO/view',
        desc:    'Applied Design Thinking to redesign Rapido\'s experience for female users — empathy-led research including quantitative surveys, contextual interviews, and feasibility-impact balancing to identify safety gaps. Proposed a user-centric product feature set addressing safety, trust, and discoverability on the platform.',
        outcome: 'Case Competition Participation',
        highlights: [
          { label: 'Type',     val: 'Case Competition' },
          { label: 'Method',   val: 'Design Thinking — Empathy → Ideate → Prototype' },
          { label: 'Research', val: 'Quantitative surveys + contextual interviews' },
          { label: 'Focus',    val: 'Urban Mobility, Women Safety, Ride-hailing' },
        ],
      },
    },

    // ── MBA ─────────────────────────────────
    {
      id:       'piced',
      title:    'PicED - Gen-AI Product Strategy',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/piced.png',
      tags:     ['Gen-AI', 'B2B', 'Agile', 'DevOps', 'Product Roadmap', 'GTM'],
      summary:  'End-to-end PM for a Gen-AI B2B EdTech platform — BMC, user personas, MOSCOW, roadmap, GTM, Agile implementation.',
      detail: {
        link:    'https://drive.google.com/file/d/1HngpOSLjC04FM8EkURMZw913lI6PaBqi/view',
        desc:    'Two-course project for PicED — a Gen-AI B2B platform that transforms complex teaching concepts into visual aids for educators. Covered full PM lifecycle: Business Model Canvas, user personas, MOSCOW prioritisation, prototyping, product roadmap, and GTM strategy. Second course applied Agile & DevOps — Kanban board, story points, sprint planning, retrospectives, and CI/CD concepts for a vocabulary learning feature.',
        outcome: 'Full PM lifecycle deliverable — Strategy + Agile implementation',
        highlights: [
          { label: 'Guide',    val: 'Malthi Satish, IIM Udaipur' },
          { label: 'Courses',  val: 'Product Management + Agile & DevOps' },
          { label: 'Methods',  val: 'BMC · MOSCOW · Kanban · Sprints · GTM' },
          { label: 'Market',   val: 'B2B Enterprise EdTech' },
        ],
      },
    },
    {
      id:       'finzo',
      title:    'FinZo - AI Investment Platform',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/finzo.png',
      tags:     ['FinTech', 'AI/ML', 'GTM', 'Business Model', 'Portfolio Optimisation'],
      summary:  'AI-powered retail investment platform simplifying stock selection and portfolio optimisation for time-strapped investors.',
      detail: {
        link:    'https://drive.google.com/file/d/1oJVFTQ9RqKuX4HlKGsCr5sjcH6H9L2vw/view',
        desc:    'Conceptualised FinZo — an AI-driven investment assistant for retail investors addressing the pain of being time-strapped. Platform provides smart insights for stock selection, personalised portfolio optimisation, risk profiling, and behavioural finance nudges. Full business plan, market sizing, competitive benchmarking, and financial projections.',
        outcome: 'Full business plan + GTM deliverable',
        highlights: [
          { label: 'Guide',       val: 'Sriram Natarajan, IIM Udaipur' },
          { label: 'Domain',      val: 'FinTech / Retail Investment' },
          { label: 'Problem',     val: 'Time-strapped investors need smart, simplified investing' },
          { label: 'Deliverable', val: 'Business plan + market sizing + GTM + financial projections' },
        ],
      },
    },
    {
      id:       'purepaws',
      title:    'PurePaws - D2C Startup Pitch',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/purepaws.png',
      tags:     ['D2C', 'Startup', 'Subscription', 'Pitch Deck', 'Pet Care'],
      summary:  'Monthly protein-rich, preservative-free dog treats subscription brand — full investor pitch with market research and brand narrative.',
      detail: {
        link:    'https://drive.google.com/file/d/1pAikK0kliuVHlVBPtv4H0suOy8PZsNC_/view',
        desc:    'Conceived and pitched a D2C subscription brand for premium dog nutrition — monthly curated boxes of protein-rich, preservative-free treats. Built comprehensive market research, brand narrative development, positioning strategy, and 3-year financial projections for an investor pitch.',
        outcome: 'Investor-ready pitch deck + brand strategy',
        highlights: [
          { label: 'Guide',       val: 'Rajesh Pandit, IIM Udaipur' },
          { label: 'Model',       val: 'D2C Monthly Subscription — Pet Nutrition' },
          { label: 'Product',     val: 'Protein-rich, preservative-free dog treats' },
          { label: 'Deliverable', val: 'Market research + brand narrative + financial model' },
        ],
      },
    },
    {
      id:       'colgate',
      title:    'Colgate Rebranding - Design Thinking',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/colgate.png',
      tags:     ['Design Thinking', 'Rebranding', 'User Research', 'Brand Strategy'],
      summary:  'Redesigned Colgate\'s brand and product ecosystem using Design Thinking — bundled oral hygiene solution addressing freshness and value needs.',
      detail: {
        link:    'https://docs.google.com/document/d/1crXnUVC25kP4JCNsrlAAz0R6UUVWcLys/edit',
        desc:    'Applied the Stanford Design Thinking process to reimagine Colgate\'s brand strategy. Empathy research revealed unmet freshness and value needs; ideation led to a bundled oral hygiene ecosystem combining toothpaste, a hybrid toothbrush, breath inhaler, and candy — redefining the category beyond just toothpaste.',
        outcome: 'Rebranding strategy + bundled product concept',
        highlights: [
          { label: 'Guide',       val: 'IIM Udaipur' },
          { label: 'Framework',   val: 'Stanford Design Thinking — Empathise → Define → Ideate → Prototype' },
          { label: 'Deliverable', val: 'Bundled oral hygiene ecosystem (brush + paste + inhaler + candy)' },
        ],
      },
    },
    {
      id:       'industry',
      title:    'Mahindra & Mahindra - Strategic Analysis',
      category: 'mba',
      result:   '',
      featured: false,
      image:    'assets/images/projects/industry.png',
      tags:     ["Porter's Five Forces", 'Strategy', 'Automotive', 'Financial Analysis'],
      summary:  'Industry structure and competitive strategy analysis of the 4-wheeler automotive sector with M&M as focal firm.',
      detail: {
        link:    'https://drive.google.com/file/d/1AMoDZx6B5DCLvNQyYrgndfshLlygex8m/view',
        desc:    'Deep-dive structural analysis of the Indian 4-wheeler automotive sector with Mahindra & Mahindra as the focal firm. Applied Porter\'s Five Forces, financial performance analysis, and competitive positioning against Tata Motors and Maruti Suzuki to derive strategic recommendations.',
        outcome: 'Industry analysis + strategic recommendations report',
        highlights: [
          { label: 'Guide',       val: 'Shaleen Gopal, IIM Udaipur' },
          { label: 'Tools',       val: "Porter's Five Forces · Financial Analysis · Strategic Group Map" },
          { label: 'Competitors', val: 'Tata Motors · Maruti Suzuki' },
          { label: 'Focal Firm',  val: 'Mahindra & Mahindra — 4-Wheeler Division' },
        ],
      },
    },

    // ── ENGINEERING ─────────────────────────
    {
      id:       'thesis',
      title:    'Precipitate Shape Evolution - M.Tech Thesis',
      category: 'engineering',
      result:   '📄 Journal Published',
      featured: false,
      image:    'assets/images/projects/thesis.png',
      tags:     ['MATLAB', 'Phase-Field Modelling', 'ABAQUS', 'LaTeX'],
      summary:  'Phase-field modelling of precipitate shapes with anisotropic energies. Published in MSMSE.',
      detail: {
        desc:    'Developed phase-field models to simulate the equilibrium shape of misfitting precipitates in metallic alloys considering elastic and interfacial anisotropy. CPI: 10/10.',
        outcome: 'Published in Modelling and Simulation in Materials Science and Engineering',
        highlights: [
          { label: 'Advisor', val: 'Dr. Anurag Gupta, IIT Kanpur' },
          { label: 'Journal', val: 'MSMSE (IOP Publishing)' },
          { label: 'CPI',     val: '10.0 / 10.0' },
        ],
      },
    },
    {
      id:       'supra',
      title:    'SAE SUPRA 2015 - F1 Prototype',
      category: 'engineering',
      result:   'Vice-Captain',
      featured: false,
      image:    'assets/images/projects/supra.png',
      tags:     ['CATIA V5', 'Suspension Design', 'Steering', 'FEA', 'Hypermesh', 'SAE'],
      summary:  'Vice-Captain & Technical Head. Designed, simulated and validated full F1 prototype chassis, suspension & steering. Paper published.',
      detail: {
        link:    'https://drive.google.com/open?id=0B5u_OTPvyacbOEMySVljWm5hd1k',
        desc:    'Led a 25-member team as Vice-Captain and Technical Head at SAE SUPRA India 2015. Responsibilities spanned Chassis Design, CAE Analysis, Steering Geometry, Ergonomics, and overall design leadership — from concept through simulation, manufacturing, and validation. Sponsored by JBM Group and Tata Motors. Research published in Imperial Journal of Interdisciplinary Research.',
        outcome: 'Competition vehicle built + Research paper published',
        highlights: [
          { label: 'Role',        val: 'Vice-Captain · Technical Head · Chassis & CAE Lead' },
          { label: 'Team Size',   val: '25 students' },
          { label: 'Sponsors',    val: 'JBM Group · Tata Motors' },
          { label: 'Publication', val: 'Imperial Journal of Interdisciplinary Research' },
          { label: 'Tools',       val: 'CATIA V5 · SolidWorks · Hypermesh · Lotus Shark' },
        ],
      },
    },
    {
      id:       'baja',
      title:    'SAE BAJA 2016 - ATV Prototype',
      category: 'engineering',
      result:   'Technical Head',
      featured: false,
      image:    'assets/images/projects/baja.png',
      tags:     ['ATV Design', 'CATIA V5', 'ANSYS', 'Simulation', 'Team Lead'],
      summary:  'Technical Head overseeing all departments for national ATV buggy design, simulation, manufacturing and racing.',
      detail: {
        link:    'https://drive.google.com/open?id=1QZC8dgOzfLZqzNeMz49WM1uF794Wv2ma',
        desc:    'Led the complete technical delivery of an All-Terrain Vehicle buggy for SAE BAJA India 2016 as Technical Head — overseeing all engineering departments: chassis, drivetrain, suspension, brakes, and ergonomics. Covered design, simulation, manufacturing, and race-day operations. Sponsored by JBM Group and Tata Motors.',
        outcome: 'ATV buggy built and competed nationally',
        highlights: [
          { label: 'Role',      val: 'Technical Head — All Departments' },
          { label: 'Team Size', val: '20 members' },
          { label: 'Sponsors',  val: 'JBM Group · Tata Motors' },
          { label: 'Year',      val: '2016 — SAE BAJA India' },
          { label: 'Tools',     val: 'CATIA V5 · ANSYS · Lotus Shark' },
        ],
      },
    },
    {
      id:       'bikestand',
      title:    'Automatic Bike Stand - B.Tech Project',
      category: 'engineering',
      result:   '',
      featured: false,
      image:    'assets/images/projects/bikestand.png',
      tags:     ['Mechanism Design', 'Automation', 'B.Tech'],
      summary:  'Designed and built an automatic kick-stand mechanism for two-wheelers.',
      detail: {
        desc:    'Final B.Tech project - designed and fabricated an automatic retractable bike stand that deploys on engine shutdown and retracts on startup, improving safety.',
        outcome: 'Working prototype',
        highlights: [
          { label: 'Advisor', val: 'Dr. Lokesh Varshney, GBPUAT' },
        ],
      },
    },

    // ── SELF WORK ───────────────────────────
    {
      id:       'patent',
      title:    'Hood Latch Assembly - Patent',
      category: 'self',
      result:   '📜 Patent Filed & Published',
      featured: true,
      image:    'assets/images/projects/patent.png',
      tags:     ['IP', 'Automotive', 'Innovation', 'R&D'],
      summary:  'Self-initiated patent: double safety hood latch for vehicles. Filed 2022, published 2024.',
      detail: {
        desc:    'Independently conceived and filed a patent for a novel hood latch assembly incorporating a double-safety feature to prevent accidental opening while in motion. Filed at the Indian Patent Office in 2022, published in 2024, currently under examination.',
        outcome: 'Patent published - under examination at IPO',
        highlights: [
          { label: 'Filed',     val: '2022' },
          { label: 'Published', val: '2024' },
          { label: 'Status',    val: 'Under Examination - Indian Patent Office' },
          { label: 'Type',      val: 'Utility Patent - Automotive Safety' },
        ],
      },
    },
    {
      id:       'powerbi',
      title:    'PowerBI Project Management Dashboard',
      category: 'self',
      result:   'Deployed at M&M',
      featured: false,
      image:    'assets/images/projects/powerbi.png',
      tags:     ['Power BI', 'Data Visualisation', 'Project Management'],
      summary:  'Self-built PowerBI dashboard for tracking quality metrics across tractor projects at M&M.',
      detail: {
        desc:    'Independently designed and deployed a Power BI dashboard at Mahindra Swaraj Division to track project quality KPIs, design release milestones, and issue resolution across multiple tractor families.',
        outcome: 'Deployed and used across R&D division',
        highlights: [
          { label: 'Tool',   val: 'Microsoft Power BI' },
          { label: 'Impact', val: 'Used across R&D division for project tracking' },
        ],
      },
    },
  ],

  /* ─────────────────────────────────────────
     SKILLS
  ───────────────────────────────────────── */
  skills: {
    groups: [
      {
        title: 'Product & Strategy Tools',
        icon:  '🧠',
        chips: ['Figma', 'Miro', 'JIRA', 'PRD & Roadmapping', 'OKRs', 'Product Management', 'Design Thinking', 'Agile / Scrum / Kanban'],
      },
      {
        title: 'AI, Automation & Data',
        icon:  '🤖',
        chips: ['n8n (AI Agent Automation)', 'OpenAI / LLMs', 'Power BI', 'SQL', 'Python', 'R Programming', 'MATLAB', 'Stitch', 'Lovable'],
      },
      {
        title: 'Engineering & CAD / CAE',
        icon:  '📐',
        chips: ['CATIA V5', 'NX CAD', 'SolidWorks', 'AutoCAD', 'ABAQUS FEA', 'Lotus Shark', 'C++', 'LaTeX', 'MATLAB'],
      },
      {
        title: 'Frameworks & Methods',
        icon:  '📋',
        chips: ['DFMEA–DVP', 'PDLC / Stage-Gate', 'Lean Six Sigma', 'Value Stream Mapping', 'Issue-Tree', 'RCA', 'Change Management', 'Digital Transformation'],
      },
    ],
    bars: [
      { name: 'Product Strategy & PRD', level: 'Advanced',      pct: 90 },
      { name: 'Figma / Wireframing',    level: 'Intermediate',  pct: 75 },
      { name: 'Power BI',               level: 'Advanced',      pct: 88 },
      { name: 'MS Excel (Advanced)',     level: 'Advanced',      pct: 93 },
      { name: 'n8n / AI Automation',    level: 'Intermediate',  pct: 72 },
      { name: 'CATIA V5',               level: 'Advanced',      pct: 92 },
      { name: 'Python',                 level: 'Intermediate',  pct: 68 },
      { name: 'MATLAB',                 level: 'Advanced',      pct: 90 },
    ],
  },

  /* ─────────────────────────────────────────
     RESEARCH - Publications & Patent
  ───────────────────────────────────────── */
  research: {
    patent: {
      id:     'patent-hood',
      title:  'Hood Latch Assembly for Vehicles and a Method Thereof',
      body:   'Novel double safety feature locking arrangement for vehicle hoods.',
      filed:  '2022',
      pub:    '2024',
      status: 'Under Examination',
      office: 'Indian Patent Office',
    },
    publications: [
      {
        id:     'pub1',
        type:   'Journal',
        title:  'Equilibrium Shape of Misfitting Precipitates with Anisotropic Elasticity and Anisotropic Interfacial Energy',
        venue:  'Modelling and Simulation in Materials Science and Engineering',
        pub:    'IOP Publishing',
        tags:   ['Materials Science', 'Phase-Field', 'MATLAB'],
      },
      {
        id:     'pub2',
        type:   'Conference',
        title:  'Application of Wavelet Analysis and Machine Learning on Vibration Data from Gas Pipelines for Structural Health Monitoring',
        venue:  'Procedia Structural Integrity',
        pub:    'Elsevier',
        tags:   ['Machine Learning', 'Signal Processing', 'Structural Health'],
      },
      {
        id:     'pub3',
        type:   'Journal',
        title:  'Design and Analysis of Suspension and Steering Components of F1 Prototype',
        venue:  'Imperial Journal of Interdisciplinary Research',
        pub:    'IJIR',
        tags:   ['Automotive', 'CAD/CAE', 'Suspension'],
      },
      {
        id:     'pub4',
        type:   'Journal',
        title:  'Composite Boring Bar for Better Performance',
        venue:  'International Journal of Engineering Science and Computing',
        pub:    'IJESC',
        tags:   ['Composites', 'Manufacturing', 'Materials'],
      },
    ],
  },

  /* ─────────────────────────────────────────
     MORE - Test Scores · PoR · Co-Curriculars · School
  ───────────────────────────────────────── */
  more: {
    scores: [
      { name: 'GMAT', score: '710', total: '800',  year: '2024', icon: '📊', color: 'blue'  },
      { name: 'GRE',  score: '317', total: '340',  year: '2019', icon: '📝', color: 'navy'  },
      { name: 'TOEFL',score: '106', total: '120',  year: '2019', icon: '🌐', color: 'green' },
      { name: 'GATE', score: '826', total: '1000', year: '2016', icon: '⚙️', color: 'gold'  },
    ],
    por: [
      { role: 'President',                        org: 'Association of Mechanical Engineers, IIT Kanpur',  icon: '👑' },
      { role: 'Chairperson (2015–16)',             org: 'SAEIndia Collegiate Club, GBPUAT',                icon: '🏎' },
      { role: 'Programme Chairperson (2014–15)',   org: 'SAEIndia Collegiate Club, GBPUAT',                icon: '📋' },
      { role: 'Judge',                             org: 'Baja SAE India 2021 & 2022 - Virtual Rounds',    icon: '⚖️' },
      { role: 'Workshop Coordinator',              org: 'Automobile Mechanics & IC Engine - Innovians Tech',icon: '🔧' },
      { role: 'Volunteer',                         org: 'Science Education Models for Students',           icon: '🔬' },
      { role: 'Volunteer',                         org: 'Prof. N.K. Batra Metals & Material Quiz 2016',    icon: '📚' },
    ],
    cocurricular: [
      { name: 'Cadventure - Annual CAD Competition', result: '🥇 1st Place (2014 & 2015)', org: 'GBPUAT'         },
      { name: 'Innovention - Paper Presentation',    result: '🥈 2nd Place (2015)',         org: 'GBPUAT'         },
      { name: 'Junkyard Wars - Problem Solving',     result: '🥈 2nd Place (2015)',         org: 'GBPUAT'         },
      { name: 'Poster Presentation',                 result: 'Research Scholar Day',        org: 'IIT Kanpur'     },
      { name: 'Cognizance 2014 Tech Fest',           result: 'Paper Presentation + Robowars', org: 'IIT Roorkee'  },
      { name: 'Robotics Workshop - Game Bot & Obstacle Avoider', result: 'Completed',      org: 'Nextsapiens Tech'},
      { name: 'National Service Scheme (NSS)',       result: 'B & C Certificate',           org: 'GBPUAT'         },
      { name: 'IMTEX & Tooltech Exhibition',         result: 'College Representative',      org: 'BIEC Bangalore'  },
    ],
    school: [
      { name: 'Math Power Test',           result: '🥇 1st Place', context: 'Class XI'           },
      { name: 'Limca Book of Record Quiz', result: 'Participant',   context: 'Inter-school, 2009 & 2010' },
      { name: 'Science Exhibition',        result: 'Participant',   context: 'Srajan & School, 2008–09' },
      { name: 'Certificate of Merit',      result: 'Academic Excellence', context: 'Class VII & IX' },
    ],
  },

  /* ─────────────────────────────────────────
     AWARDS
  ───────────────────────────────────────── */
  awards: [
    { icon: '🥇', name: 'Scholastic Gold Medal',       from: 'IIM Udaipur',                     type: 'academic'  },
    { icon: '🏆', name: 'Academic Excellence Award',   from: 'IIT Kanpur · Top 7% of Batch',    type: 'academic'  },
    { icon: '🥇', name: "Vice Chancellor's Gold Medal", from: 'GB Pant University',              type: 'academic'  },
    { icon: '⭐', name: '1st Place - Quicify Case',    from: 'Case Competition',                 type: 'competition'},
    { icon: '🎖', name: 'Excellence Award (NSM)',       from: 'Mahindra & Mahindra',             type: 'work'      },
    { icon: '🎖', name: 'AFS Divisional Excellence',   from: 'Mahindra Swaraj Division - CEO',  type: 'work'      },
    { icon: '🤝', name: 'Collaboration at Workplace',  from: 'R&D, Swaraj Division',            type: 'work'      },
    { icon: '✨', name: 'SPOT Awards 2019 / 2020 / 2021', from: 'Mahindra & Mahindra',          type: 'work'      },
    { icon: '🥇', name: 'Cadventure 1st Place',        from: 'GBPUAT (2014 & 2015)',             type: 'academic'  },
    { icon: '🏅', name: 'SAE NIS Convention Rep',      from: 'UPES, Dehradun',                  type: 'academic'  },
  ],

  /* ─────────────────────────────────────────
     CERTIFICATIONS
     categories: management | technical | digital | professional
  ───────────────────────────────────────── */
  certifications: [
    // Management & Strategy
    { name: 'CSPO - Certified Scrum Product Owner',   issuer: 'Scrum Alliance',           year: '2023', cat: 'management', image: '' },
    { name: 'Agile Product Management',               issuer: 'Udemy',                    year: '2023', cat: 'management', image: '' },
    { name: 'Technology for Product Managers',        issuer: 'LinkedIn Learning / PMI',  year: '2023', cat: 'management', image: '' },
    { name: 'Project Management',                     issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Design Thinking',                        issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Finance for Non-Finance',                issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Management Communication',               issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Quantitative Methods',                   issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Interpersonal Skills',                   issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Digital Adoption',                       issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Spreadsheet Modelling',                  issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    { name: 'Mathematics for Management',             issuer: 'Online',                   year: '2022', cat: 'management', image: '' },
    // Technical / Engineering
    { name: 'Lean Six Sigma Green Belt',              issuer: 'KPMG',                     year: '2021', cat: 'technical',  image: '' },
    { name: 'AutoCAD Certification',                  issuer: 'Autodesk / Online',        year: '2021', cat: 'technical',  image: '' },
    { name: 'CATIA V5 Proficiency',                   issuer: 'Internal / Online',        year: '2020', cat: 'technical',  image: '' },
    { name: 'Additive Manufacturing',                 issuer: 'Online',                   year: '2021', cat: 'technical',  image: '' },
    { name: 'Automotive Ergonomics',                  issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Body Systems & Trims Manufacturing',     issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Formability of Sheets',                  issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Vehicle Crash Analysis',                 issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Heat Treatment Processes',               issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Plastic Joining Methods',                issuer: 'Online',                   year: '2020', cat: 'technical',  image: '' },
    { name: 'Farm Basics & Tractor Application',      issuer: 'Mahindra Internal',        year: '2019', cat: 'technical',  image: '' },
    { name: 'Technical Paper Publication',            issuer: 'Online',                   year: '2018', cat: 'technical',  image: '' },
    // Digital & Data
    { name: 'Generative AI Fundamentals',             issuer: 'IBM',                      year: '2024', cat: 'digital',    image: '' },
    { name: 'Cloud Foundations',                      issuer: 'Great Learning',           year: '2023', cat: 'digital',    image: '' },
    { name: 'Data Analytics',                         issuer: 'Online / Coursera',        year: '2022', cat: 'digital',    image: '' },
    { name: 'Machine Learning Basics',                issuer: 'Online / Coursera',        year: '2022', cat: 'digital',    image: '' },
    { name: 'Microsoft Power BI',                     issuer: 'Microsoft / Online',       year: '2021', cat: 'digital',    image: '' },
    { name: 'R Programming',                          issuer: 'Online / Coursera',        year: '2022', cat: 'digital',    image: '' },
    { name: 'Python Core',                            issuer: 'Online',                   year: '2022', cat: 'digital',    image: '' },
    { name: 'C++ Programming',                        issuer: 'Online',                   year: '2021', cat: 'digital',    image: '' },
    { name: 'Mathematical Language (LaTeX)',          issuer: 'Online',                   year: '2018', cat: 'digital',    image: '' },
    // Professional
    { name: 'Certified in Cybersecurity (CC)',        issuer: 'ISC²',                     year: '2023', cat: 'professional',image: '' },
    { name: 'Digital Transformation',                 issuer: 'BCG / Online',             year: '2023', cat: 'professional',image: '' },
    { name: 'Industry 4.0',                           issuer: 'Online',                   year: '2021', cat: 'professional',image: '' },
    { name: 'CAB Leadership Certification',           issuer: 'Harvard Manage Mentor',    year: '2020', cat: 'professional',image: '' },
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
      id:       'post-01',
      title:    'When the Customer Journey Disappears',
      category: 'product',
      platform: 'linkedin',
      date:     'Apr 2026',
      excerpt:  'Agentic AI is quietly rewriting the consumer journey as we know it. When one prompt can replace five browser tabs, the entire consideration layer collapses - and Amazon vs Perplexity\'s Comet AI is the first courtroom evidence that the battle has begun.',
      link:     'https://www.linkedin.com/pulse/when-customer-journey-disappears-tushar-joshi-6zf4c',
      image:    '',
      tags:     ['Agentic AI', 'Product Strategy', 'Consumer Behaviour', 'Digital Transformation'],
    },
    {
      id:       'post-02',
      title:    'India\'s Leap into Industry 4.0: Transforming Manufacturing, Empowering the Future',
      category: 'engineering',
      platform: 'linkedin',
      date:     'Jan 2025',
      excerpt:  'India\'s rich history in textiles and craftsmanship once made it the world\'s industrial leader. As Industry 4.0 reshapes global manufacturing, here\'s how India is positioning itself at the intersection of automation, AI, and scale.',
      link:     'https://www.linkedin.com/pulse/indias-leap-industry-40-transforming-manufacturing-empowering-joshi-ndvzc',
      image:    '',
      tags:     ['Industry 4.0', 'Manufacturing', 'India', 'Automation'],
    },
    {
      id:       'post-03',
      title:    'Giving Deserved Attention to Self-Attention: A Revolution in AI (A Review)',
      category: 'ai',
      platform: 'linkedin',
      date:     'Nov 2024',
      excerpt:  'Self-attention is the architectural breakthrough behind every large language model. This piece breaks down the transformer mechanism - how "She sat on the bank of a river" teaches an AI to understand context, not just sequence.',
      link:     'https://www.linkedin.com/pulse/giving-deserved-attention-self-attention-revolution-ai-tushar-joshi-dj1fc',
      image:    '',
      tags:     ['Transformers', 'Deep Learning', 'LLMs', 'AI Architecture'],
    },
    {
      id:       'post-04',
      title:    'Enchanting Minds: AI\'s Impact - Magic & Risks for Mental Health',
      category: 'ai',
      platform: 'linkedin',
      date:     'Sep 2024',
      excerpt:  'AI companions are being used for therapy, emotional support and mental wellness - with genuinely promising results. But the risks of dependency, hallucination and data privacy deserve equal attention.',
      link:     'https://www.linkedin.com/pulse/enchanting-minds-ais-impact-magic-risks-mental-health-tushar-joshi-g3jbc',
      image:    '',
      tags:     ['AI', 'Mental Health', 'Ethics', 'Technology'],
    },
    {
      id:       'post-05',
      title:    'Data Don\'t Lie. Does?',
      category: 'ideas',
      platform: 'linkedin',
      date:     'Jul 2024',
      excerpt:  'We trust data because it feels objective. But data is collected, cleaned, and interpreted by humans - every step a potential bias. A look at when data misleads and how to think more critically about numbers.',
      link:     'https://www.linkedin.com/pulse/data-dont-lie-does-tushar-joshi-agf8c',
      image:    '',
      tags:     ['Data Analytics', 'Decision Making', 'Bias', 'Critical Thinking'],
    },
    {
      id:       'post-06',
      title:    'From History & Attitude Change Theories to the Modern Indian Workplace',
      category: 'career',
      platform: 'linkedin',
      date:     'May 2024',
      excerpt:  'Workplace culture in India is shaped by decades of hierarchical tradition and rapid corporate evolution. Drawing on attitude change theories and historical context, this piece explores what it takes to lead meaningful change from within.',
      link:     'https://www.linkedin.com/pulse/from-history-workplace-attitude-change-theories-indian-tushar-joshi-kxngc',
      image:    '',
      tags:     ['Leadership', 'Workplace Culture', 'Change Management', 'India'],
    },
    {
      id:       'post-07',
      title:    'Beyond \'Candlelight\': A Cultural Revolution to Realise True Independence',
      category: 'ideas',
      platform: 'linkedin',
      date:     'Mar 2024',
      excerpt:  'Every tragedy gets a candle march and a social media post. But real independence - for women, for citizens, for society - demands more than outrage. It demands structural change, accountability, and cultural evolution.',
      link:     'https://www.linkedin.com/pulse/beyond-candlelight-cultural-revolution-realise-true-tushar-joshi-inbtc',
      image:    '',
      tags:     ['Society', 'Culture', 'Independence', 'Social Change'],
    },
  ],

  /* ─────────────────────────────────────────
     BLOG CATEGORIES (for filters on blog page)
  ───────────────────────────────────────── */
  blogCategories: [
    { id: 'all',         label: 'All Posts',           icon: '📚', color: 'blue'  },
    { id: 'product',     label: 'Product & Strategy',  icon: '🧠', color: 'blue'  },
    { id: 'engineering', label: 'Engineering & Design', icon: '⚙️', color: 'navy'  },
    { id: 'career',      label: 'Career & MBA',         icon: '💼', color: 'gold'  },
    { id: 'ai',          label: 'AI & Tech',            icon: '🤖', color: 'green' },
    { id: 'ideas',       label: 'Thoughts & Ideas',     icon: '💡', color: 'gray'  },
  ],

  /* ─────────────────────────────────────────
     FOOTER LINKS
  ───────────────────────────────────────── */
  footer: {
    copy: '© 2025 Tushar Joshi',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-profile/' },
      { label: 'Blog',     href: 'blog.html' },
      { label: 'Resume',   href: 'assets/resume.pdf' },
    ],
  },
};
