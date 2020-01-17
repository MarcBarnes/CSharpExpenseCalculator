using ExpensesAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ExpensesAPI.Controllers
{
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
            catch (Exception exConn)
            {
                return BadRequest(exConn.Message);
                throw;
            }

        }
    }
}
