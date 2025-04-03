interface IPartner {
    name: string;
    url: string;
    imagePath: string;
}

const partners: IPartner[] = [
    {
        name: "Politeknik Teknologi Nuklir Indonesia",
        url: "https://polteknuklir.ac.id/",
        imagePath: "/images/partners-logo/logo_poltek.webp",
    },
    {
        name: "Badan Riset & Inovasi Nasional Indonesia",
        url: "https://www.brin.go.id/",
        imagePath: "/images/partners-logo/logo_brin.webp",
    },
    {
        name: "Lembaga Pemilihan Umum Mahasiswa - Poltek Nuklir",
        url: "#",
        imagePath: "/images/partners-logo/logo_lpum.webp",
    },
    {
        name: "PT Awan Berkah Bermartabat",
        url: "https://awanberkahbermartabat.com/",
        imagePath: "/images/partners-logo/logo_abb.webp",
    },
    {
        name: "Klinik Permata Ibu",
        url: "https://www.klinikpermataibu.com/",
        imagePath: "/images/partners-logo/logo_kpi.webp",
    },
    {
        name: "SSCIntersolusi",
        url: "https://ssci.co.id/",
        imagePath: "/images/partners-logo/logo_ssci.webp",
    },
    {
        name: "RSUD Kota Pasuruan",
        url: "https://rsud.pasuruankota.go.id/",
        imagePath: "/images/partners-logo/logo_rsudpas.webp",
    },
];

export default partners;
