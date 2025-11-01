import styles from './footer.module.css'

export default function Footer() {

    const ahora = new Date();
    const mesYanio = Intl.DateTimeFormat('es-ES', { month: 'short', year: 'numeric' }).format(ahora);

    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>© {mesYanio} - All Rights Reserved</p>
            </div>
        </footer>
    );
}