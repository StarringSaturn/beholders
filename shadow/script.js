const families = new Map([["grae", ["rg"]], ["zmei", ["pz"]], ["hexsh", ["eh", "ch"]], ["umbris", ["eu"]], ["kytez", ["ok", "mk", "jk"]]]);
const familyNameDef = new Map([["grae", "foundational, origin"], ["zmei", "the grand serpent, duality"], ["hexsh", "impenetrable, impeding"], ["umbris", "imperceptible, true shadow, guard"], ["kytez", "lost and found, magic's hand"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["rg", ["Rory", "sweetened grace","she/her","Penelope Zmei", "Trusted Leader", "The Shadow's favorite."]],
    ["pz", ["Penelope", "eternal, persisting", "she/her","Rory Grae", "Guard", "Harsh violent streak, avoid at all costs."]],
    ["eh", ["Elias", "ushering peace", "he/him", "PJ Axel", "Record Keeper", "Knows where the general population frequent."]],
    ["ch", ["Cameron", "ushering progress", "he/him", "Milo Reign", "Beastkeeper", "Explosive personality."]],
    ["eu", ["Emmett", "grounded, centric", "he/him", "Vega Lurre", "Baker", "False life."]],
    ["ok", ["Oz", "a storm's end, relief", "he/him", "Szymae Ichtamor", "Observer", "As fragile as they come."]],
    ["mk", ["Madyson", "the encouraging reprieve", "she/her", "Ajax Theodan", "Meeting Planner", "Encourages peace, incredibly fragile."]],
    ["jk", ["Joy", "comforting happiness, woe's release", "she/her", "Melanie Fluv", "Event Planner", "Keeps things light for the sake of her sister."]],
    ["di", ["Dusk Inizio", "", "she/her", "Rory Grae", "The Blinding Serpent", ""]]])
let alreadyClear = true;
let toggled = false;
let time = document.cookie.split('time=dusk;');
function clear(){
    familyInfo.innerHTML = ``;
}
function fillInFamily(family) {
    currentFamily = families.get(family);
    clear();
    if (family == "zmei") {
        if (!time.includes("time=norm")) {
            currentFamily = ["di"];
            if (!toggled) {
                document.getElementById("zeonaTitle").classList.toggle("cannotSee");
                toggled = true;
            }
        }
        console.log(time);
    }
    else if (!time.includes("time=norm")&&toggled) {
        document.getElementById("zeonaTitle").classList.toggle("cannotSee");
        toggled = false;
    }
    familyInfo.innerHTML += `<h1 style="text-align:center">${family.toUpperCase()} - ${familyNameDef.get(family)}</h1>`
    for (let i = 0; i < currentFamily.length; i++) {
        let thisChar = currentFamily[i];
        let thisCharInfo = charInfo.get(thisChar);
        familyInfo.innerHTML += `<div id="character" class="character">
            <img class="characterPic" style="background-image:url('images/GOLD${thisChar}.png');"/>
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