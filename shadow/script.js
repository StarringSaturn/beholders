const families = new Map([["grae", ["rg"]], ["zmei", ["pz"]], ["hexsh", ["eh", "ch"]], ["umbris", ["eu"]], ["kytez", ["ok", "mk", "jk"]]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["rg", ["Rory Grae", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["pz", ["Penelope Zmei", "Rory Grae", "The Guard", "It's pummeling time."]],
    ["eh", ["Elias Hexsh", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["ch", ["Cameron Hexsh", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["eu", ["Emmett Umbris", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["ok", ["Oz Kytez", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["mk", ["Madyson Kytez", "Penelope Zmei", "The Crown", "Such a way with words."]],
    ["jk", ["Joy Kytez", "Penelope Zmei", "The Crown", "Such a way with words."]]])
function clear(){
    familyInfo.innerHTML = ``;
}
function fillInFamily(family) {
    currentFamily = families.get(family);
    clear();
    for (let i = 0; i < currentFamily.length; i++) {
        let thisChar = currentFamily[i];
        let thisCharInfo = charInfo.get(thisChar);
        familyInfo.innerHTML += `<div id="character" class="character">
            <img class="characterPic" style="background-image:url('images/GOLD${thisChar}.png');"/>
            <div class="characterInfo">
                <p>Name: ${thisCharInfo[0]}</p>
                <p>Soulbound: ${thisCharInfo[1]}</p>
                <p>Occupation: ${thisCharInfo[2]}</p>
                <p>Known Abilities: ${thisCharInfo[3]}</p>
            </div>
        </div>`;
    }
}
function switchDisplay (on) {
        familyInfo.classList.toggle("collapsed");
        document.getElementById("pagegrid").classList.toggle("collapsed");
}
document.getElementById("zeonaTitle").addEventListener("click", () => {
    clear();
    switchDisplay(false);
});
document.getElementById("grae").addEventListener("click", () => {
    fillInFamily("grae");
    switchDisplay(true);
});
document.getElementById("zmei").addEventListener("click", () => {
    fillInFamily("zmei");
    switchDisplay(true);
});
document.getElementById("hexsh").addEventListener("click", () => {
    fillInFamily("hexsh");
    switchDisplay(true);
});
document.getElementById("umbris").addEventListener("click", () => {
    fillInFamily("umbris");
    switchDisplay(true);
});
document.getElementById("kytez").addEventListener("click", () => {
    fillInFamily("kytez");
    switchDisplay(true);
});