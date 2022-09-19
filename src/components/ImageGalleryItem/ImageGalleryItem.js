import * as SC from './ImageGalleryItem.style';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item, onSelect }) => {
    const { webformatURL, tags, largeImageURL } = item;
    return <SC.ImageGalleryItem >
        <SC.ImageGalleryItemImage
            src={webformatURL}
            alt={tags}
            onClick={() => onSelect(largeImageURL)}
        ></SC.ImageGalleryItemImage>
    </SC.ImageGalleryItem>
}

ImageGalleryItem.propTyypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
}