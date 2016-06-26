using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AureliaDemo.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var users = new[]
            {
                new Models.User { UserId = 1, UserName = "dan", FirstName = "Dan", LastName = "Wilson" },
                new Models.User { UserId = 2, UserName = "tom", FirstName = "Tom", LastName = "Jones" },
                new Models.User { UserId = 3, UserName = "joe", FirstName = "Joe", LastName = "Smith" }

            };
            return Ok(users);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
