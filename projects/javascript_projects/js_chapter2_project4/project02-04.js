/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Santino Taylor
      Date:   10/19/2026

      Filename: project02-04.js
 */

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);


function calcTotal() {
   const DEFAULT_VALUE = 0;
   let cost = 0;
   let tax = 0;
   let totalCost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   cost += buyChicken ? CHICKEN_PRICE: DEFAULT_VALUE;
   cost += buyHalibut ? HALIBUT_PRICE: DEFAULT_VALUE;
   cost += buyBurger ? BURGER_PRICE: DEFAULT_VALUE;
   cost += buySalmon ? SALMON_PRICE: DEFAULT_VALUE;
   cost += buySalad ? SALAD_PRICE: DEFAULT_VALUE;

   tax = cost * SALES_TAX;
   totalCost = cost + tax;
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
