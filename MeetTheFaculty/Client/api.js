import { Katedra } from "./katedra.js"
import { Profesor } from "./profesor.js"
import { Predmet } from "./predmet.js"
import { Radi } from "./radi.js"
import { Predaje } from "./predaje.js"
import { Pripada } from "./pripada.js"


export class Api{
    constructor(){}


    ////////////////////////POST//////////////////////////////////
    async createKatedra(katedra){
        let response = await fetch("http://localhost:5125/Klasa/CreateKatedra",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST",
            body: JSON.stringify(katedra)
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return response.json();
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async createProfesor(profesor){
        let response = await fetch("http://localhost:5125/Klasa/CreateProfesor",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST",
            body: JSON.stringify(profesor)
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return response.json();
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async createPredmet(predmet){
        let response = await fetch("http://localhost:5125/Klasa/CreatePredmet",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST",
            body: JSON.stringify(predmet)
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return response.json();
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async createPredaje(idprof,idpred){
        let response = await fetch("http://localhost:5125/Klasa/CreatePredaje/"+idprof+"/"+idpred,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST"
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async createPripada(idkat,idpred){
        let response = await fetch("http://localhost:5125/Klasa/CreatePripada/"+idkat+"/"+idpred,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST"
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async createRadi(idkat,idprof){
        let response = await fetch("http://localhost:5125/Klasa/CreateRadi/"+idkat+"/"+idprof,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"POST"
        });
        switch(response.status){
            case 200: {
                // console.log(await response.json());
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }
    
    ////////////////////////GET///////////////////////////////////
    async getKatedre()
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetKatedra", 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const katedra= new Katedra(el.id,el.ime,el.godinaOsnivanja,el.opis,el.slikaKat);
                        list.push(katedra);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getKatedraById(id)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetKatedra/"+id, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const katedra= new Katedra(el.id,el.ime,el.godinaOsnivanja,el.opis,el.slikaKat);
                        list.push(katedra);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPredmeti()
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPredmet", 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const predmet= new Predmet(el.id,el.ime,el.sifra,el.espb,el.status);
                        list.push(predmet);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPredmetById(id)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPredmet/"+id, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const predmet= new Predmet(el.id,el.ime,el.sifra,el.espb,el.status);
                        list.push(predmet);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getProfesori()
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetProfesor", 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const profesor= new Profesor(el.id,el.ime,el.prezime,el.biografija,el.slika,el.email);
                        list.push(profesor);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getProfesorById(id)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetProfesor/"+id, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const profesor= new Profesor(el.id,el.ime,el.prezime,el.biografija,el.slika,el.email);
                        list.push(profesor);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPredajeProf(idprof)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPredajeProf/"+idprof, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const predmet= new Predmet(el.id,el.ime,el.sifra,el.espb,el.status);
                        list.push(predmet);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPredaje(idpred)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPredaje/"+idpred, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const profesor= new Profesor(el.id,el.ime,el.prezime,el.biografija,el.slika,el.email);
                        list.push(profesor);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPripada(idpred)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPripada/"+idpred, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const katedra= new Katedra(el.id,el.ime,el.godinaOsnivanja,el.opis,el.slikaKat);
                        list.push(katedra);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getPripadaKat(idkat)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetPripadaKat/"+idkat, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const predmet= new Predmet(el.id,el.ime,el.sifra,el.espb,el.status);
                        list.push(predmet);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getRadi(idprof)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetRadi/"+idprof, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const katedra= new Katedra(el.id,el.ime,el.godinaOsnivanja,el.opis,el.slikaKat);
                        list.push(katedra);
                    });
                    return list;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async getRadiKat(idkat)
    {
        let list=[]
        let response= await fetch("http://localhost:5125/Klasa/GetRadiKat/"+idkat, 
        {
            method:"GET"
        });
        switch(response.status)
        {
            case 200:
                {
                    var data= await response.json();
                    data.forEach(el => {
                        const profesor= new Profesor(el.id,el.ime,el.prezime,el.biografija,el.slika,el.email);
                        list.push(profesor);
                    });
                    return list;
                }
                case 204:{
                    return 1;
                }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }
    ////////////////////////PUT///////////////////////////////////
    async updateKatedra(katedra){

        let response = await fetch("http://localhost:5125/Klasa/UpdateKatedra",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(katedra)
        });

        switch(response.status){
            case 200: {
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async updatePredmet(predmet){

        let response = await fetch("http://localhost:5125/Klasa/UpdatePredmet",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(predmet)
        });

        switch(response.status){
            case 200: {
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async updateProfesor(profesor){

        let response = await fetch("http://localhost:5125/Klasa/UpdateProfesor",
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(profesor)
        });

        switch(response.status){
            case 200: {
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }
    ////////////////////////DELETE////////////////////////////////
    async deleteKatedra(id)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeleteKatedra/"+id,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisana katedra`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async deleteProfesor(id)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeleteProfesor/"+id,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisan profesor`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async deletePredmet(id)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeletePredmet/"+id,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisan predmet`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async deletePredaje(idprof,idpred)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeletePredaje/"+idprof+"/"+idpred,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisana veza predaje!`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async deletePripada(idkat,idpred)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeletePripada/"+idkat+"/"+idpred,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisana veza pripada!`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }

    async deleteRadi(idkat,idprof)
    {
        let response= await fetch("http://localhost:5125/Klasa/DeleteRadi/"+idkat+"/"+idprof,
        {
            method:"DELETE"
        });
        switch(response.status){
            case 200: {
                console.log(`Uspesno izbrisana veza radi!`);
                return true;
            }
            case 400:{
                console.log(`Client error: ${await response.text()}`);
                return false;
            }
            default:{
                console.log(`Server error: ${await response.text()}`);
                return false;
            }
        }
    }
}