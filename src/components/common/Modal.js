import React from 'react';


/**
 * Behavior
 */
function closeModal (e) {
    e.target.parentNode.classList.toggle("hide");
}


/**
 * Components
 */
class Modal extends React.Component {

    render () {
        return(
            <div className="modal hide">
                <div className="close-modal" onClick={(e) => closeModal(e)}>&#10005;</div>
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;