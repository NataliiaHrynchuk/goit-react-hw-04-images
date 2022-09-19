import * as SC from './ImageGalleryItem.style';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item, toggleModal }) => {
    const { webformatURL, tags, largeImageUrl } = item;
    return <SC.ImageGalleryItem>
        <SC.ImageGalleryItemImage
            // type="button"
            src={webformatURL}
            alt={tags}
            onClick={() => toggleModal(largeImageUrl)}
        ></SC.ImageGalleryItemImage>
    </SC.ImageGalleryItem>
}

ImageGalleryItem.propTyypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
}