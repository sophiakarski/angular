// IIFE = Immediately Invoked Function Expression = ()();
// PROTECT from bleeding local variables into global scope

(function () {

// enable certain things to PROTECT us from making mistakes
'use strict';

// [] = dependencies (if none, empty array)
// must bind 'myFirstApp' module (AngularJS app) to .html

angular.module('NameCalculator', [])

// the way we define our ViewModel of View
// Name of ViewModel/Controller, and takes function that defines functionallity of Controller
// Now, bind this to View

// CONTROLLER = VIEWMODEL
.controller('NameCalculatorController', function ($scope) {
$scope.name = "";
$scope.totalValue = 0;

// EXAMPLE:
// $scope.sayHello = function () {
//     return "Hello Coursera!";
// };

$scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name); // get total value
    $scope.totalValue = totalNameValue;
};

// function to calculate numeric value

function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i)
    }
    return totalStringValue
}

});

})();
