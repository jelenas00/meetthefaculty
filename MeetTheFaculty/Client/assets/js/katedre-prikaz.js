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
var profesori=await api.getRadiKat(katedra.id)
console.log(profesori)
document.getElementById("imeKat").innerHTML=katedra.ime
document.getElementById("opis").innerHTML=katedra.opis
var nastis=document.getElementById("nastavniciIsaradnici")
profesori.forEach((el,i)=>{
    document.getElementById("nastavniciIsaradnici").innerHTML+=`
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch prof">
                  <div class="member" id="${i}">
                    <img src="${el.slika}" style="cursor: pointer;" class="img-fluid" alt="">
                    <div class="member-content">
                      <h4>${el.ime} ${el.prezime}</h4>
                      <p>
                       
                      </p>
                      <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div> 
    `
})
console.log(document.querySelectorAll(".member"))
document.querySelectorAll(".member").forEach(el=>{
    el.onclick=async (ev)=>{
        var predmeti= await api.getPredajeProf(profesori[el.id].id)
        console.log(predmeti)
        const modal = new bootstrap.Modal(document.getElementById("myModaltg"), {})
        modal.show();
        document.getElementById("modalImePrezime").innerHTML=profesori[el.id].ime+" "+profesori[el.id].prezime
        document.getElementById("photo").innerHTML=`<img src="${profesori[el.id].slika}" class="img-fluid" alt="">`
        document.getElementById("bio").innerHTML=profesori[el.id].biografija
        document.getElementById("predmeti").innerHTML=``
        predmeti.forEach((el,i)=>{
            document.getElementById("predmeti").innerHTML+=`
            <li class="predmetiProfesora" id=${i}>${el.ime}</li>
            `
        })
    }
})
