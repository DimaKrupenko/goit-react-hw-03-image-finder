import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal'

export const ImageGallery = ({ items, ShowModal, renderModal, handleClick }) => {
    console.log(items)
        return (
            <ul className={styles.ImageGallery}>
                    <ImageGalleryItem items={items} ShowModal={ShowModal}/>
                    {renderModal && <Modal
                            item={items}
                            handleClick={handleClick}
                         />}
            </ul>
             
    )
    
    }
