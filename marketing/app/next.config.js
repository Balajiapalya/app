// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,
  env: {
    TEST_VG_HOST: process.env.TEST_VG_HOST,
  },
}
