import styles from "./style.module.css"

export default function Card() {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="src\assets\icon-star.svg" alt="estrela" width={12} height={12} />
                </div>
                <h1 className={styles.title}>How did we do?</h1>
                <p className={styles.text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            </div>
        </section>
    )
}