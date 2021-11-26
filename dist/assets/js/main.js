function addCss(fileName) {
    const head = document.head;
    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}

(function () {
    fetch('/img/sprite.svg').then(response => {
        response.text().then(function (text) {
            document.body.insertAdjacentHTML('afterend', '<div style="display: none">' + text + '</div>');
        });
    });


    
}());

function toggleHeaderMenu() {
    const html = document.documentElement;
    const attribute = 'lp-header-popup-open';

    if (html.getAttribute(attribute)) {
        html.removeAttribute(attribute);
    } else {
        html.setAttribute(attribute, true);
    }
}
