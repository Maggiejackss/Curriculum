//how many people are there
//where the vacation is taking place
//what the weather is like
//what the vacation cost
//what people are having for dinner
//const vacation = {
//     const people = (_number1) =>
//     {return `There are ${_number1} people on this vacation`}

//     let result = people($1)
//     console.log(result),

//     let location = (locale) =>
//     {return `We are in ${locale} right now!`}

//     let result = location($2)
//     console.log(result),

//     let weather = (mood) =>
//     {return `The weather is ${mood} right now`}

//     let result = weather($3)
//     console.log(result),

//     let cost = (_number2) =>
//     {return `The vacation has cost me ${_number2}`}

//     let result = cost($4)
//     console.log(result),
    
//     let dinner = (food) =>
//     {return `The dinner for tonight is ${food}`}

//     let result = dinner($5)
//     console.log(result)


// };


const people = 12; 
const location = 'Gulf Shores';
const vacation = (cost, weather, dinner) => {
    return `${people} people are vacationing in ${location}. The trip costs ${cost}, the weather was ${weather} and people are having ${dinner} for dinner!`
}

let result = vacation(1234, 'cloudy', 'steak')
console.log(result)
