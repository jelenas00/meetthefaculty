//ime,prezime,biografija, slika,katedra,predmeti, projekti,lab-ovi

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Profesor
    {
        [Required]
        public int ProfesorID { get; set; }
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Biografija { get; set; }
        public string? Slika { get; set; }
        public Katedra? Katedra { get; set; }
        public List<Predmet>? Predmeti { get; set; }
        public List<Projekat>? Projekti { get; set; }
        public List<Laboratorija>? Laboratorije { get; set; }
    }
}