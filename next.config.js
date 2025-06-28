/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) On demande à Next d’exporter un site statique
  output: 'export',

  // 2) GitHub Pages héberge ton site dans https://<user>.github.io/<repo>/
  //    Il faut donc indiquer ce "sous-chemin" à Next :
  basePath: '/HanaPortfolio',        // <-- nom de ton dépôt
  assetPrefix: '/HanaPortfolio',

  // 3) Les optimisations d’images Next ne fonctionnent pas sans serveur Node
  images: { unoptimized: true },

  // 4) (facultatif) Ajoute ceci si tu veux que chaque URL finisse par un slash
  trailingSlash: true,
};

module.exports = nextConfig;
