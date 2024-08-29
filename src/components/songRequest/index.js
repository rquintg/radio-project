import {useEffect} from 'react';

import '../../util.css';

export default function SongRequest() {

    useEffect(() => {
        const resultDiv = document.querySelector('[data-type="result"]');

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.target.textContent.includes('Your song request has been submitted')) {
                    mutation.target.textContent = 'Tu solicitud de canción ha sido enviada - ¡gracias!';
                } else if(mutation.type === 'childList' && mutation.target.textContent.includes('Sorry, your song request could not be submitted at this time.')) {
                    mutation.target.textContent = 'Lo siento, tu solicitud de canción no pudo ser enviada en este momento.';
                }
            });
        });

        observer.observe(resultDiv, { childList: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/*Modal*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Solicitar Cancion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="cc_request_form  cc_request_f" data-username="demo">
                                <div data-type="result"></div>
                                Banda:* <input type="text" name="request[artist]" size="40" maxLength="127"/><br/>
                                Cancion:* <input type="text" name="request[title]" size="40" maxLength="127"/><br/>
                                Tu e-mail:* <input type="text" name="request[email]" size="40" maxLength="127"/><br/>
                                Dedicado a: <input type="text" name="request[dedication]" size="40"
                                                     maxLength="127"/><br/>
                                Tu nombre: <input type="text" name="request[sender]" size="40" maxLength="127"/><br/>
                                <input type="button" value="Solicitar" data-type="submit"/><br/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover"
                                  data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                            <button className="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}