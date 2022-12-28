import Styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ items }) => {
    return (
     items && items.map(item => (
               <li className={Styles.ImageGalleryItem} key={item.id}><img className={Styles.ImageGalleryItemImage} src={item.webformatURL} alt=''></img></li>
           ))
)
   
 }

export default ImageGalleryItem