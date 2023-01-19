namespace MeetTheFaculty.Models
{
    public class Pripada{
        public string id { get; set; }=Guid.NewGuid().ToString();
        public Predmet? predmet { get; set; }
        public Katedra? katedra { get; set; }
    }
}