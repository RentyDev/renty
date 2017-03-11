var app = angular.module("renty-ui", []);


app.controller('itm-ctr', ['$scope', '$document', '$http', function ($scope,$document,$http) {
    $scope.items = [
    { 
    	region: "Test",
    	street: "Sihiv"
    },
    {
    	region: "T0st",
    	street: "lll"
    }];
}]);
