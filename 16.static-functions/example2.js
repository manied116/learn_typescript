var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.isAdult = function (age) {
        return age >= 18;
    };
    return User;
}());
// const user = new User("Alice", 30);
// console.log(user.isAdult())
console.log(User.isAdult(30), '30');
console.log(User.isAdult(15), '15');
