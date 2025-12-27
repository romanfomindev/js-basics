
const hasLicence = true;
const age = 18;
const isDrunk = false

let canDrive = (hasLicence && age >= 18 && !isDrunk) ? "Может" : "Не может"

console.log(canDrive)