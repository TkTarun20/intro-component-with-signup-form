/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        colors: {
            white: "#ffffff",
            black: "#000000",
            transparent: "transparent",
            red: "#ff7a7a",
            green: "#38cc8c",
            blue: "#6055a5",
            "dark-blue": "#3e3c49",
            "grayish-blue": "#b9b6d3",
        },
        fontSize: {
            xs: 'clamp(0.625rem, 0.5809859154929577rem + 0.18779342723004694vw, 0.75rem)', // 10-12
            sm: 'clamp(0.875rem, 0.8309859154929577rem + 0.18779342723004694vw, 1rem)', // 14-16
            md: 'clamp(1rem, 0.9559859154929577rem + 0.18779342723004694vw, 1.125rem)', // 16-18
            lg: 'clamp(1.5rem, 1.0598591549295775rem + 1.8779342723004695vw, 2.75rem)', // 24-44
        },
        lineHeight: {
            1.2: '1.2',
            1.3: '1.3',
            1.6: '1.6',
            1.8: '1.8'
        },
        fontWeight: {
            regular: "400",
            medium: "500",
            'semi-bold': "600",
            bold: "700",
        },
        screens: {
            'm-xs': {max: '18.75em'}, // (max-width: 300px)
            sm: '37.5em', // (min-width: 600px)
            lg: '64em', // (min-width: 1024px)
        },
        extend: {},
    },
    plugins: [],
};
