
modul 1

1/36

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

const productName = "Droid";
const pricePerItem = 2000;

2/36

let productName = "Droid";
 productName = "Repair droid";
let pricePerItem = 2000;
 pricePerItem = 3500;



// const pricePerItem = 2000;
// let pricePerItem = 3500;
// const productName = "Droid";
// let productName = "Repair droid";


3/36

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;


4/36

const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = (pricePerItem * orderedQuantity); // 1400;
// console.log(pricePerItem * orderedQuantity); // 1400


5/36

const productName = "Droid";
const pricePerItem = 3500;

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


6/36

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee; // 4850
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`


7/36

function sayHi() {
    console.log("Hello, this is my first function!");
}
sayHi()


8/36

function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);


9/36

function add(a, b, c) {
    return a + b + c;
   console.log("return a + b + c");
}
  
add(2, 5, 8); // 15
  
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));


10/36

function makeMessage (name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
};


11/36

function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = (orderedQuantity * pricePerItem);
    return totalPrice;
};


12/36

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   // Change code above this line
//   return message;
// }

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    return message = `You ordered droids worth ${(orderedQuantity * 
        pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee}
             credits) is included in total price.`;
    
}


13/36

function isAdult(age) {
    const passed = (age >= 18);
    return passed;
}


14/36

function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password === SAVED_PASSWORD;
  
    return isMatch;
}


15/36

function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
}


16/36

function checkStorage(available, ordered) {
    let message;
   
    if (available >= ordered) { 
      message = 'Order is processed, our manager will contact you.';
    } else {
      message = 'Not enough goods in stock!';
    }
  
    return message;
}


17/36

let a = 5;
let b = 10;
let c = 15;
let d = 20;


a += 2;
b -= 4;
c *= 3;
d /=10;


18/36

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
  const totalprice = (pricePerDroid * orderedQuantity);
  
  if (totalprice > customerCredits){ 
    message = 'Insufficient funds!';
  } 
  else {
     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalprice} credits left`;
  }
   
    return message;
}


19/36

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { 
      message =  'Canceled by user!';
    } else if (ADMIN_PASSWORD === password) { 
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
}


20/36

function checkStorage(available, ordered) {
    let message;
   
   if (ordered === 0) { 
      message =  'There are no products in the order!';
    } else if (ordered >= available) { 
      message = 'Your order is too large, there are not enough items in stock!';
    } else {
      message = 'The order is accepted, our manager will contact you';
    }

    return message;
}
  

21/36

function isNumberInRange(start, end, number) {
    const isInRange = (number >= start && number <= end); 
  
    return isInRange;
}


22/36

function checkIfCanAccessContent(subType) {
    const canAccessContent = (subType === "pro" || subType === "vip");
  
    return canAccessContent;
}


23/36


function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; 
  
    return isNotInRange;
}


24/36

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    
     if (totalSpent < 5000) {
       console.log(BASE_DISCOUNT);
       discount = 0;
     }else if (totalSpent >= 5000 && totalSpent < 20000) {
        console.log(BRONZE_DISCOUNT);
        discount = 0.02;
      }else if (totalSpent >= 20000 && totalSpent < 50000) {
        console.log(SILVER_DISCOUNT);
        discount = 0.05;
      }else {
        console.log(GOLD_DISCOUNT);
        discount = 0.1;
      }
     
   
    return discount;
}


25/36

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
    // if (ordered > available) {
    //   message = "Not enough goods in stock!";
    // } else {
    //   message = "The order is accepted, our manager will contact you";
    // }
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    // Change code above this line
    return message;
}


26/36

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  //   if (password === ADMIN_PASSWORD) {
  //  message = "Access is allowed";
  //   }else {
  //     message = "Access denied, wrong password!";
  //   }
     message = password === ADMIN_PASSWORD ? "Access is allowed" :"Access denied, wrong password!";
      
   
    return message;
}


27/36

function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
   switch (type) { // Change this line
      case "starter": // Change this line
        price = 0; // Change this line
        break;
  
      case "professional": // Change this line
        price = 20; // Change this line
        break;
  
      case "organization": // Change this line
        price = 50; // Change this line
        break;
    }
    // Change code above this line
    return price;
}


28/36

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  
    // if (password === null) {
    //   message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //   message = "Welcome!";
    // } else {
    //   message = "Access denied, wrong password!";
    // }
  
    switch (password) { 
      case  null: 
        message = "Canceled by user!"; 
        break;
  
      case  ADMIN_PASSWORD: 
        message ="Welcome!"; 
        break;
  
      default: 
      message = "Access denied, wrong password!";
       
    }
  
    // Change code above this line
    return message;
}


29/36

function getShippingCost(country) {
    let message;
    // Change code below this line
   switch (country) { 
       case "China":
        message = "Shipping to China will cost 100 credits"; 
        break;
  
      case "Chile": 
        message = "Shipping to Chile will cost 250 credits"; 
        break;
  
      case "Australia": 
        message = "Shipping to Australia will cost 170 credits"; 
        break;
        
      case "Jamaica": 
        message = "Shipping to Jamaica will cost 120 credits"; 
        break;
  
      default: 
      message = "Sorry, there is no delivery to your country"; 
    }
    // Change code above this line
    return message;
}


30/36

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; 
  
    return message;
}


31/36

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


32/36

function getSubstring(string, length) {
    const substring = string.slice(string,length); 
  
    return substring;
}


33/36

function formatMessage(message, maxLength) {
    let result;
   
   if (message.length <= maxLength) {
      result = message;
    } else {
      result = message.slice(message, maxLength) + "...";
    }
    
    return result;
}


34/36

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); 
  
    return normalizedInput;
}


35/36

function checkForName(fullName, name) {
    const result = (fullName.includes(name)); 
     return result;
}


36/36

function checkForSpam(message) {
    let result;
    // Change code below this line
    result = message.toLowerCase();
   
  //  checkForSpam(spam ||  sale) === true;
    // Change code above this line
    return result.includes("spam") || result.includes("sale");
}
   
  



  














