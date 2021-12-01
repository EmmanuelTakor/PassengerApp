let Counter = document.querySelector("#counter");
let saveButton = document.querySelector("#save")
saveButton.addEventListener("click",save)
let Button = document.querySelector("#incrementBtn");
let countDisplayer = document.querySelector("#countDisplay");
Button.addEventListener("click", add)
let count= 0;
function add(){
count += 1;
Counter.innerText = count;
}
function save(){
    countDisplayer.innerHTML+= count + " - ";
    Counter.innerText = 0;

    count = 0;
}