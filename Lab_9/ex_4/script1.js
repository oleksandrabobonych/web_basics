const startTime = new Date();
const duration = 10 * 1000;

console.log("Таймер запущений на 10 сек");
while (true) {
    const currentTime = new Date();
    if (currentTime - startTime >= duration) {
        break;
    }
}
console.log("10 секунд минуло!");