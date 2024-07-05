let burger = document.querySelector('.header__burger'),
    list = document.querySelector('.header__nav-list'),
    opacity = document.querySelector('.opacity');


burger.addEventListener('click', function() {
    burger.classList.toggle("active");
    list.classList.toggle("active")
    if(list.classList.contains("active")) {
        opacity.style.display = "block";
        opacity.addEventListener("click", function() {
            if(opacity.style.display == "block") {
                burger.classList.remove("active");
                list.classList.remove("active");
                opacity.style.display = "none";
            }else {
                burger.classList.add("active");
                list.classList.add("active");
                opacity.style.display = "block";
            }
        });
    } else if (!list.classList.contains("active")) {
        opacity.style.display = "none";
    }
});
function block(add, del, del1){
    add.addEventListener('click', function(){
        del.style.display = 'none';
        del1.style.display  = 'block';
    });
}