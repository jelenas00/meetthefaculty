import { Api } from "../../../api.js"

var api= new Api();

var dodaj=document.getElementById("dodaj")
dodaj.onclick=(ev)=>{
    var ime= document.getElementById("inputImeProf").value;
    var prezime= document.getElementById("inputPrezimeProf").value;
    var bio=document.getElementById("inputBio").value;
    var email= document.getElementById("inputEmail").value;
    var slika= document.getElementById("inputSlika").value;

    console.log(ime,prezime,bio,email,slika)
    var prof={
        "ime": ime,
        "prezime": prezime,
        "biografija": bio,
        "slika": slika,
        "email": email
      }
    kreiraj(prof)
}
async function kreiraj(prof){
    var ch= await api.createProfesor(prof)
    if(ch!=false){
        alert("Uspesno kreiran profesor!")
        window.location.reload()
    }
}