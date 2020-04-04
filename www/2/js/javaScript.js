//Alle buttons
let buttonConst = document.querySelectorAll('.classButton');
//kamer #
let k1, k2, k3, k4, k5, storeTijd1, storeTijd2, tijdTotaal= "";
//let k11 = k22 = k33 = k44= k55 = "";

  //melet val0 =val1= val2=val3=val4=val5 = getTijd();
//Geef alle buttons een nummer zodat je ze individueel kunt aanroepen

for(let i=0; i< buttonConst.length; i++){
  //geef alle buttons kleur groen
  buttonConst[i].style.background = "green";

  //wanneer je klikt op 'een' button, wanneer achtergrond groen is, maak rood en vice-versa
  let clickRegister =-0;
  buttonConst[i].addEventListener('click', function (e){
  //  console.log(e);

 let numr= this.dataset.info;
if (numr === "1" || numr === "2" || numr === "3" || numr === "4" || numr === "5"){

//console.log(numr);
    /*
      wanneer ik klik op button, wanneer groen, dan reserveer je, haal tijd op
      Wanneer rood, en je er op klikt haal je tijd op,
      wanneer tijd >5, dan kamer vrijgeven, verander kleur
      anders error msg ->exit
      */
clickRegister+=1;

if (clickRegister===1){
k1=getTijd();
    console.log('U heeft gereserveerd.');
    buttonConst[i].style.background = "red";
}
//wacht 6 secondes na de aller eerste klik om de melding te krijgen dat kamer nog niet te boeken is
// klik 3 maar binnen 4.9 secondes om de kamer opnieuw te boeken.

//F5 pagina voor nieuw boeking
if (clickRegister===2){
k2=getTijd();
    console.log('U bent uitgecheckt');
}
if (clickRegister===3){
tijdTotaal = (k2-k1);
  if (tijdTotaal< 5000){
    clickRegister=-0;
    console.log('u mag reserveren');
      buttonConst[i].style.background = "green";
  }else {    console.log('Kamer nog niet reserveerbaar');}
}
      }
  });
}


function getTijd() {
  return Date.now();
}
/*
Lock = 1 minuut
wanneer de Onclick wordt aangeroepen en  >= aan 1 verstreken minuut dan mag
kleur aanpassen
*/
