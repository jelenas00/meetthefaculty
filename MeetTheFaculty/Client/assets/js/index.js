import { Api } from "../../api.js"


var api=new Api()
var prof= await api.getProfesori()
var katedre=await api.getKatedre()
var predmeti= await api.getPredmeti()
console.log(katedre)
console.log(prof)
console.log(predmeti)
var kat=document.getElementById("katedre")
katedre.forEach((el,index)=>{
    kat.innerHTML+=`
    <li class="dropKatedre" id=${index}><a href="#">${el.ime}</a></li>
    `
})
console.log(document.querySelectorAll(".dropKatedre"))
document.querySelectorAll(".dropKatedre").forEach(el=>{
    el.onclick=(ev)=>{
        window.location.href = "katedre-prikaz.html";
        sessionStorage.setItem("katedraPrikaz",JSON.stringify(katedre[el.id]))
    }
})
document.getElementById("predmetiCounter").setAttribute("data-purecounter-end",predmeti.length)
document.getElementById("profesoriCounter").setAttribute("data-purecounter-end",prof.length)
document.getElementById("katedreCounter").setAttribute("data-purecounter-end",katedre.length)