// JavaScript
// Ryan Quigley
// 200239087
// Georgian College
// COMP1073-W2017

var ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);


var FirstHeading = document.getElementById("FirstHeading");
var FirstParagraph = document.getElementById("FirstParagraph");
var SecondParagraph = document.getElementById("SecondParagraph");

var H1Content = "I am Ryan Quigley.";
var P1Content = "I am a developer, designer, writer, and gamer.";
var P2Content = "<form action='action_page.php'>"
                + "<fieldset>"
                + "<legend>Personal information:</legend>"
                + "First name:<br><input type='text' name='firstname'><br>"
                + "Last name:<br><input type='text' name='lastname'><br>"
                + "Address:<br><input type='text' name='address'><br>"
                + ""
                + "<input type='submit' value='Submit'>"
                + "</fieldset>"
                + "</form>";

FirstHeading.textContent = H1Content;
FirstParagraph.textContent = P1Content;



function Click() {
   SecondParagraph.innerHTML = P2Content;
      ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}