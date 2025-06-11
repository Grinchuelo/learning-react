const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const fact = Array(2).fill(null)
    fact[0] = data.fact
    fact[1] = data.fact.split(' ', 3).join(' ')
    return fact
  } catch (error) {
    console.error(error)
  }
}