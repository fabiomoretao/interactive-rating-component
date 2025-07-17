import style from "./style.module.css"

export default function ThankYouCard ({selectedRating}) {
    
    return(
      <section className={style.container}>
            <div className={style.card}>
                <div className={style.img}>
                    <img src="src\assets\illustration-thank-you.svg" alt="Thank You ;)" width={150} />
                </div>

                <span className={style.rate}>You selected {selectedRating} out of 5</span>

                <h1 className={style.title}>Thank You!</h1>
                <p className={style.text}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

            </div>
        </section>
    )
}
