// JavaScript
// Ryan Quigley
// 200239087
// Georgian College
// COMP1073-W2017

var bioButton = document.getElementById("bioButton");
bioButton.addEventListener("click", Click);

var conButton = document.getElementById("conButton");
conButton.addEventListener("click", Click);

var proButton = document.getElementById("proButton");
proButton.addEventListener("click", Click);

var FirstHeading = document.getElementById("FirstHeading");
var FirstParagraph = document.getElementById("FirstParagraph");
var bioSecondParagraph = document.getElementById("bioSecondParagraph");
var conSecondParagraph = document.getElementById("conSecondParagraph");
var proSecondParagraph = document.getElementById("proSecondParagraph");



var H1Content = "I am Ryan Quigley.";
var P1Content = "I am a developer, designer, writer, and gamer.";
var bioP2Content = "I am an advid gamer, I've been playing games since I was very little, "
                + "every game I've played has given me plenty of inspiration for writing my story. "
                + "I enjoy technology, and I enjoyed learnering how to develop and design.";

FirstHeading.textContent = H1Content;
FirstParagraph.textContent = P1Content;



var conP2Content = "<form action='action_page.php'><fieldset><legend>Personal information:</legend>First name:<br><input type='text' name='firstname'><br>Last name:<br><input type='text' name='lastname'><br><br><input type='submit' value='Submit'></fieldset></form>";


function Click() {
   bioSecondParagraph.textContent = bioP2Content;
   conSecondParagraph.textContent = conP2Content;
   proSecondParagraph.textContent = proP2Content;
}