//Alle buttons
const buttonConst = document.querySelectorAll('.classButton');



function getTijd() {
  return Date.now();
}  //let val0 =val1= val2=val3=val4=val5 = getTijd();
//Geef alle buttons een nummer zodat je ze individueel kunt aanroepen
for(let i=0; i< buttonConst.length; i++){
  //geef alle buttons kleur groen
  buttonConst[i].style.background = "green";

  //wanneer je klikt op 'een' button, wanneer achtergrond groen is, maak rood en vice-versa
  buttonConst[i].addEventListener('click', function(){

      if(buttonConst[i].style.background != "red")
        {
          buttonConst[i].style.background = "red";
        }
   else {
          buttonConst[i].style.background = "green";
        }
      //  window.alert(buttonConst[i].value);
      //document.body.style.backgroundColor = "red";
    });
}

/*
Lock = 1 minuut
wanneer de Onclick wordt aangeroepen en  >= aan 1 verstreken minuut dan mag
kleur aanpassen
*/
