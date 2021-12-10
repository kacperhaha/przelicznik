function calculate()
{ 
  const maxvalue = document.querySelector('input[name="max"]').value;
  const quantityvalue = document.querySelector('input[name="quantity"]').value
  document.getElementById("score").style.display='inherit'
  const value = quantityvalue / maxvalue * 100
  if(!quantityvalue || !maxvalue) return document.getElementById("score").innerHTML=`Za mało danych`
  if(value > `100` || value < `0`) return document.getElementById("score").innerHTML=`Błąd`
  //if(value < `0`) return document.getElementById("wynik").innerHTML=`Błąd`
  document.getElementById("score").innerHTML= Math.round(value) + `%`
}
function darkmode() {
    var element = document.body;
    var darkmodebutton = document.getElementById("darkmodebutton");
    var theme = document.querySelector("#css");
    if (theme.getAttribute("href") == "styleDarkMode.css") {
      console.log(theme.href)
      theme.href = "style.css";
    } else {
      console.log(theme.href)
      console.log(`2`)
      theme.href = "styleDarkMode.css";
    }
    

    

 }
 function darkmodeos() {
   const theme = document.querySelector("#css");
   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
   if (prefersDarkScheme.matches) {
      theme.href = "styleDarkMode.css";
    } else {
      theme.href = "style.css";
    }
 }