using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Backend.Controllers
{

    public class SupplierController : Controller
    {
        // GET: Supplier
         /*public ActionResult Index()
         {
             return View();
         }*/
        [HttpGet]
        public JsonResult GetSupplierName()
        {
            try
            {
                List<Supplier> result = new List<Supplier>();

                result.Add(new Supplier()
                {
                    Name = "First",
                    Phone = "Test"
                });

                // return Json(result, JsonRequestBehavior.AllowGet);
                return Json(result, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {

                return Json(ex.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
    }
}