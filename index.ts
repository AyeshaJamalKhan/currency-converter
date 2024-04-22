#! usr/bin/env node
import inquirer from "inquirer"

const currency:any= {
    USD:1, //base currency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    NZD:1.69,
    KWD:3.24,
    PKR:280
};

let user_answer = await inquirer.prompt(
    [
      {   
          name:"from",
          message:"Entre from currency",
          type:"list", 
          choices:["USD","EUR","GBP","INR","NZD","KWD","PKR"]
      },
      {
          name:"to",
          message:"Entre to currency",
          type:"list",
          choices:["USD","EUR","GBP","INR","NZD","KWD","PKR"]
      },
      {
        name:"amount",
        message:"Entre your amount",
        type:"number"
      }
    ]
);
let userFromCurrency= user_answer.from
let userToCurrency = user_answer.to
let fromAmount=currency[userFromCurrency] // exchange raate
let toAmount =currency[userToCurrency] // exchange rate
let amount =user_answer.amount
let baseamount = amount / fromAmount // USD base currency  //4
let  convertedAmount = baseamount * toAmount
console.log(convertedAmount);