using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace StockDashboard.Controllers
{
    public class LocationsController : ApiController
    {
        [HttpGet()]
        [ActionName("GetLocations")]// name for the action

        public IEnumerable<Models.Locations> GetLocations()
        {
            List<Models.Locations> locations = new List<Models.Locations>();

            locations = new List<Models.Locations>();
            locations.Add(new Models.Locations()
            {
                LocationID = "1",
                LocationName = "Warehouse 1"
            });
            locations.Add(new Models.Locations()
            {
                LocationID = "2",
                LocationName = "US Warehouse 2"
            });
            locations.Add(new Models.Locations()
            {
                LocationID = "3",
                LocationName = "Asia"
            });
            return locations;





        }
    }
}
