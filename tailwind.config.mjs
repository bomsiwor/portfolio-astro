/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                bricol: ["Bricolage Grotesque", "serif"],
                pixel: ["Pixelify Sans", "sans-serif"],
            },
            colors: {
                lighter: {
                    50: "#fef2f2",
                    100: "#ffe1e1",
                    200: "#ffcbcb",
                    300: "#fea3a3",
                    400: "#fb6e6e",
                    500: "#f24141",
                    600: "#e02222",
                    700: "#bc1919",
                    800: "#9b1919",
                    900: "#811b1b",
                    950: "#460909",
                },
                primary: {
                    50: "#fef2f2",
                    100: "#ffe1e1",
                    200: "#ffc8c8",
                    300: "#ffb1b1",
                    400: "#fd6c6c",
                    500: "#f53e3e",
                    600: "#e22020",
                    700: "#be1717",
                    800: "#9d1717",
                    900: "#821a1a",
                    950: "#470808",
                },
                secondary: {
                    50: "#f2f9fd",
                    100: "#e3f1fb",
                    200: "#c1e4f6",
                    300: "#8aceef",
                    400: "#4cb6e4",
                    500: "#259dd2",
                    600: "#1679ab",
                    700: "#146590",
                    800: "#145578",
                    900: "#164764",
                    950: "#0f2e42",
                },
                darker: {
                    50: "#edf9ff",
                    100: "#d7f0ff",
                    200: "#b8e6ff",
                    300: "#88d8ff",
                    400: "#50c0ff",
                    500: "#27a1ff",
                    600: "#1082ff",
                    700: "#096aec",
                    800: "#0f55be",
                    900: "#134a95",
                    950: "#102c57",
                },
                catpuccin: {
                    base: "#303446",
                    mantle: "#1e2030",
                    crust: "#181926",
                    "surface-0": "#363a4f",
                    "surface-1": "#494d64",
                    "surface-2": "#5b6078",
                    "overlay-0": "#6e738d",
                    "overlay-1": "#8087a2",
                    "overlay-2": "#939ab7",
                    "subtext-0": "#a5adcb",
                    "subtext-1": "#b8c0e0",
                    text: "#cad3f5",
                    lavender: "#b7bdf8",
                    blue: "#8aadf4",
                    sapphire: "#7dc4e4",
                    sky: "#91d7e3",
                    teal: "#8bd5ca",
                    green: "#a6da95",
                    yellow: "#eed49f",
                    peach: "#f5a97f",
                    maroon: "#ee99a0",
                    red: "#ed8796",
                    mauve: "#c6a0f6",
                    pink: "#f5bde6",
                    flamingo: "#f0c6c6",
                    rosewater: "#f4dbd6",
                },
            },
            animation: {
                "light-rise": "light-rise 8s ease-out infinite",
            },
            keyframes: {
                "light-rise": {
                    "0%, 100%": { translate: "0 0" },
                    "50%": { translate: "100vw 500px", scale: "150%" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
