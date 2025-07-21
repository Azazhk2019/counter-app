const countElement = document.getElementById("count");
const incrementButton = document.querySelector(".inc-btn");
const decrementButton = document.querySelector(".dec-btn");
const incrementText = document.getElementById("inc-count");
const decrementText = document.getElementById("dec-count");
let count = 0
let incCount = 0;
let decCount = 0;

incrementButton.addEventListener("click",()=>{
    if (count < 15){
        count+=1
        incCount+=1
        countElement.textContent = count
        incrementText.textContent = incCount
    }
    
})

decrementButton.addEventListener("click",()=>{
    if (count > 0){
        count-=1;
        decCount +=1
        countElement.textContent = count
        decrementText.textContent = decCount
    }
})
