import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

/**
 * Componente genérico para SEO en cada página
 * Actualiza dinámicamente: title, description, og tags, canonical y schema
 * Combina React Helmet con actualización directa del DOM para máxima confiabilidad
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

  // Actualizar directamente el DOM para garantizar cambios inmediatos
  useEffect(() => {
    // Actualizar title
    document.title = `${title} | Punk Medallo`;

    // Helper para actualizar o crear meta tags
    const updateOrCreateMeta = (nameOrProperty, content, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${nameOrProperty}"]`
        : `meta[name="${nameOrProperty}"]`;

      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', nameOrProperty);
        } else {
          meta.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Actualizar meta tags
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', 'punk, medellín, música, radio, streaming');

    // Open Graph
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:url', fullUrl, true);
    updateOrCreateMeta('og:image', ogImage, true);
    updateOrCreateMeta('og:image:width', '1200', true);
    updateOrCreateMeta('og:image:height', '630', true);
    updateOrCreateMeta('og:image:type', 'image/jpeg', true);
    updateOrCreateMeta('og:type', 'website', true);

    // Twitter
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', ogImage);

    // Actualizar canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

  }, [title, description, fullUrl, ogImage]);

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

  const finalSchema = articleSchema ? { ...webPageSchema, ...articleSchema } : webPageSchema;

  const breadcrumbSchema = breadcrumbItems ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://punkmedallo.com${item.url}`
    }))
  } : null;

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
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
