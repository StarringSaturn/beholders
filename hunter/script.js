const families = new Map([["rogue", ["vr2","vr1","vr3"]], ["blais", ["zb","ab"]]]);
const familyNameDef = new Map([["rogue", "the first act, the finisher"], ["blais", "the third sun, the unforgiving, the judge"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["vr2", ["Vesper", "your doom","he/him","Dean Hellion", "The Gilded's Prized Hunter", "Horrid aura of fear, lethal archer."]],
    ["vr1", ["Venus", "your reckoning", "she/her","Odysseus Radia", "Bloodied Hunter", "Immune to flames, resistant to poisons, strength gained in blood."]],
    ["vr3", ["Vela", "your downfall", "she/her", "Zane Fluv", "Witch", "Proficient in magic, especially when it comes to flames."]],
    ["zb", ["Zenith", "destruction as a means for creating", "he/him", "Evelyn Reign", "Tracker", "Heightened senses, able to put a name to an 'off' feeling."]],
    ["ab", ["Aileen", "the great recall, everything forged will be destroyed", "she/her", "Nala Axel", "Executioner", "Along with her obliviounds, cleansing the world of its worse."]]])
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
            <img class="characterPic" style="background-image:url('images/RED${thisChar}.png');"/>
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
document.getElementById("rogue").addEventListener("click", () => {
    fillInFamily("rogue");
    switchDisplay(true);
});
document.getElementById("blais").addEventListener("click", () => {
    fillInFamily("blais");
    switchDisplay(true);
});