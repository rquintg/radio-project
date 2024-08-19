import styles from "./home.module.css";
import RecentTrack from "../../components/recentTrack";
import Footer from "../footer";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.modal}>Radio</h1>
                <div className={styles.recentTrackWrapper}>
                    <RecentTrack />
                </div>
            </div>

            <Footer />
        </>
    );
}