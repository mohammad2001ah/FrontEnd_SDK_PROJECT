var singUPform = document.getElementById("singUPform");
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var emailSingUP = document.getElementById("emailSingUP");
var pass = document.getElementById("pass");

var userList = JSON.parse(localStorage.getItem("user")) || [];
singUPform.addEventListener("submit",function(event){
    event.preventDefault();
    var user = {
        emailSingUP: emailSingUP.value,
        fName: fName.value,
        lName: lName.value,
        pass: pass.value
    };
    userList.push(user);
    localStorage.setItem("user", JSON.stringify(userList));
    emailSingUP.value = "";
    pass.value = "";
    fName.value = "";
    lName.value = "";
})
var loginForm = document.getElementById("loginForm");
var emailLogin = document.getElementById("emailLogin");
var passLogin = document.getElementById("passLogin");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var isValidUser = false;
    var userList = JSON.parse(localStorage.getItem("user")) || [];

    for (var i = 0; i < userList.length; i++) {
        if (userList[i].emailSingUP === emailLogin.value && userList[i].pass === passLogin.value) {
            isValidUser = true;
            break;
        }
    }

    if (isValidUser) {
        alert("Successful login");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }

    emailLogin.value = "";
    passLogin.value = "";
});
