
app.controller('Controller', function($scope, ModalService) {

    $scope.show = function() {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

});


app.controller('ModalController', function($scope, $http, close) {

    this.getComplaints = function (address, no) {
        $http({
            method: 'JSONP',
            params: {
                format: 'jsonp',
                json_callback: 'JSON_CALLBACK'
            },
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT \"Type\", \"Date\" from \"a42bf588-269d-4590-b19c-e940cab296fb\" WHERE \"Street\"='"+address+"' AND \"Nober\"='"+no+"'&callback=JSON_CALLBACK"
        }).then(function successCallback(response) {
            $scope.complaints = [];

            // WARNING: ES6 only
            for (var record of response.data.result.records) {
                $scope.complaints.push({
                    date: record["Date"],
                    text: record["Type"]
                });
            }

            console.log($scope.complaints);

        }, function errorCallback(response) {
            console.error(response);
        });
    };

    this.getComplaints("test", "0");

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

});
