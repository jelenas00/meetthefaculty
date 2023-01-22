import { Api } from "../../../api.js"
import { Katedra } from "../../../katedra.js";

var api= new Api();
var katedre= await api.getKatedre();
var profesori= await api.getProfesori();
var predmeti= await api.getPredmeti();

document.getElementById("brPremeta").innerHTML=predmeti.length
document.getElementById("brProfesora").innerHTML=profesori.length
document.getElementById("brKatedri").innerHTML=katedre.length
