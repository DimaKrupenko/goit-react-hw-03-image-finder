import Styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({items}) => {
    return (
            <ul className={Styles.ImageGallery}>
            <ImageGalleryItem items={items}/>
            </ul>
    )
    
    }
