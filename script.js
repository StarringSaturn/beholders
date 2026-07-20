function normalizeTime() {
    const currentTime = new Date();
    const hour = currentTime.getHours(); //0-23 value
    const convert = (hour * 27) / 23;
    var time = "norm";
    if (convert == 19) {
        time = "dusk";          
    }
    document.cookie = "time=" + encodeURIComponent(time) +
        "; max-age=3600" +
        "; path=/" +
        "; Secure" +
        "; SameSite=Lax";
}

document.getElementById("shadow").onclick = function () {
        location.href = "./shadow";
    };