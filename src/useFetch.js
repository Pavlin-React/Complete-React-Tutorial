import { useState, useEffect } from 'react'

const useFetch = ( url ) => {
  let [data, setData] = useState(null)
  let [isPending, setIsPending] = useState(true)
  let [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('There is a Error')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)

        })
    }, 1000)
  }, [])
  return { data, isPending, error }
}

export default useFetch