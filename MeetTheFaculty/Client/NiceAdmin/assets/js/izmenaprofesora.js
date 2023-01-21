import { Api } from "../../../api.js"
import { Profesor } from "../../../profesor.js";

var api= new Api();
var profesori= await api.getProfesori()
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
function onclik(){
    let s=0;
    let val=document.getElementsByName("btnprofesori");
    val.forEach((s,i)=>
    {
        if(s.checked==true){
            alert(i);
        }
    })
    
}
let divBtnProfesori=document.getElementById('divizmenitg');
let izmeniBtn=document.createElement("button");
izmeniBtn.innerText="Izmeni";
izmeniBtn.className="btn btn-info buttonb buttonb2";
izmeniBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-pencil-square"></i>`;
divBtnProfesori.appendChild(izmeniBtn);
let obrisiBtn= document.createElement("button");
obrisiBtn.innerText="Obriši";
obrisiBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-x-square"></i>`;
obrisiBtn.className="btn btn-danger buttonr buttonr2";
divBtnProfesori.appendChild(obrisiBtn);

izmeniBtn.onclick=(ev)=>izmeniPodatke();
obrisiBtn.onclick=(ev)=>obrisiPodatak();

function izmeniPodatke()
{
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
        showModal(profesori[index]);
    }
    
}

function showModal( data) {
    let profesor= new Profesor();
    profesor=data;
    console.log(profesor);
    const modal = new bootstrap.Modal(document.getElementById("myModaltg"), {})
    modal.show();
    document.getElementById("modalBodytg").innerHTML=`
    <form role="form" method="POST" action="">
    <input type="hidden" name="_token" value="">
    <div class="form-group">
        <label class="control-label">Ime</label>
        <div>
            <input type="text" class="form-control input-lg" name="ime" id="imeModaltg" value="${profesor.ime}" required/>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Prezime</label>
        <div>
            <input type="text" class="form-control input-lg" name="prezime" id="prezimeModaltg" value="${profesor.prezime}" required/>
        </div>
    </div>
    <div class="form-group">
    <label class="control-label">Biografija</label>
    <div>
        <input type="text" class="form-control input-lg" name="prezime" id="bioModaltg" value="${profesor.biografija}" required/>
    </div>
    </div><div class="form-group">
    <label class="control-label">Email</label>
    <div>
        <input type="text" class="form-control input-lg" name="prezime" id="emailModaltg" value="${profesor.email}" required/>
    </div>
    </div>
    <div class="form-group">
    <label class="control-label">Slika</label>
    <div>
        <input type="text" class="form-control input-lg" name="prezime" id="slikaModaltg" value="${profesor.slika}" required/>
    </div>
    </div>
  </form>`
    //document.querySelector('.zaposliForma').value=radnik.tipRadnika;
    let dugmeModal=document.getElementById("btnModaltg");
    dugmeModal.onclik=(ev)=>console.log("ce bude")
    dugmeModal.onclick=(ev)=>pokupiPodatkeModal(profesor);
}  

async function pokupiPodatkeModal(prof)
{
    var ime=document.getElementById("imeModaltg").value;
    var prezime=document.getElementById("prezimeModaltg").value;
    var bio=document.getElementById("bioModaltg").value;
    var email=document.getElementById("emailModaltg").value;
    var slika=document.getElementById("slikaModaltg").value;
    let profesor={
        "id": prof.id,
        "ime": ime,
        "prezime": prezime,
        "biografija": bio,
        "slika": slika,
        "email": email
      }
    let ch= await api.updateProfesor(profesor);
    if(ch==true)
    {
        location.reload();
    }
}

async function obrisiPodatak()
{
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
        console.log(profesori[index]);
        let p= new Profesor();
        p=profesori[index];
        let ch= await api.deleteProfesor(p.id);
        if(ch==true)
        {
            location.reload();
        }
        else{
            console.log(ch);
        }
    }
}