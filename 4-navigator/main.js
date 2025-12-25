let addressLat = 10
let addressLong = 20
let positionLat = 40
let positionLong = 120

res = Math.sqrt(Math.pow(positionLat - addressLat, 2) + Math.pow(positionLong - addressLong, 2));

console.log(res)
