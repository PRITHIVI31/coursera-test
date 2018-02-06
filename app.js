angular.module('MsgApp',[])
.controller('MsgController',MsgController).filter('custom',customFilterFactory).filter('truth',TruthFilter);
function MsgController($scope,$filter,customFilter,truthFilter)
{
    $scope.name="prithivi";
    $scope.totalCost=.45;
    $scope.sayHello=function()
    {  
        var uppCase=$filter('uppercase')($scope.name);
        return uppCase;
    };

    $scope.sayLoves= function()
    {
        var msg="likes Coimbatore";
        msg=customFilter(msg);
        return msg;

    };
    $scope.sayTruth=function()
    {
        var msg = "Healthy Snacks are tasty";
        var target="Healthy";
        var replace="Cookies";
        var msg=truthFilter(msg,target,replace);
        return msg;
    };
}
function customFilterFactory()
{
    return function(input)
    {
        input= input || "";
        input= input.replace("likes","loves");
        return input;
    }
}
function TruthFilter()
{
    return function (input,target,replace) {
        input=input || "";
        input=input.replace(target,replace);
        return input;
        
    }
}