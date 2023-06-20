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
    public class AttendanceController : ControllerBase
    {
        IAttendanceRepo _attendancerepository;
        public AttendanceController(OEScontext context)
        {
            _attendancerepository = new AttendanceRepo(context);
        }
        [HttpPost]
        [Route("AddAttendance")]
        public async Task<IActionResult> AddAttendance(Attendance att)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var ID = await _attendancerepository.AddAttendance(att);
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
        public JsonResult GetAll() { return new JsonResult(_attendancerepository.GetAllAttendance()); }

    }
}
