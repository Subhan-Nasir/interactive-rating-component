let rating = null;

function setRating(num){
    rating = num;
    let ratingSpan = document.getElementById("rating-span");
    ratingSpan.textContent = rating.toString();
    document.getElementById("submit-button").disabled = false;
}

function onSubmit(){
    
    console.log("Submit pressed")

    document.getElementById("rating-state").style.display = "none";
    document.getElementById("thank-you-state").style.display= "";

    console.log(`${document.getElementById("rating-state").hidden }, ${document.getElementById("rating-state").hidden }`);

}