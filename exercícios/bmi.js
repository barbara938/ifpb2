const weight = 100;
const height = 2;

const bmi = weight / height ** 2;

if (bmi < 18.5) {
  result = "Underweight";
} else if (bmi < 24.9) {
  result = "Normal weight";
} else if (bmi < 29.9) {
  result = "Overweight";
} else if (bmi >= 30) {
  result = "Obesity";
}

console.log(result);
