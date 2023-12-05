import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [endpoint, setEndpoint] = useState([])
  const [residents, setResidents] = useState([])
  const [error1, setError1] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setEndpoint(data)
      setResidents(data.residents)
    } catch (error) {
      setError1(true)
      console.error(`Hay un error: ${error}`)
    }
  }


  useEffect(() => {
    fetchData()
  }, [url])

  return {
    endpoint,
    residents,
    error1
  }
}
export default useFetch