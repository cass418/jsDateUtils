function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}
// minutes
export const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
}
export const subMinutes = (date, minutes) => {
    return new Date(date.getTime() - minutes * 60000);
}

// hours
export const addHours = (date, hours) => {
    return new Date(date.getTime() + hours * 3600000);
}
export const subHours = (date, hours) => {
    return new Date(date.getTime() - hours * 3600000);
}

// years 
export const addYears = (date, years) => {
    let nd = new Date(date)
    nd.setFullYear(date.getFullYear() + years)
    return nd
}
export const subYears = (date, years) => {
    let nd = new Date(date)
    nd.setFullYear(date.getFullYear() - years)
    return nd
}

// to string
export const formatTime = (date) => {
    return `${leftFillNum(date.getHours(), 2)}:${leftFillNum(date.getMinutes(), 2)}`
}

export const formatDate = (date) => {
    return `${date.getFullYear()}/${leftFillNum(date.getMonth() + 1)}/${leftFillNum(date.getDate())}`
}

export const formatDateTime = (date) => {
    return formatDate(date) + " " + formatTime(date)
}