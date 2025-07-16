import { useState, useCallback } from "react"

export default function useRating(){
       const [selectedRating, setSelectedRating] = useState(null)
    
       const handleSelect = useCallback ((number) =>{
        setSelectedRating(prev => prev === number ? null : number)
       }, []);

       return { selectedRating, handleSelect }    
}   