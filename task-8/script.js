let displayValue = document.getElementById("result");
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
function clearscreen() {
  document.getElementById("result").value = "";
}
function backspace() {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.toString()
    .slice(0, -1);
}
