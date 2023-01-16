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

         [HttpGet]
        public async Task<IActionResult> Get(){
            var departments= await _client.Cypher.Match("(n:Katedra)").Return(n=>n.As<Katedra>()).ResultsAsync;

            return Ok(departments);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Katedra dep)
        {
            await _client.Cypher.Create("(d:Katedra $dep)").WithParam("dep",dep).ExecuteWithoutResultsAsync();

            return Ok();
        }
    }
}