
function hideframe() {
    setTimeout(() => {
        $(".iframer").css("display", "none")
    }, 100)
}
let bars = document.querySelectorAll('.load-bar');
console.log(bars);
for (let i = 0; i < bars.length; i++) {
    bars[i].style.animationDelay = `${i/15}s`;
}



function btnprs() {
    setTimeout(() => {
        window.location = "src/exploit.html"
    }, 900)
};