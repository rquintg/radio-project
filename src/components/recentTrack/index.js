import styles from "./recentTrack.module.css";

export default function recentTrack() {
    return (
        <div className={styles.container}>
            <div className="cc_recenttracks_list" data-username="demo">Cargando ...</div>
            {/* Aquí puedes agregar la lista de canciones recientes */}
        </div>
    );
}