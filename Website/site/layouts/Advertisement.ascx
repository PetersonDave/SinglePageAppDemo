<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Advertisement.ascx.cs" Inherits="SinglePageApp.site.layouts.Advertisement" %>

<div class="col-md-4">
    <h2><sc:FieldRenderer ID="frHeading" runat="server" FieldName="Heading" /></h2>
    <p><sc:FieldRenderer ID="frCopy" runat="server" FieldName="Copy" /></p>
    <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
</div>