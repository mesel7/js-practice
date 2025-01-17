const myFunc = (arr) => {
    let sum = 0;
    let min = Infinity;

    arr.forEach((it) => {
        if (it % 2 != 0) {
            sum += it;
            if (it < min) {
                min = it;
            }
        }
    });

    console.log(sum);
    console.log(min);
};

myFunc([12, 77, 38, 41, 53, 92, 85]);