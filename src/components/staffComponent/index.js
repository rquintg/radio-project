import styles from "./staffComponent.module.css";
import PunkM from "../../img/logo_punk_medallo.jpg";
import Toques from "../../img/toques.webp";
import Blog from "../../img/blog.jpg";

export  default function staffComponent (){
    return(
        <>
            <div className={`${styles.contenedor} ${styles.sombra}`}>
                <h2 style={{fontWeight: 'bold'}}>De interes</h2>

                <div className={styles.servicios}>

                    <div className={styles.servicio}>

                        <a href="https://www.instagram.com/punk.medallo" target="_blank" rel="noopener noreferrer">
                            <h3>Cartelera de Eventos</h3>

                            <div className={styles.iconos}>
                                <img src={Toques} alt="radio ruidosa"/>
                            </div>
                        </a>



                        <p>Siguenos,escucha, apoya y difunde.</p>
                    </div>

                    <div className={styles.servicio}>

                        <a href="https://punk-medallo.blogspot.com/" target="_blank" rel="noopener noreferrer">
                            <h3>Blog</h3>
                            <div className={styles.iconos}>
                                <img src={Blog} alt="punk_en_las_venas"/>
                            </div>
                        </a>

                        <p>Nuevo material disponible para descargar y links actualizados.</p>
                    </div>

                    <div className={styles.servicio}>

                        <a href="https://www.facebook.com/xPUNKMEDALLOx" target="_blank" rel="noopener noreferrer">
                            <h3>Punk Medallo</h3>
                            <div className={styles.iconos}>

                                <img src={PunkM} alt="punk medallo"/>
                            </div>
                        </a>

                        <p>Fuego el regionalismo,las banderas y las fronteras
                            Hacemos memoria de nuestra huella en este lodazal.</p>
                    </div>

                </div>
            </div>
        </>
    )
}