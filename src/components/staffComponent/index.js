import styles from "./staffComponent.module.css";
import PunkM from "../../img/logo_punk_medallo.jpg";
import PunkV from "../../img/punk_en_las_venas.png";
import RadioR from "../../img/lsdradio.jpeg";

export  default function staffComponent (){
    return(
        <>
            <div className={`${styles.contenedor} ${styles.sombra}`}>
                <h2 style={{fontWeight: 'bold'}}>Staff</h2>

                <div className={styles.servicios}>

                    <div className={styles.servicio}>

                        <a href="https://www.facebook.com/punkenlasvenas1" target="_blank" rel="noopener noreferrer">
                            <h3>Punk en las Venas</h3>
                            <div className={styles.iconos}>
                                <img src={PunkV} alt="punk_en_las_venas"/>
                            </div>
                        </a>

                        <p>Apoyando la escena punk nacional colombiana </p>
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

                    <div className={styles.servicio}>
                        <h3>Auspiciado por</h3>

                        <div className={styles.iconos}>
                            <img src={RadioR} alt="radio ruidosa"/>
                        </div>

                        <p>Escucha, apoya y difunde.</p>
                    </div>
                </div>
            </div>
        </>
    )
}