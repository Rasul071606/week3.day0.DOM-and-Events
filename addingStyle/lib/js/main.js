let currentBackground = document.querySelector(".right_side")

currentBackground.style.backgroundColor = "#d3c26f";

let allh1s = document.querySelectorAll("h1")

console.log(allh1s);

for(let i = 0; i<allh1s.length; i++){
    allh1s[1].style.textShadow = "-6px 5px 2px yellow "
}
