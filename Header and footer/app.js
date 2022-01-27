let display = document.querySelector(".verified")

let collapse = document.querySelector(".option-list-mob")

let openlinks = document.querySelector(".nav-toggle")


let close1 = document.querySelector(".fa-times")

collapse.classList.add("hide");

openlinks.addEventListener("click", function() {
    collapse.classList.remove("hide")
})

close1.addEventListener('click', function() {
   close1.parentElement.parentElement.classList.add("hide");
})

