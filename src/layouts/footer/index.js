import styles from "./footer.module.css";

export default function Footer() {
  const ahora = new Date();
  const mesYanio = Intl.DateTimeFormat("es-ES", {
    month: "short",
    year: "numeric",
  }).format(ahora);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Punk Medallo</h3>
          <p className={styles.footerDescription}>
            Transmisión 24/7 de puro punk, hardcore y alternativo. Pirateamos el
            sistema, una canción a la vez.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Enlaces</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Redes Sociales</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com/xPUNKMEDALLOx"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/punk.medallo"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/punkmedallo"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {ahora.getFullYear()} Punk Medallo - Todos los derechos reservados
        </p>
        <p className={styles.credit}>
          Desarrollado por <strong>Ricardo Q</strong> | Actualizado en{" "}
          {mesYanio}
        </p>
      </div>
    </footer>
  );
}
