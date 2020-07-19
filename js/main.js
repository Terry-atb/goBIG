AOS.init();

window.onscroll = function(){navBody()}

function navBody() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("nav").className = "nav-body sticky-top"
        document.getElementById("nav-header").innerHTML = "goBIG.com"
        document.getElementById("navbar-toggler").classList.add("bg-white")
        document.getElementById("navbarSupportedContent").classList.remove("justify-content-center")
        document.getElementById("navbarSupportedContent").classList.add("justify-content-end")

        var navText = document.getElementsByClassName("nav-text")
        var i
        for(i=0;i<navText.length-1;i++){
            navText[i].classList.remove("text-dark")
            navText[i].classList.add("text-light")
        }
    } else {
        document.getElementById("nav").className = ""
        document.getElementById("nav-header").innerHTML = ""
        document.getElementById("navbar-toggler").classList.remove("bg-white")
        document.getElementById("navbarSupportedContent").classList.add("justify-content-center")        
        
        var navText = document.getElementsByClassName("nav-text")
        var i
        for(i=0;i<navText.length-1;i++){
            navText[i].classList.remove("text-light")
            navText[i].classList.add("text-dark")
        }
    }
}
