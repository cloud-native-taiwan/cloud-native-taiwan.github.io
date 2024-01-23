// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Native Taiwan User Group',
  tagline: '加入雲端原生台灣社群',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cloudnative.tw',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloud-native-taiwan', // Usually your GitHub org/user name.
  projectName: 'cloud-native-taiwan.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cntug-logo-wide.png',
      navbar: {
        title: 'Cloud Native Taiwan User Group',
        logo: {
          alt: 'CNTUG Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: '關於我們',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: '相關專案',
          },
          {
            type: 'docSidebar',
            sidebarId: 'meetupSidebar',
            position: 'left',
            label: '過往活動',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cloud-native-taiwan/cloud-native-taiwan.github.io',
            label: 'GitHub',
            position: 'right',
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
                label: '關於我們',
                to: '/docs/intro',
              },
              {
                label: 'Call for Proposals',
                to: '/docs/cfp/cfp-en',
              }
            ],
          },
          {
            title: 'CNTUG 社群',
            items: [
              {
                label: 'CNTUG 官方網站',
                href: 'https://cloudnative.tw/',
              },
              {
                label: 'Facebook 社團',
                href: 'https://fb.cloudnative.tw/',
              },
              {
                label: 'Telegram 群組',
                href: 'https://t.me/cntug',
              },
              {
                label: 'YouTube 頻道',
                href: 'https://youtube.com/@cloudnativetaiwanusergroup',
              },
              {
                label: '成為 CNCF Community 會員',
                href: 'https://community.cncf.io/cloud-native-taiwan-user-group/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Icon License',
                to: '/icon-license',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cloud-native-taiwan/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cloud Native Taiwan User Group, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
