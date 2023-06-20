using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineEducationSystem.Models
{
    interface IEnrollmentRepo
    {
        Task<int> AddEnrollment(Enrollments enr);
        
        IEnumerable<Enrollments> GetAllEnrollments();
        
    }
}
