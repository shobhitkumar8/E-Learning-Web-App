using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Models
{
    public class TeacherRepos : ITeacherRepos
    {
        public OEScontext _context;
        public TeacherRepos(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> AddTeacher(Teacher id)
        {
            try
            {
                if (_context != null)
                {
                    await _context.teachers.AddAsync(id);
                    await _context.SaveChangesAsync();
                    return id.Teacher_ID;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public async Task<int> UpdateTeacher(Teacher id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("item");
            }
            var index = _context.teachers.Find(id.Teacher_ID);
            if (index.Teacher_ID == -1)
            {
                return 0;
            }
            _context.teachers.Remove(index);
            await _context.teachers.AddAsync(id);
            await _context.SaveChangesAsync();
            return id.Teacher_ID;
        }
        public IEnumerable<Teacher> GetAll()
        {
            return _context.teachers.ToList();
        }
        public async Task<bool> DeleteTeacher(int id)
        {
            var result = await _context.teachers.FirstOrDefaultAsync(e => e.Teacher_ID == id);
            if (result != null)
            {
                _context.teachers.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }
    }
}
