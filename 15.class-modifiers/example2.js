// with class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return User;
}());
var user = new User("Alice", 30);
console.log(user.getName());
console.log(user.getAge());
user.setName('Bob');
user.setAge(-10);
console.log(user.getName());
console.log(user.getAge());
