import ContactForm from "../../components/contactForm";
import StaffComponent from "../../components/staffComponent";

import styles from "./contact.module.css";

export default function Contact() {
    return (
        <>
            <div className={styles.container_background}>
                <ContactForm />
            </div>
            <StaffComponent />
        </>
    );
}