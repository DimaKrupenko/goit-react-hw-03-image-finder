import Styles from './ImageGallery.module.css'

export const ImageGallery = ({items}) => {
    return (
            <ul className={Styles.ImageGallery}>
                {items && items.map(item => (
               <li key={item.id}><img src={item.webformatURL} alt=''></img></li>
           ))}
            </ul>
    )
    
    }
