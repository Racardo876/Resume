"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const infoItems = [
  ["Role", "Cybersecurity Program and IT Risk Manager"],
  ["Citizenship", "United States"],
  ["Address", "Delray Beach, Florida"],
  ["Phone", "561.699.5006"],
  ["E-mail", "racardobrown@gmail.com"],
  ["LinkedIn", "linkedin.com/in/racb876"],
];

const skillProfessional = [
  ["IAM (MFA, SSO, RBAC)", 95],
  ["Cloud Security (Azure, Microsoft 365)", 92],
  ["ERP Security (NetSuite)", 90],
  ["Vulnerability Management", 89],
];

const skillPersonal = [
  ["Cyberlaw", 90],
  ["HubSpot", 88],
  ["Process Automation", 92],
  ["Security Program Leadership", 94],
];

type ExperienceItem = {
  badgeDate: string;
  company: string;
  role: string;
  dateRange: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  additionalSections?: Array<{
    title: string;
    items: string[];
  }>;
};

const experience: ExperienceItem[] = [
  {
    badgeDate: "Apr 2025 - Present",
    company: "Complete Property Maintenance",
    role: "Systems Implementation Manager",
    dateRange: "April 2025 - Present",
    duration: "1 year",
    location: "Coconut Creek, FL",
    summary: "Delivered 8 enterprise technology initiatives while leading implementation, integration, and automation delivery.",
    highlights: [
      "Delivered 8 enterprise technology initiatives on time and within budget, improving operational system performance and scalability.",
      "Manage a 10-member technology implementation team responsible for enterprise system deployment, integration, and operational automation.",
      "Designed automation workflows that reduced manual reporting workloads by 70% and improved data visibility for leadership.",
      "Integrated operational platforms and reporting tools to enable real-time operational insights and executive dashboards.",
      "Partner with operations, finance, and leadership teams to translate business needs into scalable technology solutions.",
      "Manage external technology vendors and platform providers to ensure system performance, reliability, and cost efficiency.",
      "Own secure implementation of enterprise systems across operations and field teams with business-aligned execution.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Enterprise software implementation and configuration",
          "ERP and operations workflow mapping",
          "System integration planning and validation",
          "Data migration coordination and quality checks",
          "Implementation documentation and user enablement",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Lead implementation planning sessions with business and operations stakeholders.",
          "Translate process requirements into secure and scalable system configurations.",
          "Coordinate test cycles, cutover readiness, and go-live execution.",
          "Document workflows and train end users on new platform capabilities.",
          "Track implementation risks and drive remediation with internal and vendor teams.",
        ],
      },
    ],
  },
  {
    badgeDate: "Oct 2023 - Apr 2025",
    company: "Levinson Built",
    role: "CIS Manager",
    dateRange: "October 2023 - April 2025",
    duration: "1 year 7 months",
    location: "Riviera Beach, FL",
    summary: "Led cybersecurity governance, IAM controls, and cloud/ERP security improvements.",
    highlights: [
      "Owned enterprise cybersecurity governance and access management programs, implementing MFA and SSO across all business applications.",
      "Served as primary liaison between IT, leadership, and third-party vendors to ensure consistent cybersecurity practices across business units.",
      "Administered Microsoft 365 and Azure environments, enforcing security policies, least-privilege access, email security, and data protection controls.",
      "Secured ERP (NetSuite) platforms by managing role-based access, workflows, integrations, and audit-ready permissions.",
      "Led vulnerability assessment and remediation efforts, contributing to a 35% reduction in security vulnerabilities.",
      "Supported incident response coordination and security operations oversight in collaboration with internal and external security partners.",
      "Developed security documentation, internal training content, and communication initiatives to reinforce a strong security culture.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Microsoft 365 and Azure security administration",
          "Identity and access management (MFA, SSO, RBAC)",
          "NetSuite ERP security and role governance",
          "Vulnerability management and remediation tracking",
          "Security controls documentation and policy alignment",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Define and enforce enterprise security governance standards across business units.",
          "Manage secure access controls and privileged access for core applications.",
          "Partner with leadership and vendors to coordinate risk mitigation initiatives.",
          "Oversee remediation programs and report risk posture to stakeholders.",
          "Support incident response readiness and operational security oversight.",
        ],
      },
    ],
  },
  {
    badgeDate: "Oct 2023 - Apr 2025",
    company: "All American Shutters & Glass",
    role: "CIS Manager",
    dateRange: "October 2023 - April 2025",
    duration: "1 year 7 months",
    location: "Riviera Beach, FL",
    summary: "Owned governance and access management across Microsoft and ERP environments.",
    highlights: [
      "Owned enterprise cybersecurity governance and access management programs, implementing MFA and SSO across all business applications.",
      "Served as primary liaison between IT, leadership, and third-party vendors to ensure consistent cybersecurity practices across business units.",
      "Administered Microsoft 365 and Azure environments, enforcing security policies, least-privilege access, email security, and data protection controls.",
      "Secured ERP (NetSuite) platforms by managing role-based access, workflows, integrations, and audit-ready permissions.",
      "Led vulnerability assessment and remediation efforts, contributing to a 35% reduction in security vulnerabilities.",
      "Supported incident response coordination and security operations oversight in collaboration with internal and external security partners.",
      "Developed security documentation, internal training content, and communication initiatives to reinforce a strong security culture.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Microsoft 365 and Azure security administration",
          "Identity and access management (MFA, SSO, RBAC)",
          "NetSuite ERP security and role governance",
          "Vulnerability management and remediation tracking",
          "Security controls documentation and policy alignment",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Define and enforce enterprise security governance standards across business units.",
          "Manage secure access controls and privileged access for core applications.",
          "Partner with leadership and vendors to coordinate risk mitigation initiatives.",
          "Oversee remediation programs and report risk posture to stakeholders.",
          "Support incident response readiness and operational security oversight.",
        ],
      },
    ],
  },
  {
    badgeDate: "Apr 2023 - Oct 2023",
    company: "Palm Beach Accountable Care Organization",
    role: "IT Project Manager",
    dateRange: "April 2023 - October 2023",
    duration: "7 months",
    location: "West Palm Beach, FL",
    summary: "Directed secure IT and cloud initiatives aligned to business and risk goals.",
    highlights: [
      "Provided leadership and oversight for secure IT and cloud initiatives supporting business operations and compliance objectives.",
      "Partnered with IT leaders to align technology strategy with business and risk management goals.",
      "Oversaw secure deployment of Azure services and Microsoft 365, ensuring performance, security, and continuity.",
      "Implemented endpoint compliance and governance policies using Microsoft Intune to improve enterprise security posture.",
      "Delivered executive-level reporting on system performance, risk, and operational readiness.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Project delivery governance for IT and cloud initiatives",
          "Azure and Microsoft 365 deployment oversight",
          "Endpoint compliance and Intune policy management",
          "Operational risk reporting and stakeholder communication",
          "Cross-functional planning and implementation coordination",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Manage project scope, timelines, and stakeholder alignment for IT programs.",
          "Coordinate secure rollout of cloud and endpoint initiatives.",
          "Track risks, dependencies, and implementation blockers across teams.",
          "Provide executive reporting on performance, readiness, and compliance posture.",
          "Ensure delivered solutions align with business operations and governance requirements.",
        ],
      },
    ],
  },
  {
    badgeDate: "Dec 2022 - Apr 2023",
    company: "NationsBenefits",
    role: "Cyber Security Analyst",
    dateRange: "December 2022 - April 2023",
    duration: "5 months",
    location: "Plantation, FL",
    summary: "Supported cybersecurity operations, threat analysis, and SIEM/endpoint controls.",
    highlights: [
      "Supported enterprise cybersecurity operations, including threat analysis, vulnerability management, and endpoint security initiatives.",
      "Implemented and monitored SIEM, EDR, and vulnerability assessment tools to reduce attack surface and operational risk.",
      "Designed endpoint security controls resulting in a 35% reduction in malware incidents.",
      "Collaborated with security leadership to enhance overall cybersecurity governance.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "SIEM and EDR monitoring",
          "Threat analysis and incident triage",
          "Vulnerability assessment and remediation validation",
          "Endpoint protection policy tuning",
          "Security operations reporting and documentation",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Monitor and analyze security telemetry to identify potential threats.",
          "Support vulnerability management lifecycle from discovery to closure.",
          "Implement and maintain endpoint hardening and security configurations.",
          "Partner with leadership to improve governance and operational controls.",
          "Document incidents, findings, and remediation outcomes for stakeholders.",
        ],
      },
    ],
  },
  {
    badgeDate: "May 2022 - Dec 2022",
    company: "NationsBenefits",
    role: "IT Support Specialist",
    dateRange: "May 2022 - December 2022",
    duration: "8 months",
    location: "Plantation, Florida, United States",
    summary: "Supported Microsoft 365, AD, Intune, Citrix, and enterprise service platforms.",
    highlights: [
      "Microsoft 365",
      "Microsoft Server (2019) & Active Directory",
      "Azure AD & Intune",
      "Citrix VDI & Workspace",
      "Printer & File Server Management",
      "Remote Support (TMpros)",
      "Asset Management Tool (ServiceNow)",
      "Ticketing System (Zendesk, ServiceNow)",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Microsoft 365 and server administration support",
          "Active Directory, Azure AD, and Intune user/device management",
          "Citrix VDI and workspace support",
          "ServiceNow and Zendesk ticket workflow execution",
          "Endpoint, file server, and print services support",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Provide tiered IT support for users, endpoints, and core enterprise services.",
          "Resolve incidents and service requests within defined SLA targets.",
          "Manage account access, device enrollment, and policy enforcement tasks.",
          "Maintain asset records and support change tracking in ticketing systems.",
          "Escalate high-priority issues and communicate status with stakeholders.",
        ],
      },
    ],
  },
  {
    badgeDate: "Dec 2020 - May 2022",
    company: "AT&T",
    role: "Fiber Optics Technician",
    dateRange: "December 2020 - May 2022",
    duration: "1 year 6 months",
    location: "Delray Beach, Florida, United States",
    summary: "Installed and maintained fiber infrastructure across field deployments.",
    highlights: [
      "Fiber Optic Systems: Installation, Repair, and Maintenance for Optimal Functionality.",
      "Network Cable Installation: Utilizing tools such as cable crimpers and strippers.",
      "Telephone Systems: Installation, including voicemail and intercom systems.",
      "Networking Protocols: Proficiency in IPv4, IPv6, TCP/UDP.",
      "Fiber Optic Techniques: Mechanical splicing, fusion splicing, JDSU, fiber scoping, and fiber provisioning.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Fiber installation, testing, and repair",
          "Mechanical and fusion splicing techniques",
          "Cable preparation using crimping and stripping tools",
          "Network protocol fundamentals (IPv4, IPv6, TCP/UDP)",
          "Field diagnostics and provisioning workflows",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Install and maintain fiber and network cabling across customer sites.",
          "Diagnose service issues and execute restoration activities in the field.",
          "Perform quality checks and testing to confirm signal integrity.",
          "Document service work and coordinate dispatch updates.",
          "Follow safety, compliance, and installation standards for all jobs.",
        ],
      },
    ],
  },
  {
    badgeDate: "Nov 2017 - Dec 2021",
    company: "XR Studio",
    role: "Junior Developer",
    dateRange: "November 2017 - December 2021",
    duration: "4 years 2 months",
    location: "Kingston, Jamaica",
    summary: "Delivered web development, API/plugin work, and SQL-backed front-end solutions.",
    highlights: [
      "Animated banner advertisements created using CSS, HTML, JavaScript, and GreenSock.",
      "WordPress development including websites and custom plugins/API integration.",
      "Graphic design work using Adobe Photoshop and Illustrator.",
      "Database and web application design with SQL and Oracle.",
      "SEO and social media integration to improve performance.",
      "Version control proficiency with GitHub.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Front-end development with HTML, CSS, and JavaScript",
          "WordPress development and plugin/API customization",
          "SQL and Oracle-backed web application development",
          "Creative tooling with Adobe Photoshop and Illustrator",
          "Version control and collaboration using GitHub",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Build and maintain web pages, interactive components, and marketing assets.",
          "Implement WordPress features and custom integrations for client needs.",
          "Support database-connected functionality for web solutions.",
          "Collaborate with design and project teams to deliver client work on schedule.",
          "Optimize websites for usability, SEO performance, and maintainability.",
        ],
      },
    ],
  },
  {
    badgeDate: "Aug 2013 - Oct 2017",
    company: "ACCENT Marketing",
    role: "Technical Support Manager",
    dateRange: "August 2013 - October 2017",
    duration: "4 years 3 months",
    location: "Kingston, Jamaica",
    summary: "Led support team performance, workflows, and service delivery improvements.",
    highlights: [
      "Managed a high-performing technical support team of 12, promoting collaboration and motivation.",
      "Handled and tracked support tickets to ensure timely resolution.",
      "Analyzed KPI metrics to identify service improvement opportunities.",
      "Developed and maintained knowledge bases and support documentation.",
      "Served as escalation point for complex technical issues.",
      "Implemented customer feedback mechanisms for service enhancement.",
      "Conducted regular team meetings to strengthen collaboration.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Team leadership and service desk operations",
          "Ticket queue management and escalation control",
          "KPI analysis and support performance reporting",
          "Knowledge base and process documentation",
          "Customer experience and service quality improvement",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Lead daily support operations and coach team members toward SLA performance goals.",
          "Manage escalations and ensure timely resolution of complex support issues.",
          "Track team metrics and implement process improvements based on KPI trends.",
          "Maintain technical documentation and internal support playbooks.",
          "Coordinate regular team communication to improve collaboration and consistency.",
        ],
      },
    ],
  },
  {
    badgeDate: "Sep 2012 - Aug 2013",
    company: "eGov Jamaica Limited",
    role: "Junior Developer",
    dateRange: "September 2012 - August 2013",
    duration: "1 year",
    location: "Kingston, Jamaica",
    summary: "Contributed to application development and technical troubleshooting as an intern.",
    highlights: [
      "Successfully completed a challenging development internship, gaining hands-on coding and software development experience.",
      "Collaborated with senior developers and cross-functional teams to complete multiple projects.",
      "Demonstrated strong ability to quickly learn and adapt to new technologies and programming languages.",
      "Developed and deployed small-scale applications and features, showcasing practical coding and problem-solving skills.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Proficient in programming languages including Python, JavaScript, and Java.",
          "Familiar with web technologies such as HTML, CSS, and front-end frameworks like React or Angular.",
          "Basic understanding of database systems and SQL queries for data manipulation.",
          "Knowledge of version control systems such as Git for collaborative development.",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Assisted in development and testing of software applications while following coding standards and best practices.",
          "Participated in code reviews, providing and receiving constructive feedback.",
          "Collaborated with team members to meet project milestones and goals.",
          "Conducted research to support technical decision-making and problem solving.",
          "Assisted in troubleshooting and resolving technical issues to maintain application functionality.",
          "Participated in training sessions and workshops to strengthen technical skills.",
        ],
      },
    ],
  },
];

type ServiceItem = {
  title: string;
  text: string;
  icon: "shield" | "key" | "cloud" | "bug" | "chart" | "deploy";
};

const services: ServiceItem[] = [
  {
    title: "Cybersecurity Program Management",
    text: "Build and manage practical security programs that improve governance maturity, risk visibility, and organization-wide security alignment.",
    icon: "shield",
  },
  {
    title: "Identity and Access Management",
    text: "Design and enforce MFA, SSO, RBAC, and least-privilege access patterns across cloud and enterprise applications.",
    icon: "key",
  },
  {
    title: "Cloud and ERP Security",
    text: "Secure Microsoft 365, Azure, and NetSuite environments with policy controls, role design, integrations governance, and audit-ready permissions.",
    icon: "cloud",
  },
  {
    title: "Vulnerability and Endpoint Security",
    text: "Lead vulnerability assessment/remediation and endpoint protection initiatives to reduce attack surface and strengthen operational resilience.",
    icon: "bug",
  },
  {
    title: "Risk and Compliance Reporting",
    text: "Deliver executive-level reporting on security posture, risk trends, and operational readiness to support informed leadership decisions.",
    icon: "chart",
  },
  {
    title: "Security-Aligned Implementations",
    text: "Translate security requirements into business-aligned implementations across cloud, identity, and enterprise systems without disrupting operations.",
    icon: "deploy",
  },
];

type EducationItem = {
  date: string;
  school: string;
  program: string;
  summary: string;
  highlights: string[];
  additionalSections?: Array<{
    title: string;
    items: string[];
  }>;
  previewImage?: string;
  documents: Array<{ label: string; href: string }>;
};

const education: EducationItem[] = [
  {
    date: "Mar 2026",
    school: "Lovable",
    program: "Vibe Coding (L3: Gold)",
    summary: "Advanced practical credential focused on applied coding workflows, rapid prototyping, and modern development execution.",
    highlights: [
      "Completed hands-on coding challenges and applied workflow automation scenarios.",
      "Demonstrated practical delivery in iterative build-test-improve cycles.",
      "Strengthened modern development execution and problem-solving cadence.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Rapid prototyping and iterative development",
          "Workflow-driven coding execution",
          "Prompt-assisted development approaches",
          "Feature delivery and refinement patterns",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply practical coding methodologies in project-style exercises.",
          "Translate requirements into working solutions with measurable outcomes.",
          "Continuously improve delivery quality through iteration and feedback.",
          "Document implementation choices and execution rationale.",
        ],
      },
    ],
    documents: [],
  },
  {
    date: "Sep 2024 - Sep 2025",
    school: "ISC2",
    program: "ISC2 Candidate",
    summary: "Active ISC2 candidate status aligned to professional cybersecurity development and certification progression.",
    highlights: [
      "Maintains active candidate standing within an internationally recognized cybersecurity body.",
      "Demonstrates commitment to ongoing professional development and ethical practice.",
      "Advances readiness for enterprise-level security certification objectives.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Cybersecurity principles and governance fundamentals",
          "Risk-aware security operations mindset",
          "Security control and compliance awareness",
          "Professional ethics in information security",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Maintain progression against formal cybersecurity certification milestones.",
          "Apply standards-based security thinking to enterprise environments.",
          "Stay current with evolving industry frameworks and best practices.",
          "Demonstrate continuous learning in technical and governance domains.",
        ],
      },
    ],
    documents: [],
  },
  {
    date: "Jan 2024",
    school: "TestOut Corporation",
    program: "TestOut Security Pro",
    summary: "Validated security operations and infrastructure protection fundamentals across systems hardening and administration.",
    highlights: [
      "Demonstrated practical understanding of endpoint and infrastructure security.",
      "Applied system hardening and security administration techniques.",
      "Strengthened operational readiness for threat prevention and response.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Security administration fundamentals",
          "Endpoint and system hardening",
          "Threat prevention and control concepts",
          "Operational security troubleshooting",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Implement foundational controls to reduce system exposure.",
          "Support secure configuration and baseline management activities.",
          "Identify and remediate common infrastructure security weaknesses.",
          "Apply security best practices in operational support contexts.",
        ],
      },
    ],
    documents: [],
  },
  {
    date: "Oct 2023",
    school: "Microsoft + LinkedIn Learning",
    program: "Career Essentials in System Administration",
    summary: "System administration track covering core operations, platform support, and enterprise IT service fundamentals.",
    highlights: [
      "Built stronger capability across enterprise administration workflows.",
      "Expanded practical skills in platform support and IT operations.",
      "Reinforced service reliability and support delivery discipline.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "System administration operations",
          "Enterprise support workflow management",
          "Platform monitoring and service continuity",
          "User and endpoint support fundamentals",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply administration best practices to daily IT operations.",
          "Support core platform stability and user productivity.",
          "Follow service management processes for incident handling.",
          "Document administration procedures and support runbooks.",
        ],
      },
    ],
    documents: [],
  },
  {
    date: "Aug 2023 - Aug 2024",
    school: "GRC Certify",
    program: "Integrated Policy Management Professional (IPMP)",
    summary: "Certification focused on integrated policy governance, compliance alignment, and enterprise risk management practices.",
    highlights: [
      "Strengthened policy lifecycle management and governance alignment skills.",
      "Improved capability to map controls to business and compliance objectives.",
      "Enhanced enterprise risk communication and oversight readiness.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Policy governance and control alignment",
          "Compliance mapping and evidence readiness",
          "Risk identification and treatment planning",
          "Governance reporting for leadership",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Develop and maintain integrated policy management practices.",
          "Align security controls with compliance and audit expectations.",
          "Support governance workflows with risk-informed decision input.",
          "Contribute to policy communication and adoption across teams.",
        ],
      },
    ],
    documents: [{ label: "IPMP Certificate", href: "/certs/ipmp.pdf" }],
  },
  {
    date: "May 2023 - May 2024",
    school: "GRC Certify",
    program: "GRC Professional Certification",
    summary: "Professional credential emphasizing governance, risk, and compliance controls for resilient security operations.",
    highlights: [
      "Deepened practical understanding of governance, risk, and compliance integration.",
      "Improved control design thinking for operational resilience.",
      "Strengthened ability to communicate risk posture to stakeholders.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "GRC control frameworks and governance models",
          "Risk assessment and control effectiveness review",
          "Compliance operations and audit preparation",
          "Security governance communication",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply GRC principles to support security program maturity.",
          "Contribute to risk assessments and mitigation planning.",
          "Support compliance readiness through control documentation.",
          "Track governance outcomes and report key security risks.",
        ],
      },
    ],
    documents: [{ label: "GRC Professional Certificate", href: "/certs/grcp.pdf" }],
  },
  {
    date: "Aug 2023 - Jun 2024",
    school: "Nova Southeastern University",
    program: "M.S. Cybersecurity Management",
    summary: "Graduate program focused on governance, risk management, enterprise security strategy, and cybersecurity leadership.",
    highlights: [
      "Advanced strategic capability in enterprise cybersecurity program leadership.",
      "Developed deeper expertise in risk governance and security management.",
      "Strengthened executive-level security planning and decision support skills.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Cybersecurity strategy and governance planning",
          "Enterprise risk management in security contexts",
          "Security program leadership and operating models",
          "Policy, controls, and compliance integration",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply graduate-level cybersecurity management concepts to enterprise operations.",
          "Evaluate risk, controls, and governance effectiveness for business alignment.",
          "Support leadership decision-making with structured security analysis.",
          "Promote security culture through policy and strategic communication.",
        ],
      },
    ],
    previewImage: "/certs/ms-cybersecurity-diploma.png",
    documents: [{ label: "Master's Diploma Record", href: "/certs/certificates-degrees.pdf" }],
  },
  {
    date: "Jan 2023 - Apr 2023",
    school: "Florida International University - College of Business",
    program: "Project Management Certificate",
    summary: "Training in project planning, stakeholder alignment, execution governance, and delivery discipline.",
    highlights: [
      "Built stronger project governance and execution planning capability.",
      "Improved stakeholder alignment and communication approach for delivery programs.",
      "Enhanced structured execution practices for enterprise initiatives.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Project scope, schedule, and milestone planning",
          "Stakeholder communication and alignment",
          "Execution governance and delivery tracking",
          "Risk and issue management in project lifecycles",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Define and monitor project plans, deliverables, and dependencies.",
          "Coordinate cross-functional stakeholders through delivery phases.",
          "Track project risks and maintain mitigation actions.",
          "Provide structured status reporting to leadership and sponsors.",
        ],
      },
    ],
    documents: [
      { label: "Project Management Certificate", href: "/certs/online-project-management-certificate-program-racardo-brown.pdf" },
      { label: "IPMP", href: "/certs/ipmp.pdf" },
      { label: "IDPP", href: "/certs/idpp.pdf" },
      { label: "GRCP", href: "/certs/grcp.pdf" },
    ],
  },
  {
    date: "May 2022",
    school: "Cisco",
    program: "CCNA: Enterprise Networking, Security, and Automation",
    summary: "Cisco certification covering enterprise routing/switching, security controls, and automation concepts.",
    highlights: [
      "Expanded practical networking proficiency in enterprise environments.",
      "Strengthened understanding of secure routing, switching, and network automation.",
      "Reinforced infrastructure troubleshooting and control implementation skills.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Enterprise routing and switching concepts",
          "Network security control fundamentals",
          "Automation principles in network operations",
          "Infrastructure troubleshooting and validation",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply enterprise networking best practices to design and support tasks.",
          "Implement secure network configurations for resilient operations.",
          "Support network change activities with structured validation steps.",
          "Troubleshoot connectivity and performance issues across environments.",
        ],
      },
    ],
    documents: [{ label: "CCNA Enterprise Certificate", href: "/certs/ccna-enterprise-networking-certificate.pdf" }],
  },
  {
    date: "Jan 2022",
    school: "Cisco",
    program: "CCNA: Switching, Routing, and Wireless Essentials",
    summary: "Cisco credential validating switching, routing, and wireless networking foundations in enterprise environments.",
    highlights: [
      "Validated foundational network engineering and wireless capabilities.",
      "Improved practical troubleshooting approach for switching and routing scenarios.",
      "Strengthened understanding of enterprise wireless implementation principles.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Switching and routing fundamentals",
          "Wireless networking essentials",
          "Network diagnostics and troubleshooting",
          "Secure network configuration basics",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Support switching, routing, and wireless setup in enterprise contexts.",
          "Perform network checks and issue resolution across core services.",
          "Apply standards-based configuration and validation practices.",
          "Contribute to stable and secure connectivity operations.",
        ],
      },
    ],
    documents: [{ label: "CCNA Switching & Routing Certificate", href: "/certs/ccna-switching-routing-certificate.pdf" }],
  },
  {
    date: "2020 - 2023",
    school: "Vocational Training Development Institute",
    program: "Bachelor's Degree, Information & Communication Technology",
    summary: "Completed advanced ICT studies focused on systems, infrastructure, and enterprise technology fundamentals.",
    highlights: [
      "Completed a broad ICT curriculum spanning systems, networking, and enterprise technology.",
      "Built strong foundations in infrastructure operations and technical support domains.",
      "Developed practical analytical and problem-solving skills for IT environments.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "ICT systems and infrastructure fundamentals",
          "Network and platform support concepts",
          "Technical analysis and troubleshooting approaches",
          "Information systems operations awareness",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply academic ICT principles to practical technical scenarios.",
          "Support systems-focused analysis and problem-resolution workflows.",
          "Develop clear technical documentation and communication habits.",
          "Maintain continuous learning across evolving technology domains.",
        ],
      },
    ],
    documents: [
      { label: "Bachelor's and Associate Record", href: "/certs/associate-bachelors.pdf" },
    ],
  },
  {
    date: "2010 - 2012",
    school: "Vocational Training Development Institute",
    program: "Associate's Degree, Information & Communication Technology",
    summary: "Built foundational ICT knowledge in networks, systems, and technical support operations.",
    highlights: [
      "Established core technical foundation in computing and network operations.",
      "Developed practical support skills for systems and user environments.",
      "Prepared for advanced ICT coursework and professional growth.",
    ],
    additionalSections: [
      {
        title: "Technical Skills",
        items: [
          "Computer systems and network fundamentals",
          "Technical support and troubleshooting basics",
          "ICT operations and service support concepts",
          "Foundational information technology practices",
        ],
      },
      {
        title: "Responsibilities",
        items: [
          "Apply foundational ICT concepts to lab and practical exercises.",
          "Support basic systems and network troubleshooting tasks.",
          "Demonstrate structured technical problem-solving practices.",
          "Build readiness for higher-level infrastructure and security study.",
        ],
      },
    ],
    documents: [
      { label: "Associate and Bachelor's Record", href: "/certs/associate-bachelors.pdf" },
    ],
  },
];

const testimonials = [
  {
    image: "/testimonial-ceo.png",
    name: "Matthew Levinson",
    title: "CEO",
    quote:
      "Racardo implemented scalable systems and security controls that improved efficiency, reduced risk, and brought structure to our IT operations.",
  },
  {
    image: "/testimonial-mark-scott.png",
    name: "Mark Scott",
    title: "Director of Information Technology",
    quote:
      "Racardo streamlined our infrastructure and automation processes, drastically reducing onboarding time and improving overall system efficiency.",
  },
  {
    image: "/testimonial-cfo-v2.png",
    name: "Patricia L Sines - CPA",
    title: "Chief Financial Officer",
    quote:
      "Racardo implemented solutions that improved efficiency, reduced unnecessary spend, and gave us better control over our technology environment.",
  },
];

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  switch (icon) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
        </svg>
      );
    case "key":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="3" />
          <path d="M11 12h9M17 12v3M20 12v2" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 18a4 4 0 1 1 .8-7.9A5 5 0 0 1 17 11a3.5 3.5 0 1 1 .5 7H7z" />
        </svg>
      );
    case "bug":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 9V7a3 3 0 1 1 6 0v2M6 13h12M8 13v5a4 4 0 0 0 8 0v-5" />
          <path d="M5 9l2 2M19 9l-2 2M5 17l2-2M19 17l-2-2" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 3 2 4-5" />
        </svg>
      );
    case "deploy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v10" />
          <path d="M8 9l4 4 4-4" />
          <rect x="4" y="15" width="16" height="6" rx="2" />
        </svg>
      );
  }
}

function TimelineSectionIcon({ type }: { type: "experience" | "education" }) {
  if (type === "experience") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11.5V16l6 3 6-3v-4.5" />
    </svg>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".mcard-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedEducation && !selectedExperience) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedEducation(null);
        setSelectedExperience(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedEducation, selectedExperience]);

  useEffect(() => {
    if (selectedEducation) setIsPreviewExpanded(false);
  }, [selectedEducation]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="mcard-shell min-h-screen text-slate-900">
      <button className="mcard-menu-btn" aria-label="menu">≡</button>

      <header className="mcard-hero" id="home">
        <div className="mcard-hero-overlay" />
      </header>

      <main className="mx-auto max-w-[1120px] px-4 pb-16">
        <section className="-mt-16 text-center mcard-reveal mcard-intro">
          <div className="mcard-avatar-wrap">
            <div className="mcard-avatar">
              <Image src="/headshot.png" alt="Racardo Brown" fill className="rounded-full object-cover" />
            </div>
            <a href="mailto:racardobrown@gmail.com" className="mcard-plus-btn" aria-label="Send email to Racardo Brown">
              +
            </a>
          </div>
          <h1 className="mt-4 text-[64px] leading-none font-light text-slate-700">Racardo Brown</h1>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-500">
            Cybersecurity Program & IT Risk Manager | IAM, Cloud Security, GRC
          </p>
          <div className="mcard-intro-badges">
            <span>Delray Beach, FL</span>
            <span>Enterprise Security & ERP</span>
            <span>Open to Strategic Projects</span>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            <a className="mcard-social" href="https://www.linkedin.com/in/racb876" target="_blank" rel="noopener noreferrer">LI</a>
            <a className="mcard-social" href="https://github.com/Racardo876" target="_blank" rel="noopener noreferrer">GH</a>
            <a className="mcard-social" href="mailto:racardobrown@gmail.com">EM</a>
            <a className="mcard-social" href="/rb-resume.pdf" download>CV</a>
          </div>
        </section>

        <section id="about" className="mcard-panel mcard-about-panel mt-8 mcard-reveal">
          <div className="grid gap-5 md:grid-cols-2">
            <ul className="text-base">
              {infoItems.map(([k, v]) => (
                <li key={k} className="mcard-info-row">
                  <span className="mcard-tag">{k}:</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <div className="text-base text-slate-600">
              <p className="font-semibold text-slate-700">Hello! I&apos;m Racardo Brown</p>
              <p className="mt-3">
                I drive infrastructure modernization and lead enterprise system and ERP deployments that align
                technology with business operations. From architecture to implementation, I ensure organizations
                operate on scalable, secure, and data-driven platforms.
              </p>
              <p className="mt-3">
                My focus spans cybersecurity, Microsoft ecosystems, and full-lifecycle technology delivery,
                enabling leadership with the visibility and control needed to scale effectively.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="/rb-resume.pdf" download className="mcard-btn mcard-btn-primary">Download CV</a>
                <a href="#contact" className="mcard-btn">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Skills</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel text-left">
              <div className="mcard-icon-badge">⚙</div>
              <h3 className="mcard-subtitle mt-8">Professional</h3>
              <ul className="mt-5 space-y-3">
                {skillProfessional.map(([name, level]) => (
                  <li key={String(name)}>
                    <div className="mb-1 text-base text-slate-700">{name}</div>
                    <div className="mcard-progress"><span style={{ width: `${level}%` }} /></div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="mcard-panel text-left">
              <div className="mcard-icon-badge">👤</div>
              <h3 className="mcard-subtitle mt-8">Personal</h3>
              <ul className="mt-5 space-y-3">
                {skillPersonal.map(([name, level]) => (
                  <li key={String(name)}>
                    <div className="mb-1 text-base text-slate-700">{name}</div>
                    <div className="mcard-progress"><span style={{ width: `${level}%` }} /></div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="experience" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Experience</h2>
          <div className="mcard-section-node" aria-hidden="true">
            <div className="mcard-icon-badge">
              <TimelineSectionIcon type="experience" />
            </div>
          </div>
          <div className="mcard-scroll-wrap mcard-scroll-wrap-tight mt-0">
            <div className="mcard-timeline-center mcard-timeline-with-node">
              {experience.map((item, i) => (
                <article key={`${item.company}-${item.role}-${item.badgeDate}`} className={`mcard-timeline-row ${i % 2 ? "right" : "left"}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEducation(null);
                      setSelectedExperience(item);
                    }}
                    className="mcard-timeline-card mcard-timeline-clickable"
                    aria-label={`View full experience for ${item.role} at ${item.company}`}
                  >
                    <h3 className="font-semibold text-slate-700">{item.company}</h3>
                    <p className="text-xs text-slate-500">{item.role}</p>
                    <p className="mt-2 text-base text-slate-600">{item.summary}</p>
                  </button>
                  <span className="mcard-date-badge">{item.badgeDate}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="mcard-panel mcard-service-card">
                <div className="mcard-icon-badge">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="mcard-subtitle mt-8">{service.title}</h3>
                <p className="mt-3 text-base text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Education</h2>
          <div className="mcard-section-node" aria-hidden="true">
            <div className="mcard-icon-badge">
              <TimelineSectionIcon type="education" />
            </div>
          </div>
          <div className="mcard-scroll-wrap mcard-scroll-wrap-sm mcard-scroll-wrap-tight mt-0">
            <div className="mcard-timeline-center mcard-timeline-with-node">
              {education.map((item, i) => (
                <article key={item.program} className={`mcard-timeline-row ${i % 2 ? "right" : "left"}`}>
                  <button
                    type="button"
                  onClick={() => {
                    setSelectedExperience(null);
                    setSelectedEducation(item);
                  }}
                    className="mcard-timeline-card mcard-timeline-clickable"
                    aria-label={`View details for ${item.program}`}
                  >
                    <h3 className="font-semibold text-slate-700">{item.school}</h3>
                    <p className="text-base text-slate-600">{item.program}</p>
                  </button>
                  <span className="mcard-date-badge">{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Portfolio</h2>
          <div className="mx-auto mt-6 flex w-fit overflow-hidden rounded-sm border border-blue-700 text-xs">
            <span className="bg-blue-600 px-4 py-2 text-white">All</span>
            <span className="bg-blue-600 px-4 py-2 text-white/90">Mockups</span>
            <span className="bg-blue-600 px-4 py-2 text-white/90">Graphics</span>
            <span className="bg-blue-600 px-4 py-2 text-white/90">Icons</span>
            <span className="bg-blue-600 px-4 py-2 text-white/90">UI Kits</span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel overflow-hidden p-0 text-left">
              <Image src="/work5.png" alt="Mapogo UI Kit" width={900} height={520} className="h-52 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs text-slate-500">UI Kits</p>
                <h3 className="font-semibold text-slate-700">Mapogo UI Kit</h3>
              </div>
            </article>
            <article className="mcard-panel overflow-hidden p-0 text-left">
              <Image src="/work6.png" alt="Chameleon UI Kit" width={900} height={520} className="h-52 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs text-slate-500">UI Kits</p>
                <h3 className="font-semibold text-slate-700">Chameleon UI Kit</h3>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Clients</h2>
          <article className="mcard-panel mt-8">
            <div key={activeTestimonial} className="mcard-testimonial-slide">
              <Image src={currentTestimonial.image} alt={currentTestimonial.name} width={120} height={120} className="mx-auto h-24 w-24 rounded-full object-cover object-[50%_22%]" />
              <p className="mt-3 text-sm italic text-slate-600">
                — {currentTestimonial.name}, {currentTestimonial.title}
              </p>
              <p className="mt-3 text-sm text-slate-500">{currentTestimonial.quote}</p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${idx === activeTestimonial ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="mt-12 text-center mcard-reveal">
          <h2 className="mcard-section-title">Contact Me</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="mcard-panel text-left text-sm">
              <div className="space-y-3 border-b border-slate-200 pb-4">
                <p><span className="mcard-tag">Address:</span> Delray Beach, Florida</p>
                <p><span className="mcard-tag">Phone:</span> 561.699.5006</p>
                <p><span className="mcard-tag">E-mail:</span> racardobrown@gmail.com</p>
              </div>
              <div className="relative mt-4 h-48 overflow-hidden rounded-sm">
                <Image src="/map-main.webp" alt="Map" fill className="object-cover" />
              </div>
            </article>
            <article className="mcard-panel text-left">
              <h3 className="text-3xl font-light text-slate-600">Write a message:</h3>
              <form className="mt-6 space-y-4">
                <input className="mcard-input" type="text" placeholder="Your Name" />
                <input className="mcard-input" type="email" placeholder="Your Email" />
                <input className="mcard-input" type="text" placeholder="Subject" />
                <textarea className="mcard-input" rows={4} placeholder="Message" />
                <button type="button" className="mcard-btn mcard-btn-primary">Send Message</button>
              </form>
            </article>
          </div>
        </section>
      </main>

      {selectedEducation ? (
        <div className="mcard-modal-overlay" onClick={() => setSelectedEducation(null)} role="dialog" aria-modal="true" aria-label="Education details">
          <div className="mcard-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="mcard-modal-close" onClick={() => setSelectedEducation(null)} aria-label="Close details">
              ×
            </button>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{selectedEducation.date}</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-800">{selectedEducation.school}</h3>
            <p className="mt-2 text-lg text-slate-600">{selectedEducation.program}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{selectedEducation.summary}</p>

            {[
              { title: "Highlights", items: selectedEducation.highlights },
              ...(selectedEducation.additionalSections ?? []),
            ].map((section) => (
              <div key={section.title} className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{section.title}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {selectedEducation.previewImage ? (
              <button
                type="button"
                onClick={() => setIsPreviewExpanded((prev) => !prev)}
                className={`mcard-modal-preview ${isPreviewExpanded ? "expanded" : ""}`}
                aria-label={isPreviewExpanded ? "Collapse certification preview" : "Expand certification preview"}
              >
                <Image
                  src={selectedEducation.previewImage}
                  alt={`${selectedEducation.program} preview`}
                  fill
                  className="object-contain"
                />
              </button>
            ) : selectedEducation.documents.length ? (
              <button
                type="button"
                onClick={() => setIsPreviewExpanded((prev) => !prev)}
                className={`mcard-modal-preview ${isPreviewExpanded ? "expanded" : ""}`}
                aria-label={isPreviewExpanded ? "Collapse certification preview" : "Expand certification preview"}
              >
                <iframe
                  src={selectedEducation.documents[0].href}
                  title={`${selectedEducation.program} document preview`}
                  className="h-full w-full"
                />
              </button>
            ) : null}

            {selectedEducation.documents.length ? (
              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Documents</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedEducation.documents.map((doc) => (
                    <a key={doc.href} href={doc.href} target="_blank" rel="noopener noreferrer" className="mcard-btn mcard-btn-primary">
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {selectedExperience ? (
        <div className="mcard-modal-overlay" onClick={() => setSelectedExperience(null)} role="dialog" aria-modal="true" aria-label="Experience details">
          <div className="mcard-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="mcard-modal-close" onClick={() => setSelectedExperience(null)} aria-label="Close details">
              ×
            </button>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{selectedExperience.dateRange}</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-800">{selectedExperience.company}</h3>
            <p className="mt-2 text-lg text-slate-600">{selectedExperience.role}</p>
            <p className="mt-4 text-sm text-slate-500">
              {selectedExperience.duration} · {selectedExperience.location}
            </p>
            {[
              { title: "Highlights", items: selectedExperience.highlights },
              ...(selectedExperience.additionalSections ?? []),
            ].map((section) => (
              <div key={section.title} className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{section.title}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <footer className="pb-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} mCard style rebuild by Racardo Brown.
      </footer>
    </div>
  );
}
