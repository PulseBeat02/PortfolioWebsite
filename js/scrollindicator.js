const bar = document.getElementById("bar");

window.onscroll = function() {
    scrollIndicator()
};

function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = 100;
    if (height > 0) {
        scrolled = (winScroll / height) * 100;
    }
    bar.style.height = scrolled + "%";
}