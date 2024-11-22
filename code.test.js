const fs = require('fs');
eval(fs.readFileSync('code.js')+'');


for (let n = 3; n <= 10; n++) {
    const fn = fib(n);
    const fn1 = fib(n-1);
    const fn2 = fib(n-2);
    
    if (fn === fn1 + fn2) {
        console.log(`Property test for n=${n} successful.`);
    } else {
        console.error(`Property test for n=${n} failed.`);
    }
}
