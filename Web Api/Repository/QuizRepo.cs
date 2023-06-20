using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Models
{
    public class QuizRepo :IQuizRepo
    {
        public OEScontext _context;
        public QuizRepo(OEScontext context)
        {
            _context = context;
        }
        public async Task<int> AddQuiz(Quiz qiz)
        {
            try
            {
                if (_context != null)
                {
                    await _context.quizs.AddAsync(qiz);
                    await _context.SaveChangesAsync();
                    return qiz.Quiz_ID;
                }
                return 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public async Task<int> UpdateQuiz(Quiz item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            var index = _context.quizs.Find(item.Quiz_ID);
            if (index.Quiz_ID == -1)
            {
                return 0;
            }
            _context.quizs.Remove(index);
            await _context.quizs.AddAsync(item);
            await _context.SaveChangesAsync();
            return item.Quiz_ID;
        }
        public IEnumerable<Quiz> GetAllQuizs()
        {
            return _context.quizs.ToList();
        }
        public async Task<bool> DeleteQuiz(short id)
        {
            var result = await _context.quizs.FirstOrDefaultAsync(q => q.Quiz_ID == id);
            if (result != null)
            {
                _context.quizs.Remove(result);
                await _context.SaveChangesAsync();
                return true;
            }
            return true;
        }
    }
}
