import Styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ items, ShowModal }) => {
    return (
     items && items.map(item => (
         <li className={Styles.ImageGalleryItem} key={item.id}><img onClick={() => ShowModal(item.id)} className={Styles.ImageGalleryItemImage} key={item.id} src={item.webformatURL} alt=''></img></li>
         
     ))
    
)
       
 }

export default ImageGalleryItem