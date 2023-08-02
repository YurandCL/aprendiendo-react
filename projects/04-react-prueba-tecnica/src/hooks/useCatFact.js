import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  useEffect(() => {
    refreshRandomFact()
  }, [])

  return { fact, refreshRandomFact }
}
