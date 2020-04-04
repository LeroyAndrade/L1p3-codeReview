

function OBJtijd(evl,vari,outp){
let newForm = this;
newForm.evl =getTijd();
newForm.var =vari;
newForm.outp =outp;
}
let abc = new OBJtijd('','','');
console.log(abc);
let begin;
mijnButtonStart.addEventListener('click', ()=>{
// let datum = Date.now();
/*  let d = new Date();  begin = d.getTime();*/
   begin = getTijd();
  console.log("Begin tijd is",begin);
});

  let eind;
mijnButtonStop.addEventListener('click', ()=>{
   eind = getTijd();
  //document.getElementById("output").innerHTML += "<br>" + eind;
  console.log("Eind tijd is",eind);
});

let totaal;
mijnButtonTotaal.addEventListener('click', ()=>{
 totaal = eind - begin;
  document.getElementById("output").innerHTML += "<br>" + totaal;
  console.log("Totaal tijd is",totaal);
});

function getTijd() {
  return Date.now();
}
