const input = document.querySelector("input");
const showHide = document.querySelector(".show_hide");
const indicator = document.querySelector(".indicator");
const iconText = document.querySelector(".icon-text");
const text = document.querySelector(".text");

showHide.addEventListener("click", ()=>{
if(input.type === "password"){
input.type = "text";
showHide.classList.replace("fa-eye-slash","fa-eye");
}else {
input.type = "password";
showHide.classList.replace("fa-eye","fa-eye-slash");
}
});

let alphabet = /[a-z A-Z]/, 
numbers = /[0-9]/,
scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; 
input.addEventListener("keyup", ()=>{
indicator.classList.add("active");
let val = input.value;
if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
text.textContent = "Password is weak";
input.style.borderColor = "#FF6333";
showHide.style.color = "#FF6333";
iconText.style.color = "#FF6333";
}
if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
text.textContent = "Password is medium";
input.style.borderColor = "#cc8500";
showHide.style.color = "#cc8500";
iconText.style.color = "#cc8500";
}
if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
text.textContent = "Password is strong";
input.style.borderColor = "#22C32A";
showHide.style.color = "#22C32A";
iconText.style.color = "#22C32A";
}
if(val == ""){
indicator.classList.remove("active");
text.textContent="";
input.style.borderColor = "#A6A6A6";
showHide.style.color = "#A6A6A6";
iconText.style.color = "#A6A6A6";
}
});