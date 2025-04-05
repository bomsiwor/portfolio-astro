interface ExperienceItem {
    id: string;
    title: string;
    startPeriod: string;
    endPeriod?: string;
    stillWork: boolean;
    company: string;
    companyDescription?: string;
    location: string;
    description: string[];
    skills: string[];
    products: string[];
}

// Sample data - replace with your actual experience data
const experiences: ExperienceItem[] = [
    {
        id: "exp4",
        title: "Software Engineer",
        startPeriod: "September, 2023",
        stillWork: true,
        company: "RSUD dr. R. Soedarsono Kota Pasuruan",
        companyDescription:
            "RSUD dr. R. Soedarsono Kota Pasuruan serves as the city's central hospital, providing vital healthcare services to the community. Has progressively performing digitalization.",
        description: [
            "Optimized API Performance: Achieved a 10x improvement in API response times (from 5-10 seconds to near-instantaneous) through code refactoring, indexing, and implementing caching, significantly enhancing user experience and system efficiency.",
            "Streamlined System Workflow Design : Designed and developed data workflows covering the entire patient journey, adaptable to modular system.",
            "Efficient Reporting with PostgreSQL: Leveraged PostgreSQL for advanced reporting and optimized queries to handle large datasets, enabling faster insights and reducing query execution times. Utilized indexing and query tuning to ensure scalability and high performance.",
            "Third-Party Integration: Developed APIs to facilitate seamless data exchange with external systems like BPJS Kesehatan and SatuSehat (Ministry of Health Indonesia).",
            "Create multiple services such as SFTP, PDF Merger, File Zipper to support main application using Go. All mini services are well containerized using Docker.",
            "Monitoring Backend Server using Prometheus & Grafana to broadening the resource insight and instrumenting the system resources.",
            "Library Author : Create a composer package to integrate app with Trustmark BPJS.",
        ],
        skills: [
            "PHP",
            "Go",
            "Typescript",
            "Java",
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "Redis",
            "React",
            "Docker",
            "Nginx",
            "Prometheus",
            "Grafana",
            "CI/CD",
            "Linux",
        ],
        location: "Yogyakarta, ID",
        products: ["Lecture Material"],
    },
    {
        id: "exp3",
        title: "Fullstack Developer",
        startPeriod: "February, 2023",
        endPeriod: "July, 2023",
        stillWork: false,
        company: "Laboratorium Instrumentasi Nuklir - Poltek Nuklir",
        companyDescription:
            "This laboratory is a place of practicum, application of theory, research, and scientific development at the Indonesia Polytechnic at Nuclear Polytechnic.",
        description: [
            "Developing Laboratory Information System using Laravel 10 to handles various activities record within the laboratory facility. Parsing CSV data and render it on webpage using  VanillaJavascript.",
            "Creating REST API and secured it using Laravel Sanctum.",
            "Integrating and maintain periodic interoperability with International Atomic and Energy Agency (IAEA) API via HTTP",
        ],
        skills: [
            "Laravel",
            "PostgreSQL",
            "Redis",
            "Cron",
            "Bootstrap",
            "OAUTH",
            "JWT",
            "Livewire",
        ],
        location: "Yogyakarta, ID",
        products: ["Lecture Material"],
    },
    {
        id: "exp2",
        title: "Lecture Assistance",
        startPeriod: "October, 2022",
        endPeriod: "January, 2023",
        stillWork: false,
        company: "Politeknik Teknologi Nuklir Indonesia",
        companyDescription:
            "Basic programming course to introduce college student to simple algorithm  solving problem with a structured and pattern based solution.",
        description: [
            "Assisted 40 student to understanding basic programming and simple problem solving using Matlab and Python",
            "Conducted tutorial and provided guidance on course assignment for 13 weeks.",
            "Collaborate with faculty to improve curriculum, course materials, and address student needs.",
            "Assist student to implement course materials on other field such as basic IOT programming for course final project.",
        ],
        skills: ["MATLAB", "PHP", "Python", "HTML", "CSS"],
        location: "Yogyakarta, ID",
        products: ["Lecture Material"],
    },
    {
        id: "exp1",
        title: "Software engineer (intern)",
        startPeriod: "October, 2022",
        endPeriod: "February, 2023",
        stillWork: false,
        company:
            "PR-KAKS BRIN Pusat riset kecerdasan artifisial dan keamanan siber",
        companyDescription:
            "Pusat Riset Kecerdasan Artificial & Keamanan Siber - Badan Riset & Inovasi Nasional",
        description: [
            "Learn about Sistem Pemerintahan Berbasis Elektronik (SPBE), Satu Data Indonesia, interoperability at earlier stage of program from Government, also its implementation on Smart City - Government.",
            "Learn to read and write Technical Specification Docs for Software",
            "Developing web application prototype that will be used by the institution for case studying about implementing data interoperability using API (case study : Auditools)",
            "Building API using CodeIgniter 4 and can shares stored PDF data. This API secured using JWT and adapt Twitter's API authentication method.",
            "Improve data interoperability by Introducing and implementing REST-API for application test-case",
        ],
        skills: [
            "Redis",
            "PHP",
            "Laravel",
            "CodeIgniter",
            "REST-API",
            "SPBE Indonesia",
            "Bootstrap",
            "JWT",
            "OAuth",
        ],
        location: "Serpong, ID",
        products: ["Prototype Auditools"],
    },
];

export default experiences;
