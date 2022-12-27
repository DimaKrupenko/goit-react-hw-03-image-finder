
export const ImageGallery = ({items}) => {
    return (
            <ul className="gallery">
                {items && items.map(item => (
               <li key={item.id}><img src={item.webformatURL} alt=''></img></li>
           ))}
            </ul>
    )
    
    }
