// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,
  env: {
    VG_DASHBOARD_HOST: process.env.VG_DASHBOARD_HOST
  },
}
