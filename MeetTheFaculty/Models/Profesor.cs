//ime,prezime,biografija, slika,katedra,predmeti, projekti,lab-ovi

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Profesor
    {
        [Required]
        public string id { get; set; }=Guid.NewGuid().ToString();
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Biografija { get; set; }
        public string? Slika { get; set; }
        public string? Email { get; set; }
    }
}