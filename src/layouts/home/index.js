import styles from "./home.module.css";
import PunkM from "../../img/Logo-Punk-Medallo-2024 Blanco.png";
import RecentTrack from "../../components/recentTrack";
import StaffComponent from "../../components/staffComponent";
import GoogleAdsense from "../../components/googleAdsense";
import PageSEO from "../../components/SEO/PageSEO";

export default function Home() {
    const breadcrumbItems = [
        { name: "Inicio", url: "/" }
    ];

    return (
        <>
            <PageSEO
                title="Punk Medallo - Radio 24/7 del Punk en Medellín"
                description="Transmisión en vivo 24/7 con lo más grotesco, viejo, perdido en el tiempo y nuevo del punk local. Escucha, pide canciones y únete a la comunidad punk de Medellín."
                canonicalPath="/"
                breadcrumbItems={breadcrumbItems}
            />
            <div className={styles.homeSection}>
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: '#fff'}}>Punk Medallo</h1>
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

