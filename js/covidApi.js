const covidUrl='https://corona-api.com/countries/'


// this function to fetch all the countries data from the countries api 
export async function getAllCovidByCode(countryCode){
    let response= await fetch(covidUrl+countryCode);
    response= await response.json();
    return  response;
}

/// this function that return all the data for all of covid data of all countries 

export async function getCovidData(countries){
    //here we need loading
    let res={};
    for(let item in countries){
        if(countries[item].cca2!=='XK'){
        let name=countries[item].name.common;
        res[name]=await getAllCovidByCode(countries[item].cca2);
        }
    }
    console.log(res);
    return res;
}


// function to but all the data we get from the api covid to the news feed box

export async function toNewsFeed(data,newsFeed){
    newsFeed.innerHTML='';
    for(let item in data){
        
       let str='';
       console.log()
       let confirmed=data[item].data.timeline[0]?data[item].data.timeline[0].new_confirmed:0;
       let recovered=data[item].data.timeline[0]?data[item].data.timeline[0].new_recovered:0;
       let death=data[item].data.timeline[0]?data[item].data.timeline[0].new_deaths:0;
        str=`<ul class="oneFeed"><li>${item}</li> <li>${confirmed}</li>
            <li>${death}</li><li> ${recovered}</li> </ul>`  
       newsFeed.innerHTML+=str; 
       
       }
       
    }
