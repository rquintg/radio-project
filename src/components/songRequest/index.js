export default function SongRequest() {

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
                            <form className="cc_request_form" data-username="demo">
                                <div data-type="result"></div>
                                Banda: <input type="text" name="request[artist]" size="40" maxLength="127"/><br/>
                                Cancion: <input type="text" name="request[title]" size="40" maxLength="127"/><br/>
                                Dedicado a: <input type="text" name="request[dedication]" size="40"
                                                     maxLength="127"/><br/>
                                Tu nombre: <input type="text" name="request[sender]" size="40" maxLength="127"/><br/>
                                Tu E-mail: <input type="text" name="request[email]" size="40" maxLength="127"/><br/>
                                <input type="button" value="Solicitar" data-type="submit"/><br/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}