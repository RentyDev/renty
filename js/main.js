var app = angular.module("renty-ui", ['angularModalService']);

// app.config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ]);

app.controller('itm-ctr', ['$scope', '$document', '$http', function($scope, $document, $http) {
    this.getBuildings = function () {
        $http({
            method: 'JSONP',
            params: {
                format: 'jsonp',
                json_callback: 'JSON_CALLBACK'
            },
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Адреса\", \"№ будинку\", \"р-н\" from \"64a169c2-ab09-4fcf-96c5-f89ffc409315\" LIMIT 10&callback=JSON_CALLBACK"
        }).then(function successCallback(response) {
            console.log(response);

            $scope.buildings = [];

            // WARNING: ES6 only
            for (var record of response.data.result.records) {
                console.log(record);
                $scope.buildings.push({
                    street: record["Адреса"],
                    number: record["№ будинку"],
                    district: districts[record["р-н"]]
                });
            }
            console.log($scope.buildings)

        }, function errorCallback(response) {
            console.error(response);
        });
    };

<<<<<<< HEAD
=======
    // this.getBuildings();
    // console.log($scope.items);

>>>>>>> 893904c41b6df5d2535f8888fe9868127e821e3d
    this.getComplaints = function (address, no) {
        $http({
            method: 'JSONP',
            params: {
                format: 'jsonp',
                json_callback: 'JSON_CALLBACK'
            },
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\", \"Date\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='"+address+"' AND \"Nober\"='"+no+"'&callback=JSON_CALLBACK"
        }).then(function successCallback(response) {
            console.log(response);
            $scope.complaints = response.data.result.records;
        }, function errorCallback(response) {
            console.log(response);
        });
    };

<<<<<<< HEAD
    this.getBuildings();
    this.getComplaints("Авіаційна", "7");
=======
    this.getComplaints("Широка", "67");

    // this.calculateRating = function () {
    //
    // };

    // this.getBuilding("Авіаційна", "7");

>>>>>>> 893904c41b6df5d2535f8888fe9868127e821e3d
}]);
