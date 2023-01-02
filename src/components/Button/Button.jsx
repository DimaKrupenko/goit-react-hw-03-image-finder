import Styles from './Button.module.css'

const Button = ({ onLoad }) => {
    
    return <button className={Styles.Button} type="button" onClick={onLoad}>Load more</button>
}

export default Button