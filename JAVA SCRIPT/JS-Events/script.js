let body = document.querySelector("body");
let btn = document.querySelector("button");
let text = document.querySelector(".text");

let dark = () => {
    body.style.backgroundColor = "black";
    text.innerText = "THIS IS DARK MODE"
    text.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.innerText = "LIGHT MODE";
    btn.style.color = "black";
    btn.removeEventListener("click", dark);
    btn.addEventListener("click", light);
}
let light = () => {
    body.style.backgroundColor = "white";
    text.innerText = "THIS IS LIGHT MODE"
    text.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.innerText = "DARK MODE"
    btn.style.color = "white"
    btn.removeEventListener("click", light);
    btn.addEventListener("click", dark);
}
btn.addEventListener("click", dark);