var passwordInput = document.getElementById("password-input");
var passwordSubmitButton = document.getElementById("password-submit");
var passwordSubmissionText = document.getElementById("password-submitted-text");
var cover = document.getElementById("cover");
let chosenPassword;


 passwordSubmitButton.addEventListener("click", (e) => {
   checkPassword();
 });
 
 function checkPassword() {
   chosenPassword = passwordInput.value;
   if (chosenPassword === "ByYourPowersCombined") { 
     removeCover();
   } else {
     passwordSubmissionText.textContent = "Incorrect password.";
   }
 };


 function removeCover() {
   cover.style.pointerEvents = "none";
   cover.style.filter = "opacity(0%)";
 };
 