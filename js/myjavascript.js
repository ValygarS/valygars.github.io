/* Function that makes "To Top" button visible after scrolling screen down.
Scroll up function is included in the framework */

window.onscroll = function() {scrollTotopVisible()};

function scrollTotopVisible() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("totop").style.display = "block";
    } else {
        document.getElementById("totop").style.display = "none";
    }
}

