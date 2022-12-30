import Styles from './Modal.module.css'

const Modal = ({ items }) => {
    return <div className={Styles.Overlay}>
        <div className={Styles.Modal}>
            {items.map(item =>
                <img key={item.id} src={item.largeImageURL} alt="" />)}
    
  </div>
</div>
}


export default Modal