const families = new Map([["theodan", ["xt","jt","et","at"]], ["reign", ["ir","mr","er"]], ["trenton", ["ct"]]]);
const familyNameDef = new Map([["theodan", "existential, twisters of fate"], ["reign", "the cause to celebrate and rejoice, the good to lead the charge"], ["trenton", "the length of a rainbow is the same as a conversation"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["xt", ["Xavier", "rebound, reconstruct, reconciliation, that which cannot be kept in disarray","he/him","Rigel Lurre", "Trainer, Overseer", "Mimics wounds from one shade to another."]],
    ["jt", ["Jay", "the allure, flattery", "any/all","Elizabeth Theodan", "Armorer, Linguist", "Mimic and mirror another shade, mix and matching certain qualities."]],
    ["et", ["Elizabeth", "the one to look for, moving with intent", "she/her", "Jay Theodan", "Engineer, Weaponsmith", "Mimic another's fighting prowess."]],
    ["at", ["Ajax", "to disenchant, magic's fault", "he/him", "Madyson Kytez", "Healer", "Mimics what is normal from one shade to heal the wound on another."]],
    ["ir", ["Isaac", "enjoyer, the pursuit of happiness", "he/him", "Starlette Jairo", "Courier", "Increase potency of another's power."]],
    ["mr", ["Milo", "reveler, the keeper of happiness", "he/him", "Cameron Hexsh", "Artificer, Cook", "Embeds healing abilities into food and drinks."]],
    ["er", ["Evelyn", "a parent's delight, the cause of happiness", "she/her", "Zenith Blais", "Expansive Mage", "Copy and use abilities she's seen others use."]],
    ["ct", ["Cadel", "articulate, high priority", "he/him", "Cal Divv", "Notetaker, Recorder", "Recall any conversation he hears, mimic any voice he hears."]]])
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
            <img class="characterPic" style="background-image:url('images/PINK${thisChar}.png');"/>
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
document.getElementById("theodan").addEventListener("click", () => {
    fillInFamily("theodan");
    switchDisplay(true);
});
document.getElementById("reign").addEventListener("click", () => {
    fillInFamily("reign");
    switchDisplay(true);
});
document.getElementById("trenton").addEventListener("click", () => {
    fillInFamily("trenton");
    switchDisplay(true);
});