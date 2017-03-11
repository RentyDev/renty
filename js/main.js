var app = angular.module("renty-ui", []);

// app.config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ]);

app.controller('itm-ctr', ['$scope', '$document', '$http', function($scope, $document, $http) {
    $scope.items = [{}, {}];

    this.getBuilding = function (address, no) {
        $http({
            method: 'JSONP',
            params: {
                format: 'jsonp',
                json_callback: 'JSON_CALLBACK'
            },
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='"+address+"' AND \"Nober\"='"+no+"'&callback=JSON_CALLBACK"
        }).then(function successCallback(response) {
            console.log(response);
            $scope.items = response.data.result.records;
        }, function errorCallback(response) {
            console.log(response);
        });
    };



}]);
