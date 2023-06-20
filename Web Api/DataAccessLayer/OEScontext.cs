using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnlineEducationSystem.Models;



namespace OnlineEducationSystem.DataAccessLayer
{
    public class OEScontext: DbContext
    {
        public OEScontext(DbContextOptions<OEScontext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Teacher>().ToTable("TblTeachers");
            modelBuilder.Entity<Student>().ToTable("TblStudents");
            //modelBuilder.Entity<StudentLogin>().ToTable("TblStudentLogin");
            modelBuilder.Entity<Courses>().ToTable("TblCourses");
            modelBuilder.Entity<Enrollments>().ToTable("TblEnrollments");
            modelBuilder.Entity<Attendance>().ToTable("TblAttendances");
            modelBuilder.Entity<Quiz>().ToTable("TblQuizs");
            modelBuilder.Entity<Payment>().ToTable("TblPayments");

            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Teacher> teachers { get; set; }
        public DbSet<Student> students { get; set; }
        //public DbSet<StudentLogin> studentLogin { get; set; }
        public DbSet<Courses> courses { get; set; }
        public DbSet<Enrollments> enrollments { get; set; }
        public DbSet<Attendance> attendances { get; set; }
        public DbSet<Quiz> quizs { get; set; }
        public DbSet<Payment> Payments { get; set; }
        //public object Student { get; internal set; }
    }
}
