var link = document.querySelector(".find_hotel");
var popup = document.querySelector(".visually-hidden-form");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});