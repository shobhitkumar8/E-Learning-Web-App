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
    public class CoursesController : Controller
    {
        ICoursesRepos _coursesrepository;
        public CoursesController(OEScontext context)
        {
            _coursesrepository = new CoursesRepos(context);
        }
        [HttpPost]
        [Route("AddCourses")]
        public async Task<IActionResult> AddCourses(Courses id)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var Course_ID = await _coursesrepository.AddCourses(id);
                    if (Course_ID > 0)
                    {
                        return Ok(Course_ID);
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
        [HttpGet]
        [Route("GetAllCourses")]
        public JsonResult GetAllCourses() { return new JsonResult(_coursesrepository.GetAllCourses()); }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourses(int id, [FromBody] Courses cs)
        {
            cs.Course_ID = id;
            if (cs == null)
            {
                NotFound();
            }
            return (IActionResult)Ok(await _coursesrepository.UpdateCourses(cs));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourses(int id)
        {
            await _coursesrepository.DeleteCourses(id);
            return (IActionResult)Ok(await _coursesrepository.DeleteCourses(id));
        }
    }
}
