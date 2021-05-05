const wordSearch = (letters, word) => {
    const result = [];
    const result2 = [];
    const reverseWord = word.split('').reverse().join('');
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else if (l.includes(reverseWord)) {
            return true;
        }
    }
    for (let i = 0; i < letters.length; i++) {
        let tempArr = [];
        for (let j = 0; j < letters[i].length; j++) {
            tempArr.push(letters[j][i]);
        }
        result.push(tempArr);
    }
    const verticalJoin = result.map(ls => ls.join(''));
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        } else if (l.includes(reverseWord)) {
            return true;
        }
    }
    for (let i = 0; i < letters.length; i++) {
        let tempArr = [];
        for (let j = 0; j <= i; j++) {
            let k = i - j;
            tempArr.push(letters[k][j]);
        }
        result2.push(tempArr);
    }


    const diagonalJoin = result2.map(ls => ls.join(''));
    for (const l of diagonalJoin) {
        if (l.includes(word)) {
            return true;
        } else if (l.includes(reverseWord)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;