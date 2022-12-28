const Button = ({onLoad, value}) => {
    
    
    const handleOnLoad = (value) => {
        onLoad(value).then(console.log(value))
        
    } 
    return <button type="button" onClick={handleOnLoad}>Load more</button>
}

export default Button