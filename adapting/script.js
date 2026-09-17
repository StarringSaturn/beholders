const families = new Map([["jairo", ["rj","sj"]], ["cavox", ["cc"]], ["nightfell", ["dn", "ln"]]]);
const familyNameDef = new Map([["jairo", ""], ["cavox", ""], ["nightfell", ""]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["rj", ["Riley", "sweetened grace","he/him","Penelope Zmei", "Trusted Leader", "The Shadow's favorite."]],
    ["sj", ["Starlette", "eternal, persisting", "she/her","Rory Grae", "Guard", "Harsh violent streak, avoid at all costs."]],
    ["cc", ["Cadence", "ushering peace", "she/her", "PJ Axel", "Record Keeper", "Knows where the general population frequent."]],
    ["dn", ["Delilah", "ushering progress", "she/her", "Milo Reign", "Beastkeeper", "Explosive personality."]],
    ["ln", ["Luna", "grounded, centric", "she/her", "Vega Lurre", "Baker", "False life."]]])
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