let res = document.getElementById("result");
const con = document.querySelector(".container");
con.onclick = (e) => {
  if (e.target.className != "container") {
    if (res.innerHTML == "Calculating...") res.innerHTML = "";
    console.log(e.target.value);
    if (e.target.value == "CE") {
      res.innerHTML = "";
      return;
    } else if (e.target.value == "=") {
      res.innerHTML = eval(res.innerHTML);
      return;
    }
    res.innerHTML += e.target.value;
  }
};
document.getElementById("clear").onclick = () => (res.innerHTML = "");
