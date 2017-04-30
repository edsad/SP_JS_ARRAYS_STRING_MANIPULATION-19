console.log("hey strings");

// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

// let button = document.getElementById(btn_message);
// button.addEventListener("click", introduceChicken);

// function intoduceChicken(){
//   console.log("chicken", introduceChicken);
// };

// var dad = document.getElementById("myText");
// var mom = document.getElementById("myFunction");

// thisButton.addEventListener("click", value);

var inputBox = document.getElementById("enterText");
var thisButton = document.getElementById("btn_1");

thisButton.addEventListener("click", getValues);

function getValues(){
  var entered_word = (document.getElementById("enterText").value);
  if (entered_word.match(/^[a-zA-Z]+$/)) {
    // console.log("entered_word", entered_word);
    reversal(entered_word)
    alphabits(entered_word)
    palindrome(entered_word)
  }else{
    alert("No numbers or special characters");
  }
};



function outputToDOM(beefBurrito){
  var newTextBox = document.createElement("h1");
  var outputText = document.createTextNode(beefBurrito);

  newTextBox.appendChild(outputText);
  document.getElementById("btn_1").appendChild(newTextBox);
};


function reversal(cheeseBurrito){
  var reversalArray = cheeseBurrito.toLowerCase().split('').reverse();
  var reversalString = reversalArray.join('');
  outputToDOM("reversed = " + reversalString)
  return reversalString
};


function alphabits(beanBurrito){
  var alphabetizeString = beanBurrito.toLowerCase().split('').sort().join('');
  // console.log("alphabits", alphabits);
  outputToDOM("alphabetized = " + alphabetizeString)
};


function palindrome (chiliCheeseBurrito){
  var isPalindrome = false;
  var reverseTestString = reversal(chiliCheeseBurrito);

  if (chiliCheeseBurrito === reverseTestString) {
    alert(chiliCheeseBurrito + " is palindrome.");
    isPalindrome = true;
  }
  else{
    alert(chiliCheeseBurrito + " is not palindrome.");
  }
  outputToDOM("palindrome = " + isPalindrome)
  return isPalindrome;
};





// function myFunction() {
//     var bubba = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = bubba + " " + '<strong>what thu hell</strong>';
    // console.log(bubba);
// }

// function palindrome(string){
//   var re = /[^A-Za-z-0-9]/g;
//   bubba = bubba.toLowerCase().replace(re, ' ');
//   var len = bubba.length;
//   for (var i = 0; i < len/2; i++){
//     if (bubba[i] !== bubba[len -1 - i]){
//       return false;
//       console.log(bubba[i]);
//     }
//   }
//   return true;
// };
// palindrome();



// function reversal() {
//     var text = document.getElementById("myText").value;
//     document.getElementById("message").innerHTML = '<strong>Chicken</strong>';
// }

// var mam = ["hello"];

//   mam.split("").reverse();
// }
// console.log(mam.split("").reverse());






// function alphabits() {

// }

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);


// document.getElementById("demo").innerHTML = text;



