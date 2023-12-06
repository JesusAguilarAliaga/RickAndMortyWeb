const SearchInput = ({ setValueSearch, setErrorNotification, setErrorText }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let rule = /^(?:[1-9]{1}[0-9]{0,1}|1[0-2][0-6])$/;      // testeando aun la expresion regular, se puede mejorar!
    let value = e.target.inputValue.value.trim()

    if(rule.test(value)){
      setValueSearch(value)
    } else {
      setErrorText("The id must be a number between 1 and 126")
      setErrorNotification(true)
      setTimeout(() => {
        setErrorNotification(false)
      }, 3000);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="z-30 mt-[520px]  w-[720px] h-14 border-2 border-green-main flex justify-between max-lg:w-[435px] max-sm:w-[350px] max-lg:mt-[340px] max-sm:mt-[280px]" action="">
        <input name="inputValue" className="text-[21px] w-[500px] h-full bg-transparent text-center outline-none max-sm:text-[18px]" type="tel" placeholder="Type a location Id..." autoComplete="off"/>
        <button className="z-40 w-[215px] h-full bg-green-700 border-l-2 border-green-main max-lg:w-[103px] flex gap-3 justify-center items-center hover:bg-green-main max-lg:hover:bg-green-700" type="submit"><span className="max-lg:hidden">Search</span><i className="ri-search-line"></i> </button>
      </form>
    </>
  )
}
export default SearchInput