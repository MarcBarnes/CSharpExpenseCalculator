using ExpensesAPI.Data;
using ExpensesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpensesAPI.Controllers
{
    [EnableCors("http://localhost:4200","*","*")]
    public class EntriesController : ApiController
    {
        public IHttpActionResult GetEntries()
        {

            try
            {
                //opens connection string, closes it when done
                using (var context = new AppDbContext())
                {
                    var entries = context.Entries.ToList();
                    return Ok(entries);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                
            }
        }

        [HttpPost]
        public IHttpActionResult PostEntry([FromBody]Entry entry)
        {
            //to check if model is invalid
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                using (var context = new AppDbContext())
                {
                    //adding entry and saving database changes
                    context.Entries.Add(entry);
                    context.SaveChanges();

                    return Ok("Entry added");
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public IHttpActionResult UpdateEntry(int id, [FromBody]Entry entry)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (id != entry.Id) return BadRequest();

            try
            {
                using (var context = new AppDbContext())
                {
                    var oldEntry = context.Entries.FirstOrDefault(n => n.Id == id);
                    if (oldEntry == null) return NotFound();

                    oldEntry.Description = entry.Description;
                    oldEntry.IsExpense = entry.IsExpense;
                    oldEntry.Value = entry.Value;

                    context.SaveChanges();
                    return Ok("Entry updated!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);             
            }

            
        }


    }
}
