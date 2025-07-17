import style from "./style.module.css"

export default function Rater({ number, isActive, onClick }) {

    return (
        <>
            <span onClick={()=> onClick(number)}
             className={ isActive ? style.clickedRaterBtn : style.standartRaterBtn}>
            {number}
            </span>
        </>
    )
}