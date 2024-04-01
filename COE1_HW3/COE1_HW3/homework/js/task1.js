function isInputValid(initialAmount, numOfYears, percentage) {
  return (
    !isNaN(initialAmount) &&
    !isNaN(numOfYears) &&
    !isNaN(percentage) &&
    initialAmount >= 1000 &&
    numOfYears >= 1 &&
    percentage <= 100
  );
}

function calculateDeposit(initialAmount, numOfYears, percentage) {
  let totalAmount = initialAmount;
  let totalProfit = 0;

  for (let year = 1; year <= numOfYears; year++) {
    const yearlyProfit = (totalAmount * percentage) / 100;
    totalAmount += yearlyProfit;
    totalProfit += yearlyProfit;
    console.log(year + ' Year');
    console.log('Total profit: ' + totalProfit.toFixed(2));
    console.log('Total amount: ' + totalAmount.toFixed(2));
    console.log('\n');
  }

  return { totalAmount, totalProfit };
}

function displayResults(initialAmount, numOfYears, percentage, totalAmount, totalProfit) {
  alert(
    'Initial amount: ' + initialAmount.toFixed(2) +
    '\nNumber of years: ' + numOfYears +
    '\nPercentage of year: ' + percentage + '%' +
    '\n\nTotal profit: ' + totalProfit.toFixed(2) +
    '\nTotal amount: ' + totalAmount.toFixed(2)
  );
}

const userInputAmount = prompt('Enter initial amount of money:');
const userInputYears = prompt('Enter number of years:');
const userInputPercentage = prompt('Enter percentage of a year:');

const initialAmountValue = parseFloat(userInputAmount);
const numOfYearsValue = parseInt(userInputYears);
const percentageValue = parseFloat(userInputPercentage);

if (isInputValid(initialAmountValue, numOfYearsValue, percentageValue)) {
  const { totalAmount, totalProfit } = calculateDeposit(initialAmountValue, numOfYearsValue, percentageValue);
  displayResults(initialAmountValue, numOfYearsValue, percentageValue, totalAmount, totalProfit);
} else {
  alert('Invalid input data');
}
