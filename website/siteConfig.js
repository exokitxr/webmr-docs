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
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/ExokitLogo.png',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Exokit Documentation' /* title for your website */,
  tagline: 'The fastest and most portable VR/AR browser for developers.',
  url: 'https://exokit.webmr.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'webmr-docs2',
  organizationName: 'webmixedreality',
  cname: 'docs2.webmr.io',
  stylesheets: [
    'https://pro.fontawesome.com/releases/v5.1.0/css/all.css',
  ],
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: '5MinuteGuide', label: 'Docs'},
    {doc: 'APILanding', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
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
    appId: 'RK2PHC0I8T', // if you are running the crawler yourself
    apiKey: '31b405fd1196131ecf05d2c3dd2a0543',
    indexName: 'Docs',
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
  scripts: ['https://buttons.github.io/buttons.js'],

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
