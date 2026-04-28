import ContactForm from "../../components/contactForm";
import StaffComponent from "../../components/staffComponent";
import GoogleAdsense from "../../components/googleAdsense";
import PageSEO from "../../components/SEO/PageSEO";

import styles from "./contact.module.css";

export default function Contact() {
    const breadcrumbItems = [
        { name: "Inicio", url: "/" },
        { name: "Contacto", url: "/contact" }
    ];

    return (
        <>
            <PageSEO
                title="Contacto - Punk Medallo"
                description="Ponte en contacto con el equipo de Punk Medallo. Envía tus sugerencias, comentarios o consultas sobre nuestra radio punk."
                canonicalPath="/contact"
                breadcrumbItems={breadcrumbItems}
            />
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

