const families = new Map([["aster", ["za","ja","ka"]], ["fluv", ["zf","df","jf","bf","mf"]], ["daybreak", ["nd"]]]);
const familyNameDef = new Map([["aster", "of the sky, constellation"], ["fluv", "brutal and sudden changes, the unexpected"], ["daybreak", "when the three suns split the sky and usher forth the most ethereal shades"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["za", ["Zed", "subtle, last defenses", "he/him", "Flint Engel", "Grand Host, Entertainment", "Siren song, you will be compelled."]],
    ["ja", ["Jack", "tales and their iterations, however far removed", "he/him", "Delilah Nightfell", "Artist, Entertainment", "Art takes on a life of its own."]],
    ["ka", ["Kyla", "the cause to forget, an unspoken idea", "she/her", "Vextry Divv", "Dancer, Entertainment", "Easy to watch, easier to get lost in her."]],
    ["zf", ["Zane", "power to renew", "he/him", "Vela Rogue", "Demolitionist", "Destruction is beautiful and right, in his hands."]],
    ["df", ["Draven", "power to hinder", "he/him", "Ellise Pani", "Fighter", "Reported lasting, unseen impact against those he fights."]],
    ["jf", ["JJ", "power to create", "she/her", "Tally Engel", "Blacksmith, Weapon's Dealer", "Imbues weapons with power, giving the lesser something more."]],
    ["bf", ["Bizzy", "the hum of the heart, power to source", "she/her", "Cadence Cavox", "Resources, shade and otherwise", "Tensions do not persist in her company."]],
    ["mf", ["Melanie", "the thrill of the soul, power to defy", "she/her", "Joy Kytez", "Caretaker", "Laughter that heals the otherwise unreachable wounds."]],
    ["nd", ["Nessa", "gift, revel in her", "she/her", "Neo Waltz", "Gardener, Sightseer", "It's hard to tell what is real and what is of her mind when she is near. They say not even she knows."]]])
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
            <img class="characterPic" style="background-image:url('images/ORANGE${thisChar}.png');"/>
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
document.getElementById("fluv").addEventListener("click", () => {
    fillInFamily("fluv");
    switchDisplay(true);
});
document.getElementById("aster").addEventListener("click", () => {
    fillInFamily("aster");
    switchDisplay(true);
});
document.getElementById("daybreak").addEventListener("click", () => {
    fillInFamily("daybreak");
    switchDisplay(true);
});