// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Borr Project',
  tagline: 'Empowering learners to master college curricula through free resources!',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: 'https://borrproject.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BorrProject', // Usually your GitHub org/user name.
  projectName: 'borrproject.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        docsRouteBasePath: ['computer-science', 'precollege-math', 'data-science', 'math'],
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BorrProject/borrproject.github.io/edit/main/',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BorrProject/borrproject.github.io/edit/main/',
          blogTitle: 'Borr Project',
          blogDescription: 'The Borr Project Blog.',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-8J0Q85NP5N',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  
  plugins: [require.resolve("docusaurus-plugin-image-zoom"),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        injectManifestConfig: {
          globPatterns: ['**/*.{webp}'],
        },
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/borr.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(255, 255, 255)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/borr.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/borr.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/borr.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
//       algolia: {
//        appId: '',
//        apiKey: '',
//        indexName: '',
//      },
      // Replace with your project's social card
      image: 'img/borr-social-card.webp',
      zoom: {},
      navbar: {
        hideOnScroll: true,
        title: 'The Borr Project',
        // logo: {
        //   alt: 'VirtualHub Logo',
        //   src: 'img/logo.webp',
        // },
        items: [
          {
            type: 'dropdown',
            label: 'Curricula',
            position: 'left',
            items: [
              {to: '/computer-science', label: 'Computer Science'},
              {to: '/precollege-math', label: 'Pre-College Math'},
              {to: '/data-science', label: 'Data Science'},
              {to: '/math', label: 'Math'},
            ],
          },
          {to: '/getting-help', label: 'Getting Help'},
          {to: '/blog', label: 'Blog'},
          {to: '/start-here', label: 'Your Progress', position: 'right'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/BorrProject/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://www.youtube.com/@borrproject',
            position: 'right',
            className: 'header-youtube-link',
            'aria-label': 'Youtube Channel',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} The Borr Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'ini',
        ],
      },
    }),
};

export default config;
