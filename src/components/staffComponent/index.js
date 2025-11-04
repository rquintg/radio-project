import styles from "./staffComponent.module.css";
import PunkM from "../../img/logo_punk_medallo.jpg";
import PunkV from "../../img/punk_en_las_venas.png";
import RadioR from "../../img/radio_ruid.png";

export  default function staffComponent (){
    return(
        <>
            <div className={`${styles.contenedor} ${styles.sombra}`}>
                <h2 style={{fontWeight: 'bold'}}>Staff</h2>

                <div className={styles.servicios}>
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

                        <a href="https://www.facebook.com/punkenlasvenas1" target="_blank" rel="noopener noreferrer">
                            <h3>Punk en las Venas</h3>
                            <div className={styles.iconos}>
                                <img src={PunkV} alt="punk_en_las_venas"/>
                            </div>
                        </a>

                        <p>Proyecto que comenzó desde el año 2008, apoyando la escena punk nacional colombiana </p>
                    </div>

                    <div className={styles.servicio}>
                        <h3>Radio Ruidosa</h3>

                        <div className={styles.iconos}>
                            <img src={RadioR} alt="radio ruidosa"/>
                        </div>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti tempore,
                            nam asperiores.</p>
                    </div>
                </div>
            </div>
        </>
    )
}