//Sort

const numbers = [6, 5, 7, 1, 9, 2, 8, 3];
console.log(numbers);
numbers.sort()
console.log(numbers);


const fiends = ['kofil', 'sujon', 'noyon', 'alif', 'ali']
fiends.sort();
console.log(fiends);


const ages = [2, 22, 11, 44, 100, 14];
//console.log(ages);
//ages.sort();
//console.log(ages);


// ascending //
const sorted_ages = ages.sort(function(a, b) { return a - b})
console.log(sorted_ages);

//descending
const sorted_ages_des = ages.sort(function (a, b) { return b -a})

console.log(sorted_ages_des);








