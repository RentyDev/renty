class DatabaseConnector {
    // constructor() {
    //
    // }

    getData(resource_id) {
        var request = {
            resource_id: resource_id, // the resource id
            limit: 5, // get 5 results
            q: 'jones' // query for 'jones'
        };
        let data = $.ajax({
            url: 'http://opendata.city-adm.lviv.ua/api/action/datastore_search',
            data: request,
            dataType: 'jsonp',
            success: function(data) {
              alert('Total results found: ' + data.result.total)
            }
        });
    }
}

let database = new DatabaseConnector();
console.log("Im here");
console.log(database.getData('a42bf588-269d-4590-b19c-e940cab296fb'));
