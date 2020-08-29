using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySite.Api.Models.Instagram;
using Newtonsoft.Json;

namespace MySite.Api.Controllers
{
    public class PhotosController : Controller
    {
        /// <summary>
        /// Get all posts from Instagram
        /// </summary>
        /// <returns></returns>
        [HttpGet("photos")]
        public async Task<ActionResult<Root>> Get()
        {
            var client = new HttpClient();

            var response = await client.GetStringAsync("https://graph.instagram.com//me/media?fields=id,caption,media_url&access_token=IGQVJXb0RreTNGbEFjNk9aQWZAQYnlGV3NGc3RMX1NYYzhKcUJCRVBwWUVzc0xSc0t2VmU0T2tGdDRHTURXTkYtM0dtaVdCM2FocmpicTRvLTZAWci14OHlfRjVpUjNHQnhQZAzIxaDROMVJPQ2xDUEhkbAZDZDD");

            var result = JsonConvert.DeserializeObject<Root>(response);

            return Ok(result);
        }
    }
}
