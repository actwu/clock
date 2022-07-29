/* Hope you like it Yup its just
javascript printing time thats basically it*/

let run = app()

function app(){

body = document.querySelector("body");
const d = new Date();
  
h = d.getHours() -12;
m = d.getMinutes();
  s = d.getSeconds();
    timetemp =  h + ":" + m;
    il =  "<h1> IL </h1>";
   dps = "<div><p>"; 
 dpe = "</p></div>";
  
let items = il + dps +
 timetemp +
dpe;
body.innerHTML = items;
setTimeout (() => {
app()
},100)
            
};