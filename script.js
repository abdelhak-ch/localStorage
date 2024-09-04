let lis = document.querySelectorAll('ul li');
let myDiv = document.querySelector(".big div");
let selectorColer = "";

if (window.localStorage.getItem("color")) {
    myDiv.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach(function (ele) {
        ele.classList.remove("active");
        if (ele.getAttribute("data-color") === window.localStorage.getItem("color")) {
            ele.classList.add("active");
        }
    })
}

lis.forEach(function (ele) {
    ele.onclick = function () {
        lis.forEach(function (e) {
            e.classList.remove("active");
        })
        this.classList.add("active");
        myDiv.style.backgroundColor = this.getAttribute("data-color");
        selectorColer = this.getAttribute("data-color");
        window.localStorage.setItem("color", selectorColer)
    };
});


 





