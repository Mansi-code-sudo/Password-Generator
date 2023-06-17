// const inputSlider=document.querySelector("[data-lengthSlider]") //fetching data slider also syntax to use custom attributes
// const lengthDisplay=document.querySelector("[data-lengthNumber]") //fetching the length of password which will keep changing
// const passwordDisplay=document.querySelector("data-passwordDisplay")//where password will be shown
// const copyBtn=document.querySelector("[data-copy]")//fetching the copy image and copied text both
// const copyMsg=document.querySelector("[data-copyMsg]")//fetching the copy image
// const uppercaseCheck=document.querySelector("#uppercase")
// const lowercaseCheck=document.querySelector("#lowercase")
// const numbersCheck=document.querySelector("#numbers")
// const symbolsCheck=document.querySelector("#symbols")
// const indicator=document.querySelector("[data-indicator]")//showing the strength of the password
// const generateBtn=document.querySelector(".generateButton")//fetching the generate password button
// const allCheckBox=document.querySelectorAll("input[type=checkbox]")
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// //initially the length of the password is 10. there is no password generated and the strength div circle is grey 
// //in color and also 1 checkbox is ticked. so setting the default values..
// let password="";
// let passwordLength=10;
// let checkCount=0;
// handleSlider();


// //set password length
// function handleSlider(){
//     inputSlider.value=passwordLength;
//     lengthDisplay.innerText=passwordLength;
// }
// //set indicator strength color
// function setIndicator(color){
//     indicator.style.backgroundColor=color;
//     indicator.style.boxShadow="10px 20px 30px color";
// }
// //set the random integer function
// function getRndInteger(max,min){
//     return Math.floor(Math.random()*(max-min))+min; //this way we will get whole values from min to max
// }

// function generateRandomNumber(){
//     return getRndInteger(0,9);
// }
// function generateLowerCase(){
//     return String.fromCharCode(getRndInteger(97,123)); //this generates a to z
// }
// function generateUpperCase(){
//     return String.fromCharCode(getRndInteger(65,91)); //this generates A to Z
// }
// function generateSymbol(){
//     //we dont know the ascii values of symbols hence we will make its array and then we will randomly call
//     //one of its index
//     const randNum=getRndInteger(0,symbol.length);
//     return symbol.charAt(ranNum);
// }
// //strength color
// function calcStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;
//     if (uppercaseCheck.checked) hasUpper = true;
//     if (lowercaseCheck.checked) hasLower = true;
//     if (numbersCheck.checked) hasNum = true;
//     if (symbolsCheck.checked) hasSym = true;
  
//     if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
//       setIndicator("#0f0");
//     } else if (
//       (hasLower || hasUpper) &&
//       (hasNum || hasSym) &&
//       passwordLength >= 6
//     ) {
//       setIndicator("#ff0");
//     } else {
//       setIndicator("#f00");
//     }
// }

// //to copy using API
// async function copyContent(){
//     try{
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copyMsg.innerText="Copied!";
//     }
//     catch(e){
//         copyMsg.innerText="Failed!";
//     }
//     //to make copy wala span visible
//     copyMsg.classList.add("active");

//     setTimeout( ()=>{
//         copyMsg.classList.remove("active");
//     },2000);
// }


// function shufflePassword(array) {
//     //Fisher Yates Method
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;
// }

// //adding eventlistener on checkboxes
// function handleCheckBoxChange(){
//     checkCount=0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//         checkCount++;
//     });
//     //special condition
//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//     }
// }
// //this means that for every checkbox, when ever change is occuring, updation is needed. So that password 
// // generation can become simple.
// allCheckBox.forEach( (checkbox) =>{
//     checkbox.addEventListener('click',handleCheckBoxChange());
// })

// //the following function, we add an eventListener meaning jab bhi slider pe hum kuch input denge tab, slider 
// // ki jo bhi value ho usse password ki length me show krdo

// inputSlider.addEventListener('input', (e)=>{
//     passwordLength=e.target.value;
//     handleSlider();
// })

// //we can only copy the password when it is not empty

// copyBtn.addEventListener('click', ()=>{
//     if(passwordDisplay.value){
//         copyContent();
//     }
// })

// generateBtn.addEventListener('click', ()=>{
//     //none of the checkboxes are selected
//     if(checkCount<=0) return;

//     //special condition
//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//     }

//     //main password generating area..coming to you in 5..4..3..2..1..GOOO!
//     //remove old password
//     password="";
//     //lets put the stuff mentioned by checkboxes

//     let funcArr = [];

//     if(uppercaseCheck.checked)
//         funcArr.push(generateUpperCase);

//     if(lowercaseCheck.checked)
//         funcArr.push(generateLowerCase);

//     if(numbersCheck.checked)
//         funcArr.push(generateRandomNumber);

//     if(symbolsCheck.checked)
//         funcArr.push(generateSymbol);

//     //compulsory addition
//     for(let i=0; i<funcArr.length; i++) {
//         password += funcArr[i]();
//     }
//     console.log("COmpulsory adddition done");

//     //remaining adddition
//     for(let i=0; i<passwordLength-funcArr.length; i++) {
//         let randIndex = getRndInteger(0 , funcArr.length);
//         console.log("randIndex" + randIndex);
//         password += funcArr[randIndex]();
//     }
//     console.log("Remaining adddition done");
//     //shuffle the password
//     password = shufflePassword(Array.from(password));
//     console.log("Shuffling done");
//     //show in UI
//     passwordDisplay.value = password;
//     console.log("UI adddition done");
//     //calculate strength
//     calcStrength();
// });

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc");


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+" % 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow - HW (Not Working)
    //align the shadow properly
    indicator.style.boxShadow =" 6px 6px 6px 6px color";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("Compulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});