import { Api } from "../../api.js"


var api=new Api()
var prof= await api.getProfesori()
var katedre=await api.getKatedre()
console.log(katedre)

var kat=document.getElementById("katedre")
console.log(kat)
katedre.forEach((el,index)=>{
    kat.innerHTML+=`
    <li id=${index}><a href="#">${el.ime}</a></li>
    `
})