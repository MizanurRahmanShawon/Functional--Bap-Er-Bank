/* 
 step-1 add event handler with the withdraw button
step-2 get the withdraw amount
step-3 clear the withdraw  field
step-5 calculate total withdraw to the section

*/
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw button clicked");

  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(newWithdrawAmount);

  // step-3
  withdrawField.value = "";

  // step-4
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  // step-5
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  // step-6
  const balanceElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step-7
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newBalanceTotal;
});
