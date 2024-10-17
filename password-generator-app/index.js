const inputSlider = document.querySelector("[data-lengthSlider]"); //custom attribute
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()+=_-{}[]|:\;"<>,.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
// upperCaseCheck.checked = true; isse bhi ho sakta h!!!
handleSlider();
//set strength circle color gray
setIndicator("#ccc");

//Setting password length
function handleSlider () {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber() {
    return getRandomInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 90));
}

function generateSymbol() {
    const randNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(upperCaseCheck.checked) {
        hasUpper = true;
    }
    if(lowerCaseCheck.checked) {
        hasLower = true;
    }
    if(numbersCheck.checked) {
        hasNum = true;
    }
    if(symbolsCheck.checked) {
        hasSym = true;
    }

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch(e) {
        console.log("Couldn't copy ",e);
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
});

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    //special condition
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

function shufflePassword (array) {
    //Fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => {
        str += el;
    })
    return str;
}

generateBtn.addEventListener('click', () => {
    if (checkCount <= 0) {
        return;
    }
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    //remove old password
    password = "";

    // if(upperCaseCheck.checked) {
    //     password += generateUpperCase();
    // }
    // if(lowerCaseCheck.checked) {
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];
    if (upperCaseCheck.checked) {
        funcArr.push(generateUpperCase);
    }
    if (lowerCaseCheck.checked) {
        funcArr.push(generateLowerCase);
    }
    if (numbersCheck.checked) {
        funcArr.push(generateRandomNumber);
    }
    if (symbolsCheck.checked) {
        funcArr.push(generateSymbol);
    }

    for (let i = 0; i <funcArr.length; i++){
        password += funcArr[i]();
    }

    for (let i = 0; i < (passwordLength - funcArr.length); i++) {
        let randIndex = getRandomInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    //shuffle the password
    password = shufflePassword(Array.from(password));

    //show in UI
    passwordDisplay.value = password;

    //calculation strength
    calcStrength();
})