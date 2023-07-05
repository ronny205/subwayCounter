let countEl = document.getElementById("count-el");
let count = 0;
document.getElementById("count-el").innerText = count;
function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function save() {
  console.log(count);
}
