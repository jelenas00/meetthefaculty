import { Api } from "../../../api.js"

var api= new Api();

var dodaj=document.getElementById("dodaj")
dodaj.onclick=(ev)=>{
    var ime= document.getElementById("inputImeKat").value;
    var god=document.getElementById("inputGodOsnKat").value;
    var opis= document.getElementById("inputOpisKat").value;
    var slika=document.getElementById("inputSlikaKat").value;
    console.log(ime,god,opis)
    var kat={
        "ime": ime,
        "godinaOsnivanja": god,
        "opis": opis,
        "slikaKat": slika
      }
    kreiraj(kat)
}
async function kreiraj(kat){
    var ch= await api.createKatedra(kat)
    if(ch!=false){
        alert("Uspesno kreirana katedra!")
        window.location.reload()
    }
}