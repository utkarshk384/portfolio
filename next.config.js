/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.scdn.co",
      "media.licdn.com",
      "utkarshk-portfolio-images.s3.ap-southeast-1.amazonaws.com",
    ],
  },

  redirects: async () => {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/tools",
        destination: "/#tools",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
