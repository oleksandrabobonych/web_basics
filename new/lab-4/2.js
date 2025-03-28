function calculateFunction(x, a, b) {
    if (x >= -1 && x < 6) {
        return Math.sin(x);
    } else if (x === 6) {
        return 3 * x ** 2 + b * x;
    } else if (x > 6 && x < 8) {
        if (a * x - 3 * b > 0) {
            return Math.log(a * x - 3 * b);
        } else {
            return "Помилка: Аргумент логарифма повинен бути додатним";
        }
    } else {
        return "Помилка: x поза визначеним інтервалом";
    }
}

function sequenceCalculation(m) {
    if (m < 1 || !Number.isInteger(m)) {
        console.error("Помилка: m повинно бути натуральним числом (m ≥ 1)");
        return;
    }
    for (let n = 1; n <= m; n++) {
        let denominator = 2 * n + 5;
        if (denominator === 0) {
            console.error(`Помилка: знаменник для n=${n} дорівнює нулю`);
            continue;
        }
        console.log(`x_${n} =`, (Math.log(3 * n) + 5) / denominator);
    }
}


console.log("Результат:", calculateFunction(5, 2, 3));
sequenceCalculation(5);
