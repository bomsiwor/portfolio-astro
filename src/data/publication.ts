interface IPublication {
    name: string;
    title: string;
    publisher: string;
    DOI: string;
    publishedAt: string;
    url: string;
}

const publications: IPublication[] = [
    {
        name: "2ND INTERNATIONAL CONFERENCE SERIES ON SCIENCE, ENGINEERING, AND TECHNOLOGY (ICSSET) 2022",
        title: "Implementation interoperability for application prototype development of nuclear instrumentation laboratory information system of Poltek Nuklir using Laravel Framework and REST API",
        publisher: "American Institue of Physics",
        DOI: "https://doi.org/10.1063/5.0218782",
        publishedAt: "July 24, 2024",
        url: "https://pubs.aip.org/aip/acp/article-abstract/3167/1/030009/3304534/Implementation-interoperability-for-application?redirectedFrom=fulltext",
    },
];
