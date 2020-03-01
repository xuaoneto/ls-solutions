const weight = 60;
const height = 1.65;
let category = 'Underweight';


const bmi = weight / (height * height);


if (bmi >= 30) {
    category = 'Obesity';
}

else if (bmi >= 25) {
    category = 'Overweight';
}

else if (bmi >= 18.5) {
    category = 'Normal weight';
}


console.log(bmi);
console.log(category);

