import style from "./style.module.css"

function Button({send, selectedRating}) {


    return(
        <>
            <button 
            className={selectedRating ? style.standarButton: style.disabledButton} 
            disabled={!selectedRating} 
            onClick={send}
            >Submit</button>
        </>
    )
}

export default Button