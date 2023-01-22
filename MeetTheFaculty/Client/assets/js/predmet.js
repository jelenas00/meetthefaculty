import { Api } from "../../api.js"

var api=new Api()
var katedre=await api.getKatedre()

var kat=document.getElementById("katedre")
katedre.forEach((el,index)=>{
    kat.innerHTML+=`
    <li class="dropKatedre" id=${index}><a href="katedre-prikaz.html">${el.ime}</a></li>
    `
})
document.querySelectorAll(".dropKatedre").forEach(el=>{
    el.onclick=(ev)=>{
        window.location.href = "katedre-prikaz.html";
        sessionStorage.setItem("katedraPrikaz",JSON.stringify(katedre[el.id]))
    }
})
var katedra=JSON.parse(sessionStorage.getItem("katedraPrikaz"));
document.getElementById("imeKat").innerHTML=katedra.ime
var predmeti= await api.getPripadaKat(katedra.id)
console.log(predmeti)
predmeti.forEach((el,i)=>{
    document.getElementById("predmetiKat").innerHTML+=`
    <li class="predKatedre" id=${i} style="text-decoration: underline;cursor: pointer;"><a>${el.ime}</a></li>
    `
})
document.querySelectorAll(".predKatedre").forEach((el,i)=>{
    el.onclick=(ev)=>{
        const modal = new bootstrap.Modal(document.getElementById("modalPredmetiKatedre"), {})
        modal.show();
        document.getElementById("modalImePredmeta").innerHTML=predmeti[el.id].ime
        document.getElementById("predmetiModal").innerHTML=`
        <li style="text-decoration: underline;">ESPB: ${predmeti[el.id].espb}</li>
        <li style="text-decoration: underline;">Sifra: ${predmeti[el.id].sifra}</li>
        <li style="text-decoration: underline;">Status: ${predmeti[el.id].status}</li>
        `
        
    }
})
