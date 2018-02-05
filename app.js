(function()
{
    'use strict';
    angular.module('nameCalculator',[])
    .controller('NameCalculatorController',function($scope)
{
$scope.name="";
$scope.totalValue=0;
$scope.displayNumeric=function()
{
    var totalNameValue=calculateValue($scope.name);
    $scope.totalValue=totalNameValue;
}
function calculateValue(string)
{
    var total=0;
    for (let i = 0; i < string.length; i++) {
          total+=string.charCodeAt(i);
        }
        return total;
}
$scope.totalValue=calculateValue($scope.name);
})
})();