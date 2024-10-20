import styles from "./webPlayer.module.css";

export default function WebPlayer() {
    return (
        <div className="container">

            <div className={styles.cont}>
                <audio controls autoPlay>
                    <source src="https://stream10.usastreams.com/9316/stream" type="audio/mpeg"/>
                    Tu navegador no soporta este elemento
                </audio>
            </div>


        </div>
    )
}