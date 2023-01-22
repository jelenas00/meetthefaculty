import { Api } from "../../api.js"


var api=new Api()
var prof= await api.getProfesori()
var katedre=await api.getKatedre()
console.log(katedre)

var kat=document.getElementById("katedre")
console.log(kat)
katedre.forEach((el,index)=>{
    kat.innerHTML+=`
    <li id=${index}><a href="">${el.ime}</a></li>
    `
})
var prikaz= document.getElementById("katedrePrikaz")
katedre.forEach((el,i)=>{
    prikaz.innerHTML+=`
    <div class="col-md-6 d-flex align-items-stretch">
            <div class="card">
              <div class="card-img">
                 <img src="${el.slikaKat}" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">${el.ime}</a></h5>
        </div>
    </div>
    `
})