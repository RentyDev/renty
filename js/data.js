console.log("Im here");

// DatabaseConnector
var DC = {
    getData: function(address) {

        $.ajax({
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT * from \"0ac8b05d-d53b-4c5e-a545-d79e5ec4cabb\" LIMIT 10",

            // data: data,
            dataType: 'jsonp',
            success: function(data) {
                console.log(data.result);
                // alert('Total results found: ' + data.result.total)
            }
        });
    },

}

// let database = new DatabaseConnector();
console.log(DC.getData('a42bf588-269d-4590-b19c-e940cab296fb'));
