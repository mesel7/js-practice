const myFunc = (arr) => {
    let min = arr[0];
    // 단락 평가
    arr.forEach(it => it < min && (min = it));
    return min;
}

console.log(myFunc([1, 3, 7, 11, 2, 15, 0]));