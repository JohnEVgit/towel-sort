
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let sortArr = [];

    if (!matrix) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {

        if ( i%2 === 1 ) {
            sortArr = sortArr.concat(matrix[i].reverse());
        } else {
            sortArr = sortArr.concat(matrix[i]);
        }

    }

    return sortArr;

};
