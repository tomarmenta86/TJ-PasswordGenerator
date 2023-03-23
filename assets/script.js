// Assignment code here
// Get references to the #generate element
//Changed 'querySelector' to 'getId'
const generateBtn = document.getElementById("generate");

//Added strings for potential characters etc
var stringOfUppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var stringOfLowCase = "abcdefghijklmnopqrstuvwxyz"
var stringOfSymbols = "!@#$%&_?"
var stringOfNum = "0123456789"

//Created for loop functions for variable randomization
function randUppCase(){
    var randUpper = '';

    for (let i = 1; i <= 26; i++) {
        var char = Math.floor(Math.random() * stringOfUppCase.length + 1);
          
        randUpper += stringOfUppCase.charAt(char)
    }
    return randUpper
}

function randLowCase(){
    var randLower = '';

    for (let i = 1; i <= 26; i++) {
        var char = Math.floor(Math.random() * stringOfLowCase.length + 1);
          
        randLower += stringOfLowCase.charAt(char)
    }
    return randLower
}

function randSymbol(){
    var randSymbols = '';

    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * stringOfSymbols.length + 1);
          
        randSymbols += stringOfSymbols.charAt(char)
    }
    return randSymbols
}

function randNum(){
    var randNums = '';

    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * stringOfNum.length + 1);
          
        randNums += stringOfNum.charAt(char)
    }
    return randNums
}

// Write password to the password ID
// Add event listener to generate button
generateBtn.addEventListener("click",()=>{
    //Adding function calls 
    document.getElementById("password").innerText = randUppCase()+randLowCase()+randSymbol()+randNum();
});
