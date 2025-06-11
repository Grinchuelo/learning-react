import { useCatFact } from "./hooks/useCatFact"

const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/`

export function App() {
  const { fact, setRandomFact } = useCatFact()

  const handleClick = async () => {
    setRandomFact()
  }

  return (
    <main>
      <h3>{fact[0]}</h3>
      <button onClick={handleClick}>Get new fact</button>
      <div className="firstThreeWords">
        <p>First three words: </p><span data-testid='firstThreeWords'>{fact[1]}</span>
      </div>
      {fact[1] && <img className='catImg' src={CAT_ENDPOINT_IMG_URL + fact[1]} alt={`Image of a cat saying ${fact[1]}`} />}
    </main>
  );
}
