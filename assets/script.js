// Assignment code here
// Get references to the #generate element
//Changed 'querySelector' to 'getId'
const generateBtn = document.getElementById("generate");

//Added strings for potential characters etc

//Created for loop functions for variable randomization
function randUppCase(){
    var stringOfUppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var randUpper = '';

    for (let i = 1; i <= 26; i++) {
        var char = Math.floor(Math.random() * stringOfUppCase.length + 1);
          
        randUpper += stringOfUppCase.charAt(char)
    }
    return randUpper
}

function randLowCase(){
    var stringOfLowCase = "abcdefghijklmnopqrstuvwxyz"
    var randLower = '';

    for (let i = 1; i <= 26; i++) {
        var char = Math.floor(Math.random() * stringOfLowCase.length + 1);
          
        randLower += stringOfLowCase.charAt(char)
    }
    return randLower
}

function randSymbol(){
    var stringOfSymbols = "!@#$%&_?"
    var randSymbols = '';

    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * stringOfSymbols.length + 1);
          
        randSymbols += stringOfSymbols.charAt(char)
    }
    return randSymbols
}

function randNum(){
    var stringOfNum = "0123456789"
    var randNums = '';

    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * stringOfNum.length + 1);
          
        randNums += stringOfNum.charAt(char)
    }
    return randNums
}
//Created function for password generation
function passwordGenerator(){
    var randPass = '';
    var genPass = '';
//Added if statements to determine what to include in password
    if(document.querySelector('input[id="num"]:checked'))
    {
        randPass += randNum();
    }
    if(document.querySelector('input[id="sym"]:checked'))
    {
        randPass += randSymbol();
    }
    if(document.querySelector('input[id="low"]:checked'))
    {
        randPass += randLowCase();
    }
    if(document.querySelector('input[id="upp"]:checked'))
    {
        randPass += randUppCase();
    }

    var inputLen = document.getElementById("len").value;

    for (let i = 0; i <= inputLen; i++) {
        var char = Math.floor(Math.random() * randPass.length);
          
        genPass += randPass.charAt(char)
    }

    return genPass
}

// Write password to the password ID
// Add event listener to generate button
generateBtn.addEventListener("click",()=>{
//Adding function calls 
    document.getElementById("password").innerText = passwordGenerator();
});
