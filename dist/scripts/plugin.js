
window.onscroll = function() { scrollFunction() };

let toTopButton = document.getElementById("toTopButton");

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        toTopButton.style.opacity = "1";
        toTopButton.style.visibility = "visible";
    } else {
        toTopButton.style.opacity = "0";
        toTopButton.style.visibility = "hidden";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

filterSelection("all", '')
function filterSelection(c, event) {
    var x, i;
    x = document.getElementsByClassName("task");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    x[i].parentElement.classList.remove("showElement")
        if (x[i].className.indexOf(c) > -1) x[i].parentElement.classList.add("showElement");
    }
    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("filters");
    var btns = btnContainer.getElementsByClassName("filterBtn");
    for (var i = 0; i < btns.length; i++) {
        if (event != '')
            btns[i].classList.remove("active")
    }
    event.target.classList.add('active')
}

function respondOnMessage() {
    var button = document.getElementById("responde_on_message")
    var responde_box = document.getElementById("message-resposnse")

    responde_box.style.display = "block"
    button.children[1].innerHTML = "ارسل رسالتك"
}

function deleteMessage() {
    var button = document.getElementById("responde_on_message")
    var responde_box = document.getElementById("message-resposnse")

    responde_box.children[0].children[0].value = ""
    responde_box.style.display = "none"
    button.children[1].innerHTML = "الرد على الرسالة"
}

function saveMessage() {
    var form_content = document.getElementById("form_content")
    var success_content = document.getElementById("success_content")

    form_content.style.display = "none"
    success_content.style.display = "flex"

    $( "#form_content" ).submit(function( event ) {
        event.preventDefault();
    });
}