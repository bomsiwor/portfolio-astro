import EmailIcon from "@components/icons/EmailIcon.astro";
import GithubIcon from "@components/icons/GithubIcon.astro";
import LinkedinIcon from "@components/icons/LinkedinIcon.astro";
import MediumIcon from "@components/icons/MediumIcon.astro";
import TwitterIcon from "@components/icons/TwitterIcon.astro";

export interface ISocialMedia {
    username: string;
    platform: string;
    url: string;
    icon: any;
}

const socials: ISocialMedia[] = [
    {
        username: "Bomanarakasura",
        platform: "linkedin",
        url: "https://linkedin.com/in/bomanarakasura",
        icon: LinkedinIcon,
    },
    {
        username: "bomsiwor",
        platform: "github",
        url: "https://github.com/bomsiwor",
        icon: GithubIcon,
    },
    {
        username: "bomsiwor",
        platform: "twitter / X",
        url: "https://x.com/bomsiwor",
        icon: TwitterIcon,
    },
    {
        username: "@bomsiwor",
        platform: "medium",
        url: "https://medium.com/@bomsiwor",
        icon: MediumIcon,
    },
    {
        username: "bomsiwor@gmail.com",
        platform: "mail",
        url: "mailto:bomsiwor@gmail.com",
        icon: EmailIcon,
    },
];

export default socials;
