// start change theme page and color text 
var theme=document.getElementById("theme");
var cssfile=document.getElementById("cssfile");
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
if(localStorage.getItem("user")!=null){
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
    alert("we will contact you in 24h,Thanks")
    userList.push(user);
    localStorage.setItem("user",JSON.stringify(userList));
    email.value="";
    phoneNumber.value="";
})
//end store email user and phone number in localstorage
//start turn(on ,off) language
// var changeLang=document.getElementById("changeLang");
// var labellang=document.getElementById("labellang");
// var lang=localStorage.getItem("lang");
// if(lang == "arabic"){
//     document.dir="rtl";
//     labellang.innerText="AR"
//     changeLang.checked = false;
// }
// else{
//     document.dir="ltr";
//     labellang.innerText="EN"
//     changeLang.checked = true;
// }

// changeLang.addEventListener("click",function(){
//     if(changeLang.checked==false){
//         document.dir="rtl";
//         labellang.innerText="AR"
//         localStorage.setItem("lang","arabic")
//     }
//     else{
//         document.dir="ltr";
//         labellang.innerText="EN"
//         localStorage.setItem("lang","english")
//     }
// })
// end turn(on ,off) language