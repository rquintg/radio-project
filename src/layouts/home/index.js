import styles from "./home.module.css";
import PunkM from "../../img/Logo-Punk-Medallo-2024 Blanco.png";
import RecentTrack from "../../components/recentTrack";
import PunkPlayer from "../../components/webPlayer";
import StaffComponent from "../../components/staffComponent";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <img src={PunkM} width="380px" alt="punk medallo"/>
                </div>
                <div className={styles.recentTrackWrapper}>
                    <RecentTrack />
                </div>
            </div>
            <PunkPlayer/>
            <StaffComponent/>
        </>
    );
}