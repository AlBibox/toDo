import {format} from 'date-fns'

let todayDate = format(new Date(), "EEEE MMM dd yyyy");
let dueDate = (arg) => format(new Date(arg), "EEEE MMM dd yyyy");

export {todayDate, dueDate}