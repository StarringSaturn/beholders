const families = new Map([["radia", ["or,rr,ar"]], ["lurre", ["rl,cl,vl"]], ["pani", ["ep"]]]);
const familyNameDef = new Map([["radia", "the first sun, the persisting sun"], ["lurre", "observing all, above all"], ["pani", "disillusioned, painless"]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["or", ["Odysseus", "the crashing and settling wave","he/him","Venus Rogue", "Clothing designer, tailor", "Able to interpret one's dreams and aspirations. Some report feeling more...self-aware around him."]],
    ["rr", ["Rhayne", "harbinger of storms, downpour", "she/her","Amara Radia", "Head of Security", "Daydreams are not out of her perception, all rely on her to reach a dream's meaning."]],
    ["ar", ["Amara", "dream walker, night's shaper", "she/her", "Rhayne Radia", "Investigator", "Knows what haunts a shade, the fleshed-out nightmare."]],
    ["rl", ["Rigel", "leave an impression, unforgettable", "he/him", "Xavier Theodan", "Observer, Relayer of Messages", "Knowledgeable of the goings-on, especially within Sija, though he's privy to information that extends past the borders."]],
    ["cl", ["Casey", "successful, to one's benefit", "she/her", "Orion Waltz", "Handler of Relations", "Hearts wish to sing for her. She is relief from guilt."]],
    ["vl", ["Vega", "rare, fascination, muse", "she/her", "Emmett Umbris", "Writer", "Her information moves so quickly that she has to write it down to retain most of it."]],
    ["ep", ["Ellise", "light on their feet, drifter", "she/her", "Draven Fluv", "Communications", "Can tell anyone who their soulbound is."]]])
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
            <img class="characterPic" style="background-image:url('images/YELLOW${thisChar}.png');"/>
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
document.getElementById("radia").addEventListener("click", () => {
    fillInFamily("radia");
    switchDisplay(true);
});
document.getElementById("lurre").addEventListener("click", () => {
    fillInFamily("lurre");
    switchDisplay(true);
});
document.getElementById("pani").addEventListener("click", () => {
    fillInFamily("pani");
    switchDisplay(true);
});
