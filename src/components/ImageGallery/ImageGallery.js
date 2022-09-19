import * as SC from './ImageGallery.style';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
    return <SC.ImageGallery>
        {images.map( image =>
            <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                tags={image.tags}
            />
        )}
    </SC.ImageGallery>
}