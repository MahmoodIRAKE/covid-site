import {getAllCountries,getAllCountriesByRegion} from './countriesApi.js';
import {getAllCovidByCode,getCovidData,toNewsFeed} from './covidApi.js';

const newsFeed=document.querySelector('.newsFeed');

async function main(){
    let countries= await getAllCountries();
   // let chosenRegion='Asia';
   // let chosenCountry='IL';
    //let countriesByRegion=getAllCountriesByRegion(countries,chosenRegion);
    let temp=await getCovidData(countries);
    console.log(temp)
    await toNewsFeed(temp,newsFeed)
}
main();