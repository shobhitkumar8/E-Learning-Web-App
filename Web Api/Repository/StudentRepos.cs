using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using OnlineEducationSystem.Models;

namespace OnlineEducationSystem.Models
{
    public class StudentRepos : IStudentRepos
    {
        private OEScontext _context;
        public StudentRepos(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> StudentSignup(Student std)
        {
            if (_context != null)
            {
                await _context.students.AddAsync(std);
                await _context.SaveChangesAsync();

                return std.Student_ID;
            }

            return 0;
        }
       
        public bool StudentLogin(Student std)
        {
            if (_context != null)
            {
                return _context.students.ToList().Exists(a => (a.UserName.Equals(std.UserName)) && (a.Password.Equals(std.Password)));

            }
            return false;
        }
        //public async Task<int> AddStudent(Student id)
        //{
        //    try
        //    {
        //        if (_context != null)
        //        {
        //            await _context.students.AddAsync(id);
        //            await _context.SaveChangesAsync();
        //            return id.Student_ID;
        //        }
        //        return 0;
        //    }
        //    catch (Exception)
        //    {
        //        return 0;
        //    }
        //}
        public async Task<int> UpdateStudent(Student id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("item");
            }
            var index = _context.students.Find(id.Student_ID);
            if (index.Student_ID == -1)
            {
                return 0;
            }
            _context.students.Remove(index);
            await _context.students.AddAsync(id);
            await _context.SaveChangesAsync();
            return id.Student_ID;
        }
        public IEnumerable<Student> GetAll()
        {
            return _context.students.ToList();
        }
        public async Task<bool> DeleteStudent(int id)
        {
            var result = await _context.students.FirstOrDefaultAsync(e => e.Student_ID == id);
            if (result != null)
            {
                _context.students.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }
       
    }

   
}
