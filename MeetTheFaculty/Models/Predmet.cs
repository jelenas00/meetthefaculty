//ime,sifra, espb, ob/izbroni-status, profesori, katedra

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Predmet
    {
        [Required]
       public string id { get; set; }=Guid.NewGuid().ToString();
        public string? Ime { get; set; }
        public string? Sifra { get; set; }
        public string? ESPB { get; set; }
        public string? Status { get; set; }
    }
}