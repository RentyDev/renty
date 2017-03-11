var app = angular.module("renty-ui", []);

// app.config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ]);

app.controller('itm-ctr', ['$scope', '$document', '$http', function($scope, $document, $http) {
    $scope.items = [{}, {}];

    // var headers = {
	// 	'Access-Control-Allow-Origin' : '*',
	// 	'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
	// 	'Content-Type': 'application/json',
	// 	'Accept': 'application/json'
	// };
    //
    // // $http.jsonp();
    //
    // $http.jsonp("http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='Липи Ю.' AND \"Nober\"='16'")
    // .success(function(data){
    //     console.log(data);
    // });


    $http({
        method: 'JSONP',
        params: {
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
        },
        url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='Липи Ю.' AND \"Nober\"='16'&callback=JSON_CALLBACK"
    }).then(function successCallback(response) {
        console.log(response);
    }, function errorCallback(response) {
        console.log(response);
    });
}]);
