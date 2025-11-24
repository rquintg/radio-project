import styles from "./contactForm.module.css";
import Swal from 'sweetalert2'

export default function ContactForm() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Exito!",
                text: "Tu mensaje ha sido enviado!",
                icon: "success",
                background: '#19191a',
                color: '#fff'
            });
        }
    };

    return (
        <>
            <div className={styles.contact}>
                <form className={styles.contactForm} onSubmit={onSubmit}>
                    <h2>Contacto</h2>
                    <div className={styles.inputBox}>
                        <label>Nombre</label>
                        <input className={styles.field} type="text" placeholder="Escribe tu Nombre" name="name" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Correo</label>
                        <input className={styles.field} type="email" placeholder="Escribe tu correo" name="email" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Mensaje</label>
                        <textarea name="message"  className={`${styles.field} ${styles.mess}`}
                                  placeholder="Escribe tu mensaje" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}