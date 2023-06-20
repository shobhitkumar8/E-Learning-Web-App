using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using OnlineEducationSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        IStudentRepos _studentsrepository;
        private readonly OEScontext _db;
        public StudentsController(OEScontext context)
        {
            _studentsrepository = new StudentRepos(context);
            _db = context;
        }
                
        [HttpPost("Signup")]
        public async Task<IActionResult> StudentSignup([FromBody] Student std)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var Student_ID = await _studentsrepository.StudentSignup(std);
                    if (Student_ID > 0)
                    {
                        return Ok(Student_ID);
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
        
        [HttpPost]
        [Route("login")]
        public IActionResult StudentLogin(Student user)
{
            var data = _db.students.FirstOrDefault(x => x.UserName == user.UserName && x.Password == user.Password);

            if (data != null)
            {

                return StatusCode(StatusCodes.Status200OK, "Login Successfull");

            }

            return StatusCode(StatusCodes.Status400BadRequest, "Login Failed");
        }


        //[HttpPost]
        //[Route("AddStudent")]
        //public async Task<IActionResult> AddStudent(Student id)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            var ID = await _studentsrepository.AddStudent(id);
        //            if (ID > 0)
        //            {
        //                return Ok(ID);
        //            }
        //            else
        //            {
        //                return NotFound();
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    return BadRequest();
        //}
      
        [HttpGet]
        [Route("GetAll")] 
        public JsonResult GetAll() { return new JsonResult(_studentsrepository.GetAll()); }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, [FromBody] Student stu)
        {
            stu.Student_ID = id;
            if (stu == null)
            {
                NotFound();
            }
            return (IActionResult)Ok(await _studentsrepository.UpdateStudent(stu));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            await _studentsrepository.DeleteStudent(id);
            return (IActionResult)Ok(await _studentsrepository.DeleteStudent(id));
        }
    }
}
