setInterval(ViewCheck, 100)

function ViewCheck() {
    const DeviceHeight = window.screen.height
    const ScrolledPixels = window.scrollY

    document.getElementById("login-button").style.color = 
    ScrolledPixels > DeviceHeight * 0.8 && ScrolledPixels < DeviceHeight * 1.45 ? "black" : "white"
}