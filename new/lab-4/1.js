function calculateFunctionSequential(x, a, b) {
    let result;
    
    
    if (x >= -1 && x < 6) {
        result = Math.sin(x); 
    } else if (x === 6) {
        result = 3 * x ** 2 + b * x;
    } else if (x > 6 && x < 8) {
        let logArg = a * x - 3 * b;
        if (logArg > 0) {
            result = Math.log(logArg); 
        } else {
            return "Помилка: Аргумент логарифма повинен бути додатним";
        }
    } else {
        return "Помилка: x поза визначеним інтервалом";
    }
    
    return `f(${x}) = ${result}`;
}


function calculateFunctionNested(x, a, b) {
    let result;
    let errorMessage = "";
    
    if (x >= -1) {
        if (x < 6) {
            result = Math.sin(x);
        } else if (x === 6) {
            result = 3 * x ** 2 + b * x;
        } else if (x < 8) {
            let logArg = a * x - 3 * b;
            if (logArg > 0) {
                result = Math.log(logArg);
            } else {
                errorMessage = "Помилка: Аргумент логарифма повинен бути додатним";
            }
        } else {
            errorMessage = "Помилка: x поза визначеним інтервалом";
        }
    } else {
        errorMessage = "Помилка: x поза визначеним інтервалом";
    }
    
    return errorMessage ? errorMessage : `f(${x}) = ${result}`;
}


console.log(calculateFunctionSequential(5, 2, 1)); 
console.log(calculateFunctionSequential(6, 2, 1)); 
console.log(calculateFunctionSequential(7, 2, 1)); 
console.log(calculateFunctionSequential(9, 2, 1)); 

console.log(calculateFunctionNested(5, 2, 1));
console.log(calculateFunctionNested(6, 2, 1)); 
console.log(calculateFunctionNested(7, 2, 1)); 
console.log(calculateFunctionNested(9, 2, 1)); 