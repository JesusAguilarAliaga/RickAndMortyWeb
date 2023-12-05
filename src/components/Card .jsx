import { useEffect, useState } from "react";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const Card = ({ resident }) => {
  const { endpoint: person } = useFetch(resident)
  const [stateResident, setStateResident] = useState("bg-gray-400")

  useEffect(() => {
    if (person?.status === "Alive") {
      setStateResident("bg-green-main");
    } else if (person?.status === "Dead") {
      setStateResident("bg-red-600");
    }
  }, [person]);

  return (
    <>
      {person
      ? 
      <article className="w-[435px] h-auto border-green-main border-2 flex flex-col max-sm:w-[335px] max-sm:h-auto">
        <figure className="relative w-full">
          <img
            className="w-[435px] h-[435px] object-cover border-b-2 border-green-main max-sm:w-[335px] max-sm:h-[335px]"
            src={person.image}
            alt="image"
          />
          <span className="w-[180px] h-[40px] bg-[#00000080] absolute bottom-10 left-[calc(50%-90px)] flex gap-2 justify-center items-center border-2 border-green-main max-sm:bottom-6">
            <div className={`w-4 h-4 rounded-full ${stateResident}`}></div>{person.status}
          </span>
        </figure>
        <h2 className="text-[32px] pl-6 mt-2 font-bold max-sm:text-[24px]">{person.name}</h2>
        <section className="flex flex-col w-full px-6 min-h-[140px] justify-around max-sm:text-[14px]">
          <p className="w-[80%] text-gray-low flex justify-between max-sm:w-[100%]">Species <span className="text-white text-right">{person.species}</span></p>
          <p className="w-[80%] text-gray-low flex justify-between max-sm:w-[100%]">Origin <span className="text-white text-right">{person.origin?.name}</span></p>
          <p className="w-[80%] text-gray-low flex justify-between max-sm:w-[100%]">Times appear <span className="text-white text-right">{person.episode?.length} times</span></p>
        </section>
      </article>
      : 
      <Loader /> 
      }
    </>
  );
};
export default Card;
