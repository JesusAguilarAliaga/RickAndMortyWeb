const Location = ({ endpoint }) => {

  return (
    <>
      <section className="z-30 my-16 w-[982px] col-span-2 h-[150px] border-2 border-green-main flex flex-col items-center justify-center gap-5 text-center max-lg:w-[435px] max-lg:mt-2 max-lg:mb-10 max-sm:w-[335px] max-lg:border-none max-lg:h-auto max-sm:mt-0">
        <h2 className="text-[24px] text-green-main font-bold max-sm:text-[20px]">¡Welcome to {endpoint.name}!</h2>
        <div className="w-[70%] flex justify-between text-gray-low font-medium">
          <p className="max-lg:hidden font-semibold">Type: {endpoint.type}</p>
          <p className="max-lg:hidden font-semibold">Dimension: {endpoint.dimension}</p>
          <p className="max-lg:hidden font-semibold">Population: {endpoint.residents?.length}</p>
        </div>
      </section>
    </>
  )
}
export default Location