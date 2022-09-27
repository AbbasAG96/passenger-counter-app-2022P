let countEl = document.getElementById("count-el");
let savedEntries = document.getElementById("saved-entries");
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}
function saveMe() {
  let savedEnt = count + " - ";
  savedEntries.textContent += savedEnt;
  countEl.textContent = 0;
  count = 0;
}
