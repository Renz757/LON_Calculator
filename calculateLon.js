const startDayInput = document.querySelector('#startDate');
const aptDayInput = document.querySelector('#endDate');
const aptTimeInput = document.querySelector('#aptTime');

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener("click", getDaysNotice)


const currentDate = new Date()
const currentTime = currentDate.toLocaleTimeString('en-US', {hour12: false})
const oneDay = 1000 * 60 * 60 * 24 


function getDaysNotice (event){
    event.preventDefault()
    //assgined date from input to sday and removing hyphens in order to show the correct date 
    const startDay = new Date(startDayInput.value.replace(/-/g, '\/'))
    const aptDay = new Date(aptDayInput.value.replace(/-/g, '\/'))
    
    let differenceMs = aptDay.getTime() - startDay.getTime();


    return console.log( Math.round(differenceMs/oneDay))
}

// const calculateLon = (startDay, endDay) => {
    
// }


console.log(currentTime)
