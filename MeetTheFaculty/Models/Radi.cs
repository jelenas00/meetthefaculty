namespace MeetTheFaculty.Models
{
    public class Radi{
        public string id { get; set; }=Guid.NewGuid().ToString();
        public Katedra? katedra { get; set; }
        public Profesor? profesor { get; set; }
    }
}