import { Component } from 'react';
import * as SC from './Modal.style';

export class Modal extends Component {
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    componentDidMount( ) {
        window.addEventListener('keydown', this.handleKeyDown );
    }

    componentWillUnmount( ) {
        window.removeEventListener('keydown', this.handleKeyDown );
    }

    render() {
        return <SC.Overlay onClick={this.handleBackdropClick}>
            <SC.Modal>
                {this.props.children}
            </SC.Modal>
        </SC.Overlay>
    }
}