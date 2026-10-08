const families = new Map([["hellion", ["dh","rh","ah","ch"]], ["divv", ["cd","vd"]], ["axel", ["na", "pa"]]]);
const familyNameDef = new Map([["hellion", "life's keepers, safety, security"], ["divv", "the lacking effect of fear in the face of their courage"], ["axel", "the altruists, seeking for answers"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["dh", ["Dean", "nature's healer, the natural adaptation","he/him","Vesper Rogue", "Caretaker, Doctor", "Soothsayer, healing through speaking to someone."]],
    ["rh", ["River", "nature's resting place, the natural flow", "she/her","Roren Mazen", "Beastkeeper, Nature's Right Hand", "Genuine understanding pulses from her, even those who run hot are chilled by her proximity."]],
    ["ah", ["Angel", "nature's speaker, the natural inclination towards peace", "she/her/they", "Charlie Hellion", "Courier", "Hears from nature, its beasts, and her fellow shade all the same."]],
    ["ch", ["Charlie", "nature's spirit, nature's response", "she/her", "Angel Hellion", "Parkour, Entertainment", "Calms those that are believed too far gone, too lost."]],
    ["cd", ["Cal", "rambunctious, unfettered", "he/him", "Cadel Trenton", "Mortician", "Whispers seek him out, they need to be heard."]],
    ["vd", ["Vextry", "freeing, disquieting", "she/her", "Kyla Aster", "Keeper", "The safest place for information to be stored."]],
    ["na", ["Nala", "mellow, refining, polishing", "she/her", "Aileen Blais", "Diviner", "Easy to talk to, even for the least trusting of individuals."]],
    ["pa", ["PJ", "magnificent, fixation, shortened name of the second sun (Pixei l'Jieva) and the flowers that wake under its light (pixie jays)", "she/her", "Elias Hexsh", "Diviner", "Takes injuries in the place of others, transmit mental messages if the intended-receiver is open to it."]]])
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
            <img class="characterPic" style="background-image:url('images/PURPLE${thisChar}.png');"/>
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
document.getElementById("hellion").addEventListener("click", () => {
    fillInFamily("hellion");
    switchDisplay(true);
});
document.getElementById("divv").addEventListener("click", () => {
    fillInFamily("divv");
    switchDisplay(true);
});
document.getElementById("axel").addEventListener("click", () => {
    fillInFamily("axel");
    switchDisplay(true);
});