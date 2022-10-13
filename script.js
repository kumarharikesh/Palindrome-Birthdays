const date=document.querySelector("#date");
const outputTag = document.querySelector(".output");
const reset = document.querySelector("#clear");

var dateValue;
var dateValue0;
date.addEventListener("input", function(){
    dateValue0 = date.value;
    dateValue = dateValue0.replaceAll('-','');
})

function isPalindrome(str){
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedStr = reversedListOfChar.join("");
    if (str===reversedStr){
        return true;
    }return false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Calculating the polindromic birthday
async function isPolindromeBirth() {

    outputTag.innerText ="";
    outputTag.style.textAlign = "left";
    outputTag.setAttribute("placeholder", "Loading");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading...");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading...");
    await sleep(500);

    if(isPalindrome(dateValue)){
        outputTag.innerText = `Wow! Your birthday "${dateValue0}" is palindrome!`;
        outputTag.style.textAlign = "center";
        outputTag.style.color = "green";
    }else{
        outputTag.innerText = `Sorry! Your birthday "${dateValue0}" is not a palindrome!`;
        outputTag.style.textAlign = "center";
        outputTag.style.color = "red";
    }
}

reset.addEventListener("click", function() {
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("polindrome-birth-form").addEventListener("submit", function(event) {
    isPolindromeBirth();
    event.preventDefault();
});

