// Code your solution here
function findMatching(drivers,string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}
function fuzzyMatch (driverArray, driverName) {
    return driverArray.filter(Element => Element.slice(0,1) === driverName.slice(0,1))
}
function matchName(drivers, name) {
    return drivers.filter((driver) => name === driver.name);
}