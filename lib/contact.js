function getInput() {
   var inputName = document.getElementById("name").value;
   var inputEmail = document.getElementById("email").value;
   var inputPhone = document.getElementById("phone").value;
   var inputCompany = document.getElementById("company").value;
   var inputComment = document.getElementById("comment").value;
checkInput(inputName, inputEmail, inputPhone, inputCompany, inputComment);
};

function checkInput(inputName, inputEmail, inputPhone, inputCompany, inputComment)  {
  if(inputName !== "" && inputEmail !== "" && inputPhone !== "") {
    alert('Your email has been sent!');
   clearFields();
  } else if(inputName === "") {
    alert('You must enter your name.');
  } else if(inputEmail === "") {
    alert('You must enter your email address.');
  } else if(inputPhone === "") {
    alert('You must enter your phone number.');
  }
  
     };



function setUpEventListeners() {
   document.getElementById('submit').addEventListener('click', function(e) {
      e.preventDefault();
      getInput();
    });
    document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
       e.preventDefault();
    getInput();
    }
      
  });
};
  
function clearFields() {
document.getElementById("contactform").reset();
  setFocus();
};

function setFocus () {
var inputField = document.getElementById("name");
inputField.focus ();
};

setFocus();
setUpEventListeners();