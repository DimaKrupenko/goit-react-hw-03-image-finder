import Styles from './Button.module.css'

const Button = ({ onLoad, value }) => {
    
    
    const handleOnLoad = (value) => {
        onLoad(value).then(console.log(value))
        
    } 
    return <button className={Styles.Button} type="button" onClick={handleOnLoad}>Load more</button>
}

export default Button