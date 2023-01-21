import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";
import { Predmet } from "../../../predmet.js";

var api= new Api();
var katedre= await api.getKatedre();
var predmeti= await api.getPredmeti();
console.log(katedre)
console.log(predmeti)
var selektKat= document.querySelector(".odabirKat")
var selektPred= document.querySelector(".odabirPred")
katedre.forEach((el,i)=>{
    selektKat.innerHTML+=`
    <option value="${i}">${el.ime}</option>
    `
})
predmeti.forEach((el,i)=>{
    selektPred.innerHTML+=`
    <option value="${i}">${el.ime}</option>
    `
})

var veza=document.getElementById("vezaKatPred")
veza.onclick=(ev)=>{
    var k=document.querySelector(".odabirKat").value;
    var p= document.querySelector(".odabirPred").value;
    console.log(k,p)
    if(k==="false")
    {
        alert("Odaberite katedru!")
    }
    else if(p==="false")
    {
        alert("Odaberite predmet!")
    }
    else{
        var katspoj=katedre[k].id;
        var predspoj=predmeti[p].id
        console.log(katspoj,predspoj)
        spoji(katspoj,predspoj)
    }
}
async function spoji(idkat,idpred){
    var ch= await api.createPripada(idkat,idpred)
    if(ch==true)
    {
        alert("Veza uspesno kreirana!")
        location.reload()
    }
}