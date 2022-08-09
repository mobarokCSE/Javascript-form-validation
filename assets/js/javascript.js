 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const cpassword = document.getElementById('cpassword');

 form.addEventListener('submit', (event) => {
     event.preventDefault();
     validate();
 })

 const sendData = (usernameVal, sRate, count) => {
     if (sRate === count) {
         alert('Registration Successful');
         swal("Welcome!" + usernameVal, "Registration Successful", "success");
         location.href = `demo.html?username=${usernameVal}`
     }
 }

 // for final data validation
 const successMsg = (usernameVal) => {
     let formCon = document.getElementsByClassName('form-control');
     for (var i = 0; i <= formCon.length; i++) {
         var count = formCon.length - 1;
         if (formCon[i].className === "form-control success") {
             var sRate = 0 + i;
             sendData(usernameVal, sRate, count);
         } else {
             return false;
         }
     }
 }

 // more email validation
 const isEmail = (emailVal) => {
     var atSymbol = emailVal.indexOf("@");
     if (atSymbol < 1) return false;
     var dot = emailVal.lastIndexOf('.');
     if (dot <= atSymbol + 2) return false;
     if (dot === emailVal.length - 1) return false;
     return true;
 }

 // define the validate function

 const validate = () => {
     const usernameVal = username.value.trim();
     const emailVal = email.value.trim();
     const passwordVal = password.value.trim();
     const cpasswordVal = cpassword.value.trim();

     // validate Username
     if (usernameVal === "") {
         setErrorMsg(username, 'Username can not blank');
     } else if (usernameVal <= '2') {
         setErrorMsg(username, 'Username min 3 character');
     } else {
         setSuccessMsg(username);
     }

     // validate email
     if (emailVal === "") {
         setErrorMsg(email, 'email can not blank');
     } else if (!isEmail(emailVal)) {
         setErrorMsg(emailVal, 'email not valid');
     } else {
         setSuccessMsg(email);
     }

     // validate password
     if (passwordVal === "") {
         setErrorMsg(password, 'email can not blank');
     } else if (passwordVal <= 5) {
         setErrorMsg(password, 'Minimum 6 character');
     } else {
         setSuccessMsg(password);
     }
     // validate Conform password
     if (cpasswordVal === "") {
         setErrorMsg(cpassword, 'Conform password can not blank');
     } else if (cpasswordVal != passwordVal) {
         setErrorMsg(cpassword, 'Conform password not matching');
     } else {
         setSuccessMsg(cpassword);
     }
     successMsg(usernameVal);



     function setErrorMsg(input, errormsgs) {
         const formControl = input.parentElement;
         const small = formControl.querySelector('small');
         formControl.className = "form-control error";
         small.innerText = errormsgs;
     }

     function setErrorMsg(input, errormsgs) {
         const formControl = input.parentElement;
         formControl.className = "form-control success";
     }
 }