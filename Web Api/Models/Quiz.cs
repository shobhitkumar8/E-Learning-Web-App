using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineEducationSystem.Models
{
    public class Quiz
    {
        [Key]
        public int Quiz_ID { get; set; }
        [Column(TypeName ="varchar(30)")]
        public string Title { get; set; }
              
    }
}
