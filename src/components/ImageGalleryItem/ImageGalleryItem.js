import * as SC from './ImageGalleryItem.style';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
    return <SC.ImageGalleryItem>
        <SC.ImageGalleryItemImage src={webformatURL} alt={tags}></SC.ImageGalleryItemImage>
    </SC.ImageGalleryItem>
}