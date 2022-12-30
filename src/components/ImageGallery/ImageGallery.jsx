import Styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal'

export const ImageGallery = ({ items, ShowModal, renderModal }) => {
    return (
            <ul className={Styles.ImageGallery}>
                    <ImageGalleryItem items={items} ShowModal={ShowModal}/>
                    {renderModal && <Modal items={items}
                         />}
            </ul>
             
    )
    
    }
