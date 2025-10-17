let bir = document.querySelector(".text1");
let ikki = document.querySelector(".text2");
let uch = document.querySelector(".text3");

setTimeout(() => {
    bir.style.display = "none"
}, 4000)


setTimeout(()=>{
    ikki.style.display="block"
},4000)


setTimeout(() => {
    ikki.style.display = "none"
}, 6000)


setTimeout(() => {
    uch.style.display = "block"
}, 6000)