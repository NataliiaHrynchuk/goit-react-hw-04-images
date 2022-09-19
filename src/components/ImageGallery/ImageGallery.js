import * as SC from './ImageGallery.style';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal}) => {
    return <SC.ImageGallery>
        {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    item={image}
                    onSelect={toggleModal}
                    />
        ))}
    </SC.ImageGallery>
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageUrl: PropTypes.string,
            webformatURL: PropTypes.string.isRequired,
        }),
    ),
    toggleModal: PropTypes.func.isRequired,
};