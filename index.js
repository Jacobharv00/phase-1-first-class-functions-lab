// Code your solution in this file!

const drivers = ['driver1', 'driver2', 'driver3']

function returnFirstTwoDrivers(drivers) {
    let newDrivers = drivers.slice(0, 2)
    return newDrivers
}


const returnLastTwoDrivers = (drivers) => {
    let newDrivers = drivers.slice(2)
    return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = a => b => a * b 

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    return selectingDrivers(drivers)
}