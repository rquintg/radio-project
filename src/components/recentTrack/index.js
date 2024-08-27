import styles from "./recentTrack.module.css";

export default function recentTrack() {
    return (
        <div className={styles.container}>
            <div className="cc_recenttracks_list" data-username="demo">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
}