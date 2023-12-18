const accountId = 121
let accountEmail = "himanshu@gmail.com"
var accountPass = "4321"
accountCity = "Jaipur" // we can also define a variable like this
let accountState; // we can also define a variable like this

// accountId = 3 // not allowed
console.log(accountId)

/*
Note:- 1. Prefer to not use var because of issue in block scope and funtional scope
*/

console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)
console.log(accountState)

// or we can print all this things in tabular form using console.table([])
console.table([accountId, accountEmail, accountPass, accountCity, accountState])

// we can change all the variables except const
accountEmail = "bharti@34"
accountPass = "569"
accountCity = "mau"
accountState = "up"

console.table([accountId, accountEmail, accountPass, accountCity, accountState])

