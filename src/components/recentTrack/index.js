import styles from "./recentTrack.module.css";

export default function recentTrack() {
    return (
        <div className={styles.container}><h1>Recent Tracks</h1>
            <div className="cc_recenttracks_list" data-username="demo">Cargando ...</div>
            {/* Aquí puedes agregar la lista de canciones recientes */}
        </div>
    );
}