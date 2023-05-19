const moveElement = require('./sorting');

test('classicalMove', () => {
    //                        0  1  2  3  4  5
    let result = moveElement([1, 4, 2, 3, 5, 6], 1, 4)
    let expected_moveEleme = [1, 2, 3, 4, 5, 6]
    console.log(result)
    expect(result).toStrictEqual(expected_moveEleme);
});
test('classicalMove', () => {
    //                         0    1    2    3    4 
    let result = moveElement(["X", "A", "B", "C", "D"], 0, 4)
    let expected_moveEleme = ["A", "B", "C", "X", "D"]
    console.log(result)
    expect(result).toStrictEqual(expected_moveEleme);
});

test('move to last', () => {
    //                         0    1    2    3    4 
    let result = moveElement(["A", "X", "B", "C", "D"], 1, 5)
    let expected_moveEleme = ["A", "B", "C", "D", "X"]
    console.log(result)
    expect(result).toStrictEqual(expected_moveEleme);
});

test('move to next', () => {
    //                         0    1    2    3    4 
    let result = moveElement(["A", "X", "B", "C", "D"], 1, 3)
    let expected_moveEleme = ["A", "B", "X", "C", "D"]
    console.log(result)
    expect(result).toStrictEqual(expected_moveEleme);
});
