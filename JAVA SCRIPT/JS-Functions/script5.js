//VOWELS IN STRING
// function vowelsInString(str){
//     str = str.toUpperCase();
//     let count = 0;
//     for(let alph of str){
//         if(alph === "A" || alph === "E" || alph === "I" || alph === "O" || alph === "U"){
//             count++;
//         }
//     }
//     return count;
// }

// let nums = [1, 2, 3, 4, 5];
// nums.forEach((num) => {
//     console.log(num**2);
// })

// let marks = [66, 94, 51, 84, 95, 91];

// let high = marks.filter((val) => {
//     return val>90;
// })

// console.log(high);

let num = prompt("Enter A Number");
let arr = [];
for(let i = 1;i <= num;i++){
    arr[i-1] = i;
}
console.log(arr);
const sum = arr.reduce((prev,curr) => {
    return prev+curr;
})
console.log(sum);
const res = arr.reduce((prev,curr) => {
    return prev*curr;
})
console.log(res);
