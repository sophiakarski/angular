// IIFE = Immediately Invoked Function Expression = ()();
// PROTECT from bleeding local variables into global scope

(function () {

// enable certain things to PROTECT us from making mistakes
'use strict';

// [] = dependencies
// must bind 'myFirstApp' module (AngularJS app) to .html

angular.module('myFirstApp', [])

// the way we define our ViewModel of View
// Name of ViewModel/Controller, and takes function that defines functionallity of Controller
// Now, bind this to View

// CONTROLLER = VIEWMODEL
.controller('MyFirstController', function ($scope) {
$scope.name = "Sophia";

$scope.sayHello = function () {
    return "Hello Coursera!";
};

});

})();
