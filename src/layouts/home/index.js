import {Suspense, lazy} from "react";
import StaffComponent from "../../components/staffComponent";
import GoogleAdsense from "../../components/googleAdsense";
import PageSEO from "../../components/SEO/PageSEO";

import styles from "./home.module.css";
import PunkM from "../../img/Logo-Punk-Medallo-2024 Blanco.png";

const RecentTrack = lazy(() => import("../../components/recentTrack"));

export default function Home() {
    const breadcrumbItems = [
        { name: "Inicio", url: "/" }
    ];

    return (
        <>
            <PageSEO
                title="Punk Medallo - Radio 24/7 de puro punk"
                description="Lo más grotesco, viejo, perdido en el tiempo y nuevo del punk local en un solo lugar"
                canonicalPath="/"
                ogImage="https://punkmedallo.com/logo_punk_medallo.jpg"
                breadcrumbItems={breadcrumbItems}
            />
            <div className={styles.homeSection}>
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <h1 className={styles.homeTitle}>Punk Medallo</h1>
                        <img src={PunkM} width="380px" alt="punk medallo" loading="lazy" decoding="async" />
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
                    {/*<GoogleAdsense
                        adSlot="1234567890"
                        adFormat="auto"
                    />*/}
                    <Suspense fallback={<div className={styles.recentTrackWrapper}></div>}>
                        <div className={styles.recentTrackWrapper}>
                            <RecentTrack />
                        </div>
                    </Suspense>
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

