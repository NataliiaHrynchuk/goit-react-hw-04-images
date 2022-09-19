import * as SC from './ImageGallery.style';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal}) => {
    return <SC.ImageGallery>
        {images.map(image => (
            <ImageGalleryItem
                key={image.id}
                item={image}
                toggleModal={toggleModal}
            />
        ))}
    </SC.ImageGallery>
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageUrl: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        }),
    ),
    toggleModal: PropTypes.func.isRequired,
};