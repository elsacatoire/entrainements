const sortList = require('./sorting');

test('simple sort (1 swap)', () => {
    //                     0  1  2  3  4  5
    let result = sortList([6, 1, 2, 3, 4, 10])
    let expected_sorted = [1, 2, 3, 4, 6, 10]
    console.log(result)
    expect(result).toStrictEqual(expected_sorted);
});

test('2 swaps)', () => {
    //                     0  1  2  3  4  5
    let result = sortList([6, 1, 3, 2, 4, 10])
    let expected_sorted = [1, 2, 3, 4, 6, 10]
    console.log(result)
    expect(result).toStrictEqual(expected_sorted);
});

test('last is smaller has to be swap', () => {
    //                     0  1  2  3  4  5
    let result = sortList([6, 1, 2, 3, 4, 5])
    let expected_sorted = [1, 2, 3, 4, 5, 6]
    console.log(result)
    expect(result).toStrictEqual(expected_sorted);
});

test('close', () => {
    //                     0  1  2  3  4  5
    let result = sortList([6, 2, 1, 3, 4, 10])
    let expected_sorted = [1, 2, 3, 4, 6, 10]
    console.log(result)
    expect(result).toStrictEqual(expected_sorted);
});