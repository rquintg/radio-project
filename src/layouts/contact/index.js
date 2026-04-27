import ContactForm from "../../components/contactForm";
import StaffComponent from "../../components/staffComponent";
import GoogleAdsense from "../../components/googleAdsense";

import styles from "./contact.module.css";

export default function Contact() {
    return (
        <>
            <div className={styles.container_background}>
                <ContactForm />
            </div>
            {/* Anuncio entre formulario y staff */}
            <GoogleAdsense
                adSlot="5678901234"
                adFormat="auto"
            />
            <div className={styles.contenedor_staff}>
                <StaffComponent />
            </div>
        </>
    );
}

