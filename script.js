const bill = document.getElementById('bill');
const percentage = document.querySelectorAll('.grid-box');
const custom = document.querySelector('.custom');
const people = document.getElementById('people');
const screenOne = document.getElementById('screen1');
const screenTwo = document.getElementById('screen2');
const reset = document.getElementById('reset');
const inputControl = document.querySelector('.container-one-item');

let expression = '';

function isNumberKey(txt, evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode == 46) {
    //Check if the text already contains the . character
    if (txt.value.indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  }
  return true;
}

function showError(input, message) {
  inputControl.className = 'container-one-item second error';

  const small = inputControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input, message) {
  inputControl.className = 'container-one-item second success';
}

const calculate = (tip, total) => {
  screenOne.innerText = tip.toFixed(2);
  screenTwo.innerText = total.toFixed(2);
};

percentage.forEach((percent) => {
  percent.addEventListener('click', (e) => {
    const buttonValue = e.target.innerText;
    const inputValue = eval(bill.value / people.value);
    if (buttonValue === '5%') {
      expression = 5 / 100;
    } else if (buttonValue === '10%') {
      expression = 10 / 100;
    } else if (buttonValue === '15%') {
      expression = 15 / 100;
    } else if (buttonValue === '25%') {
      expression = 25 / 100;
    } else if (buttonValue === '50%') {
      expression = 50 / 100;
    } else {
      expression = custom.value / 100;
    }
    const tip = expression * inputValue;
    const total = tip + inputValue;
    calculate(tip, total);
  });
});

custom.addEventListener('input', (e) => {
  const inputValue = eval(bill.value / people.value);
  const tip = eval(custom.value / 100) * inputValue;
  const total = tip + inputValue;
  calculate(tip, total);
});

people.addEventListener('input', (input) => {
  if (input.target.value === '0') {
    showError(input, "Can't be zero");
  } else {
    showSuccess(input);
  }
});

reset.addEventListener('click', () => {
  bill.value = '';
  people.value = '';
  custom.value = '';
  screenOne.innerText = '0.00';
  screenTwo.innerText = '0.00';
});
