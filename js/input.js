/// in this file we will create our object that containes the sum of data from both APIs

const continents = {
    "AF": 0,
    "AN": 1,
    "AS": 2,
    "EU": 3,
    "NA": 4,
    "OC": 5,
    "SA": 6
}


/// function that enter the continents to drop down list

export function enterOptionsContinents(list,selectElemnt){
    selectElemnt.innerHTML='';
    for(let item in list){
        let str=''
        str=`<option>${list[item].value}</option>`
        selectElemnt.innerHTML+=str;
    } 
}

/// entering function options of countries according to selected Element
export function enterOptionsCountries(list,selectElemnt){
    selectElemnt.innerHTML='';
    for(let item in list){
        let str=''   
        str=`<option>${list[item].name.common}</option>`
        selectElemnt.innerHTML+=str;
    } 
}


 
