/*
    console.log('deposit click');
step-1 deposit button added
step-2  get amount from the deposit input field
2.5 make sure convert string deposit amount to a number type
step-4 get the previous deposit total

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
});
