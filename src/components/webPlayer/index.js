import styles from "./webPlayer.module.css";

export default function WebPlayer() {
    return (
        <div className="container">

            <div className={styles.cont}>
                <audio controls autoPlay>
                    <source src="https://lsdradiohostserver.com/listen/punk_hc/radio.mp3" type="audio/mpeg"/>
                    Tu navegador no soporta este elemento
                </audio>
            </div>


        </div>
    )
}