import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pagina-2", // <--- CAMBIA ESTO PARA QUE DIGA 'pagina-2'
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
