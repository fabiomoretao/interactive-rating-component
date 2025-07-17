import FeedbackCard from "../../components/FeedbackCard"
import ThankYouCard from "../../components/ThankYouCard"
import useRating from "../../hooks/UseRating"
import { useState } from "react"

function CardSwitcher() {
    const { selectedRating, handleSelect } = useRating()

    const [submited, setSubmited] = useState(false)
    function handleSubmit() {
        setSubmited(true)}

    return (
        <div>
            {
            submited ? 
            <ThankYouCard selectedRating = { selectedRating }/> : 
            <FeedbackCard selectedRating = { selectedRating } handleSelect = { handleSelect } send={handleSubmit} 
            />}
        </div>
    )
}

export default CardSwitcher