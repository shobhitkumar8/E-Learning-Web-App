using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineEducationSystem.Models
{
    interface IQuizRepo
    {
        Task<int> AddQuiz(Quiz qiz);
        Task<int> UpdateQuiz(Quiz item);
        Task<bool> DeleteQuiz(short id);
        IEnumerable<Quiz> GetAllQuizs();
    }
}
