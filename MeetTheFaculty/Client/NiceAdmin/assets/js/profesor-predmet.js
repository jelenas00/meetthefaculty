import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";
import { Predmet } from "../../../predmet.js";

var api= new Api();
var profesori= await api.getProfesori();
var predmeti= await api.getPredmeti();
console.log(profesori)
console.log(predmeti)
var selektProf= document.querySelector(".odabirProf")
var selektPred= document.querySelector(".odabirPred")
profesori.forEach((el,i)=>{
    selektProf.innerHTML+=`
    <option value="${i}">${el.ime+" "+el.prezime}</option>
    `
})
predmeti.forEach((el,i)=>{
    selektPred.innerHTML+=`
    <option value="${i}">${el.ime}</option>
    `
})

var veza=document.getElementById("vezaProfPred")
veza.onclick=(ev)=>{
    var prof=document.querySelector(".odabirProf").value;
    var pred= document.querySelector(".odabirPred").value;
    console.log(prof,pred)
    if(prof==="false")
    {
        alert("Odaberite profesora!")
    }
    else if(pred==="false")
    {
        alert("Odaberite predmet!")
    }
    else{
        var profspoj=profesori[prof].id;
        var predspoj=predmeti[pred].id
        console.log(profspoj,predspoj)
        spoji(profspoj,predspoj)
    }
}
async function spoji(idprof,idpred){
    var ch= await api.createPredaje(idprof,idpred)
    if(ch==true)
    {
        alert("Veza uspesno kreirana!")
        location.reload()
    }
}