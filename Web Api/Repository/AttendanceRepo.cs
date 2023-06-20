using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Models
{
    public class AttendanceRepo : IAttendanceRepo
    {

        public OEScontext _context;
        public AttendanceRepo(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> AddAttendance(Attendance att)
        {
            try
            {
                if (_context != null)
                {
                    await _context.attendances.AddAsync(att);
                    await _context.SaveChangesAsync();
                    return att.Attendance_ID;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public async Task<int> UpdateAttendance(Attendance item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            var index = _context.attendances.Find(item.Attendance_ID);
            if (index.Attendance_ID == -1)
            {
                return 0;
            }
            _context.attendances.Remove(index);
            await _context.attendances.AddAsync(item);
            await _context.SaveChangesAsync();
            return item.Attendance_ID;
        }
        public IEnumerable<Attendance> GetAllAttendance()
        {
            return _context.attendances.ToList();
        }
        public async Task<bool> DeleteAttendance(short id)
        {
            var result = await _context.attendances.FirstOrDefaultAsync(a => a.Attendance_ID == id);
            if (result != null)
            {
                _context.attendances.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }

    }
}
