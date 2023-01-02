import styles from './Modal.module.css'



const Modal = ({ item, handleClick }) => {
    
    return <div className={styles.overlay} onClick={handleClick}>
        <div className={styles.modal}>
                <img key={item.id} src={item.largeImageURL} alt="" />)
    
  </div>
</div>
}


export default Modal