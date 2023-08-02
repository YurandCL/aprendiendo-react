import { useEffect, useState } from 'react'
import { CAT_ENDPOINT_IMAGE_URL, CAT_PREFIX_IMAGE_URL } from '../utils/constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')
    fetch(CAT_ENDPOINT_IMAGE_URL(firstWord))
      .then(res => res.json())
      .then(data =>
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}${data.url}`)
      )
  }, [fact])

  return { imageUrl }
}
