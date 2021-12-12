import {getAllCountries,getAllCountriesByRegion} from './countriesApi.js';
import {getAllCovidByCode,getCovidData,toNewsFeed} from './covidApi.js';
import { enterOptionsContinents,enterOptionsCountries} from './input.js'
import { drawchart} from './map.js';
// import { mapClicker } from './map.js';
const newsFeed=document.querySelector('.newsFeed');
const selectElemnt=document.querySelector('.continet-select');
const selectElemntCountry=document.querySelector('.country-select');
const continList=[{key:'AF',value:'Africa'},{key:'AN',value:'Antarctica'},{key:'AS',value:'Asia'},{key:'EU',value:'Europe'},{key:'NA',value:'North America'},{key:'OC',value:'Oceania'},{key:'SA',value:'South America'}]

async function main(){
    let countries= await getAllCountries();
    let temp=await getCovidData(countries);
    await toNewsFeed(temp,newsFeed)
    enterOptionsContinents(continList,selectElemnt)
     

    selectElemnt.addEventListener("change", async (item)=>{
        let selectedContnet= item.target.options[item.target.options.selectedIndex].outerText
        //am5.ready(function (){drawchart(continList[item.target.options.selectedIndex].key)});
        let countriesByRegion=getAllCountriesByRegion(countries,selectedContnet);
        enterOptionsCountries(countriesByRegion,selectElemntCountry)
        let covidData=await getCovidData(countriesByRegion);
    });
   
   
}
main();
