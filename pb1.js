// it can be sone with momentJs but i used a converter for convert time and compare between them


let openningHours = {
    monday: [
        { begin: "10:00", end: "12:00" },
        { begin: "13:00", end: "18:00" },
    ],
    tuesday: [
        { begin: "10:00", end: "12:00" },
        { begin: "13:00", end: "18:00" },
    ],
    wednesday: [
        { begin: "10:00", end: "12:00" },
        { begin: "13:00", end: "18:00" },
    ],
    thursday: [
        { begin: "10:00", end: "12:00" },
        { begin: "13:00", end: "18:00" },
    ],
    friday: [],
    saturday: [],
    sunday: [],
}

let daysSelected = {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: true,
    sunday: false
}

let hourToAdd = { begin: "11:00", end: "13:00" }

const addHour = (oppeningHour, daysSelected, hourToAdd) =>{
    // for each key in days selected
        // if day selected is true => add hours
    let isExistCollision = false
    for(let day in daysSelected) {
        if (daysSelected.hasOwnProperty(day) && daysSelected[day] && isCollision(oppeningHour[day], hourToAdd)) {
            isExistCollision = true
            break;
        }
    }
    if(!isExistCollision){
        for(let day in daysSelected){
            if(daysSelected.hasOwnProperty(day) && daysSelected[day]) {
                oppeningHour[day].push(hourToAdd)
                oppeningHour[day] = sortHoursDay(oppeningHour[day])
            }
        }
    }else console.log("there is collision")
    return oppeningHour
}

const sortHoursDay = (oppeningHourDay)=>{
    return oppeningHourDay.sort((day1,day2)=>{
        const {h : day1Hour, m : day1Minute} = getHoursMinute(day1.begin)
        const {h : day2Hour, m : day2Minute} = getHoursMinute(day2.begin)
        return ((day1Hour - day2Hour) || ((day1Hour === day2Hour) && (day1Minute - day2Minute)))
    })
}

const getHoursMinute = (beginHour)=>{
    const hours = beginHour.split(":")
    const h = parseInt(hours[0])
    const m = parseInt(hours[1])
    return{
        h,m
    }
}

const isCollision =(day,hoursToAdd)=>{
    const {h : dayAddHourBegin, m : dayAddMinuteBegin} = getHoursMinute(hoursToAdd.begin)
    let isCollitsion = false
    for(let index=0; index<day.length;index++){
        const {h : dayHourBegin, m : dayMinuteBegin} = getHoursMinute(day[index].begin)
        const {h : dayHourEnd} = getHoursMinute(day[index].end)
        if(isExistConditonColision(dayAddHourBegin,dayHourBegin,dayHourEnd,dayAddMinuteBegin,dayMinuteBegin)){
            return !isCollitsion
        }
    }
    return isCollitsion
}

const isExistConditonColision = (dayAddHourBegin,dayHourBegin,dayHourEnd,dayAddMinuteBegin,dayMinuteBegin) => {
    return ((dayAddHourBegin > dayHourBegin) && (dayAddHourBegin < dayHourEnd)) //collision
        || ((dayAddHourBegin === dayHourBegin) && (dayAddHourBegin < dayHourEnd) && dayAddMinuteBegin > dayMinuteBegin)
}


console.log(addHour(openningHours,daysSelected,hourToAdd))



