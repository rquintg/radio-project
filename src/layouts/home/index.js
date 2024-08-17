import styles from "./home.module.css";
import RecentTrack from "../../components/recentTrack";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
            </div>

                <div className={styles.recentTrackWrapper}>
                    <RecentTrack />
                </div>


        </>
    );
}