import { useState } from "react"
import useFetch from "../hooks/useFetch"
import GetRandom from "../utils/GetRandom"
import Card from "./Card "
import Location from "./Location"
import PortalAnimation from "./PortalAnimation"
import SearchInput from "./SearchInput"
import ErrorTooltip from "./ErrorTooltip"
import usePagination from "../hooks/usePagination"

const MainStructure = () => {
  const [valueSearch, setValueSearch] = useState(GetRandom(126))
  const [errorNotification, setErrorNotification] = useState(false)
  const { endpoint, residents, error1} = useFetch(`https://rickandmortyapi.com/api/location/${valueSearch}`)
  const { currentPage, setCurrentPage, totalPages, nextPage, prevPage, currentDisplay } = usePagination(residents)


  const handlePageNumber = (e) => {
    setCurrentPage(Number(e.target.textContent))
  }

  const displayPages = (totalPages) => {
    let numberOfPages = []
    for(let i = 1; i <= totalPages; i++) {
      if(totalPages <= 1){
        return
      }else{
        numberOfPages.push(
          <li onClick={handlePageNumber} key={i} className={`${currentPage === i ? "border-2 border-green-main" : ""} flex gap-2 bg-neutral-600 rounded-sm cursor-pointer w-[45px] h-[50px] justify-center items-center`}>{i}</li>
          )
      }
    }
    return numberOfPages
  }

  return (
    <main className="min-h-screen w-full text-white flex flex-col items-center font-Fira">
      <PortalAnimation />
      <SearchInput setValueSearch={setValueSearch} setErrorNotification={setErrorNotification}/>
      <ErrorTooltip errorNotification={errorNotification}/>
      <Location endpoint={endpoint} />
      <article className="max-w-7xl grid grid-cols-2 gap-28 max-lg:grid-cols-1 max-lg:gap-14">
        {currentDisplay.map((resident) => (
          <Card resident={resident} key={resident}/>
        ))}
      </article>
      {totalPages > 1 
      ? <section className="mt-10 flex justify-center px-[5%]">
          <ul className="min-w-[80%] flex flex-wrap gap-3">
            <button onClick={prevPage} className="w-[45px] h-[50px] rounded-sm bg-green-800 cursor-pointer flex items-center justify-center"><i className="ri-skip-left-fill text-[30px]"></i></button>
            {displayPages(totalPages)}
            <button onClick={nextPage} className="w-[45px] h-[50px] rounded-sm bg-green-800 cursor-pointer flex items-center justify-center"><i className="ri-skip-right-fill text-[30px]"></i></button>
          </ul>
        </section> 
      : ""}
    </main>
  )
}
export default MainStructure