// greetings.js
exports.sayHelloInEnglish = function() {
    return "Hello";
};

exports.sayHelloInSpanish = function() {
    return "Hola";
};


function say(name){
    return "Hello " + name;
};

exports.sayMyName = say;