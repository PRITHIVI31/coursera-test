(function()
{
    'use strict';
    angular.module('myFirstApp',[])
    .controller('MyFirstController',function($scope)
{
$scope.name="Hello";
$scope.name1="Angular";
$scope.sayHello=function()
{
    return "Hello" + " " +"Angular!!!!";
};

});
})();