import { Helmet } from 'react-helmet';

/**
 * Componente para definir la estructura de navegación en Schema.org
 * Esto ayuda a Google a entender la jerarquía del sitio
 * y mostrar "sitelinks" en los resultados de búsqueda
 */
export default function SiteNavigationSchema() {
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Punk Medallo",
    "url": "https://punkmedallo.com",
    "logo": "https://punkmedallo.com/logo_punk_medallo.jpg",
    "description": "Lo más grotesco, viejo, perdido en el tiempo y nuevo del punk local en un solo lugar, Radio 24/7",
    "sameAs": [
      "https://www.facebook.com/punkmedallo",
      "https://www.instagram.com/punkmedallo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-301-4453392",
      "contactType": "customer support",
      "availableLanguage": "es"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Punk Medallo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Radio en Vivo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Descargar Música"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solicitar Canciones"
          }
        }
      ]
    }
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Navegación Principal",
    "url": "https://punkmedallo.com",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Inicio",
        "url": "https://punkmedallo.com/"
      },
      {
        "@type": "WebPage",
        "name": "Acerca de",
        "url": "https://punkmedallo.com/about"
      },
      {
        "@type": "WebPage",
        "name": "Toques",
        "url": "https://punkmedallo.com/eventos"
      },
      {
        "@type": "WebPage",
        "name": "Descargas",
        "url": "https://punkmedallo.com/descargas"
      },
      {
        "@type": "WebPage",
        "name": "Registro Fotográfico",
        "url": "https://punkmedallo.com/fotos"
      },
      {
        "@type": "WebPage",
        "name": "Contacto",
        "url": "https://punkmedallo.com/contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(navigationSchema)}
      </script>
    </Helmet>
  );
}

