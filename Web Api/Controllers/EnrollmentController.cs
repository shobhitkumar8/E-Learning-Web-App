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
    public class EnrollmentController : Controller
    {
        IEnrollmentRepo _enrollmentrepository;
        public EnrollmentController(OEScontext context)
        {
            _enrollmentrepository = new EnrollmentRepo(context);
        }
        [HttpPost]
        [Route("AddEnrollments")]
        public async Task<IActionResult> AddEnrollment(Enrollments enr)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var ID = await _enrollmentrepository.AddEnrollment(enr);
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
