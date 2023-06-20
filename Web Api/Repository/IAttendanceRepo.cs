using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace OnlineEducationSystem.Models
{
    interface IAttendanceRepo
    {
        Task<int> AddAttendance(Attendance att);
        Task<int> UpdateAttendance(Attendance item);
        Task<bool> DeleteAttendance(short id);
        IEnumerable<Attendance> GetAllAttendance();
    }
}
