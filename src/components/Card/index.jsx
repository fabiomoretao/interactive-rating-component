import Rater from "../Rater"
import useRating from "../../hooks/useRating"
import styles from "./style.module.css"

export default function Card() {
    const {selectedRating, handleSelect} = useRating()
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="src\assets\icon-star.svg" alt="star" width={12} height={12} />
                </div>

                <h1 className={styles.title}>How did we do?</h1>
                <p className={styles.text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                <div className={styles.rater}>
                    {[1,2,3,4,5].map(num => (
                        <Rater 
                        key={num}
                        number={num}
                        isActive={num === selectedRating}
                        onClick={handleSelect}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}