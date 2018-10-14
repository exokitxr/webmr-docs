/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Exokit',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/ExokitLogo.png',
    infoLink: 'https://exokit.webmr.io/',
    pinned: true,
  },
  {
    caption: 'Emukit',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/emukit.svg',
    infoLink: 'https://github.com/webmixedreality/emukit',
    pinned: true,
  },
  {
    caption: 'The Expanse',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/expanseLogo.jpg',
    infoLink: 'https://theexpanse.app/',
    pinned: true,
  },
  {
    caption: 'Active Theory',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/activetheory.jpeg',
    infoLink: 'https://xr.activetheory.net/',
    pinned: true,
  }
];

const siteConfig = {
  title: 'Exokit' /* title for your website */,
  tagline: `Post-screen web engine for AR/VR, written in Javascript.`,
  url: 'https://docs.webmr.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'webmr-docs',
  organizationName: 'webmixedreality',
  cname: 'docs.webmr.io',
  stylesheets: [
    'https://pro.fontawesome.com/releases/v5.1.0/css/all.css'
  ],
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://webmr.io/', label: 'Home' },
    {doc: 'exokitEngine', label: 'Docs'},
    {doc: 'SDKLanding', label: 'SDK'},
    {page: 'help', label: 'Help'},
    {href: 'https://webmr.io/blog', label: 'Blog' },
    { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ExokitLogo.png',
  footerIcon: 'img/ExokitLogo.png',
  favicon: 'img/ExokitLogo.png',

  /* colors for website */
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#ffffff',
  },

  algolia: {
    apiKey: '982c937859de6fb51f8adf43ec9a9051',
    indexName: 'exokit',
    inputSelector: '.reactNavSearchWrapper>span',
    algoliaOptions: { 'facetFilters': ["language:en"] },
    debug: true // Set debug to true if you want to inspect the dropdown
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Exokit',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js',
    '/BenchGraph.js',
    'https://www.googletagmanager.com/gtag/js?id=UA-125030796-1',
    '/googleAnalytics.js'
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/ExokitLogo.png',
  twitterImage: 'img/ExokitLogo.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  repoUrl: 'https://github.com/webmixedreality/exokit',
  blogSidebarCount: 'ALL'

};

module.exports = siteConfig;
