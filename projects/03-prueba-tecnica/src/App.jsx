import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/`

export function App() {
  const [fact, setFact] = useState()
  const [firstThreeWords, setFirstThreeWords] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then((data) => {
        setFact(data.fact)
        const threeFirstWord = data.fact.split(' ', 3).join(' ')
        setFirstThreeWords(threeFirstWord)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <main>
      <h3>{fact}</h3>
      <p>First three words: "{firstThreeWords}"</p>
      {firstThreeWords && <img className='catImg' src={CAT_ENDPOINT_IMG_URL + firstThreeWords} alt={`Image of a cat saying ${firstThreeWords}`} />}
    </main>
  );
}
