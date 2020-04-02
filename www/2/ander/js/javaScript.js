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
  buttonConst[i].style.background = "green";
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


      if (buttonConst[i].style.background === "green"){
          k1=getTijd();
          storeTijd1+=1;
          buttonConst[i].style.background === "red";
          console.log('gereserveerd');
        }
        tijdTotaal = (storeTijd2-storeTijd1);
      if (buttonConst[i].style.background === "red" && tijdTotaal < 5000){
          k2=getTijd();
          storeTijd2=1;

      }
        if (tijdTotaal ===2){
            console.log('u mag weer reserveren');
        }else   console.log('Kamer wordt onderhouden, wacht nog 5 secondes');


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
