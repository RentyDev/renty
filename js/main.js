var app = angular.module("renty-ui", []);


<<<<<<< HEAD
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
=======
app.controller('itm-ctr', ['$scope', '$document', '$http', function($scope, $document, $http) {
    $scope.items = [{}, {}];

    $http({
        method: 'GET',
        url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='Липи Ю.' AND \"Nober\"='16'"
    }).then(function successCallback(response) {
        console.log(response);
    }, function errorCallback(response) {
    });
>>>>>>> 62128c4e882eb2b90b25e38c9ca9cd3b13913a45
}]);
