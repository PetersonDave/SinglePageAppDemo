using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Pipelines.HttpRequest;

namespace SinglePageApp.site.handlers
{
    public class SinglePageAppItemResolver : ItemResolver
    {
        public override void Process(HttpRequestArgs args)
        {
            var test = "";
            base.Process(args);
        }
    }
}