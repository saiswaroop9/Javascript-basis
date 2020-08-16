console.log("This is all about events in Javascript");

document.getElementById("heading").addEventListener("click", function(event) {
    console.log("You have clicked it");
    console.log(event );
})