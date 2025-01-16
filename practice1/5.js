const myFunc = (arr) => {
    let min = arr[0];
    // 단락 평가
    // 시간 복잡도 O(n)
    arr.forEach(it => it < min && (min = it));
    return min;
}

const myFunc2 = (arr) => {
    let min = arr[0];
    // for문 사용
    // 시간 복잡도 O(n)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(myFunc2([1, 3, 7, 11, 2, 15, 0]));