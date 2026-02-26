const items = [
    { category: 'woof', value: 4 },
    { category: 'meow', value: 44 },
    { category: 'woof', value: 1 },
    { category: 'kukareku', value: 1488 },
    { category: 'meow', value: 44 },
    { category: 'woof', value: 9 }
];

function task4(arr) {
    return arr.reduce((result, item) => {
        result[item.category] = (result[item.category] || 0) + item.value;
        return result;
    }, {});
}

console.log(task4(items));