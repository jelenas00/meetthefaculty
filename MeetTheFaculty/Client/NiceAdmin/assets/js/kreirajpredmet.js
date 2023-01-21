import { Api } from "../../../api.js"

var api= new Api();

var dodaj=document.getElementById("dodaj")
dodaj.onclick=(ev)=>{
    var ime= document.getElementById("inputImePred").value;
    var sifra= document.getElementById("inputSifra").value;
    var espb=document.getElementById("inputESPB").value;
    var status= document.querySelector(".status").value;

    console.log(ime,sifra,espb,status)
    var pred={
        "ime": ime,
        "sifra": sifra,
        "espb": espb,
        "status": status
      }
    kreiraj(pred)
}
async function kreiraj(pred){
    var ch= await api.createPredmet(pred)
    if(ch!=false){
        alert("Uspesno kreiran predmet!")
        window.location.reload()
    }
}