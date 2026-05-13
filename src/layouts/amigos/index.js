import styles from "./otros.module.css";
import PageSEO from "../../components/SEO/PageSEO";
// import GoogleAdsense from "../../components/googleAdsense";
import PunkLogo from "../../img/Logo-Punk-Medallo-2024 Blanco.png";

// Import friend page images
import ImaginaccionImg from "../../img/amigos/imaginaccion.png";
import MentesImg from "../../img/amigos/mentes.jpg";
import SotanoImg from "../../img/amigos/sotano.png";

export default function Otros() {
  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Páginas Amigas", url: "/amigos" }
  ];

  const friendPages = [
    {
      id: 1,
      name: "Imaginacción",
      image: ImaginaccionImg,
      url: "https://imaginaccion-medallo.blogspot.com/",
      description: "Blog de arte y cultura alternativa"
    },
    {
      id: 2,
      name: "Mentes en Disturbio",
      image: MentesImg,
      url: "https://www.mentesendisturbio.com/",
      description: "Pensamiento crítico y análisis"
    },
    {
      id: 3,
      name: "El Sótano Fanzine",
      image: SotanoImg,
      url: "https://archive.org/details/@el_s_tano_fanzine",
      description: "Archivo de fanzines independientes"
    }
  ];

  return (
    <>
      <PageSEO
        title="Páginas Amigas - Punk Medallo"
        description="Conecta con nuestras páginas amigas: proyectos independientes y alternativos de Medellín que comparten nuestra filosofía punk."
        canonicalPath="/amigos"
        breadcrumbItems={breadcrumbItems}
      />

      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Páginas Amigas</h1>
            <div className={styles.logoContainer}>
              <img src={PunkLogo} alt="Punk Medallo" className={styles.heroLogo} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentWrapper}>
          {/* Anuncio 1 */}
          {/* <GoogleAdsense
            adSlot="7891234567"
            adFormat="auto"
          /> */}

          {/* Introduction Section */}
          <section className={styles.introSection}>
            <p className={styles.introText}>
              En Punk Medallo creemos en la comunidad y en el apoyo mutuo entre proyectos
              alternativos. Aquí encontrarás las páginas de nuestros compañeros en la lucha
              por mantener viva la contracultura, el arte independiente y el pensamiento crítico.
              ¡Visítalos y apoya sus iniciativas!
            </p>
          </section>

          {/* Friends Grid */}
          <section className={styles.friendsSection}>
            <h2 className={styles.sectionTitle}>Nuestros Aliados</h2>
            <div className={styles.friendsGrid}>
              {friendPages.map((friend) => (
                <div key={friend.id} className={styles.friendCard}>
                  <div className={styles.cardImageContainer}>
                    <img
                      src={friend.image}
                      alt={friend.name}
                      className={styles.cardImage}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={styles.cardOverlay}>
                      <div className={styles.overlayContent}>
                        <p className={styles.overlayText}>Visita</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{friend.name}</h3>
                    <p className={styles.cardDescription}>{friend.description}</p>
                    <a
                      href={friend.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <span>Ver Página</span>
                      <span className={styles.linkArrow}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>¿Tu proyecto es parte de la comunidad punk?</h2>
            <p>
              Si tienes un proyecto independiente o alternativo y te gustaría ser
              parte de nuestra red de páginas amigas, contáctanos.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.btnPrimary}>
                Contacta con Nosotros
              </a>
              <a href="/" className={styles.btnSecondary}>
                Volver al Inicio
              </a>
            </div>
          </section>
        </div>

        {/* Anuncio 2 */}
        {/* <GoogleAdsense
          adSlot="9876543217"
          adFormat="auto"
        /> */}
      </div>
    </>
  );
}
