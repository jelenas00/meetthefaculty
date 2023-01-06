//ime, godina osnovanja, predmeti,profesori,projekti

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Katedra
    {
        [Required]
        public string KatedraID { get; set; }
        public string Ime { get; set; }
        public List<Predmet>? Predmeti { get; set; }
        public List<Profesor>? Profesori { get; set; }
        public List<Projekat>? Projekti { get; set; }
    }
}