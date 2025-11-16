import styles from "./recentTrack.module.css";
import SpinnerLoader from "../util/spinnerLoader";
import { useEffect, useRef, useState } from "react";

const CACHE_KEY_HTML = "cc_recenttracks_cache_html";
const CACHE_KEY_TIME = "cc_recenttracks_cache_time";
const CACHE_TTL_MS = 180000; // 3 minutos

export default function RecentTrack() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attempt, setAttempt] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        const target = listRef.current;
        if (!target) return;

        const cached = sessionStorage.getItem(CACHE_KEY_HTML);
        const cachedTimeStr = sessionStorage.getItem(CACHE_KEY_TIME);
        const cachedTime = cachedTimeStr ? parseInt(cachedTimeStr, 10) : null;
        const cacheFresh = Boolean(cached && cachedTime && Date.now() - cachedTime < CACHE_TTL_MS);

        // Mostrar cache mientras carga el nuevo contenido
        if (cacheFresh) {
            console.info("[RecentTrack] Mostrando cache fresco mientras se recarga.");
            target.innerHTML = cached;
        } else {
            target.innerHTML = "";
        }

        setLoading(true);
        setError(null);

        // Observa cuando el script inyecte contenido en el contenedor
        let hasContent = false;
        const observer = new MutationObserver(() => {
            if (target && target.childNodes && target.childNodes.length > 0 && !hasContent) {
                hasContent = true;
                console.log("[RecentTrack] Contenido detectado en contenedor");
                setLoading(false);
                setError(null);
                const now = Date.now();
                try {
                    sessionStorage.setItem(CACHE_KEY_HTML, target.innerHTML);
                    sessionStorage.setItem(CACHE_KEY_TIME, now.toString());
                } catch (e) {
                    console.warn("[RecentTrack] No se pudo guardar cache:", e);
                }
                observer.disconnect();
                console.info("[RecentTrack] Lista reciente actualizada correctamente.");
            }
        });
        observer.observe(target, { childList: true, subtree: true, characterData: true });

        // Crear timestamp único para evitar caché del navegador
        const stamp = Date.now();
        const scriptUrl = `https://castdemo.centova.com:2199/system/recenttracks.js?nocache=${stamp}`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.setAttribute("data-cc", `recenttracks-dynamic-${stamp}`);

        let retryAttempts = 0;
        const maxRetries = 2;

        const retryTimer = setTimeout(() => {
            if (target && target.childNodes && target.childNodes.length === 0 && retryAttempts < maxRetries && !hasContent) {
                retryAttempts++;
                console.warn("[RecentTrack] Reintento automático de carga de script.");
                const retryUrl = `https://castdemo.centova.com:2199/system/recenttracks.js?nocache=${Date.now()}`;
                const retry = document.createElement("script");
                retry.src = retryUrl;
                retry.async = true;
                retry.setAttribute("data-cc", `recenttracks-dynamic-retry-${stamp}`);
                document.body.appendChild(retry);
            }
        }, 8000);

        const failTimer = setTimeout(() => {
            if (target && target.childNodes && target.childNodes.length === 0 && !hasContent) {
                observer.disconnect();
                setLoading(false);
                setError("No se pudo cargar la lista reciente. Intenta de nuevo.");
                console.warn("[RecentTrack] Timeout de carga; mostrando mensaje de error.");
            }
        }, 15000);

        document.body.appendChild(script);

        return () => {
            observer.disconnect();
            clearTimeout(retryTimer);
            clearTimeout(failTimer);
            // Limpiar scripts inyectados
            document
                .querySelectorAll('script[data-cc^="recenttracks-dynamic-"]')
                .forEach((s) => {
                    if (s && s.parentNode) {
                        s.parentNode.removeChild(s);
                    }
                });
        };
    }, [attempt]);

    const handleRetry = () => {
        setError(null);
        setLoading(true);
        setAttempt((a) => a + 1);
    };

    return (
        <div className={styles.container}>

                <h6 className={styles.title} style={{ margin: 0 }}>Esta Sonando</h6>

            {loading && (
                <div style={{ marginTop: 8 }}>
                    <SpinnerLoader />
                </div>
            )}
            {error && (
                <div style={{ marginTop: 8 }}>
                    <p style={{ color: "#ff6b6b", margin: 0 }}>{error}</p>
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        style={{ marginTop: 6 }}
                        onClick={handleRetry}
                    >
                        Reintentar
                    </button>
                </div>
            )}
            <div ref={listRef} className="cc_recenttracks_list" data-username="demo" />
        </div>
    );
}