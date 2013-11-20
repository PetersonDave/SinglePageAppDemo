<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="modifyprofile.ascx.cs" Inherits="SinglePageApp.site.layouts.modifyprofile" %>
<div data-ng-controller="modifyprofile as vm">
    New Item: {{vm}}<br />
    <fieldset>
        <legend>Profile</legend>
        First: <input type="text" id="first" data-ng-model="vm.first" /><br />
        Last: <input type="text" id="last" data-ng-model="vm.last" /><br />
        Email: <input type="email" id="email" data-ng-model="vm.email" /><br />
        Company: <input type="text" id="company" data-ng-model="vm.company" /><br />
        <a class="btn btn-danger btn-small" ng-click="vm.update();">Update</a>
    </fieldset>
</div>