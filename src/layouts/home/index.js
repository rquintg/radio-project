import styles from "./home.module.css";
import PunkM from "../../img/Logo-Punk-Medallo-2024 Blanco.png";
import RecentTrack from "../../components/recentTrack";
import StaffComponent from "../../components/staffComponent";
import GoogleAdsense from "../../components/googleAdsense";

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
                    {/* Anuncio 1 - Arriba del historial */}
                    <GoogleAdsense
                        adSlot="1234567890"
                        adFormat="auto"
                    />
                    <div className={styles.recentTrackWrapper}>
                        <RecentTrack />
                    </div>
                </div>
            </div>
            {/* Anuncio 2 - Entre el footer y el staff component */}
            <GoogleAdsense
                adSlot="9876543210"
                adFormat="auto"
            />
            <StaffComponent/>
        </>
    );
}

