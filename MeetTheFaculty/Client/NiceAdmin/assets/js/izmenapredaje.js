import { Api } from "../../../api.js"
import { Profesor } from "../../../profesor.js";

var api= new Api();
var profesori= await api.getProfesori()

var selektProf= document.querySelector(".odabirProf")
profesori.forEach((el,i)=>{
    selektProf.innerHTML+=`
    <option value="${i}">${el.ime+" "+el.prezime}</option>
    `
})
var izmena=document.getElementById("izmenaPredaje")
izmena.onclick=(ev)=>{
    var k=document.querySelector(".odabirProf").value;
    console.log(k)
    if(k==="false")
    {
        izmena.ariaDisabled=true
        alert("Odaberite katedru!")
    }
    else{
        var profspoj=profesori[k].id;
        vratiPredmete(profspoj)
    }
}

async function vratiPredmete(idprof){
    var ch= await api.getPredajeProf(idprof)
    if(ch.length==0)
    {
        alert("Nema podataka za prikaz!")
    }
    if(ch!=false)
    {
        console.log(ch)
        showModal(ch,idprof);
    }
}

function showModal( data,idprof) {
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
    console.log(dugmeModal)
    dugmeModal.onclick=(ev)=>obrisiPodatak(predmeti,idprof);
}

async function obrisiPodatak(predmeti,idprof)
{
    console.log(predmeti)
    console.log(idprof)
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
        let ch= await api.deletePredaje(idprof,p.id);
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