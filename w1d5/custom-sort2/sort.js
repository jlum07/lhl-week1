var arr = [];

function numSort() {
    arr.sort(function (a, b) {
        // if (a < b) {
        //     return -1;
        // } else if (a > b) {
        //     return 1;
        // }
        // return 0;
        return a - b;
    });
    console.log(arr);
}

function addNum(numb) {
    arr.push(numb);
}

module.exports = {
    addNum: addNum,
    numSort: numSort
};
