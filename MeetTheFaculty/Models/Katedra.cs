//ime, godina osnovanja, predmeti,profesori,projekti

using System.ComponentModel.DataAnnotations;

namespace MeetTheFaculty.Models
{
    public class Katedra
    {
        [Required]
        public string id { get; set; }=Guid.NewGuid().ToString();
        public string? Ime { get; set; }
        public List<Pripada>? Predmeti { get; set; }
        public List<Radi>? Profesori { get; set; }

    }
}