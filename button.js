function showAlert() {
    alert("Thank you for your consumption.");
 }
 function validateFirstName(){
    var fname = document .getElementById("firstName") .value;
    var input = /[a-zA-Z]{3,15}/;
    if (input.test(fname)){
        document .getElementById("firstNamePrompt").style.color="green";
        document .getElementById("firstNamePrompt").innerHTML = "valid";
        return true}
    else{document .getElementById("firstNamePrompt").style.color="red";
         document .getElementById("firstNamePrompt").innerHTML="invalid";
         return false}
}
function validateLastName(){
    var fname = document .getElementById("lastName") .value;
    var input = /[a-zA-Z]{3,15}/;
    if (input.test(fname)){document .getElementById("lastNamePrompt").style.color="green";
                           document .getElementById("lastNamePrompt").innerHTML = "valid";return true}
    else{document .getElementById("lastNamePrompt").style.color="red";
         document .getElementById("lastNamePrompt").innerHTML="invalid";return false}
}
