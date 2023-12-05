import { useEffect, useState } from "react"

const usePagination = (data=[]) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [currentDisplay, setCurrentDisplay] = useState([])
  
  useEffect(() => {
  const itemsPerPage = 6
  
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)  //items actuales que se mostraran
  setCurrentDisplay(currentItems)

  const pages = Math.ceil(data.length / itemsPerPage)  //paginas totales
  setTotalPages(pages)
}, [data, currentPage])


  const nextPage = () => {
    if(currentPage >= totalPages) return
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if(currentPage <= 1) return
    setCurrentPage(currentPage - 1)
  }


    


  return {
    currentPage,
    setCurrentPage,
    totalPages,
    nextPage,
    prevPage,
    currentDisplay
  }
}
export default usePagination