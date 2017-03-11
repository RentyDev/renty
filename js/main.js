var app = angular.module("renty-ui", []);


app.controller('itm-ctr', ['$scope', '$document', '$http', function($scope, $document, $http) {
    $scope.items = [{}, {}];

    $http({
        method: 'GET',
        url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='Липи Ю.' AND \"Nober\"='16'"
    }).then(function successCallback(response) {
        console.log(response);
    }, function errorCallback(response) {
    });
}]);
