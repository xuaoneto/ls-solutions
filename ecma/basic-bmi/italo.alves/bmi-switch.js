const weight = 60, height = 1.65;
let result;

const bmi = weight/height**2;

switch (true) {
    case (bmi < 18.5):
        result = "Underweight";
        break;
    case (bmi < 24.9):
        result = "Normal weight";
        break;
    case (bmi < 29.9):
        result = "Overweight";
        break;
    default:
        result = "Obesity";
}

console.log(result);
