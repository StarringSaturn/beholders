const families = new Map([["jairo", ["rj","sj"]], ["cavox", ["cc"]], ["nightfell", ["dn", "ln"]]]);
const familyNameDef = new Map([["jairo", "seamless, reliable, focus"], ["cavox", "the last one standing amidst havoc"], ["nightfell", "the desired end of darkness, an eclipse of evil"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["rj", ["Riley", "willpower, instilled confidence","he/him","Skylar Heroux", "Educator in Magic", "Adapt power to strike."]],
    ["sj", ["Starlette", "power that transcends the world, bled into her", "she/her","Isaac Reign", "Advisor, Witch", "Adapt power to last."]],
    ["cc", ["Cadence", "warrior, ever-enduring", "she/her", "Bizzy Fluv", "Commander", "Adapt to the environment, weather the conditions."]],
    ["dn", ["Delilah", "the search for more", "she/her", "Jack Aster", "Tavernkeeper", "She's quite forgettable in a crowd."]],
    ["ln", ["Luna", "with the moons' persistence, delight at the most alarming hours", "she/her", "Agile Flint", "Tavernkeeper", "Easy to talk to."]]])
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
            <img class="characterPic" style="background-image:url('images/AMBER${thisChar}.png');"/>
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
document.getElementById("jairo").addEventListener("click", () => {
    fillInFamily("jairo");
    switchDisplay(true);
});
document.getElementById("cavox").addEventListener("click", () => {
    fillInFamily("cavox");
    switchDisplay(true);
});
document.getElementById("nightfell").addEventListener("click", () => {
    fillInFamily("nightfell");
    switchDisplay(true);
});