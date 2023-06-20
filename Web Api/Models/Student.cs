using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlineEducationSystem.Models
{
    public class Student
    {
        [Key]
        public int Student_ID { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Student_Name { get; set; }
        [Column(TypeName = "varchar(25)")]
        public string Email_ID { get; set; }
        [Column(TypeName = "varchar(15)")]
        [Required]
        public string UserName { get; set; }
        [Column(TypeName = "varchar(15)")]
        [Required]
        public string Password { get; set; }
              
        
    }
}
