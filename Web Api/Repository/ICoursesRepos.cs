using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineEducationSystem.Models
{
    interface ICoursesRepos
    {
        Task<int> AddCourses(Courses id);
        Task<int> UpdateCourses(Courses id);
        Task<bool> DeleteCourses(int id);
        IEnumerable<Courses> GetAllCourses();
    }
}
