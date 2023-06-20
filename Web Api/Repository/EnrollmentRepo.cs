using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Models
{
    
    public class EnrollmentRepo : IEnrollmentRepo
    {
        public OEScontext _context;
        public EnrollmentRepo(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> AddEnrollment(Enrollments enr)
        {
            try
            {
                if (_context != null)
                {
                    await _context.enrollments.AddAsync(enr);
                    await _context.SaveChangesAsync();
                    return enr.Enroll_ID;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public IEnumerable<Enrollments> GetAllEnrollments()
        {
            return _context.enrollments.ToList();
        }
        public async Task<bool> DeleteEnrollment(short id)
        {
            var result = await _context.enrollments.FirstOrDefaultAsync(e => e.Enroll_ID == id);
            if (result != null)
            {
                _context.enrollments.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }

    }
}
