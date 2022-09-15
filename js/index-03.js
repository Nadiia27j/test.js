

// модуль 3

// 1/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
 
//  };

// 2/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//    owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   };



// 3/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;


// 4/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };
  
// // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];

// 5/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];



// 6/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");
  


// 7/41

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica", city : "Kingston"};
  

// 8/41

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
//   // Change code below this line
//   // Change code above this line
// };




// 9/41

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//  [emailInputName]: "henry.carter@aptmail.com",
//  [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };



// 10/41

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
//   for (const key in apartment) {
//     console.log(key);
// }
// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// // Change code below this line
  



// 11/41

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Change code above this line
// }



// 12/41

// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
  
//     for (const key of keys) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
//     // Change code below this line
//    console.log(propCount);
//     // Change code above this line
//     return propCount;
// }
  


  
// 13/41

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
  
//   for (const key  of keys) {
//     values.push(apartment[key]);
// }



// 14/41

// function countProps(object) {
//     // Change code below this line
    
//     const keys = Object.keys(object);
  
//     return keys.length;
//     // Change code above this line
// }
  


// 15/41

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  

// 16/41

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//    const values = Object.values(salaries);
//    for (const value of values) {
//      totalSalary += value;
//    }
//     // Change code above this line
//     return totalSalary;
//   }


// 17/41  

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

// 18/41

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//      if (product.name === productName) {
//        return (product.price);
//      }
//    }
//    return null;
  
//     // Change code above this line
//   }
  

// 19/41

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
  
//   function getAllPropValues(propName) {
    
//     let value = [];
  
//    for (const product of products) {
//       if(product.hasOwnProperty(propName)) {
//         value.push(product[propName]);
//       }
//    }
//    return value;
    
// }
  

// 20/41

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
    
//    let total = 0;
  
//    for (const product of products) {
//      if (product.name === productName) {
//        total = product.price * product.quantity;
//      }
//    }
//    return total;
  
// }
  
//  21/41

//  const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const { yesterday, today, tomorrow } = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  
// 22/41

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
  
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  
// 23/41

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
  
//   const  { yesterday: highYesterday,
//   today: highToday, 
//   tomorrow: 
//   highTomorrow, 
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
  
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24/41

// 1 variant:

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// 2 variant:

// for (const color of colors) {
//     const { hex, rgb } = color;
  
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
  
// 25/41

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
  
//   const { today: { high: highToday, 
//   low: lowToday,
//   icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//    tomorrow: { high: highTomorrow,
//    low: lowTomorrow,
//    icon: tomorrowIcon  = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;
  

// 26/41
  

// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow,  high:  todayHigh },   tomorrow: { low: tomorrowLow, high:  tomorrowHigh }} =  forecast;


//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;
  
    
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
  

// 27/41

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// 28/41

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores,
//  ...secondGroupScores,
//   ...thirdGroupScores];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// 29/41

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings, public: false, withPassword: true, timePerQuestion: 30};
  

// 30/41

// function makeTask(data) {
//     // const completed = false;
//     // const category = "General";
//     // const priority = "Normal";
//     // Change code below this line
  
//    const { text,  completed = false, category = "General", priority = "Normal", } = data;
  
  
//    return {
//       category: category,
//       priority: priority,
//       ...data,
//       completed: completed,
//     }; 
    
// }
  

// 31/41


// function add(...args) {
//     let total = 0;
   
//     for (let arg of args) {
//      total += arg;
//     }
   
//     return total;
//    }
   

// 32/41

// function addOverNum(num, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if (arg > num) {
//         total += arg;
//       }
      
//     }
//     return total;
// }

// 33/41

// function findMatches(numbers, ...args) {
//     const matches = []; 
  
//     for ( const number of args) {
//       if (numbers.includes(number)) {
//         matches.push(number);
//       }
//     }
//     return matches;
//   }



// 34/41

// const bookShelf = {
  
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
  
//     removeBook(bookName) {
//       return `Deleting book ${bookName}`;
//     },
  
//     updateBook(oldName, newName) {
//       return `Updating book ${oldName} to ${newName}`;
//     }
    
//   };
  
  
// 35/41

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
    
//     const bookIndex = this.books.indexOf(oldName)
//     this.books.splice(bookIndex, 1, newName);
//     },
//   };
  

// 36/41

// const atTheOldToad = {

//     potions: [],
     
//    };

// 37/41

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     }
    
// };
   

// 38/41

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
     
//      this.potions.push(potionName);
  
//     },
// };
  
// 39/41

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
      
//      const potions = this.potions.indexOf(potionName);
//       this.potions.splice(potions, 1);
  
//     },
// };


// 40/41

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
      
//       const toadIndex = this.potions.indexOf(oldName)
//         this.potions.splice(toadIndex, 1, newName);
      
//     },
// };


// 41/41

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
    
//     addPotion(newPotion) {
//       if (this.potions.includes(newPotion)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
  
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };
  
   

// рефакторинг по завданню :


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 }
//     ],
    
//     getPotions() {
//       return this.potions;
//     },


//     addPotion(newPotion) {
//       for (const { name } of this.potions) {
//         if (name.toLowerCase() === newPotion.name.toLowerCase()) {
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//       }
//       this.potions.push(newPotion);
//     },


//     removePotion(potionName) {
//       let potionIndex = -1;
//         for (let i = 0; i < this.potions.length - 1; i += 1) {
//         if (this.potions[i].name.toLowerCase() === potionName.toLowerCase()) {
//           potionIndex = i;
//           break;
//         }
//       }
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//       this.potions.splice(potionIndex, 1);
//     },


//     updatePotionName(oldName, newName) {
//           let potionIndex = -1;
//           for (const potion of this.potions) {
//               if (potion.name.toLowerCase() === oldName.toLowerCase()) {
//                   potionIndex = 1;
//                   potion.name = newName;
//                   break;
//               }
//             }
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//     },
    
// };
  
