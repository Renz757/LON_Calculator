const startDayInput = document.querySelector('#startDate');
const aptDayInput = document.querySelector('#endDate');
const aptTimeInput = document.querySelector('#aptTime');
const lonContainer = document.querySelector('#lon-container')
const includeWeekend = document.querySelector('#includeWeekend')

const currentDate = new Date()
const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: false })
const oneDay = 1000 * 60 * 60 * 24

const submitBtn = document.querySelector('#submitBtn');

includeWeekend.addEventListener("click", () => {
    if (includeWeekend.value === "true") {
        includeWeekend.value = "false"
    } else {
        includeWeekend.value = "true"
    }
})

submitBtn.addEventListener("click", getDaysNotice)


function getDaysNotice(event) {
    event.preventDefault()

    //create new date from input 
    const startDay = new Date(startDayInput.value)
    const aptDay = new Date(aptDayInput.value)

    //calculate the difference in milliseconds 
    let differenceMs = aptDay.getTime() - startDay.getTime();

    //get days between dates 
    let daysNotice = differenceMs / oneDay;
    //get hours between dates 
    let hoursNotice = differenceMs / oneDay * 24;

    if (includeWeekend.value === "true") {
        //if appointmet day is one week from start day 
        if (startDay.getDay() === aptDay.getDay()) {
            hoursNotice = hoursNotice - 48;
            daysNotice = daysNotice - 2;
        //appoint date falls on monday 
        } else if ((aptDay.getDay() === 1)) {
            hoursNotice = hoursNotice - 48;
            daysNotice = daysNotice - 2;
        //start day fall on friday
        } else if (startDay.getDay() === 5) {
            hoursNotice = hoursNotice - 48;
            daysNotice = daysNotice - 2;
        }
        console.log(hoursNotice)
    }
    //create new element 
    const lonDiv = document.createElement("p")

    lonDiv.innerHTML = `${hoursNotice.toFixed(2)} hours days notice | ${daysNotice} business days`
    lonContainer.appendChild(lonDiv)

    return console.log(daysNotice.toFixed(2), hoursNotice.toFixed(2))
}



console.log(includeWeekend.value)