using System;
using Sitecore.Data.Items;
using Sitecore.Web.UI.WebControls;

namespace SinglePageApp.site.layouts
{
    public partial class Advertisement : System.Web.UI.UserControl
    {
        private Item _dataSource = null;

        public Item DataSource
        {
            get
            {
                if (_dataSource == null)
                    if (Parent is Sublayout)
                        _dataSource = Sitecore.Context.Database.GetItem(((Sublayout) Parent).DataSource);

                return _dataSource;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            frCopy.Item = DataSource;
            frHeading.Item = DataSource;
        }
    }
}