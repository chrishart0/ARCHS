/** @type {import('next-sitemap').IConfig} */

// https://www.npmjs.com/package/next-sitemap

module.exports = {
  siteUrl: process.env.SITE_URL || "https://thelocalegg.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
