SinglePageAppDemo
=================
Single Page Application (SPA) demo of AngularJS and Sitecore as seen during the November 2013 Sitecore Philadelphia Area User Group Meetup.

Follow these steps to install the demo site onto an existing Sitecore site:

1. Copy the site folder on top of your root Sitecore folder. 
2. Install package Data\packages\Single-Page-App-Demo.zip to create the root application item, layouts, renderings and sample data.
3. Install the Sitecore Item Web API from SDN

Dependencies
============
1. AngularJS
2. Bootstrap
3. Siteocore (tested on 6.6)
4. Sitecore Item Web API v1

Installation Notes
==================
1. Sitecore Item Web API is referenced, but not necessary to view the demo. Without it, you'll only be able to review the routing logic.
2. If using the Sitecore Item Web API, be sure to enable it within App_Config\include\Sitecore.ItemWebApi.config.
3. Sitecore Item Web API credentials for the demo use admin/b :)