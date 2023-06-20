using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineEducationSystem.Models
{
    interface ITeacherRepos
    {
        Task<int> AddTeacher(Teacher id);
        Task<int> UpdateTeacher(Teacher id);
        Task<bool> DeleteTeacher(int id);
        IEnumerable<Teacher> GetAll();
    }
}
