import { useEffect, useState } from "react";

const SearchByName = ({ setValueSearch }) => {
  const [allLocations, setAllLocations] = useState({});
  const [inputValue, setInputValue] = useState("");

  const fetchLocations = async (pageNumber) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`);
      const data = await response.json();
      const locations = {};
      data.results.forEach(location => {
        locations[location.id] = location.name;
      });
      return locations;
    } catch (error) {
      console.error(`Hubo un error: ${error}`);
      return {};
    }
  };

  const FetchMain = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/location/');
      const data = await response.json();
      return data.info.pages;
    } catch (error) {
      console.error(`Hubo un error: ${error}`);
      return 0;
    }
  }

  const retrieveAllLocations = async () => {
    let allLocationNames = {};

    try {
      const totalPages = await FetchMain();

      for (let i = 1; i <= totalPages; i++) {
        const names = await fetchLocations(i);
        allLocationNames = { ...allLocationNames, ...names };
      }
      
      setAllLocations(allLocationNames);
    } catch (error) {
      console.error(`Hubo un error al obtener todas las ubicaciones: ${error}`);
    }
  };

  const fetchStandart = async (value) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${value}`);
      const data = await response.json();
      setValueSearch(data.results[0].id);
    } catch (error) {
      console.error(`Hubo un error: ${error}`);
      return [];
    }
  }

  
  const listOptions = Object.keys(allLocations).map((key) => {
    return (
      <option key={key} value={allLocations[key]}>
        {allLocations[key]}
      </option>
    );
  })
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.location.value;
    fetchStandart(value);
    setInputValue("")
    console.log(value)
  }
  
  const handleChange = (e) => {
    const name = e.target.value;
    setInputValue(name);
  };
  
  useEffect(() => {
    retrieveAllLocations();
  }, []);
  
  return (
    <>
      <form className="z-30 mt-[520px]  w-[720px] h-14 border-2 border-green-main flex justify-between max-lg:w-[435px] max-sm:w-[350px] max-lg:mt-[340px] max-sm:mt-[280px]" onSubmit={handleSubmit}>
      <input
        className="text-[21px] w-[500px] h-full bg-transparent text-center outline-none max-sm:text-[18px]"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a location Name..."
        list="locationsList"
        name="location"
      />
      <datalist id="locationsList">
        {listOptions}
      </datalist>
      <button className="w-[215px] h-full bg-green-700 border-l-2 border-green-main max-lg:w-[103px] flex gap-3 justify-center items-center hover:bg-green-main max-lg:hover:bg-green-700" type="submit"><span className="max-lg:hidden">Search</span><i className="ri-search-line"></i> </button>
      </form>
    </>
  );
};

export default SearchByName;