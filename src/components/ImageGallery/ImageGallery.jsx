import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ items, modalHandler }) => {
        return (
            <ul className={styles.ImageGallery}>
                    <ImageGalleryItem items={items} modalHandler={modalHandler}/>
            </ul>
             
    )
    
    }
