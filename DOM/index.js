var createCounter = function(n) {
    let num = n;
    return function() {
       return num++;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
