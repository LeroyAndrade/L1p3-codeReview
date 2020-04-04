
function OBJArtiest (naamArtiest, titelNummer, afspeelduur){
  let artiestOBJ = this;
  artiestOBJ.Artiest = naamArtiest;
  artiestOBJ.TitelNummer = titelNummer;
  artiestOBJ.Afspeelduur = afspeelduur;
}

let MJ = new OBJArtiest("Michael Jackson", "XYZ", 120);
let AN = new OBJArtiest("Andrea Bocelli", "XYZ", 130);
let SS = new OBJArtiest("Sting & Stevie Wonder", "Fragile", 238);


button.addEventListener('click', function(){
console.log(MJ.Artiest+'<br>'+MJ.TitelNummer+'<br>'+MJ.Afspeelduur+'<br>'+'<br>');
console.log(AN.Artiest+'<br>'+AN.TitelNummer+'<br>'+AN.Afspeelduur+'<br>'+'<br>');
console.log(SS.Artiest+'<br>'+SS.TitelNummer+'<br>'+SS.Afspeelduur+'<br>'+'<br>');
});

let forIn="";
for (const property in SS) {
forIn+=(`${property}: ${SS[property]}`+'<br/>');
}document.write("Opgave 1" +'<br/>'+ forIn);

function shuffle(){};

/*
for(let i=0; i< obj.length; i++){

}
let forIn="";
for (const property in SS) {
forIn+=(`${property}: ${SS[property]}`+'<br/>');
}document.write("Opgave 1" +'<br/>'+ forIn);

*/
