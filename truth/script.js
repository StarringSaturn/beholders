const families = new Map([["engel", ["te","fe","ae"]], ["ichtamor", ["si"]], ["mazen", ["rm"]]]);
const familyNameDef = new Map([["engel", "enlightenment, a needed push"], ["ichtamor", "favored by The Beholders"], ["mazen", "intrinsic, understanding of right and wrong"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["te", ["Tally", "the truth sets you free","she/her","JJ Fluv", "Therapist, Guiding Word", "Detects lies."]],
    ["fe", ["Flint", "the truth hurts", "he/him","Zed Aster", "Guard", "Weaponizes his truth against you."]],
    ["ae", ["Agile", "the truth can heal", "he/him", "Luna Nightfell", "Strategist, Winged Transportation", "Everyone sees the good in him."]],
    ["si", ["Szymae", "chosen, selected, trusted", "they/them", "Oz Kytez", "Ranger", "Witness to fated threads linking foes."]],
    ["rm", ["Roren", "winged grace", "he/him", "River Hellion", "Beastkeeper, Interpreter", "Cannot tell a lie, can detect the source of a lie."]]])
let alreadyClear = true;
let toggled = false;
function clear(){
    familyInfo.innerHTML = ``;
}
function fillInFamily(family) {
    currentFamily = families.get(family);
    clear();
    familyInfo.innerHTML += `<h1 style="text-align:center">${family.toUpperCase()} - ${familyNameDef.get(family)}</h1>`
    for (let i = 0; i < currentFamily.length; i++) {
        let thisChar = currentFamily[i];
        let thisCharInfo = charInfo.get(thisChar);
        familyInfo.innerHTML += `<div id="character" class="character">
            <img class="characterPic" style="background-image:url('images/MAGENTA${thisChar}.png');"/>
            <div class="characterInfo">
                <p>Name: ${thisCharInfo[0]}, Meaning: ${thisCharInfo[1]} </p>
                <p>Pronouns: ${thisCharInfo[2]}</p>
                <p>Soulbound: ${thisCharInfo[3]}</p>
                <p>Occupation: ${thisCharInfo[4]}</p>
                <p>Known Power: ${thisCharInfo[5]}</p>
            </div>
        </div>`;
    }
}
function switchDisplay(on) {
    if (!on && alreadyClear) {
        location.href = "/beholders";
    }
    else if (on) {
        alreadyClear = false;
    }
    else if (!on) {
        alreadyClear = true;
    }
        familyInfo.classList.toggle("collapsed");
        document.getElementById("pagegrid").classList.toggle("collapsed");
}
document.getElementById("risiTitle").addEventListener("click", () => {
    clear();
    switchDisplay(false);
});
document.getElementById("engel").addEventListener("click", () => {
    fillInFamily("engel");
    switchDisplay(true);
});
document.getElementById("ichtamor").addEventListener("click", () => {
    fillInFamily("ichtamor");
    switchDisplay(true);
});
document.getElementById("mazen").addEventListener("click", () => {
    fillInFamily("mazen");
    switchDisplay(true);
});