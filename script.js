let res = document.getElementById("result");
let val7 = document.getElementById("val7");
val7.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "7";
  else res.innerHTML += "7";
};
let val8 = document.getElementById("val8");
val8.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "8";
  else res.innerHTML += "8";
};
let val9 = document.getElementById("val9");
val9.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "9";
  else res.innerHTML += "9";
};
let val0 = document.getElementById("val0");
val0.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "0";
  else res.innerHTML += "0";
};
let val00 = document.getElementById("val00");
val00.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "00";
  else res.innerHTML += "00";
};
let val1 = document.getElementById("val1");
val1.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "1";
  else res.innerHTML += "1";
};
let val2 = document.getElementById("val2");
val2.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "2";
  else res.innerHTML += "2";
};
let val3 = document.getElementById("val3");
val3.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "3";
  else res.innerHTML += "3";
};
let val4 = document.getElementById("val4");
val4.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "4";
  else res.innerHTML += "4";
};
let val5 = document.getElementById("val5");
val5.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "5";
  else res.innerHTML += "5";
};
let val6 = document.getElementById("val6");
val6.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "6";
  else res.innerHTML += "6";
};
let add = document.getElementById("add");
add.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "+";
  else res.innerHTML += "+";
};
let sub = document.getElementById("sub");
sub.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "-";
  else res.innerHTML += "-";
};
let mul = document.getElementById("mul");
mul.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "*";
  else res.innerHTML += "*";
};
let divide = document.getElementById("divide");
divide.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "/";
  else res.innerHTML += "/";
};
let percent = document.getElementById("percent");
percent.onclick = () => {
  if (res.innerHTML == "Calculating...") res.innerHTML = "%";
  else res.innerHTML += "%";
};
let evaulate = document.getElementById("evaluate");
evaluate.onclick = () => {
  if (res.innerHTML == "Calculating...") alert("Enter Something to Calculate");
  res.innerHTML = eval(res.innerHTML);
};
document.getElementById("clear").onclick = () => (res.innerHTML = "");
