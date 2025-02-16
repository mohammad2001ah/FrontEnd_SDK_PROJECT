// start change theme page and color text 
var theme=document.getElementById("theme");
var cssfile=document.getElementById("cssfile");
var navbar=document.getElementsByClassName("navbar");
cssfile.href=localStorage.getItem("file");
document.body.style.backgroundColor=localStorage.getItem("theme");
theme.addEventListener("change",function(event){
    event.preventDefault();
    if(theme.value =="black"){
        document.body.style.backgroundColor="black";
        localStorage.setItem("theme","black");
        localStorage.setItem("file","cssFloder/darkTheme.css")
        cssfile.href="cssFloder/darkTheme.css";
    }
    if(theme.value =="white"){
        document.body.style.backgroundColor="white";
        localStorage.setItem("theme","white")
        localStorage.setItem("file","cssFloder/whiteTheme.css")
        cssfile.href="cssFloder/whiteTheme.css";
    }
})
// end change theme page and color text
// start store email user and phone number (and login form) in localstorage
var form =document.getElementsByClassName("form")[0];
var email=document.getElementById("email");
var phoneNumber=document.getElementById("phoneNumber");
var userList=[];
if(localStorage.getItem("user")!= null){
    var userList=JSON.parse(localStorage.getItem("user"))
}
else{
    var userList=[];
}
form.addEventListener("submit",function(event){
    event.preventDefault();
    var user={
        email:email.value,
        phoneNumber:phoneNumber.value,
    }
    if(email.value==="" || phoneNumber.value===""){
        alert("Please fill in all fields before submitting.");
    }
    if(email.value != "" && phoneNumber.value !=""){
    alert("we will contact you in 24h,Thanks")
    email.value="";
    phoneNumber.value="";
    }
    userList.push(user);
    localStorage.setItem("user",JSON.stringify(userList));
})
