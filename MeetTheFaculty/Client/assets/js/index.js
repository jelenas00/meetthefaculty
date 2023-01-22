import { Api } from "../../api.js"


var api=new Api()
var prof= await api.getProfesori()
var katedre=await api.getKatedre()
console.log(katedre)

var kat=document.getElementById("katedre")
console.log(kat)
katedre.forEach((el,index)=>{
    kat.innerHTML+=`
    <li class="dropKatedre" id=${index}><a href="#">${el.ime}</a></li>
    `
})
console.log(document.querySelectorAll(".dropKatedre"))
document.querySelectorAll(".dropKatedre").forEach(el=>{
    console.log(katedre[el.id])
    el.onclick=(ev)=>{
        window.location.href = "katedre-prikaz.html";
        sessionStorage.setItem("katedraPrikaz",JSON.stringify(katedre[el.id]))
    }
})