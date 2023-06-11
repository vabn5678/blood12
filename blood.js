window.onload = function () {
    var overlay = document.getElementById('alert-overlay');
    var content = document.getElementById('alert-content');
    var alertMessage;
    alertMessage = 'Please click   <a href ="http://127.0.0.1:5500/git/survey.html">  here </a>  to visit our suuvey website.';
    content.innerHTML = alertMessage;
    overlay.style.display = 'flex';
}

function closeAlert() {
    var overlay = document.getElementById('alert-overlay');
    overlay.style.display = 'none';
}
