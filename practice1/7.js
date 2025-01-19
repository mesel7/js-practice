const myFunc = (day, numArr) => {
    const r1 = day % 10;
    let sum = 0;
    numArr.forEach((it) => {
        let r2 = it % 10;
        if (r1 === r2) {
            sum++;
        }
    })

    return sum;
}

console.log(myFunc(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(myFunc(0, [12, 20, 54, 30, 87, 91, 30]));