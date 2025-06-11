import { useState, useEffect } from 'react'
import { getRandomFact } from '/src/services/getFact.js'

export function useCatFact() {
    const [fact, setFact] = useState([])

    const setRandomFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(setRandomFact, [])

    return { fact, setRandomFact }
}