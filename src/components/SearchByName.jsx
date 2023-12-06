import { useEffect, useState } from "react";

const SearchByName = ({ setValueSearch, setErrorNotification, setErrorText}) => {
  const [allLocations, setAllLocations] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [locationNames, setLocationNames] = useState([]);

  const fetchLocations = async (pageNumber) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`);
      const data = await response.json();
      const locations = [];
      data.results.forEach(location => {
        locations.push({
          id: location.id,
          name: location.name
        })
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
    let allLocationNames = [];

    try {
      const totalPages = await FetchMain();

      for (let i = 1; i <= totalPages; i++) {
        const names = await fetchLocations(i);
        allLocationNames.push(...names);
      }

      setAllLocations(allLocationNames);
    } catch (error) {
      console.error(`Hubo un error al obtener todas las ubicaciones: ${error}`);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.location.value;
    let found = false;
  allLocations.forEach((location) => {
    if (location.name === value) {
      setValueSearch(location.id);
      found = true;
    }
  });

  if (!found) {
    setErrorText("The location does not exist");
    setErrorNotification(true);
    setTimeout(() => {
      setErrorNotification(false);
    }, 3000);
  }
    setInputValue("")
    setLocationNames([])
  }

  
  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    setInputValue(name);
    let locations = [];
    if(name !== ""){
      allLocations.filter((nameLocation) => {
        if(nameLocation.name.toLowerCase().includes(name)){
          locations.push(nameLocation)
        }
        console.log(locations.name)
        setLocationNames(locations)
      })
    }else{
      setLocationNames([])
    }
  };
  
  const handleOnClick = (name) => {
    setInputValue(name)
    setLocationNames([])
  }
  
  useEffect(() => {
    retrieveAllLocations();
  }, []);
  
  return (
    <>
      <form className="relative z-30 mt-[520px]  w-[720px] h-14 border-2 border-green-main flex justify-between max-lg:w-[435px] max-sm:w-[350px] max-lg:mt-[340px] max-sm:mt-[280px]" onSubmit={handleSubmit}>
        <input 
          className="text-[21px] w-[500px] h-full bg-transparent text-center outline-none max-sm:text-[18px] max-sm:text-left max-sm:pl-1"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type a location Name..."
          list="locationsList"
          name="location"
          autoComplete="off"
          
        />
        <ul className="top-14 absolute w-[500px] bg-green-700 max-sm:w-[350px] max-lg:w-[430px]">
          {locationNames.map((location) => (
            <li  onClick={() => handleOnClick(location.name)} className=" hover:bg-green-main hover:text-black border-b-2 border-green-main py-2 text-center" key={location.id}>{location.name}</li>
          ))}
        </ul>
        <button className="w-[215px] h-full bg-green-700 border-l-2 border-green-main max-lg:w-[103px] flex gap-3 justify-center items-center hover:bg-green-main max-lg:hover:bg-green-700" type="submit"><span className="max-lg:hidden">Search</span><i className="ri-search-line"></i> </button>
      </form>
    </>
  );
};

export default SearchByName;