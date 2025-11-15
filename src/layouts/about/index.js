import styles from "./about.module.css";
import PunkLogo from "../../img/Logo-Punk-Medallo-2024 Blanco.png";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img src={PunkLogo} alt="Punk Medallo" className={styles.heroLogo} />
          </div>
          {/*<h1 className={styles.heroTitle}>Acerca de</h1>
          <p className={styles.heroSubtitle}>La voz del punk en Medellín</p>*/}
        </div>
      </div>

      {/* About Content */}
      <div className={styles.contentWrapper}>
        {/* Mission Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Historia</h2>
              <p className={styles.sectionText}>
                  Punk Medallo no es regionalista ni ninguna de esas casualidades por la que se colectivizan falsamente
                  algunos. Punk Medallo reúne las bandas provenientes de Medellín, por que las situaciones que
                  confluyeron en los 80´s particularmente en esta parte del mapa, hicieron posible un estilo
                  contestatario frente a esas situaciones sobretodo en su discurso (letras) pero también en la música de
                  agresión estética; que luego se convertirían en factores identitarios del punk de Medellín por el
                  que se conocería en el resto de colombia y del mundo. Por lo tanto, Punk Medallo encuentra su
                  identidad en la expresión de autorreconocimento de los jóvenes de ésa y esta época, ligada a las
                  situaciones comunes, al gusto musical y a la camaradería (llámense parches o combos) y no en el
                  regionalismo coincidencialmente marica.<br/><br/>

                  Este blog acuñó un término con el que se titularon 3
                  recopilaciones de punk en los años 80's y 90's que recogían toda la producción musical que en ese
                  momento se había realizado, de forma autogestionada, en la ciudad de Medellín: "PUNK MEDALLO CON LAS
                  UÑAS (Vol I)", "EL CARTEL PUNK DE MEDELLÍN (Vol II)", "RUIDO DE CLOACAS (Vol III)". Este término fue
                  adquiriendo una connotación extensiva que, en definidas cuentas, resumía el punk producido o gritado
                  desde Medellín. Punk Medallo (el blog) es el intento por recuperar el mensaje de los k7's
                  ("obsoletos" y casi perdidos) de aquel entonces y los mensajes del punk de ahora.
              </p>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Promovemos</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎸</div>
              <h3>Autenticidad</h3>
              <p>música Under ground y genuina sin compromisos comerciales.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎤</div>
              <h3>Libertad de Expresión</h3>
              <p>Damos voz a artistas independientes y sus ideas revolucionarias.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎵</div>
              <h3>Comunidad</h3>
              <p>Construimos una comunidad activa por la música.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Rebeldía</h3>
              <p>Desafiamos lo establecido y celebramos el espíritu inconformista.</p>
            </div>
          </div>
        </section>

        {/* History Section */}
        {/*<section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
            <p className={styles.sectionText}>
              Nacida del corazón punk de Medellín, Punk en las Venas surge como respuesta
              a la necesidad de un espacio digital donde la música alternativa y el rock
              independiente encuentren su hogar. Desde nuestros inicios, hemos trabajado
              incansablemente para conectar con nuestra audiencia y apoyar a los artistas
              locales que definen el sonido de la ciudad.
            </p>
          </div>
        </section>*/}

        {/* What We Offer Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Qué Encuentras</h2>
          <div className={styles.offersList}>
            <div className={styles.offerItem}>
              <span className={styles.offerIcon}>📻</span>
              <div>
                <h3>Transmisión en Vivo</h3>
                <p>Disfruta de transmisiones las 24/7 con contenido punk y alternativo.</p>
              </div>
            </div>
            {/*<div className={styles.offerItem}>
              <span className={styles.offerIcon}>🎧</span>
              <div>
                <h3>Canciones Recientes</h3>
                <p>Mantente actualizado con las últimas canciones en reproducción en tiempo real.</p>
              </div>
            </div>*/}
            <div className={styles.offerItem}>
              <span className={styles.offerIcon}>📝</span>
              <div>
                <h3>Blog de Contenido</h3>
                <p>Lee artículos sobre música, artistas locales y eventos punk.</p>
              </div>
            </div>
            {/*<div className={styles.offerItem}>
              <span className={styles.offerIcon}>🎵</span>
              <div>
                <h3>Solicitud de Canciones</h3>
                <p>Solicita tus canciones favoritas y sé parte de nuestra programación.</p>
              </div>
            </div>*/}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>¿Listo para escuchar?</h2>
          <p>Únete a nuestra comunidad y sé parte del movimiento punk.</p>
          <div className={styles.ctaButtons}>
            <a href="/" className={styles.btnPrimary}>Ir a Inicio</a>
            <a href="/blog" className={styles.btnSecondary}>Leer Blog</a>
          </div>
        </section>
      </div>
    </div>
  );
}