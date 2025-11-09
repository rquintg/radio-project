import styles from "./recentTrack.module.css";
import SpinnerLoader from "../util/spinnerLoader";

export default function recentTrack() {
    return (
        <div className={styles.container}>
            <h6 className={styles.title}>Esta Sonando</h6>
            <div className="cc_recenttracks_list" data-username="demo">
                <SpinnerLoader/>
            </div>
        </div>
    );
}