// ===== PORTFOLIO CONFIGURATION =====
// Customize this file to easily update your portfolio content

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Durga Prasanna Konde",
        title: "Cybersecurity Blue Team Analyst",
        email: "prasanna.konde@email.com",
        phone: "+1 (555) 123-4567", // Update with your phone
        location: "Your City, State",
        
        // Social Media Links
        social: {
            linkedin: "https://linkedin.com/in/durga-prasanna-konde",
            github: "https://github.com/prasanna-konde",
            twitter: "https://twitter.com/your-handle", // Optional
            website: "https://your-website.com" // Optional
        },
        
        // Professional Summary
        summary: "Experienced cybersecurity professional with 5+ years of hands-on expertise in Vulnerability Management, Threat Intelligence, Incident Response, and GRC Frameworks. Specialized in defending organizations against advanced cyber threats."
    },
    
    // Statistics for Hero Section
    stats: {
        experience: "5+",
        tools: "15+",
        frameworks: "4+",
        incidents: "100+"
    },
    
    // Skills and Expertise
    skills: {
        domains: [
            {
                name: "Vulnerability Management",
                description: "Risk assessment, vulnerability scanning, and remediation strategies",
                icon: "fas fa-bug"
            },
            {
                name: "Threat Intelligence",
                description: "Threat hunting, IOC analysis, and proactive threat detection",
                icon: "fas fa-brain"
            },
            {
                name: "Incident Response",
                description: "Digital forensics, incident containment, and recovery procedures",
                icon: "fas fa-ambulance"
            },
            {
                name: "Email Forensics",
                description: "Email security analysis, phishing detection, and forensic investigation",
                icon: "fas fa-envelope-open-text"
            },
            {
                name: "Web App Security",
                description: "OWASP Top 10, secure SDLC, and application vulnerability assessment",
                icon: "fas fa-globe"
            },
            {
                name: "Network Security",
                description: "TCP/IP, IDS/IPS, firewalls, and network traffic analysis",
                icon: "fas fa-network-wired"
            },
            {
                name: "GRC Frameworks",
                description: "NIST, ISO 27001, risk management, and compliance auditing",
                icon: "fas fa-clipboard-list"
            },
            {
                name: "Threat Hunting",
                description: "Proactive threat detection, behavioral analysis, and IOC development",
                icon: "fas fa-search"
            }
        ],
        
        tools: {
            "SIEM & Monitoring": ["Splunk", "ELK Stack", "Wazuh", "Suricata"],
            "Vulnerability Assessment": ["Nessus", "Qualys", "Burp Suite", "OWASP ZAP"],
            "Threat Detection": ["YARA", "T-Pot", "Metasploit", "Kali Linux"],
            "Network Analysis": ["Wireshark", "pfSense", "VirtualBox", "Honeypots"],
            "Cloud & DevOps": ["AWS", "Azure", "GitHub", "DevSecOps"],
            "Forensics": ["Windows Forensics", "Linux Forensics", "Digital Evidence", "Memory Analysis"]
        },
        
        compliance: [
            {
                name: "NIST Framework",
                description: "Cybersecurity Framework implementation and risk management",
                icon: "fas fa-shield-check"
            },
            {
                name: "ISO 27001",
                description: "Information security management systems and controls",
                icon: "fas fa-globe-americas"
            },
            {
                name: "PCI-DSS",
                description: "Payment card industry data security standards",
                icon: "fas fa-credit-card"
            },
            {
                name: "HIPAA",
                description: "Healthcare information privacy and security regulations",
                icon: "fas fa-user-md"
            }
        ]
    },
    
    // Work Experience
    experience: [
        {
            title: "Senior Blue Team Analyst",
            period: "2021 - Present",
            responsibilities: [
                "Led incident response activities for critical security events, reducing MTTR by 40%",
                "Implemented advanced threat hunting procedures using Splunk and ELK Stack",
                "Managed vulnerability assessment programs across 500+ endpoints",
                "Developed and maintained SIEM correlation rules and detection signatures",
                "Conducted compliance audits for NIST, ISO 27001, and PCI-DSS frameworks"
            ]
        },
        {
            title: "Cybersecurity Analyst",
            period: "2019 - 2021",
            responsibilities: [
                "Monitored security events and alerts using Wazuh and Suricata",
                "Performed vulnerability scans using Nessus and Qualys platforms",
                "Analyzed malware samples and developed YARA rules for detection",
                "Collaborated with cross-functional teams on security architecture reviews",
                "Created incident response playbooks and standard operating procedures"
            ]
        },
        {
            title: "Junior Security Analyst",
            period: "2018 - 2019",
            responsibilities: [
                "Assisted in 24/7 security operations center (SOC) monitoring",
                "Performed initial triage of security alerts and incidents",
                "Conducted basic network traffic analysis using Wireshark",
                "Supported penetration testing activities with Burp Suite and OWASP ZAP",
                "Maintained security documentation and compliance reports"
            ]
        }
    ],
    
    // Key Achievements
    achievements: [
        {
            title: "Incident Response Excellence",
            description: "Successfully managed 100+ security incidents with 99% resolution rate",
            icon: "fas fa-trophy"
        },
        {
            title: "Threat Detection Improvement",
            description: "Reduced false positives by 60% through advanced SIEM tuning",
            icon: "fas fa-chart-line"
        },
        {
            title: "Compliance Success",
            description: "Achieved 100% compliance scores in multiple regulatory audits",
            icon: "fas fa-shield-check"
        },
        {
            title: "Team Leadership",
            description: "Mentored 5+ junior analysts and developed training programs",
            icon: "fas fa-users"
        }
    ],
    
    // Featured Projects
    projects: [
        {
            title: "Advanced Threat Hunting Platform",
            description: "Developed a comprehensive threat hunting platform using Splunk and custom YARA rules to proactively identify advanced persistent threats (APTs).",
            technologies: ["Splunk", "YARA", "Python", "Threat Intelligence"],
            stats: {
                "Detection Rate": "95%",
                "Faster Response": "50%"
            },
            icon: "fas fa-search"
        },
        {
            title: "Automated Vulnerability Management",
            description: "Implemented an automated vulnerability management system integrating Nessus, Qualys, and custom remediation workflows.",
            technologies: ["Nessus", "Qualys", "PowerShell", "API Integration"],
            stats: {
                "Vulnerabilities": "500+",
                "Faster Patching": "70%"
            },
            icon: "fas fa-shield-virus"
        },
        {
            title: "Honeypot Network Deployment",
            description: "Designed and deployed a distributed honeypot network using T-Pot to collect threat intelligence and analyze attack patterns.",
            technologies: ["T-Pot", "Docker", "ELK Stack", "Network Security"],
            stats: {
                "Honeypots": "10+",
                "Attack Logs": "1M+"
            },
            icon: "fas fa-honeypot"
        },
        {
            title: "Cloud Security Assessment",
            description: "Conducted comprehensive security assessments for AWS and Azure environments, implementing security best practices and compliance frameworks.",
            technologies: ["AWS", "Azure", "CloudTrail", "Security Center"],
            stats: {
                "Compliance": "100%",
                "Zero Breaches": "✓"
            },
            icon: "fas fa-cloud-shield"
        },
        {
            title: "Email Security & Forensics",
            description: "Developed advanced email security analysis tools for phishing detection, email forensics, and threat attribution using machine learning techniques.",
            technologies: ["Python", "Machine Learning", "Email Headers", "Threat Intel"],
            stats: {
                "Accuracy": "98%",
                "Emails Analyzed": "10K+"
            },
            icon: "fas fa-envelope-open-text"
        },
        {
            title: "GRC Automation Framework",
            description: "Built an automated governance, risk, and compliance framework supporting NIST, ISO 27001, PCI-DSS, and HIPAA requirements.",
            technologies: ["NIST", "ISO 27001", "Automation", "Risk Assessment"],
            stats: {
                "Frameworks": "4",
                "Time Saved": "80%"
            },
            icon: "fas fa-clipboard-check"
        }
    ],
    
    // Certifications (if any)
    certifications: [
        // Add your certifications here
        // {
        //     name: "CISSP",
        //     issuer: "ISC2",
        //     date: "2023",
        //     credentialId: "123456"
        // }
    ],
    
    // Education (if you want to include)
    education: [
        // Add your education here
        // {
        //     degree: "Bachelor of Science in Cybersecurity",
        //     school: "University Name",
        //     year: "2018",
        //     gpa: "3.8/4.0" // Optional
        // }
    ],
    
    // Website Configuration
    website: {
        title: "Durga Prasanna Konde - Cybersecurity Blue Team Analyst",
        description: "Professional Cybersecurity Blue Team Analyst with 5+ years experience in Vulnerability Management, Threat Intelligence, Incident Response, and GRC",
        keywords: "cybersecurity, blue team, vulnerability management, threat intelligence, incident response, GRC, NIST, ISO 27001",
        author: "Durga Prasanna Konde",
        url: "https://your-domain.com", // Update with your domain
        
        // Analytics
        googleAnalyticsId: "", // Add your GA tracking ID
        
        // Contact Form
        formspreeId: "", // Add your Formspree form ID for contact form
        
        // Theme Colors
        themeColor: "#00d4ff",
        backgroundColor: "#0a0e1a"
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Make available globally
window.portfolioConfig = portfolioConfig;