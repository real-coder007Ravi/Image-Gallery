// Code For Adding behaviour To the Image Gallery
let gallery = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

gallery.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	gallery.scrollLeft += evt.deltaY;
	gallery.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () => {
	gallery.style.scrollBehavior = "smooth";
	gallery.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
	gallery.style.scrollBehavior = "smooth";
	gallery.scrollLeft -= 900;
});
