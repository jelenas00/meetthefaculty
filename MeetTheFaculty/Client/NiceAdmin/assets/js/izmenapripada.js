import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";
import { Profesor } from "../../../profesor.js";

var api= new Api();
var katedre= await api.getKatedre()
var selektKat= document.querySelector(".odabirKat")
katedre.forEach((el,i)=>{
    selektKat.innerHTML+=`
    <option value="${i}">${el.ime}</option>
    `
})
var izmena=document.getElementById("izmenaPripada")
izmena.onclick=(ev)=>{
    var k=document.querySelector(".odabirKat").value;
    console.log(k)
    if(k==="false")
    {
        izmena.ariaDisabled=true
        alert("Odaberite katedru!")
    }
    else{
        var katspoj=katedre[k].id;
        vratiPredmete(katspoj)
    }
}

async function vratiPredmete(idkat){
    var ch= await api.getPripadaKat(idkat)
    if(ch.length==0)
    {
        alert("Nema podataka za prikaz!")
    }
    if(ch!=false)
    {
        console.log(ch)
        showModal(ch,idkat);
    }
}

function showModal( data,idkat) {
    var predmeti=data;
    const modal = new bootstrap.Modal(document.getElementById("largeModal"), {})
    modal.show();
    document.getElementById("modalBodytg").innerHTML=`
    <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Ime</th>
                    <th scope="col">Šifra</th>
                    <th scope="col">ESPB</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody id="tblpredmeti">
                  
                </tbody>
              </table>
    `
    predmeti.forEach((el,i)=>{
        document.getElementById("tblpredmeti").innerHTML+=`
        <tr>
        <th scope="row">${i+1}</th>
        <td>${el.ime}</td>
        <td>${el.sifra}</td>
        <td>${el.espb}</td>
        <td>${el.status}</td>
        <td name="radioPredmeti"></td>
    </tr>
    `
    })
    let s= document.getElementsByName('radioPredmeti');
    s.forEach((s,i)=>{
        let btn=document.createElement("input");
        btn.type="radio";
        btn.name="btnpredmeti";
        btn.value=i;
        s.appendChild(btn);
    })
    let dugmeModal=document.getElementById("btnModaltg");
    dugmeModal.onclick=(ev)=>obrisiPodatak(predmeti,idkat);
}

async function obrisiPodatak(predmeti,idkat)
{
    let index;
    let izabrano=0;
    document.getElementsByName("btnpredmeti").forEach(d=>{
        if(d.checked==true)
        {
            index=d.value;
            izabrano=1;
        }
    });
    if(izabrano==0)
    {
        alert("Odaberite predmet!");
    }
    else
    {
        var p=predmeti[index];
        console.log(p.id)
        let ch= await api.deletePripada(idkat,p.id);
        if(ch==true)
        {
            alert("Veza uspesno obrisana!")
            location.reload();
        }
        else{
            console.log(ch);
        }
    }
}