// This is where it all goes :)

// Burger menu
function myFunction(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("burger-items")[0].classList.toggle("change");
    document.getElementsByClassName("burger-caption")[0].classList.toggle("change");
	document.getElementsByClassName("burger-caption")[1].classList.toggle("change");
}