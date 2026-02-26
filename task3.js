const countries = {
    Russia: ['Москва', 'Питер', 'Екат'],
    Ukraine: ['Бахмут', 'Луганск', 'Донецк']
};
function task3(countriesObject) {
    return Object.values(countriesObject).flat().join(', ');
}

//Осуждаю данного рода шутки
console.log(task3(countries));