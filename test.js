import {
    addHours,
    subHours,
    addMinutes,
    subMinutes,
    addYears,
    subYears,

    formatDate,
    formatTime,
    formatDateTime
} from './dateUtils.js'

let d = new Date()
console.log("add 2 hours")
console.log(d)
console.log(addHours(d,2))

console.log("sub 2 hours")
console.log(d)
console.log(subHours(d,2))


console.log("add 50 minutes")
console.log(d)
console.log(addMinutes(d,50))

console.log("sub 50 minutes")
console.log(d)
console.log(subMinutes(d,50))


console.log("add 5 years")
console.log(d)
console.log(addYears(d,5))

console.log("sub 5 years")
console.log(d)
console.log(subYears(d,5))


console.log("Format time")
console.log(formatTime(d))

console.log("Format Date")
console.log(formatDate(d))

console.log("Format Datetime")
console.log(formatDateTime(d))