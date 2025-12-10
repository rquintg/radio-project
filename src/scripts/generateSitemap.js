const fs = require('fs');
const path = require('path');

const DOMAIN = process.env.REACT_APP_DOMAIN || 'https://punkmedallo.com';

// Define tus rutas con metadata
const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/descargas', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  { path: '/about', changefreq: 'monthly', priority: 0.7 },
  { path: '/fotos', changefreq: 'daily', priority: 0.8 },
];

const generateSitemap = () => {
  const urls = routes
    .map(route => {
      return `    <url>
        <loc>${DOMAIN}${route.path}</loc>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('✓ Sitemap generado en:', outputPath);
};

generateSitemap();