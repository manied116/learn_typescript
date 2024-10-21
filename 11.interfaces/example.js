function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age: ").concat(user.age));
}
var user1 = { firstName: "John", lastName: "Doe", middleName: "Francis", age: 25 };
var user2 = { firstName: "JV", lastName: "Logesh" };
console.log(greetUser(user2));
logUserDetails(user1);
