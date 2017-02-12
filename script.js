const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];


const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Beval, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrelle, Augistine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were borin in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; // That means it will keep it
    }    
});
// This can also be written like this:
//const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);




// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(function(inventor) {
    return inventor.first + " " + inventor.last;
})
// This can also be written like this:
//const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
// ... or like this:
//const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function(firstPerson, secondPerson) {
    if ( firstPerson.year > secondPerson.year) {
        return 1;
    } else {
        return -1;
    }
})
// This can also be written like this with arrow function:
//const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1 );
console.table(ordered);




// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce(function (total, inventor) {
    return total += inventor.passed - inventor.year;
}, 0)
// This can also be written like this with arrow function:
//const totalYears = inventors.reduce((total, inventor) => {
//    return total += (inventor.passed - inventor.year);
//}, 0);
console.log(totalYears);



// 5. Sort inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    
//    if (lastGuy > nextGuy) {
//        return -1;
//    } else {
//        return 1;
//    }
// if can be written in one line statement
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);




// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevards_in_Paris

/* 
CHANGE: need to comment this because this code was run in consol on wikipedia site
I can't use it in our html file because it is causing an error

const category = document.querySelector('.mw-category');
// const links = document.querySelectorAll("a");   // needed to turn this nodeList into array to use map function later
// can be done two ways. More clear:
const links = Array.from(category.querySelectorAll('a'));
//or using spread technic
//const links = [...category.querySelectorAll("a")];


// NOTE: if you want to use this format of writing notice no ; after map() 
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));

*/
// 7. Sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort(function (lastOne, nextOne) {
    const [last, first] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return last > bLast ? 1 : -1;
    
});
console.log(alpha);



// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
        obj[item]++;
        return obj;
}, {});
console.log(transportation);