const startDayInput = document.querySelector('#startDate');
const aptDayInput = document.querySelector('#endDate');
const aptTimeInput = document.querySelector('#aptTime');
const lonContainer = document.querySelector('#lon-container')
const includeWeekend = document.querySelector('#includeWeekend')

const submitBtn = document.querySelector('#submitBtn');

includeWeekend.addEventListener("click", ()=> {
    if (includeWeekend.value === "true") {
        includeWeekend.value = "false"
    } else {
        includeWeekend.value = "true"
    }
})

submitBtn.addEventListener("click", getDaysNotice)


const currentDate = new Date()
const currentTime = currentDate.toLocaleTimeString('en-US', {hour12: false})
const oneDay = 1000 * 60 * 60 * 24 


function getDaysNotice (event){
    event.preventDefault() 

    //create new date from input 
    const startDay = new Date(startDayInput.value)
    const aptDay = new Date(aptDayInput.value)

    //calculate the difference in milliseconds 
    let differenceMs = aptDay.getTime() - startDay.getTime();

    //get days between dates 
    let daysNotice = differenceMs/oneDay;
    //get hours between dates 
    let hoursNotice = differenceMs/oneDay * 24;

    if (includeWeekend.value === "true") {
        hoursNotice = hoursNotice - 48;
        daysNotice = daysNotice - 2;

        console.log(hoursNotice)
    }

    //create new element 
    const hoursNoticeDiv = document.createElement("p")
    const daysNoticeDive  = document.createElement("p")


    hoursNoticeDiv.innerHTML = `${hoursNotice.toFixed(2)} hours days notice | ${daysNotice} business days`
    lonContainer.appendChild(hoursNoticeDiv)
    
    return console.log(daysNotice.toFixed(2), hoursNotice.toFixed(2))
}



console.log(includeWeekend.value)