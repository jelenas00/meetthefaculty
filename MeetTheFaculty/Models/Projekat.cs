//ime, profesori, opis,katedre,labovi

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Projekat
    {
        [Required]
        public int ProjekatID { get; set; }
        public string? Ime { get; set; }
        public string? Opis { get; set; }
        public List<Katedra>? Katedre { get; set; }
        public List<Laboratorija>? Laboratorije { get; set; }
    }
}