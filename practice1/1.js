const getMin = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    return min;
};

console.log(getMin(0, 1, 2));