/*
Author: Azmat Zuberi
Date: Feb. 27, 2023
App Name: AgencyAnalytics - Code Challenge
*/

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  compilerOptions: {
    plugins: [{ "name": "typescript-plugin-css-modules" }]
  },
  output: 'standalone'
}


module.exports = nextConfig