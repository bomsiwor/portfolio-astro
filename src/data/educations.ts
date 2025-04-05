interface IEducationItems {
    startPeriod: string;
    endPeriod: string;
    school: string;
    schoolDescription?: string;
    title?: string;
    major: string;
    location: string;
    description: string[];
    skills: string[];
}

// Sample data - replace with your actual experience data
const educations: IEducationItems[] = [
    {
        startPeriod: "August, 2019",
        endPeriod: "September, 2023",
        school: "Politeknik Teknologi Nuklir Indonesia",
        schoolDescription: "",
        title: " Diploma IV - Bachelor of Applied Engineering",
        major: "Nuclear Technophysics - Instrumentation Engineer ",
        description: [
            "Teaching Assistant for 1 semester in Information Technology Basic (Course). Handle 40 student and teach simple algorithm using MATLAB",
            "Teaching Assistant for 1 semester in Artificial Intelligence Basics (Course). Handle 8 student and teach simple Expert System using MATLAB and Python.",
        ],
        skills: ["React", "Node.js", "AWS", "Security"],
        location: "Yogyakarta, ID",
    },
];

export default educations;
