import {Link} from "react-router-dom";

import styles from './notFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Página No Encontrada</h2>
        <p className={styles.errorDescription}>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          Parece que se perdió en el ruido.
        </p>
        <Link to="/" className={styles.homeLink}>Volver al Inicio</Link>
      </div>
    </div>
  );
}