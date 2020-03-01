const weight = 60;
const height = 1.65;
let category;

const bmi = weight / (height * height);

switch (true) {
    case bmi < 18.5:
        category = 'Underweight';
        break;

    case bmi >= 18.5 && bmi <= 24.9:
        category = 'Normal weigh';
        break;

    case bmi >= 25 && bmi <= 29.9:
        category = 'Overweight';
        break;

    default:
        category = 'Obesity'
}


console.log(bmi);
console.log(category);