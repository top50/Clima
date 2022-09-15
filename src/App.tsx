import { FormEvent, useEffect, useState } from "react"
import { getWaetherBYcoords, getWeatherBySearch } from "./api/fetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer"

function App() {
const [fetchedData,setFetchedData]=useState(null);
const [error, setError] = useState("");

useEffect(() => {
 navigator.geolocation.getCurrentPosition(async(position)=>{
const LAT = position.coords.latitude;
const LON = position.coords.longitude;

try {
 const data = await getWaetherBYcoords(LAT,LON); 
 setFetchedData(data);
 console.log(data)

} catch (err) {
  setError('Porfavo verifique su conexion a Internet 💻')
}

 })
  
}, [])

// buscador

const handleSearch=async(e:FormEvent<HTMLFormElement>,CITY:string)=>{
  e.preventDefault();
  setError("");

  try {
    const data=await getWeatherBySearch(CITY);
    if( data ==="404"){
      setError("No se encntro la Ciudad")
    }else if(data === "400"){
      setError("Debe escribir una ciudad")
    }else{
      setFetchedData(data);
      console.log(data)
    }
  } catch (err) {
    setError('Por favor revise su conexion a internet')
  }
}
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch}
      
      />
     <WeatherContainer fetchedData={fetchedData} error={error} /> 
    </div>
  )
}

export default App
