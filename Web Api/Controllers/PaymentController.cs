using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineEducationSystem.DataAccessLayer;
using OnlineEducationSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace OnlineEducationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly OEScontext _context;

        public PaymentController(OEScontext context)
        {
            _context = context;
        }

        // GET: api/Payments
        [HttpGet]
        [Route("Get_Payment")]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayment()
        {
            try
            {
                if (_context.Payments == null)
                {
                    return NotFound();
                }
                return await _context.Payments.ToListAsync();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Something went wrong" + ex.Message);
            }
        }

        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(string id)
        {
            if (_context.Payments == null)
            {
                return NotFound();
            }
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }

        // PUT: api/Payments/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            if (id != payment.Card_Number)
            {
                return BadRequest();
            }

            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        [Route("Post_Payment")]
        public async Task<ActionResult> PostPayment(Payment item)
        {
            try
            {
                _context.Payments.Add(item);
                await _context.SaveChangesAsync();
                return StatusCode(StatusCodes.Status200OK, "Payment Succesfull");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Payment Failed" + ex.Message);
            }
        }
        // DELETE: api/Payments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(string id)
        {
            if (_context.Payments == null)
            {
                return NotFound();
            }
            var payment = await _context.Payments.FindAsync(id);
            if (payment == null)
            {
                return NotFound();
            }

            _context.Payments.Remove(payment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentExists(int id)
        {
            return (_context.Payments?.Any(e => e.Card_Number == id)).GetValueOrDefault();
        }

    }
}
    