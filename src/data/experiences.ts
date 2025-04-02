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
            "Led development of security monitoring platform",
            "Implemented threat detection algorithms",
            "Managed team of 5 engineers",
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
