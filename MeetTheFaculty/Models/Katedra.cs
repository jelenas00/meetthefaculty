//ime, godina osnovanja, predmeti,profesori,projekti

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Katedra
    {
        [Required]
        public string id { get; set; }=Guid.NewGuid().ToString();
        public string? Ime { get; set; }
        public string? GodinaOsnivanja { get; set; }
        public string? Opis { get; set; }
        public string? SlikaKat { get; set;}

    }
}