import Styles from './Modal.module.css'



const Modal = ({ items, handleClick }) => {
    
    return <div className={Styles.Overlay} onClick={handleClick}>
        <div className={Styles.Modal}>
            {items.map(item =>
                <img key={item.id} src={item.largeImageURL} alt="" />)}
    
  </div>
</div>
}


export default Modal