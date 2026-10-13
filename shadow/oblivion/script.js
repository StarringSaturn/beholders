const families = new Map([["true", ["Astronomer", "Trembling", "enlightened", "unknown"]], ["esperons", ["draya", "enre", "Azii", "Lorr"]]]);
const familyInfo = document.getElementById("familyinfo");
const charInfo = new Map([["Astronomer", ["The Astronomer", "she/her", "The Trembling", "Mother of the Shades, Mother of Magic", "made to observe the lights dim and darkness spring forth"]],
    ["Trembling", ["The Trembling", "he/him", "The Astronomer", "Father of the Shades, Creator of Worlds", "outrun the vengeful shadows while She is just out of reach"]],
    ["enlightened", ["The Enlightened", "they/them", "The Unknown", "Proof of Life, Keeper of the Perceivable and Tangible", "walk the horrid line alongside those who were forced to persist after their time..."]],
    ["unknown", ["The Unknown", "he/him", "The Enlightened", "Proof of Death, Friend of Wisp and Wraith", "awareness of souls damned to wander and drift, torment and coalesce."]],
    ["draya", ["The Reflecter", "she/her", "", "if this attempt crashes, there will not be another wave"]],
    ["enre", ["The Capper", "he/him", "", "The Hunter's Bane", "forged of blood and destruction, i reckon i'm not that different after all form the rest"]],
    ["Azii", ["The Looker", "she/her", "The Silencer", "The Missing Piece", "i peer on through eyes not my own, feel pain that is not mine..."]],
    ["Lorr", ["The Silencer", "he/him", "The Looker", "The Shadow's Ire", "...it is disquieting, but at least we know they are alive"]]])
function clear() {
    familyInfo.innerHTML = ``;
}
function fillInFamily(family) {
    currentFamily = families.get(family);
    for (let i = 0; i < currentFamily.length; i++) {
        let thisChar = currentFamily[i];
        let thisCharInfo = charInfo.get(thisChar);
        familyInfo.innerHTML += `<div id="character" class="character">
            <img class="characterPic" style="background-image:url('${thisChar}.png');"/>
            <div class="characterInfo">
            <p>Name: ${thisCharInfo[0]}</p>
            <p>Pronouns: ${thisCharInfo[1]}</p>
            <p>Soulbound: ${thisCharInfo[2]}</p>
            <div id="title" class="${thisCharInfo[3]}"></div>
            <div id="hm" class="${thisCharInfo[4]}"></div>
            </div>
        </div>`;
    }
}
window.addEventListener("load", fillInFamily("true"));
document.getElementById("Poised").addEventListener("click", () => {
    clear();
    fillInFamily("esperons");
});