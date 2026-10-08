const families = new Map([["heroux", ["ah","nh","sh"]], ["waltz", ["nw","ow"]]]);
const familyNameDef = new Map([["heroux", "wolvish, the ends justify our actions"], ["waltz", "the forbidden dance, left unseen to the living"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["ah", ["Astrophel", "phenomena, perfection, endless","he/him","November Heroux", "Lead Scientist", "Monstrous (bear) shifter."]],
    ["nh", ["November", "inspiration, belligerent, good cause", "she/her","Astrophel Heroux", "Experimentation, Abjurer", "Dragon shifter, adept with magic."]],
    ["sh", ["Skylar", "beauty in all things, but especially her...even the sky would bleed in her stead", "she/her", "Riley Jairo", "Overseer", "Flock shifter, locating"]],
    ["nw", ["Neo", "light of life, harbinger of the something greater", "he/him", "Nessa Daybreak", "The Berserk's Guard", "Raw strength, shapeshifter."]],
    ["ow", ["Orion", "hope of life, harbinger of love", "he/him", "Casey Lurre", "Orator", "Universal shifter, energy transmission."]]])
let alreadyClear = true;
let toggled = false;
let time = document.cookie.split('time=dusk;');
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
            <img class="characterPic" style="background-image:url('images/VIOLET${thisChar}.png');"/>
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
document.getElementById("heroux").addEventListener("click", () => {
    fillInFamily("heroux");
    switchDisplay(true);
});
document.getElementById("waltz").addEventListener("click", () => {
    fillInFamily("waltz");
    switchDisplay(true);
});