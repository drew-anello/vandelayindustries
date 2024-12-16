/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

config.images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'vandelay-assets.s3.us-east-1.amazonaws.com',
            port: '',
            pathname: '/**',
            search: '',
        },
    ],
};
export default config;