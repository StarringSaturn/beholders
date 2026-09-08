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
    normalizeTime();
    location.href = "./shadow";
    };

document.getElementById("all-knowing").onclick = function () {
    location.href = "./all-knowing";
};
document.getElementById("spectacle").onclick = function () {
    location.href = "./spectacle";
};
document.getElementById("adapting").onclick = function () {
    location.href = "./adapting";
};
document.getElementById("hunter").onclick = function () {
    location.href = "./hunter";
};
document.getElementById("whisper").onclick = function () {
    location.href = "./whisper";
};
document.getElementById("truth").onclick = function () {
    location.href = "./truth";
};
document.getElementById("berserk").onclick = function () {
    location.href = "./berserk";
};
document.getElementById("mimic").onclick = function () {
    location.href = "./mimic";
};
