using System.Linq;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using Sitecore.Pipelines;

namespace SinglePageApp.WebApi
{
    public class RegisterWebApiRoute
    {
        public void Process(PipelineArgs args)
        {
            var config = GlobalConfiguration.Configuration;
            config.Routes.MapHttpRoute("DefaultApiRoute",
                                     "api/{controller}/{id}",
                                     new {id = RouteParameter.Optional});

            /* Uncomment these lines to switch to JSON as the default WebApi response type */
            //var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            //config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
        }
    }
}
