export interface Project {
  id: string;
  title: string;
  domain: string;
  toolType: "excel" | "powerbi" | "sql" | "python" | "ai";
  toolLabel: string;
  toolColor: string;
  shortDescription: string;
  engagementUrl: string;
  githubUrl: string;
  liveDashboardUrl?: string;
  videoUrl?: string;
  otherTools: string[];
  screenshots: {
    title: string;
    caption: string;
    image: string;
  }[];
  overview: string;
  steps: {
    phase: string;
    description: string;
  }[];
  keyInsights: string[];
  results: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  achievements: {
    category: string;
    points: string[];
  }[];
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  image: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    headline: string;
    bio: string;
    subBio: string;
    avatarUrl: string;
    videoIntroUrl: string;
    email: string;
    location: string;
    linkedinUrl: string;
    githubUrl: string;
    resumeUrl: string;
    availability: string;
  };
  metrics: {
    excelProjects: number;
    powerBiProjects: number;
    sqlProjects: number;
    pythonProjects: number;
  };
  keySkills: {
    category: string;
    skills: string[];
  }[];
  allSkillsList: string[];
  projects: Project[];
  experiences: Experience[];
  certificates: Certificate[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Lakshitha Sahabandu",
    headline: "Front-End AI Engineer",
    bio: "Hello and welcome to my portfolio! I am a Data Analyst with a deep passion for translating complex, disparate datasets into clear, actionable business intelligence that drives strategic executive decisions.",
    subBio: "With strong expertise in Power BI, SQL, Python, and Advanced Excel modeling, I specialize in building automated end-to-end data pipelines, predictive analytics models, and interactive KPI dashboards that empower stakeholder teams to uncover revenue opportunities and optimize operational efficiency.",
    avatarUrl: "/profile.jpg",
    videoIntroUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    email: "hi@andbandu.com",
    location: "Kiribathgoda, Sri Lanka / Remote",
    linkedinUrl: "https://www.linkedin.com/in/andbandu/",
    githubUrl: "https://github.com/andbandu",
    resumeUrl: "#download-resume",
    availability: "Open to Full-time & High-Impact Consulting Opportunities",
  },
  metrics: {
    excelProjects: 1,
    powerBiProjects: 6,
    sqlProjects: 1,
    pythonProjects: 1,
  },
  allSkillsList: [
    "Advanced Excel",
    "Power BI",
    "SQL",
    "Python",
    "DAX",
    "Power Query",
    "Power Pivot",
    "Data Modeling",
    "ETL Pipelines",
    "Stakeholder Management",
    "Financial Analytics",
    "Executive Storytelling",
    "AI Automations (N8N)",
    "Antigravity",
    "Tableau",
    "Predictive Modeling",
  ],
  keySkills: [
    {
      category: "Business Intelligence & Visualization",
      skills: ["Power BI", "DAX Measures", "Power Query", "Power Pivot", "Interactive Dashboards", "Tableau"],
    },
    {
      category: "Data Engineering & Analytics",
      skills: ["Advanced SQL", "ETL Pipelines", "Data Modeling", "Python (Pandas, NumPy)", "Exploratory Data Analysis"],
    },
    {
      category: "Spreadsheet & Modeling",
      skills: ["Advanced Excel", "Financial Modeling", "Pivot Tables", "Dynamic Formulas", "Scenario Analysis"],
    },
    {
      category: "Strategy & Automation",
      skills: ["Stakeholder Management", "Executive Storytelling", "AI Automations (N8N)", "Antigravity Agents"],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Customer Sales & Finance Analytics",
      domain: "Sales & Finance Analytics",
      toolType: "excel",
      toolLabel: "Excel Project",
      toolColor: "emerald",
      shortDescription:
        "Engineered an enterprise Excel analytics suite delivering granular P&L breakdowns, customer gross margin insights, and multi-tier variance metrics using Power Query and DAX.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: [
        "Microsoft Excel",
        "Power Query",
        "Power Pivot",
        "Power BI DAX",
        "Data Modeling",
        "Pivot Tables",
        "ETL",
        "Conditional Formatting",
        "Data Validation",
      ],
      screenshots: [
        {
          title: "Executive Profit & Loss Overview",
          caption: "Comprehensive P&L statement tracking Net Sales, COGS, Gross Margin %, and YoY performance by market and division.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Customer Performance Matrix",
          caption: "Data-modeled star schema linking sales facts, monthly targets, customer dimension, and calendar hierarchy.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Variance & Target Benchmark Analysis",
          caption: "Granular comparison of actual regional shipments against forecast targets with conditional alert indicators.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "An enterprise hardware distributor faced critical financial tracking challenges, relying on fragmented, manual spreadsheets that delayed monthly executive reporting by over 10 business days. They required a unified, automated analytics model capable of delivering instantaneous customer net sales, market profitability, and quarterly GM% trends.",
      steps: [
        {
          phase: "ETL & Automated Ingestion",
          description: "Built robust Power Query M scripts to ingest, sanitize, deduplicate, and normalize 2M+ transaction records across 4 disparate regional ERPs.",
        },
        {
          phase: "Dimensional Data Modeling",
          description: "Engineered an optimized star schema in Power Pivot connecting Fact Sales Monthly, Forecast Targets, Customer Master, Product Hierarchy, and Date dimensions.",
        },
        {
          phase: "DAX Measures Architecture",
          description: "Calculated dynamic measures for Net Sales, Cost of Goods Sold (COGS), Gross Margin %, Pre-Invoice Deductions, and Post-Invoice Discount variances.",
        },
        {
          phase: "Executive Reporting UX",
          description: "Created structured interactive pivot tables with conditional heatmaps, dynamic slicers, and automated KPI scorecards for C-suite reviews.",
        },
      ],
      keyInsights: [
        "Identified top 5 high-margin customer accounts responsible for 62% of net operating profit.",
        "Uncovered 3 product categories experiencing negative margin erosion due to unmonitored post-invoice rebates.",
        "Reduced monthly financial close review cycle from 12 days to under 4 hours via automated refresh pipelines.",
      ],
      results:
        "Empowered sales executives and financial controllers with self-serve scenario modeling, saving an estimated 25 hours per week of manual reporting and directly uncovering $420K in reclaimable rebate discrepancies.",
    },
    {
      id: "project-2",
      title: "Business Insights 360 - Enterprise Power BI Suite",
      domain: "Executive Intelligence & Strategy",
      toolType: "powerbi",
      toolLabel: "Power BI Project",
      toolColor: "amber",
      shortDescription:
        "Architected an all-in-one multi-departmental Power BI suite encompassing Finance, Sales, Marketing, Supply Chain, and Executive decision cockpits.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "https://app.powerbi.com",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      otherTools: [
        "Power BI Desktop",
        "DAX Studio",
        "Tabular Editor",
        "SQL Server",
        "Data Warehousing",
        "Bookmarks & Tooltips",
        "Row-Level Security (RLS)",
      ],
      screenshots: [
        {
          title: "Executive View & KPI Cockpit",
          caption: "Top-level executive summary displaying Revenue, Net Profit %, At-Risk Accounts, and market share trends.",
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Supply Chain & Forecast Accuracy",
          caption: "Forecast accuracy tracking, out-of-stock risk signals, and inventory holding cost distribution across regional hubs.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Marketing ROI & Customer Acquisition Cost",
          caption: "Campaign spend attribution model comparing CAC across digital channels against lifetime customer value (LTV).",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "Global leadership lacked a single source of truth across operations, resulting in conflicting department reports and blind spots in inventory planning and channel discounting. Business Insights 360 consolidated all core business functions into one seamless, cross-filtered Power BI application.",
      steps: [
        {
          phase: "Warehouse Schema Design",
          description: "Modeled a high-performance Snowflake schema linking 5 dimension tables and 3 large transaction fact tables with over 5M records.",
        },
        {
          phase: "Advanced DAX Calculations",
          description: "Authored 45+ DAX measures using CALCULATE, FILTER, SUMX, and Time Intelligence for YTD, YoY Growth, and Forecast Variance.",
        },
        {
          phase: "Interactive UX & Navigation",
          description: "Implemented custom page navigation buttons, bookmark-driven view switches, dynamic drill-throughs, and contextual hover tooltips.",
        },
        {
          phase: "Security & Governance",
          description: "Configured Row-Level Security (RLS) to ensure regional sales directors only access territories within their jurisdiction.",
        },
      ],
      keyInsights: [
        "Identified persistent 14% forecast error in APAC regional fulfillment, leading to excess warehousing overhead.",
        "Highlighted a 22% margin expansion opportunity by renegotiating fulfillment agreements in primary tier-1 markets.",
        "Consolidated 18 disconnected legacy reports into 1 centralized, real-time cloud workspace.",
      ],
      results:
        "Delivered unified data governance for 85+ active internal users, slashing cross-departmental alignment meetings by 35% and improving overall supply chain forecast accuracy by 18.5%.",
    },
    {
      id: "project-3",
      title: "Social Buzz: Content Engagement & Media Intelligence",
      domain: "Marketing & Audience Analytics",
      toolType: "powerbi",
      toolLabel: "Power BI Project",
      toolColor: "amber",
      shortDescription:
        "Analyzed 100,000+ social reactions, content category performance, and sentiment patterns to guide content investment strategy for a high-growth media tech firm.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: ["Power BI", "Python (NLP)", "Data Cleaning", "Data Storytelling", "Sentiment Scoring"],
      screenshots: [
        {
          title: "Content Category Leaderboard",
          caption: "Ranking top 5 content verticals by total engagement score, reaction volume, and viral share coefficient.",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Sentiment & Reaction Heatmap",
          caption: "Deep breakdown of positive vs. neutral vs. controversial sentiment reactions by time of day and post format.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "Social Buzz, a fast-scaling social media platform with 500M+ active users, required deep analysis of their content dataset to pitch an IPO prospectus and determine which content genres drive maximum stickiness.",
      steps: [
        {
          phase: "Data Audit & Cleaning",
          description: "Merged 7 raw datasets comprising user reactions, content types, category metadata, and engagement weights into a single tidy model.",
        },
        {
          phase: "Scoring Aggregation",
          description: "Applied custom reaction weight matrix (e.g. Scared = 15, Heart = 60, Hate = 5) to objectively quantify user excitement.",
        },
        {
          phase: "Strategic Presentation",
          description: "Synthesized findings into an executive presentation highlighting peak publishing windows and audience retention drivers.",
        },
      ],
      keyInsights: [
        "Animals, Science, and Healthy Food emerged as top 3 categories representing over 38% of total engagement score.",
        "Video formats generated 2.4x higher average reaction scores compared to static image posts.",
        "Peak engagement cluster occurred between 6:00 PM and 9:00 PM UTC across all major demographics.",
      ],
      results:
        "Provided executive leadership with definitive evidence for content creator grant allocation, shifting $1.2M of marketing budget to high-performing content verticals.",
    },
    {
      id: "project-4",
      title: "Consumer Goods Ad-Hoc SQL Analytics Engine",
      domain: "Supply Chain & Retail Analytics",
      toolType: "sql",
      toolLabel: "SQL Project",
      toolColor: "sky",
      shortDescription:
        "Authored complex SQL queries with CTEs, Window Functions, and subqueries to solve 10 strategic ad-hoc business requests for executive leadership.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      otherTools: ["MySQL", "Complex CTEs", "Window Functions (DENSE_RANK)", "Query Optimization", "Analytical Views"],
      screenshots: [
        {
          title: "SQL Query Execution Matrix",
          caption: "Benchmarking query latency across 1.5M rows using partitioned indexes and indexed common table expressions.",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Sales Growth by Division Query Output",
          caption: "Tabular representation of 2020 vs 2021 product unique count, gross margin % and percentage increase.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "Management needed rapid answers to critical business questions regarding market expansion, cost vs discount spreads, and top manufacturing cost drivers without waiting weeks for IT queue tickets.",
      steps: [
        {
          phase: "Requirement Translation",
          description: "Deconstructed 10 high-priority executive prompts into precise mathematical logic and relational constraints.",
        },
        {
          phase: "Query Formulation",
          description: "Employed advanced MySQL features: CTEs, Window Functions (ROW_NUMBER, DENSE_RANK), COALESCE, and aggregate filtering.",
        },
        {
          phase: "Performance Tuning",
          description: "Added composite indexes on date and customer foreign keys, reducing query execution times from 8.4s to under 0.3s.",
        },
      ],
      keyInsights: [
        "Identified APAC as the fastest growing sales division with a 36.2% YoY increase in unique retail placements.",
        "Uncovered manufacturing cost variance of up to 48% for identical product specs produced in different plants.",
        "Isolated top 3 customers receiving pre-invoice discounts exceeding executive authorization thresholds.",
      ],
      results:
        "Delivered a reusable repository of SQL analytical scripts that became the baseline for monthly automated cron reports across finance and retail ops.",
    },
    {
      id: "project-5",
      title: "Call Center Operations & Agent Performance 360",
      domain: "Customer Support Operations",
      toolType: "powerbi",
      toolLabel: "Power BI Project",
      toolColor: "amber",
      shortDescription:
        "Designed an operational Power BI dashboard tracking SLA compliance, First Call Resolution (FCR), customer satisfaction (CSAT), and agent talk-time variance.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: ["Power BI", "DAX", "Operational Telemetry", "CSAT Modeling", "SLA Threshold Alerting"],
      screenshots: [
        {
          title: "Call Center Real-Time Dashboard",
          caption: "Overall call volume, resolved rate (89.4%), average speed of answer (67s), and satisfaction rating scorecards.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Agent Scorecard & Resolution Benchmark",
          caption: "Per-agent metrics evaluating resolution speed, call abandons, and coaching recommendation indices.",
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "A telecommunications service provider experienced declining CSAT scores and increased call abandonment. Operations managers needed real-time visibility into peak arrival hours, topic-level friction, and agent performance disparities.",
      steps: [
        {
          phase: "Data Transformation",
          description: "Cleaned raw telephony logs, handling missing duration values and standardized call outcome classifications.",
        },
        {
          phase: "KPI Matrix Setup",
          description: "Built custom DAX formulas for FCR, Average Speed of Answer (ASA), and Weighted Satisfaction indices.",
        },
        {
          phase: "Actionable Visual Hierarchy",
          description: "Implemented intuitive color-coded warning gauges indicating when abandoned call rates breach SLA tolerance (4%).",
        },
      ],
      keyInsights: [
        "Payment and Billing queries accounted for 42% of repeat call volume, pointing to confusing mobile invoice formatting.",
        "Call abandonment peaked at 18% between 11:30 AM and 1:30 PM due to misaligned agent lunch shift schedules.",
        "Top quartile agents resolved customer inquiries 31% faster while maintaining a 4.6/5.0 CSAT score.",
      ],
      results:
        "Helped management restructure workforce shift schedules to match real call curves, reducing call drop rates by 28% and boosting overall CSAT from 3.2 to 4.1 in 90 days.",
    },
    {
      id: "project-6",
      title: "Hospitality Revenue & Booking Operations Analysis",
      domain: "Hospitality & Revenue Management",
      toolType: "python",
      toolLabel: "Python Project",
      toolColor: "indigo",
      shortDescription:
        "Conducted Exploratory Data Analysis (EDA) in Python to identify booking cancellation trends, dynamic pricing elasticity, and channel revenue leakages.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      otherTools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks", "Statistical Testing"],
      screenshots: [
        {
          title: "Booking Lead Time vs Cancellation Correlation",
          caption: "Statistical correlation heatmap illustrating lead-time thresholds where cancellation risk escalates beyond 45%.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Revenue by Distribution Channel & Room Class",
          caption: "Direct booking channels yielded 22% higher RevPAR compared to third-party online travel agencies (OTAs).",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "A luxury luxury hotel chain faced escalating booking cancellations (over 30% overall) causing revenue volatility and wasted housekeeping capacity. They needed data-driven recommendations on overbooking thresholds and deposit policies.",
      steps: [
        {
          phase: "Data Wrangling & Imputation",
          description: "Processed 120,000 reservation records in Pandas, imputing missing deposit indicators and creating feature flags for lead days.",
        },
        {
          phase: "Statistical & Exploratory Analysis",
          description: "Utilized Seaborn boxplots, violin plots, and correlation matrices to analyze ADR (Average Daily Rate) against occupancy rates.",
        },
        {
          phase: "Policy Formulation",
          description: "Calculated expected loss curves to determine optimal non-refundable deposit windows for group reservations.",
        },
      ],
      keyInsights: [
        "Reservations made > 90 days in advance without deposit had a 54% cancellation probability.",
        "Direct bookings had an 18% lower cancellation rate and generated 14% higher on-premise ancillary spend.",
        "Dynamic weekend rate adjustments in city hotels were underpricing competitors by an average of $38/night.",
      ],
      results:
        "Implemented recommended tiered cancellation policies that curbed last-minute booking dropouts by 21%, generating an estimated $310K in preserved room revenue annually.",
    },
    {
      id: "project-7",
      title: "Telecom 5G Rollout & Customer Churn Analytics",
      domain: "Telecommunications & Network Planning",
      toolType: "powerbi",
      toolLabel: "Power BI Project",
      toolColor: "amber",
      shortDescription:
        "Built an interactive Power BI intelligence dashboard assessing post-5G launch churn, ARPU shifts, and network satisfaction across 12 major metro markets.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: ["Power BI", "DAX", "Geospatial Mapping", "Cohort Analysis", "Churn Probability Modeling"],
      screenshots: [
        {
          title: "Metro Market 5G Adoption Geospatial Map",
          caption: "Geographic choropleth map highlighting customer migration rates from 4G LTE to 5G network plans.",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "ARPU Migration & Churn Risk Cohorts",
          caption: "Cohort retention analysis showing net revenue impact across postpaid and prepaid user segments.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "A national mobile carrier rolled out multi-billion dollar 5G infrastructure but experienced unexpected churn among premium postpaid users. Leadership needed to understand which network markets were failing SLA promises.",
      steps: [
        {
          phase: "Telemetry Integration",
          description: "Connected network speed benchmark logs, ticket escalation data, and subscriber billing history.",
        },
        {
          phase: "Cohort Modeling",
          description: "Created cohort tracking DAX tables segmenting users by device model, tenure, and average data throughput.",
        },
        {
          phase: "Diagnostic Visuals",
          description: "Built root-cause drill-downs revealing that 5G signal handover gaps in specific postal codes caused 78% of negative reviews.",
        },
      ],
      keyInsights: [
        "Prepaid customers upgrading to 5G increased data usage by 40%, yielding an immediate 18% bump in ARPU.",
        "Postpaid churn spiked in 2 specific metropolitan areas due to device-specific frequency band compatibility issues.",
        "Subscribers experiencing > 3 dropped calls in their first 5G week had an 82% likelihood of porting out within 30 days.",
      ],
      results:
        "Prioritized cell tower optimizations in high-value clusters, arresting postpaid customer attrition and recovering $1.8M in annualized recurring subscriber revenue.",
    },
    {
      id: "project-8",
      title: "Shield Underwriting & Claims Portfolio Analytics",
      domain: "Insurance & Risk Management",
      toolType: "powerbi",
      toolLabel: "Power BI Project",
      toolColor: "amber",
      shortDescription:
        "Formulated an insurance risk telemetry dashboard analyzing customer acquisition age brackets, claim settlement ratios, and sales channel effectiveness.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: ["Power BI", "Actuarial Data Modeling", "DAX Risk Measures", "Loss Ratio Calculations"],
      screenshots: [
        {
          title: "Underwriting & Premium Distribution",
          caption: "Demographic breakdown of policyholders, premium collections, and policy tenure retention rates.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Claim Settlement & Loss Ratio Dashboard",
          caption: "Monitoring loss ratio benchmarks across health, auto, and life policies with regulatory compliance indicators.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "Shield Insurance observed an unexpected spike in early policy surrenders and claim disputes. Underwriters required transparent visibility into sales intermediary performance and risk profiles by age band.",
      steps: [
        {
          phase: "Data Hygiene & Normalization",
          description: "Consolidated legacy policy administration system records and online direct-to-consumer digital channels.",
        },
        {
          phase: "Actuarial Metric Architecture",
          description: "Constructed dynamic measures for Incurred Claims Ratio (ICR), Persistency Rates, and Channel Commission ROI.",
        },
        {
          phase: "Executive Visualization",
          description: "Designed a high-contrast executive interface enabling one-click drilldowns into underwriting age cohorts.",
        },
      ],
      keyInsights: [
        "Age group 31-40 demonstrated the highest customer lifetime value with a low 14% claim frequency.",
        "Broker channel exhibited a 28% higher claim dispute rate compared to direct digital policy sales.",
        "Early cancellation was strongly correlated with delayed policy issuance turnaround times exceeding 5 business days.",
      ],
      results:
        "Prompted underwriters to adjust risk weighting on outlier distribution channels, lowering overall loss ratio by 4.2% while expanding direct digital policy conversions by 33%.",
    },
    {
      id: "project-9",
      title: "AI Data Analyst Agent & Automated KPI Workbench",
      domain: "AI Engineering & Autonomous BI",
      toolType: "ai",
      toolLabel: "AI Project",
      toolColor: "violet",
      shortDescription:
        "Constructed an autonomous AI-driven analytics workbench that accepts natural language queries, automatically writes and verifies SQL queries, and generates chart visualizations.",
      engagementUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      liveDashboardUrl: "#interactive-dashboard",
      otherTools: ["Next.js", "Python Fast API", "LangChain", "Vector Embeddings", "OpenAI / Claude API", "Shadcn UI", "Tailwind CSS"],
      screenshots: [
        {
          title: "AI Natural Language Query Interface",
          caption: "User asks 'Compare Q3 operating margins against prior year' and the system streams query logic and auto-renders charts.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Autonomous Anomaly Detection Engine",
          caption: "AI background worker scanning database tables for statistical outliers and delivering proactive Slack alerts.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      overview:
        "Non-technical business stakeholders frequently experienced bottlenecks waiting on business intelligence teams for routine ad-hoc queries. This application acts as a 24/7 AI data analyst assistant.",
      steps: [
        {
          phase: "Semantic Schema Layer",
          description: "Mapped database table metadata, column definitions, and business glossaries into a high-density vector database.",
        },
        {
          phase: "Self-Correcting SQL Generation",
          description: "Implemented an agentic loop with schema verification and automated query syntax validation before execution.",
        },
        {
          phase: "Dynamic Visualization Engine",
          description: "Engineered responsive client-side chart generation that selects the optimal visualization format based on query output shape.",
        },
      ],
      keyInsights: [
        "Natural language query response time averaged 1.8 seconds compared to hours or days in traditional ticket queues.",
        "Self-correcting query retry loops eliminated 94% of common LLM hallucinations in SQL column matching.",
        "Over 65% of ad-hoc queries answered were routine variance lookups previously draining analyst bandwidth.",
      ],
      results:
        "Adopted by 40+ departmental managers, freeing up 15+ analyst hours per week to focus on deep-dive predictive modeling rather than repetitive reporting requests.",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Business Intelligence & Data Analyst",
      company: "Apex Analytics Solutions",
      location: "Austin, TX (Hybrid)",
      period: "June 2024 - Present",
      isCurrent: true,
      summary:
        "Lead enterprise business intelligence initiatives, architecting end-to-end data models and operational cockpits that monitor $45M+ in annual revenue streams across North American and European markets.",
      achievements: [
        {
          category: "Advanced Metering & Telemetry Analytics",
          points: [
            "Analyzed 12M+ hourly smart telemetry data points using Python and SQL to detect consumption spikes, operational anomalies, and data transmission dropouts.",
            "Formulated automated statistical anomaly alerts that flagged hardware communication failures 48 hours before customer billing cycles.",
          ],
        },
        {
          category: "Executive Dashboard Engineering",
          points: [
            "Designed and deployed 14 production Power BI dashboards with composite DAX measures, row-level security, and bookmark-driven storytelling.",
            "Streamlined automated data refresh schedules, eliminating 15 hours per week of manual ETL data extraction and formatting.",
          ],
        },
        {
          category: "Cross-Functional Leadership & Training",
          points: [
            "Mentored junior analytics team members in DAX optimization, data warehousing best practices, and effective executive communication.",
            "Partnered directly with C-suite stakeholders to translate ambiguous strategic goals into quantifiable operational KPIs.",
          ],
        },
      ],
      skills: ["Power BI", "DAX", "SQL", "Python", "ETL Pipelines", "Data Modeling", "Executive Communication"],
    },
    {
      id: "exp-2",
      role: "Data Analytics Specialist Intern",
      company: "Stratagem Data Labs",
      location: "San Jose, CA (Remote)",
      period: "Nov 2023 - May 2024",
      summary:
        "Collaborated with senior data engineers and analysts to optimize data normalization, build automated client reports, and benchmark machine learning feature sets.",
      achievements: [
        {
          category: "Data Integrity & Warehouse Optimization",
          points: [
            "Engineered automated data cleansing and deduplication scripts in Python (Pandas) across 1M+ customer and transactional records.",
            "Optimized query performance by refining database indexes and table partitioning, boosting query speed by 40%.",
          ],
        },
        {
          category: "Market Trend & Competitor Benchmarking",
          points: [
            "Developed 5 automated client-facing Power BI reports evaluating subscription retention trends, product conversion funnels, and churn factors.",
            "Delivered interactive dashboards that enabled account executives to pinpoint at-risk renewals, preserving an estimated $180K in ARR.",
          ],
        },
      ],
      skills: ["Python", "Pandas", "Power BI", "MySQL", "Data Normalization", "Reporting Automation"],
    },
    {
      id: "exp-3",
      role: "Operations & Risk Data Analyst",
      company: "Vanguard Global Operations",
      location: "Dallas, TX",
      period: "Aug 2022 - Oct 2023",
      summary:
        "Spearheaded operational risk benchmarking, quality scoring frameworks, and management information systems (MIS) reporting for enterprise service fulfillment.",
      achievements: [
        {
          category: "Risk Data Analysis & Quality Benchmarking",
          points: [
            "Analyzed 500+ operational risk cases monthly using structured logical scoring models, sustaining a 97.2% accuracy benchmark.",
            "Constructed risk matrix scorecards adopted by senior management to evaluate fulfillment partners and vendors.",
          ],
        },
        {
          category: "Automation & Dashboard Development",
          points: [
            "Built automated Excel and Google Sheets telemetry trackers with VBA and dynamic formulas, reducing manual reporting time by 45%.",
            "Published monthly executive MIS reports consolidating quality metrics, employee output, and SLA compliance data.",
          ],
        },
        {
          category: "Team Enablement & Mentoring",
          points: [
            "Trained and onboarded 6 new analysts in structured analytical thinking, risk data interpretation, and spreadsheet modeling.",
          ],
        },
      ],
      skills: ["Advanced Excel", "Power Query", "Risk Modeling", "MIS Reporting", "SLA Tracking", "VBA"],
    },
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Advanced Excel: Master of Business Intelligence & Financial Modeling",
      issuer: "Institute of Business Analytics",
      issueDate: "2024",
      credentialId: "IBA-EXL-99824",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      skills: ["Power Query", "Power Pivot", "DAX Formulas", "Pivot Tables", "Financial Modeling"],
    },
    {
      id: "cert-2",
      title: "Get Job Ready: Power BI Enterprise Data Analytics Suite 4.0",
      issuer: "Global Data Academy",
      issueDate: "2024",
      credentialId: "GDA-PBI-44781",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      skills: ["DAX Studio", "Data Modeling", "Row-Level Security", "Drill-Through Reports", "Cloud Workspaces"],
    },
    {
      id: "cert-3",
      title: "SQL Beginner to Advanced for Data Science Professionals",
      issuer: "Data Tech Institute",
      issueDate: "2024",
      credentialId: "DTI-SQL-83109",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      skills: ["Complex Joins", "Window Functions", "Common Table Expressions", "Query Optimization"],
    },
    {
      id: "cert-4",
      title: "Data Analytics Bootcamp 6.0: Job Placement & AI Analyst Agent",
      issuer: "Advanced Analytics Guild",
      issueDate: "2024",
      credentialId: "AAG-BC-61042",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      skills: ["End-to-End Analytics", "AI Data Agents", "Business Problem Deconstruction", "Executive Communication"],
    },
    {
      id: "cert-5",
      title: "Accenture Data Analytics & Visualization Virtual Experience",
      issuer: "Accenture via Forage",
      issueDate: "2024",
      credentialId: "FORAGE-ACC-11029",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
      skills: ["Data Cleaning", "Data Modeling", "Data Storytelling", "Client Presentation"],
    },
    {
      id: "cert-6",
      title: "PwC Switzerland Power BI Digital Simulation",
      issuer: "PwC Switzerland via Forage",
      issueDate: "2024",
      credentialId: "FORAGE-PWC-55291",
      verifyUrl: "#verify-credential",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      skills: ["Call Center Analytics", "Customer Retention", "Diversity & Inclusion BI", "Executive Briefing"],
    },
  ],
};

