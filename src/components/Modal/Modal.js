import * as SC from './Modal.style';

export const Modal = ({ largeImageURL, tags }) => {
    return <SC.Overlay>
        <SC.Modal>
            <img src={largeImageURL} alt={tags} />
        </SC.Modal>
    </SC.Overlay>
}