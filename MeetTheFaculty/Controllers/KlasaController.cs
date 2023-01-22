using System.Linq;
using Neo4jClient;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MeetTheFaculty.Models;

namespace MeetTheFaculty.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KlasaController:ControllerBase
    {
        private IGraphClient _client;
        public KlasaController()//IGraphClient client)
        {
            var client= new BoltGraphClient("bolt://localhost:7687","neo4j","neo4jneo4j");
            client.ConnectAsync().Wait();
            _client=client;
        }
        //Katedra
        [Route("GetKatedra")]
         [HttpGet]
        public async Task<IActionResult> GetKatedra(){
            var departments= await _client.Cypher.Match("(n:Katedra)").Return(n=>n.As<Katedra>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("GetKatedra/{id}")]
         [HttpGet]
        public async Task<IActionResult> GetByIDKatedra(string id){
            var departments= await _client.Cypher.Match("(n:Katedra  {id:'"+id+"'})").Return(n=>n.As<Katedra>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("CreateKatedra")]
        [HttpPost]
        public async Task<IActionResult> CreateKatedra([FromBody]Katedra dep)
        {
            await _client.Cypher.Create("(d:Katedra {id:'"+dep.id
                                        +"',Ime:'"+dep.Ime
                                        +"',GodinaOsnivanja:'"+dep.GodinaOsnivanja
                                        +"',SlikaKat:'"+dep.SlikaKat
                                        +"',Opis:'"+dep.Opis+"'})").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("UpdateKatedra")]
        [HttpPut]
        public async Task<IActionResult> UpdateKatedra([FromBody]Katedra dep)
        {
            await _client.Cypher.Match("(d:Katedra {id:'"+dep.id+"'})")
                                .Set("d.Ime='"+dep.Ime+"',d.GodinaOsnivanja='"+dep.GodinaOsnivanja+"',d.SlikaKat='"+dep.SlikaKat
                                        +"',d.Opis='"+dep.Opis+"'").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("DeleteKatedra/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteKatedra(string id)
        {
            await _client.Cypher.Match("(d:Katedra {id:'"+id+"'} )").DetachDelete("d").ExecuteWithoutResultsAsync();

            return Ok();
        }
        //Profesor
        [Route("GetProfesor")]
        [HttpGet]
        public async Task<IActionResult> GetProfesor(){
            var departments= await _client.Cypher.Match("(n:Profesor)").Return(n=>n.As<Profesor>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("GetProfesor/{id}")]
         [HttpGet]
        public async Task<IActionResult> GetByIDProfesor(string id){
            var departments= await _client.Cypher.Match("(n:Profesor  {id:'"+id+"'})").Return(n=>n.As<Profesor>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("CreateProfesor")]
        [HttpPost]
        public async Task<IActionResult> CreateProfesor([FromBody]Profesor dep)
        {
            await _client.Cypher.Create("(d:Profesor {id:'"+dep.id
                                        +"',Ime:'"+dep.Ime
                                        +"',Prezime:'"+dep.Prezime
                                        +"',Biografija:'"+dep.Biografija
                                        +"',Email:'"+dep.Email
                                        +"',Slika:'"+dep.Slika+"'})").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("UpdateProfesor")]
        [HttpPut]
        public async Task<IActionResult> UpdateProfesor([FromBody]Profesor dep)
        {
            await _client.Cypher.Match("(d:Profesor {id:'"+dep.id+"'})")
            .Set("d.Ime='"+dep.Ime
            +"',d.Prezime='"+dep.Prezime
            +"',d.Biografija='"+dep.Biografija
             +"',d.Email='"+dep.Email
            +"',d.Slika='"+dep.Slika+"'").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("DeleteProfesor/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteProfesor(string id)
        {
            await _client.Cypher.Match("(d:Profesor {id:'"+id+"'} )").DetachDelete("d").ExecuteWithoutResultsAsync();

            return Ok();
        }
        //Predmet
        [Route("GetPredmet")]
        [HttpGet]
        public async Task<IActionResult> GetPredmet(){
            var departments= await _client.Cypher.Match("(n:Predmet)").Return(n=>n.As<Predmet>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("GetPredmet/{id}")]
         [HttpGet]
        public async Task<IActionResult> GetByIDPredmet(string id){
            var departments= await _client.Cypher.Match("(n:Predmet  {id:'"+id+"'})").Return(n=>n.As<Predmet>()).ResultsAsync;

            return Ok(departments);
        }
        [Route("CreatePredmet")]
        [HttpPost]
        public async Task<IActionResult> CreatePredmet([FromBody]Predmet dep)
        {
            await _client.Cypher.Create("(d:Predmet {id:'"+dep.id
                                        +"',Ime:'"+dep.Ime
                                        +"',Sifra:'"+dep.Sifra
                                        +"',ESPB:'"+dep.ESPB
                                        +"',Status:'"+dep.Status+"'})").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("UpdatePredmet")]
        [HttpPut]
        public async Task<IActionResult> UpdatePredmet([FromBody]Predmet dep)
        {
            await _client.Cypher.Match("(d:Predmet {id:'"+dep.id+"'})")
            .Set("d.Ime='"+dep.Ime
            +"',d.Sifra='"+dep.Sifra
            +"',d.ESPB='"+dep.ESPB
            +"',d.Status='"+dep.Status+"'").ExecuteWithoutResultsAsync();

            return Ok(dep);
        }
        [Route("DeletePredmet/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeletePredmet(string id)
        {
            await _client.Cypher.Match("(d:Predmet {id:'"+id+"'} )").DetachDelete("d").ExecuteWithoutResultsAsync();

            return Ok();
        }
        //Predaje
        [Route("GetPredaje/{idpred}")]
        [HttpGet]
        public async Task<IActionResult> GetPredaje(string idpred)
        {
            var dep=await _client.Cypher.Match("(prof:Predmet {id:'"+idpred+"'})<-[:predajena]-(n)").Return(n=>n.As<Profesor>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("GetPredajeProf/{idprof}")]
        [HttpGet]
        public async Task<IActionResult> GetPredajeProf(string idprof)
        {
            var dep=await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})-[:predajena]->(n)").Return(n=>n.As<Predmet>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("CreatePredaje/{idprof}/{idpred}")]
        [HttpPost]
        public async Task<IActionResult> CreatePredajet(string idprof,string idpred)
        {
            var dep=await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})-[rel:predajena]->(pred:Predmet {id:'"+idpred+"'})").Return(rel=>rel.As<Predaje>()).ResultsAsync;
            if((dep.Count())==0)
                await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})").Match("(pred:Predmet {id:'"+idpred+"'})").Create("(prof)-[rel:predajena{id:'"+Guid.NewGuid().ToString()+"'}]->(pred)").ExecuteWithoutResultsAsync();

            return Ok();
        }
        [Route("DeletePredaje/{idprof}/{idpred}")]
        [HttpDelete]
        public async Task<IActionResult> DeletePredajet(string idprof,string idpred)
        {
            await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})-[rel:predajena]->(pred:Predmet {id:'"+idpred+"'})").Delete("rel").ExecuteWithoutResultsAsync();


            return Ok();
        }
        //Pripada
        [Route("GetPripada/{idpred}")]
        [HttpGet]
        public async Task<IActionResult> GetPripada(string idpred)
        {
            var dep=await _client.Cypher.Match("(prof:Predmet {id:'"+idpred+"'})-[:pripadana]->(n)").Return(n=>n.As<Katedra>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("GetPripadaKat/{idkat}")]
        [HttpGet]
        public async Task<IActionResult> GetPripadaKat(string idkat)
        {
            var dep=await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})<-[:pripadana]-(n)").Return(n=>n.As<Predmet>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("CreatePripada/{idkat}/{idpred}")]
        [HttpPost]
        public async Task<IActionResult> CreatePripada(string idkat,string idpred)
        {
            var dep=await _client.Cypher.Match("(prof:Predmet {id:'"+idpred+"'})-[rel:pripadana]->(kat:Katedra {id:'"+idkat+"'})").Return(rel=>rel.As<Katedra>()).ResultsAsync;
            if((dep.Count())==0)
                await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})").Match("(pred:Predmet {id:'"+idpred+"'})").Create("(kat)<-[rel:pripadana{id:'"+Guid.NewGuid().ToString()+"'}]-(pred)").ExecuteWithoutResultsAsync();

            return Ok();
        }
        [Route("DeletePripada/{idkat}/{idpred}")]
        [HttpDelete]
        public async Task<IActionResult> DeletePripada(string idkat,string idpred)
        {
            await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})<-[rel:pripadana]-(pred:Predmet {id:'"+idpred+"'})").Delete("rel").ExecuteWithoutResultsAsync();


            return Ok();
        }
        //Radi
        [Route("GetRadi/{idprof}")]
        [HttpGet]
        public async Task<IActionResult> GetRadi(string idprof)
        {
            var dep=await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})-[rel:radina]->(n)").Return(n=>n.As<Katedra>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("GetRadiKat/{idkat}")]
        [HttpGet]
        public async Task<IActionResult> GetRadiKat(string idkat)
        {
            var dep=await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})<-[rel:radina]-(n)").Return(n=>n.As<Profesor>()).ResultsAsync;

            return Ok(dep);
        }
        [Route("CreateRadi/{idkat}/{idprof}")]
        [HttpPost]
        public async Task<IActionResult> CreateRadi(string idkat,string idprof)
        {
            var dep=await _client.Cypher.Match("(prof:Profesor {id:'"+idprof+"'})-[rel:radina]->(kat:Katedra {id:'"+idkat+"'})").Return(rel=>rel.As<Katedra>()).ResultsAsync;
            if((dep.Count())==0)
                await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})").Match("(prof:Profesor {id:'"+idprof+"'})").Create("(kat)<-[rel:radina{id:'"+Guid.NewGuid().ToString()+"'}]-(prof)").ExecuteWithoutResultsAsync();

            return Ok();
        }
        [Route("DeleteRadi/{idkat}/{idprof}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteRadi(string idkat,string idprof)
        {
            await _client.Cypher.Match("(kat:Katedra {id:'"+idkat+"'})<-[rel:radina]-(prof:Profesor {id:'"+idprof+"'})").Delete("rel").ExecuteWithoutResultsAsync();


            return Ok();
        }
    }
}