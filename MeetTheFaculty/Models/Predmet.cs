//ime,sifra, espb, ob/izbroni-status, profesori, katedra

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Predmet
    {
        [Required]
        public int PredmetID { get; set; }
        public string? Ime { get; set; }
        public string? Sifra { get; set; }
        public string? ESPB { get; set; }
        public string? Status { get; set; }
        public List<Profesor>? Profesori{ get; set; }
    }
}