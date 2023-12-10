using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(int? data) // Accept the data parameter
        {
            // Set ViewBag.data with the provided data parameter
            ViewBag.data = data;

            // Return the view
            return View();
        }

          public ActionResult Schedule() // Accept the data parameter
        {
         
            // Return the view
            return View();
        }

        public ActionResult Prospectus_IT() // Accept the data parameter
        {
         
            // Return the view
            return View("Prospectus/Prospectus_IT");
        }

        public ActionResult Prospectus_Educ() // Accept the data parameter
        {
         
            // Return the view
            return View("Prospectus/Prospectus_Educ");
        }

        public ActionResult Prospectus_ElectEng() // Accept the data parameter
        {
         
            // Return the view
            return View("Prospectus/Prospectus_ElectEng");
        }

        public ActionResult Prospectus_MechEng() // Accept the data parameter
        {
         
            // Return the view
            return View("Prospectus/Prospectus_MechEng");
        }

        public ActionResult FirstSemFirstYearIT() // Accept the data parameter
        {
         
            // Return the view
            return View("Schedules/BSIT/FirstSemFirstYear");
        }
    }
}