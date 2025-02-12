var signUPform = document.getElementById("signUPform");
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var emailSignUP = document.getElementById("emailSignUP");
var pass = document.getElementById("pass");
var userList = JSON.parse(localStorage.getItem("user")) || [];
if(signUPform){
signUPform.addEventListener("submit",function(event){
    event.preventDefault();
    var user = {
        emailSignUP: emailSignUP.value,
        fName: fName.value,
        lName: lName.value,
        pass: pass.value
    };
    userList.push(user);
    localStorage.setItem("user", JSON.stringify(userList));
    emailSignUP.value = "";
    pass.value = "";
    fName.value = "";
    lName.value = "";
    window.location.href="loginPage.html";
})
}
var loginForm = document.getElementById("loginForm");
var emailLogin = document.getElementById("emailLogin");
var passLogin = document.getElementById("passLogin");
if(loginForm){
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var isValidUser = false;
    var userList = JSON.parse(localStorage.getItem("user")) || [];
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].emailSignUP == emailLogin.value && userList[i].pass == passLogin.value) {
            isValidUser = true;
            break;
        }
    }
    if (isValidUser) {
        alert("Successful login");
        window.location.href="admin.html";
    } else {
        alert("Invalid email or password.");
    }
    emailLogin.value = "";
    passLogin.value = "";
});
}

