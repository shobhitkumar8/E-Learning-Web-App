using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Models
{
    public class CoursesRepos : ICoursesRepos
    {
        public OEScontext _context;
        public CoursesRepos(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> AddCourses(Courses id)
        {
            try
            {
                if (_context != null)
                {
                    await _context.courses.AddAsync(id);
                    await _context.SaveChangesAsync();
                    return id.Course_ID;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public async Task<int> UpdateCourses(Courses id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("item");
            }
            var index = _context.courses.Find(id.Course_ID);
            if (index.Course_ID == -1)
            {
                return 0;
            }
            _context.courses.Remove(index);
            await _context.courses.AddAsync(id);
            await _context.SaveChangesAsync();
            return id.Course_ID;
        }
        public IEnumerable<Courses> GetAllCourses()
        {
            return _context.courses.ToList();
        }
        public async Task<bool> DeleteCourses(int id)
        {
            var result = await _context.courses.FirstOrDefaultAsync(e => e.Course_ID == id);
            if (result != null)
            {
                _context.courses.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }
    }
}
