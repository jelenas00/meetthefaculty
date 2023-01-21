import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";
import { Predmet } from "../../../predmet.js";

var api= new Api();
var katedre= await api.getKatedre();
var profesori= await api.getProfesori();
console.log(katedre)
console.log(profesori)
var selektKat= document.querySelector(".odabirKat")
var selektProf= document.querySelector(".odabirProf")
katedre.forEach((el,i)=>{
    selektKat.innerHTML+=`
    <option value="${i}">${el.ime}</option>
    `
})
profesori.forEach((el,i)=>{
    selektProf.innerHTML+=`
    <option value="${i}">${el.ime+" "+el.prezime}</option>
    `
})

var veza=document.getElementById("vezaKatProf")
veza.onclick=(ev)=>{
    var k=document.querySelector(".odabirKat").value;
    var p= document.querySelector(".odabirProf").value;
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
        var profspoj=profesori[p].id
        console.log(katspoj,profspoj)
        spoji(katspoj,profspoj)
    }
}
async function spoji(idkat,idprof){
    var ch= await api.createRadi(idkat,idprof)
    if(ch==true)
    {
        alert("Veza uspesno kreirana!")
        location.reload()
    }
}