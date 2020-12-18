import { format, startOfWeek, endOfWeek, set } from 'date-fns'

let rawTodayDate = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});
let rawWeekStartDate = startOfWeek(rawTodayDate, { weekStartsOn: 1 });
let rawWeekEndDate = endOfWeek(rawTodayDate, { weekStartsOn: 1 })


let todayDate = format(rawTodayDate, "EEEE MMM dd yyyy");
let weekStartDate = format(rawWeekStartDate, "EEEE MMM dd yyyy");
let weekEndDate = format(rawWeekEndDate, "EEEE MMM dd yyyy");


let getDeadline = (arg) => format(new Date(arg), "EEEE MMM dd yyyy");
let getRawDeadline = (arg) => set(new Date(arg), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

export { 
    getDeadline, 
    todayDate, 
    weekStartDate, 
    weekEndDate, 
    rawTodayDate, 
    rawWeekStartDate, 
    rawWeekEndDate,
    getRawDeadline 
}