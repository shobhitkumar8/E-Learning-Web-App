using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineEducationSystem.Models
{
    interface IStudentRepos
    {
        Task<int> StudentSignup(Student std);
       
        bool StudentLogin(Student std);
        //Task<int> AddStudent(Student id);
        Task<int> UpdateStudent(Student id);
        Task<bool> DeleteStudent(int id);
        IEnumerable<Student> GetAll();
    }
}
