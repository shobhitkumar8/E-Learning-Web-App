using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlineEducationSystem.Models
{
    public class Courses
    {
        [Key]
        public int Course_ID { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Course_Title { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string Course_Discription { get; set; }
        public int Price { get; set; }
       
    }
}
