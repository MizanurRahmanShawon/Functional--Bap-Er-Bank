/*
    console.log('deposit click');
step-1 deposit button added
step-2  get amount from the deposit input field
2.5 make sure convert string deposit amount to a number type
step-4 get the previous deposit total
step-5 calculate new deposit and set the value to the deposit card
step-6 get current balance total
step-7 get calculate the new balance

*/

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  // step-2
  const newDepositAmountString = depositField.value;
  console.log(newDepositAmountString);
  const newDepositAmount = parseFloat(newDepositAmountString);
  // console.log(newDepositAmount);

  // step-3:
  depositField.value = "";

  // step-4
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step-5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step-6
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  // step-7
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
