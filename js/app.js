
angular.module("Crud", ["ngRoute", "ngResource"])
.config(function($routeProvider){
    $routeProvider
    .when("/", {
        controller: "MainController",
        templateUrl: "templates/Students.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});