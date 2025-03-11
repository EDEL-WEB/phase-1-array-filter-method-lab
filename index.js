
function findMatching(drivers, search) {
    return drivers.filter(driver => driver.toLowerCase() === search.toLowerCase());
}

function matchName(drivers, search) {
    return drivers.filter(driver => driver.name === search);
}
function fuzzyMatch(drivers, search) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(search.toLowerCase()));
}



const drivers = ["Alice", "Bob", "Charlie", "alice"];

console.log(findMatching(drivers, "alice")); 


console.log(fuzzyMatch(drivers, "Al")); 


const driverObjects = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" }
];

console.log(matchName(driverObjects, "Bob"));

