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
var izmena=document.getElementById("izmenaRadi")
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
        vratiProfesore(katspoj)
    }
}

function showModal( data,idkat) {
    var profesori=data;
    const modal = new bootstrap.Modal(document.getElementById("largeModal"), {})
    modal.show();
    document.getElementById("modalBodytg").innerHTML=`
    <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Ime</th>
                    <th scope="col">Prezime</th>
                    <th scope="col">Biografija</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Slika</th>

                  </tr>
                </thead>
                <tbody id="tblprofesori">
                  
                </tbody>
              </table>
    `
    profesori.forEach((el,i)=>{
        document.getElementById("tblprofesori").innerHTML+=`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${el.ime}</td>
            <td>${el.prezime}</td>
            <td>${el.biografija}</td>
            <td>${el.email}</td>
            <td>${el.slika}</td>
            <td name="radioProfesori"></td>
        </tr>
    `
    })
    let s= document.getElementsByName('radioProfesori');
    s.forEach((s,i)=>{
        let btn=document.createElement("input");
        btn.type="radio";
        btn.name="btnprofesori";
        btn.value=i;
        s.appendChild(btn);
    })
    let dugmeModal=document.getElementById("btnModaltg");
    console.log(dugmeModal)
    dugmeModal.onclick=(ev)=>obrisiPodatak(profesori,idkat);
}

async function obrisiPodatak(profesori,idkat)
{
    console.log(profesori)
    let index;
    let izabrano=0;
    document.getElementsByName("btnprofesori").forEach(d=>{
        if(d.checked==true)
        {
            index=d.value;
            izabrano=1;
        }
    });
    if(izabrano==0)
    {
        alert("Odaberite profesora!");
    }
    else
    {
        var p=profesori[index];
        console.log(p.id)
        let ch= await api.deleteRadi(idkat,p.id);
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

async function vratiProfesore(idkat){
    var ch= await api.getRadiKat(idkat)
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





// if( ch!=false){
    //     console.log(ch)
    //     var tabela=document.getElementById("brisanjeRadi")
    //     tabela.innerHTML=`
    //     <table class="table table-striped">
    //             <thead>
    //               <tr>
    //                 <th scope="col"></th>
    //                 <th scope="col">Ime</th>
    //                 <th scope="col">Prezime</th>
    //                 <th scope="col">Biografija</th>
    //                 <th scope="col">E-mail</th>
    //                 <th scope="col">Slika</th>

    //               </tr>
    //             </thead>
    //             <tbody id="tblprofesori">
                  
    //             </tbody>
    //           </table>
    //     `
    // }