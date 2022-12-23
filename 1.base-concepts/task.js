"use strict"

// Task #1
function solveEquation(a, b, c) {

  let d = Math.pow(b, 2) - 4 * a * c;
  let res = [];
  
  if(d < 0) {
    return res;
  } else if (d === 0) {
    res.push(-b/(2 * a));
  } else if (d > 0) {
    res.push( (-b + Math.sqrt(d) )/(2 * a) ); 
    res.push( (-b - Math.sqrt(d) )/(2 * a) );
  }
  return res;
}

// Task #2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } 
  if(countMonths < 0 || amount < 0) {
    return false;
  } 

  let p = percent / 100 / 12;
  let body = amount - contribution;
  let monthlyPayment = body * (p + (p / ((Math.pow((p + 1), countMonths) - 1))));
  let overallPayment = Number((monthlyPayment * countMonths).toFixed(2))
  return overallPayment
}