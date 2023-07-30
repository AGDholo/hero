// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HeroUI',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://heroui.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        async function tailwindcssPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
            },
            // Replace with your project's social card
            navbar: {
                title: 'HeroUI',
                logo: {
                    alt: 'HeroUI Logo',
                    src: 'img/favicon.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        position: 'right',
                        label: '开发指南',
                        sidebarId: 'developmentGuideSidebar',
                    },
                    {
                        type: 'docSidebar',
                        position: 'right',
                        label: ' ThinkPHP5.1 入门',
                        sidebarId: 'thinkPhp51PrimerSidebar',
                    },
                    {
                        type: 'docSidebar',
                        position: 'right',
                        label: 'Vuetify2 技巧',
                        sidebarId: 'vuetify2TricksSidebar',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
