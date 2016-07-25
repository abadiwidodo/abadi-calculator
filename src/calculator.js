function add(num1, num2){
    return num1 + num2;
};

function substract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};


exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

exports.sayHelloInIndo = function() {
    return "Halo";
};