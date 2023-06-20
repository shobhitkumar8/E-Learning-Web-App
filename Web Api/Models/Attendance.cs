using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineEducationSystem.Models
{
    public class Attendance
    {
        [Key]
        public int Attendance_ID { get; set; }

        
        public int Student_ID { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string StudentName { get; set; }
       
    }
}
