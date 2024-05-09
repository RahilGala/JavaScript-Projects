//Marks to Grade
let marks = prompt("Enter Your Marks:");
let grade;

if(marks >= 90 && marks <= 100){
    grade = "A";
}
else if(marks >= 80 && marks <= 89){
    grade = "B";
}
else if(marks >= 70 && marks <= 79){
    grade = "C";
}
else if(marks >= 60 && marks <= 69){
    grade = "D";
}
else if(marks >= 0 && marks <= 59){
    grade = "F";
}

console.log("Your score is",marks,"Your Grade is",grade);