import { Helmet } from 'react-helmet';

/**
 * Componente genérico para SEO en cada página
 * Actualiza dinámicamente: title, description, og tags, canonical y schema
 */
export default function PageSEO({
  title,
  description,
  canonicalPath = "/",
  ogImage = "https://punkmedallo.com/logo_punk_medallo.jpg",
  articleSchema = null,
  breadcrumbItems = null
}) {
  const fullUrl = `https://punkmedallo.com${canonicalPath}`;

  // Schema base para WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullUrl,
    "image": ogImage,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Punk Medallo",
      "url": "https://punkmedallo.com"
    },
    "inLanguage": "es"
  };

  // Si hay schema personalizado, mezclarlo
  const finalSchema = articleSchema ? { ...webPageSchema, ...articleSchema } : webPageSchema;

  return (
    <Helmet>
      <title>{title} | Punk Medallo</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="punk, medellín, música, radio, streaming" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>

      {/* Breadcrumb Schema si existe */}
      {breadcrumbItems && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `https://punkmedallo.com${item.url}`
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}

