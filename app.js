function calculate(){


document.querySelector(".pop-up").style.visibility = "visible";
var quantity_msr = document.querySelector("#quantity");
var noOfItems = document.getElementsByClassName("no-of-items")[0];
var totalRate = document.querySelector(".total");
console.log(noOfItems);
console.log(totalRate);

quantity_msr.addEventListener('change', ()=>{
    
    progress = quantity_msr.value;
    console.log(progress);

    console.log(noOfItems.innerHTML)
    noOfItems.innerHTML="No of Items :"+progress;

    
    totalCost = 10*progress;
    console.log(totalCost);
    totalRate.textContent = "Total Cost :"+totalCost+"$"
    
})

}





