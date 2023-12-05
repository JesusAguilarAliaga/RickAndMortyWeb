const PortalAnimation = () => {
  return (
    <div className="w-[800px] h-[800px] absolute -top-[350px] left-[calc(50%-translate-1/2)] flex justify-center items-center max-lg:w-[435px] max-sm:w-[350px]">
      <img className="z-0 portalAnimation w-[650px] max-lg:w-[335px] max-sm:w-[250px]" src="/images/portal.svg" alt="" />
      <div className="z-10 absolute w-[750px] h-[750px] rounded-full bg-green-main blur-3xl opacity-[0.3] max-lg:w-[435px] max-lg:h-[435px] max-sm:w-[350px] max-sm:h-[350px]"></div>
      <img className="z-20 absolute top-[400px] max-lg:w-[335px] max-sm:w-[250px]" src="/images/logo.png" alt="rickAndMorty" />
    </div>
  )
}
export default PortalAnimation