/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    darkMode: ['class', '[data-theme="dark"]'],
}


