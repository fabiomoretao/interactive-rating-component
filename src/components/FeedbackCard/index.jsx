import Rater from "../Rater"
import Button from "../Button"
import style from "./style.module.css"
import star from "../../assets/icon-star.svg"

function FeedbackCard({selectedRating, handleSelect, send}) {

    return (
        <section className={style.container}>
            <div className={style.card}>
                <div className={style.img}>
                    <img src={star} alt="star" width={12} height={12} />
                </div>

                <h1 className={style.title}>How did we do?</h1>
                <p className={style.text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                <div className={style.rater}>
                    {[1,2,3,4,5].map(num => (
                        <Rater 
                        key={num}
                        number={num}
                        isActive={num === selectedRating}
                        onClick={handleSelect}
                        />
                    ))}
                </div>

                <div className={style.Button}>
                    <Button send={send} selectedRating={selectedRating}/>
                </div>
            </div>
        </section>
    )
}

export default FeedbackCard