const accountId = 144553
let accountEmail = "Anjali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


accountEmail = "apn@google.com"
accountPassword = "6789"
accountCity = "Mumbai"

// accountId = 2   // not allowed
console.log(accountId);

/*
Prefer not to use var keyword
because of issues in block scope && functional scope
*/
console.table([accountId,accountEmail, accountPassword, accountCity])