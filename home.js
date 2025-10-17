let ism=document.querySelector(".name");
let password=document.querySelector(".password");
let buttonn=document.querySelector("button");
let eror=document.querySelector(".error");

buttonn.addEventListener("click",()=>{
    if(ism.value=="Robiya" && password.value=="Abrorova"){
        window.location.href="./home.html"
    }else{
        eror.style.display="block";
        setTimeout(()=>{
            eror.style.display="none"
        },3000)
    }
})