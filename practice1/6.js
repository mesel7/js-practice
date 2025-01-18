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

const myFunc2 = (arr) => {
    let sum = 0;
    let min = null;

    arr.forEach((it) => {
        if (it % 2 != 0) {
            sum += it; 
            if (min === null || it < min) {
                min = it;
            }
        }
    });

    console.log(sum);
    console.log(min);
};

myFunc2([12, 77, 38, 41, 53, 92, 85]);