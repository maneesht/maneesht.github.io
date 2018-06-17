"use strict";

angular.module("resume", ['ngRoute', "resume.pageCtrl"]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    }).when("/about", {
        templateUrl: "templates/about.html"
    }).when("/experience", {
        templateUrl: "templates/experience.html"
    }).otherwise({
        redirectTo: "/"
    });
});