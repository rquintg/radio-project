import styles from "./home.module.css";
import PunkM from "../../img/Logo-Punk-Medallo-2024 Blanco.png";
import RecentTrack from "../../components/recentTrack";
import StaffComponent from "../../components/staffComponent";

export default function Home() {
    return (
        <>
            <div className={styles.homeSection}>
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <img src={PunkM} width="380px" alt="punk medallo"/>
                        <button
                            type="button"
                            className={`btn ${styles.btnRequestSongMobile}`}
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >
                            Pide tu canción
                        </button>
                    </div>
                    <div className={styles.recentTrackWrapper}>
                        <RecentTrack />
                    </div>
                </div>
            </div>
            <StaffComponent/>
        </>
    );
}