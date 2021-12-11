const countriesUrl='https://restcountries.herokuapp.com/api/v1'
const proxyUrl='https://intense-mesa-62220.herokuapp.com/'

// this function to fetch all the countries data from the countries api 
export async function getAllCountries(){
    let response= await fetch(proxyUrl+countriesUrl);
    response= await response.json();
    return response;
}


/// this function return to me the all countries in the continiet
export function  getAllCountriesByRegion(countries,contient){
    let res=[]; 
    for(let item in countries){
         if(countries[item].region===contient){
             res.push(countries[item]);
         }
     }
     return res;
}

/// random Region For Slide

export function getRandomRegion(){
    let regions=['Asia','Europe','Africa','America']
}

