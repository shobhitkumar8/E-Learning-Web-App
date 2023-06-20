using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlineEducationSystem.Models
{
    public class Payment
    {
        [Key]
        [Required]
        public int Pay_ID { get; set; }
        [Required]
        //[Column(TypeName = "varchar(30)")]
        public string Card_Name { get; set; }
        [Required]
        //[Column(TypeName = "varchar(16)")]
        public long Card_Number { get; set; }
        [Required]
       // [Column(TypeName = "varchar(10)")]
        public long Mobile { get; set; }
        [Required]
        //[Column(TypeName = "varchar(3)")]
        public int Ex_Month { get; set; }
        [Required]
       // [Column(TypeName = "varchar(4)")]
        public int Ex_Year { get; set; }
        [Required]
        //[Column(TypeName = "varchar(3)")]
        public int CVV { get; set; }
        [Required]
        public int Amount { get; set; }
    }
}
