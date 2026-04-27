import '../../util/css/util.css';
import './songRequest.css';

export default function SongRequest() {
    // URL del widget de solicitud de canciones de AzuraCast
    // El widget es responsable de manejar todo el formulario y la lógica de envío
    const azuraCastWidgetUrl = 'https://a3.asurahosting.com/public/punk_medallo/embed-requests?theme=dark';

    return (
        <>
            {/*Modal*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title fs-6 " id="staticBackdropLabel">Solo puedes solicitar una cancion cada 5 minutos</h6> <i className="bi bi-arrow-left-short" style={{color: 'red'}}></i>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{padding: 0}}>
                            {/* Widget de AzuraCast para solicitud de canciones */}
                            <iframe
                                src={azuraCastWidgetUrl}
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                                title="AzuraCast Song Request Widget"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                aria-label="Formulario de solicitud de canciones de Punk Medallo"
                                style={{
                                    width: '100%',
                                    minHeight: '600px',
                                    border: '0'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}