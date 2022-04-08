/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    SENDGRID_REGISTRATION_KEY: process.env.SENDGRID_REGISTRATION_KEY,
    SENDGRID_SUBMISSIONS_KEY: process.env.SENDGRID_SUBMISSIONS_KEY,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    BASE_ID: process.env.BASE_ID,
    REGISTRATION_TAB: process.env.REGISTRATION_TAB,
    SUBMISSIONS_TAB: process.env.SUBMISSIONS_TAB,
  },
};

module.exports = nextConfig;
