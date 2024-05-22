const buttonElement = document.querySelectorAll('.number');
const symbolElement = document.querySelectorAll('.symbol');

const answerElement = document.querySelector('.js-answer');
const inputElement = document.querySelector('.js-inputs');

const clearButton = document.querySelector('.clear');
const calculate = document.querySelector('.solve');
const removeButton = document.querySelector('.cancle');
const percent = document.querySelector('.percentage');

let answer;
let calculation = '';
let inputpercent = '';

 buttonElement.forEach(button => {
  //to loop through all your numbers.
   button.addEventListener('click', () => {
    calculation += button.innerHTML;
    inputElement.value = calculation;                         ;
  });
 });

 symbolElement.forEach(button => {
  //to loop through all ur sign/symbols.
   button.addEventListener('click', () => {
    calculation += button.innerHTML;
    inputElement.value = calculation;                         ;
  });
 });

 clearButton.addEventListener('click', () => {
  //to remove all numbers and have an empty string.
  calculation = '';
  inputElement.value = calculation;
  answerElement.value = calculation;
 })

 removeButton.addEventListener('click', () => {
  //to remove every each last number from the concatenanted string.
  calculation = calculation.slice(0, -1);
  inputElement.value = calculation;
 })

 calculate.addEventListener('click', () => {
  //to convert the string to actual numbers and arithmetic and evaluate.
    try {
      const result = eval(calculation);
      answerElement.value = result;
      calculation = '';
    } catch (error) {
      answerElement.value = 'Error';
    }
 })

percent.addEventListener('click', () => {
  //answer comes first before concartinating the % sign because it give an error of NAN if it the other way round.
  inputpercent = eval(calculation / 100);
  answerElement.value = inputpercent;
  calculation += '%';
  inputElement.value = calculation;
})
