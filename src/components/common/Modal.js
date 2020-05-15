import React from 'react';


function closeModal (e) {
    e.target.parentNode.classList.toggle("hide");
}


class Modal extends React.Component {

    render () {
        return(
            <div className="modal hide">
                <div className="close-modal" onClick={(e) => closeModal(e)}>&#215;</div>
                <div className="modal-content"></div>
            </div>
        );
    }
}

export default Modal;