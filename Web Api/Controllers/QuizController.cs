using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using OnlineEducationSystem.Models;

namespace OnlineEducationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        IQuizRepo _quizrepository;
        public QuizController(OEScontext context)
        {
            _quizrepository = new QuizRepo(context);
        }
        [HttpPost]
        [Route("AddQuiz")]
        public async Task<IActionResult> AddQuiz(Quiz qiz)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var ID = await _quizrepository.AddQuiz(qiz);
                    if (ID > 0)
                    {
                        return Ok(ID);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
    }
}
