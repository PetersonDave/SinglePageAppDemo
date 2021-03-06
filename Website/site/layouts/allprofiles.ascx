﻿<%@ Control Language="c#" AutoEventWireup="true" TargetSchema="http://schemas.microsoft.com/intellisense/ie5" %>
<div data-ng-controller="allprofiles as vm">
    <p><a class="btn btn-primary btn-lg" ng-click="vm.load();">Load Data</a></p>

    <div class="row" ng-repeat="profile in vm.repository">
        <div class=" col-md-1">
            <a class="btn btn-danger btn-small" href="#profiles/{{profile.ID}}">Edit</a>
        </div>
        <div class="col-md-1">{{profile.DisplayName}}</div>
        <div class="col-md-6">{{profile.ID}}</div>
    </div>
</div>