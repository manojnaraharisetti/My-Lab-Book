function areValuesEqual(value1, value2) {
    return value1 === value2;
}

function isFirstValueBigger(value1, value2) {
    return value1 > value2;
}

function storeInputNames(...names) {
    return names;
}

function getAbsoluteDifference(value1, value2) {
    return value1 > value2 ? value1 - value2 : value2 - value1;
}

function countNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0).length;
}

function countOccurrencesInString(inputString, targetLetter) {
    return (inputString.match(new RegExp(targetLetter, 'g')) || []).length;
}

function countTotalPoints(gameResults) {
    return gameResults.reduce((totalPoints, result) => {
        const [team1Score, team2Score] = result.split(':').map(Number);
        return totalPoints + (team1Score > team2Score ? 3 : team1Score === team2Score ? 1 : 0);
    }, 0);
}

// Example usage
console.log(areValuesEqual(7, 7));  // true
console.log(isFirstValueBigger(10, 5));  // true
console.log(storeInputNames('Alice', 'Bob', 'Charlie'));  // ["Alice", "Bob", "Charlie"]
console.log(getAbsoluteDifference(15, 10));  // 5
console.log(countNegativeNumbers([-2, 3, -4, 5, -6]));  // 3
console.log(countOccurrencesInString('hello world', 'o'));  // 2
console.log(countTotalPoints(['2:1', '1:1', '3:2']));  // 4

