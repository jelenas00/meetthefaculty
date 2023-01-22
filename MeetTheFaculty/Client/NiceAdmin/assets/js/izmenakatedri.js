import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";

var api= new Api();
var katedre= await api.getKatedre()
katedre.forEach((el,i)=>{
    document.getElementById("tblkatedre").innerHTML+=`
    <tr>
        <th scope="row">${i+1}</th>
        <td>${el.ime}</td>
        <td>${el.godinaOsnivanja}</td>
        <td>${el.opis}</td>
        <td>${el.slikaKat}</td>
        <td name="radioKatedre"></td>
    </tr>
`
})
let s= document.getElementsByName('radioKatedre');
s.forEach((s,i)=>{
    let btn=document.createElement("input");
    btn.type="radio";
    btn.name="btnkatedre";
    btn.value=i;
    s.appendChild(btn);
})
function onclik(){
    let s=0;
    let val=document.getElementsByName("btnkatedre");
    val.forEach((s,i)=>
    {
        if(s.checked==true){
            alert(katedre[i]);
        }
    })
    
}
let divBtnKatedre=document.getElementById('divizmenitg');
let izmeniBtn=document.createElement("button");
izmeniBtn.innerText="Izmeni";
izmeniBtn.className="btn btn-info buttonb buttonb2";
izmeniBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-pencil-square"></i>`;
divBtnKatedre.appendChild(izmeniBtn);
let obrisiBtn= document.createElement("button");
obrisiBtn.innerText="Obriši";
obrisiBtn.innerHTML+=`<i style="font-weight:bold;" class="bi bi-x-square"></i>`;
obrisiBtn.className="btn btn-danger buttonr buttonr2";
divBtnKatedre.appendChild(obrisiBtn);

izmeniBtn.onclick=(ev)=>izmeniPodatke();
obrisiBtn.onclick=(ev)=>obrisiPodatak();

function izmeniPodatke()
{
    let index;
    let izabrano=0;
    document.getElementsByName("btnkatedre").forEach(d=>{
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
        showModal(katedre[index]);
    }
    
}

function showModal( data) {
    let katedra= new Katedra();
    katedra=data;
    console.log(katedra);
    const modal = new bootstrap.Modal(document.getElementById("myModaltg"), {})
    modal.show();
    document.getElementById("modalBodytg").innerHTML=`
    <form role="form" method="POST" action="">
    <input type="hidden" name="_token" value="">
    <div class="form-group">
        <label class="control-label">Ime</label>
        <div>
            <input type="text" class="form-control input-lg" name="ime" id="imeModaltg" value="${katedra.ime}" required/>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Godina osnivanja</label>
        <div>
            <input type="text" class="form-control input-lg" name="prezime" id="godinaModaltg" value="${katedra.godinaOsnivanja}" required/>
        </div>
    </div>
    <div class="form-group">
    <label class="control-label">Opis</label>
    <div>
        <input type="text" class="form-control input-lg" name="prezime" id="opisModaltg" value="${katedra.opis}" required/>
    </div>
    </div>
    <div class="form-group">
        <label class="control-label">Link slike</label>
        <div>
            <input type="text" class="form-control input-lg" name="prezime" id="slikaModaltg" value="${katedra.slikaKat}" required/>
        </div>
    </div>
  </form>`
    let dugmeModal=document.getElementById("btnModaltg");
    dugmeModal.onclik=(ev)=>console.log("ce bude")
    dugmeModal.onclick=(ev)=>pokupiPodatkeModal(katedra);
}
async function pokupiPodatkeModal(kat)
{
    var ime=document.getElementById("imeModaltg").value;
    var god=document.getElementById("godinaModaltg").value;
    var opis=document.getElementById("opisModaltg").value;
    var slika=document.getElementById("slikaModaltg").value;
    console.log(ime,god,opis)
    let katedra={
        "id": kat.id,
        "ime": ime,
        "godinaOsnivanja": god,
        "opis": opis,
        "slikaKat": slika
      }
      
      console.log(katedra)
    let ch= await api.updateKatedra(katedra);
    if(ch==true)
    {
        location.reload();
    }
}

async function obrisiPodatak()
{
    let index;
    let izabrano=0;
    document.getElementsByName("btnkatedre").forEach(d=>{
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
        console.log(katedre[index]);
        let k= new Katedra();
        k=katedre[index];
        console.log(k)
        let ch= await api.deleteKatedra(k.id);
        if(ch==true)
        {
            location.reload();
        }
        else{
            console.log(ch);
        }
    }
}