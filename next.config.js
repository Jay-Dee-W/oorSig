const relayConfig = require('./relay.config.js');
const withPlugins = require('next-compose-plugins');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const moduleExports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  })
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: relayConfig.src,
      artifactDirectory: relayConfig.artifactDirectory,
      language: relayConfig.language,
    },
  },
};

module.exports = withPlugins([moduleExports], nextConfig);
