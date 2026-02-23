import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ¡ESTO ES LO MÁS IMPORTANTE! Crea archivos HTML/CSS puros
  basePath: "/fundacion-edubilingue", // Pon exactamente el nombre de tu repositorio en GitHub
  images: {
    unoptimized: true, // GitHub Pages no puede optimizar imágenes automáticamente
  },
};

export default nextConfig;
