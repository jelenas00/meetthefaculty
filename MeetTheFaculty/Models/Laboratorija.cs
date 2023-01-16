//ime, profesori, projekti,opis

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Laboratorija
    {
        [Required]
        public int LaboratorijaID { get; set; }
        public string? Opis { get; set; }
        public List<Profesor>? Profesori { get; set; }
        public List<Projekat>? Projekti { get; set; }
    }
}