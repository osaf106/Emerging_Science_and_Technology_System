document.getElementById("contact-form").onsubmit = function() {
    
  //Validate Email
   if(document.getElementById("form-email-field").value === "") {
        document.getElementById("emailError").innerHTML = "Invalid Email! Please try again.";
        document.getElementById("emailError").className = "alert alert-danger";
        document.getElementById("emailError").style.display = "block";
    }

 }
document.getElementById("term-field").style.display = "none";
document.getElementById("checkbox-form").onclick = function() {
  if(document.getElementById("checkbox-form").checked) {
    document.getElementById("term-field").style.display = "block";
  } else {
    document.getElementById("term-field").style.display = "none";
  }
}