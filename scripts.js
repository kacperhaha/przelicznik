function calculate()
{ 
  const maxvalue = document.querySelector('input[name="max"]').value;
  const quantityvalue = document.querySelector('input[name="quantity"]').value
  document.getElementById("wynik").style.display='inherit'
  document.getElementById("wynik").style.textAlign='center';
  const value = quantityvalue / maxvalue * 100
  if(!quantityvalue || !maxvalue) return document.getElementById("wynik").innerHTML=`Za mało danych`
  if(value > `100`) return document.getElementById("wynik").innerHTML=`Błąd`
  if(value < `0`) return document.getElementById("wynik").innerHTML=`Błąd`
  document.getElementById("wynik").innerHTML= Math.round(value) + `%`
}

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("darkmodebutton").style.background='#000000';
    var score = document.getElementById("wynik")
    var darkmodebutton = document.getElementById("darkmodebutton");
    var maxtextarea = document.querySelector('input[name="max"], textarea');
    var quantitytextarea = document.querySelector('input[name="quantity"], textarea')
    var submitbutton = document.querySelector(`input[name="submit"]`)
    

    if (darkmodebutton.style.color === "white") {
 score.style.color=`black`
 darkmodebutton.style.color='black';
 maxtextarea.style.color='black';
 quantitytextarea.style.color='black';
 darkmodebutton.style.background='white';
 maxtextarea.style.background='white'
 quantitytextarea.style.background='white'
 
 darkmodebutton.style.border= `2px solid black`;
    } else {
 score.style.color=`white`
 darkmodebutton.style.color='white';
 quantitytextarea.style.color='white';
 maxtextarea.style.color='white';
 darkmodebutton.style.background='black'
 quantitytextarea.style.background='#121212'
 maxtextarea.style.background='#121212'
 darkmodebutton.style.border= `2px solid white`;
    }
    

    

 }
 function darkmodeos() {
   var element = document.body;
   var darkmodebutton = document.getElementById("darkmodebutton");
   var quantitytextarea = document.querySelector('input[name="quantity"], textarea')
   var submitbutton = document.querySelector(`input[name="submit"]`)
   var score = document.getElementById("wynik")
   var maxtextarea = document.querySelector('input[name="max"], textarea');
   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
   if (prefersDarkScheme.matches) {
      document.body.classList.toggle("dark-mode");
      score.style.color=`white`
   submitbutton.style.color="white"
   submitbutton.style.background='#121212'
   submitbutton.style.border= `3px solid #464242`;
   darkmodebutton.style.color='white';
 quantitytextarea.style.color='white';
 maxtextarea.style.color='white';
 darkmodebutton.style.background='black'
 quantitytextarea.style.background='#121212'
 maxtextarea.style.background='#121212'
 darkmodebutton.style.border= `2px solid white`;
    } else {
       console.log("essa2")
       score.style.color=`black`
      document.body.classList.remove("dark-theme");
    }
 }