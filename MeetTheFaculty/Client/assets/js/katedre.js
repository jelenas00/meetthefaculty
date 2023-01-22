import { Api } from "../../api.js"


var api=new Api()
var prof= await api.getProfesori()
var katedre=await api.getKatedre()
console.log(katedre)

var kat=document.getElementById("katedre")
console.log(kat)
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
var prikaz= document.getElementById("katedrePrikaz")
katedre.forEach((el,i)=>{
    prikaz.innerHTML+=`
    <div class="col-md-6 d-flex align-items-stretch" >
    <div class="card katedrePrikaz" id="${i}">
              <div class="card-img">
                 <img src="${el.slikaKat}" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">${el.ime}</h5>
        </div>
    </div>
    `
})
var prikaz= document.querySelectorAll(".katedrePrikaz")
console.log(prikaz)
prikaz.forEach(el => {
    el.onclick=(ev)=>{
        window.location.href = "katedre-prikaz.html";
        sessionStorage.setItem("katedraPrikaz",JSON.stringify(katedre[el.id]))
    }
});