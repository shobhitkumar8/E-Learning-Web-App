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
    public class TeachersController : Controller
    {
        ITeacherRepos _teachersrepository;
        public TeachersController(OEScontext context)
        {
            _teachersrepository = new TeacherRepos(context);
        }
        [HttpPost]
        [Route("AddTeacher")]
        public async Task<IActionResult> AddTeacher(Teacher add)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var ID = await _teachersrepository.AddTeacher(add);
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
        [HttpGet]
        [Route("GetAll")]
        public JsonResult GetAll() { return new JsonResult(_teachersrepository.GetAll()); }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(int id, [FromBody] Teacher teach)
        {
            teach.Teacher_ID = id;
            if (teach == null)
            {
                NotFound();
            }
            return (IActionResult)Ok(await _teachersrepository.UpdateTeacher(teach));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            await _teachersrepository.DeleteTeacher(id);
            return (IActionResult)Ok(await _teachersrepository.DeleteTeacher(id));
        }
    }
}
