import { Api } from "../../../api.js"
import { Predmet } from "../../../predmet.js";

var api= new Api();
var predmeti= await api.getPredmeti()
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
function onclik(){
    let s=0;
    let val=document.getElementsByName("btnpredmeti");
    val.forEach((s,i)=>
    {
        if(s.checked==true){
            alert(i);
        }
    })
    
}
let divBtnPredmeti=document.getElementById('divizmenitg');
let izmeniBtn=document.createElement("button");
izmeniBtn.innerText="Izmeni";
izmeniBtn.className="btn btn-info buttonb buttonb2";
izmeniBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-pencil-square"></i>`;
divBtnPredmeti.appendChild(izmeniBtn);
let obrisiBtn= document.createElement("button");
obrisiBtn.innerText="Obriši";
obrisiBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-x-square"></i>`;
obrisiBtn.className="btn btn-danger buttonr buttonr2";
divBtnPredmeti.appendChild(obrisiBtn);

izmeniBtn.onclick=(ev)=>izmeniPodatke();
obrisiBtn.onclick=(ev)=>obrisiPodatak();

function izmeniPodatke()
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
        alert("Odaberite katedru!");
    }
    else
    {
        showModal(predmeti[index]);
    }
    
}

function showModal( data) {
    let predmet= new Predmet();
    predmet=data;
    const modal = new bootstrap.Modal(document.getElementById("myModaltg"), {})
    modal.show();
    document.getElementById("modalBodytg").innerHTML=`
    <form role="form" method="POST" action="">
    <input type="hidden" name="_token" value="">
    <div class="form-group">
        <label class="control-label">Ime</label>
        <div>
            <input type="text" class="form-control input-lg" name="ime" id="imeModaltg" value="${predmet.ime}" required/>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Sifra</label>
        <div>
            <input type="text" class="form-control input-lg" name="prezime" id="sifraModaltg" value="${predmet.sifra}" required/>
        </div>
    </div>
    <div class="form-group">
    <label class="control-label">ESPB</label>
    <div>
        <input type="text" class="form-control input-lg" name="prezime" id="espbModaltg" value="${predmet.espb}" required/>
    </div>
    </div>
    <div class="col-md-4">
                  <label for="inputTip" class="form-label">Status</label>
                  <select id="inputTip" type="submit" aria-required="true" class="form-select status">
                    <option value="Obavezan">Obavezan</option>
                    <option value="Izborni">Izborni</option>         
                  </select>
                </div>
  </form>`
    document.querySelector('.status').value=predmet.status;
    let dugmeModal=document.getElementById("btnModaltg");
    console.log(dugmeModal)
    //dugmeModal.onclik=(ev)=>console.log("ce bude")
    dugmeModal.onclick=(ev)=>pokupiPodatkeModal(predmet);
}
async function pokupiPodatkeModal(pred)
{
    var ime=document.getElementById("imeModaltg").value;
    var sifra=document.getElementById("sifraModaltg").value;
    var espb=document.getElementById("espbModaltg").value;
    var status=document.querySelector('.status').value;
    console.log(ime,sifra,espb,status)
    let predmet={
        "id":pred.id,
        "ime": ime,
        "sifra": sifra,
        "espb": espb,
        "status": status
      }
      console.log(predmet)
    let ch= await api.updatePredmet(predmet);
    if(ch==true)
    {
        location.reload();
    }
}

async function obrisiPodatak()
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
        console.log(predmeti[index]);
        let p= new Predmet();
        p=predmeti[index];
        let ch= await api.deletePredmet(p.id);
        if(ch==true)
        {
            location.reload();
        }
        else{
            console.log(ch);
        }
    }
}