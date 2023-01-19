namespace MeetTheFaculty.Models
{
    public class Predaje{
        public string id { get; set; }=Guid.NewGuid().ToString();
        public Predmet? predmet { get; set; }
        public Profesor? profesor { get; set; }
    }
}