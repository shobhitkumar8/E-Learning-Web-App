using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineEducationSystem.Models
{
    public class Enrollments
    {
        [Key]
        public int Enroll_ID { get; set; }        
        public int Student_ID { get; set; }        
        public int Course_ID { get; set; }
        [Column(TypeName = "char(10)")]
        public char Grade { get; set; }
        
    }
}
