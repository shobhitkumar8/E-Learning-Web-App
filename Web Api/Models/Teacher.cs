using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlineEducationSystem.Models
{
    public class Teacher
    {
        [Key]
        public int Teacher_ID { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Teacher_Name { get; set; }
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
