
const API_KEY="8e65d1ed777446122ef2e866876f1abd";
export const getWaetherBYcoords = async (
  LAT:number,
  LON:number,  
):Promise<any>=>{
    const API_COORDS= `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
    const response=await fetch(API_COORDS);
    const data=await response.json();
    return data;

};

export const getWeatherBySearch=async(CITY:string):Promise<any>=>{
    const API_CITY= `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

    const response=await fetch(API_CITY);
    const resData=await response.json();
    return resData;
}