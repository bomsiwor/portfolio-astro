interface ICertification {
    name: string;
    issuer: string;
    year: number;
    validUntil?: number;
    description: string;
    url?: string;
}

export const softwareCerts: ICertification[] = [
    {
        name: "MERN + AI Bootcamp",
        issuer: "Devscale Indonesia",
        year: 2024,
        description:
            "Devscale Bootcamp Fullstack MERN. Perform building application from design the system, build Product Requirement Document, API Contract, Unit Testing (Jest), Frontend Automate teseting using Cypress, UI Component using Storybook & Tailwind, CI/CD using Github, Docker & hub. Integrate with Generative AI",
        url: "https://drive.google.com/file/d/1oKtdi1WuHJDNTsKH2sE-D9P0O7ioX2Gk/view?usp=drive_link",
    },
    {
        name: "Java Springboot Course",
        issuer: "ISwift Indonesia",
        year: 2024,
        description:
            "Bootcamp ISwift Java Springboot Cohort 1. Building Backend Application using Springboot, JPA, Hibernate, integrate to DBMS, and Deploying Java app on VPS",
        url: "https://drive.google.com/file/d/1f6nL4KiDI5pZM2Z_WYMvqf-NIcCoiKbA/view?usp=drive_link",
    },
    {
        name: "Basic Backend using Javascript",
        issuer: "Dicoding Indonesia",
        year: 2023,
        description:
            "Learn fundamentals of Backend Development usign Javascript",
        url: "https://www.dicoding.com/dicodingassets/coursecertificate/8809f8908b53184a7eb6c7930a226206d85f1b72/view",
    },
    {
        name: "Excel Skills for Business: Intermediate II",
        issuer: "Macquarie University",
        year: 2021,
        description:
            "Excel for Business by Macquarie University. Provided by Coursera.",
        url: "https://coursera.org/share/58c3f5cade26d96a020d13386d9a761e",
    },
];

export const nonRelatedCerts: ICertification[] = [
    {
        name: "Radiation Safety Officer - Industry Grade",
        issuer: "BAPETEN",
        year: 2023,
        description:
            "Certification for Radiation Safety Officer in Industry (not health or medical)",
    },
    {
        name: "General Health, Safety, Environment Officer",
        issuer: "BNSP Indonesia",
        year: 2023,
        description: "Certification for General Officer in Industry",
    },
];
