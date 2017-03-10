console.log("Im here");

// DatabaseConnector
var DC = {
    getBuilding: function(address) {
        this.getComp("Лісна");
    },

    // Address
    //      street
    //      no

    getComp: function (addr, cb) {
        $.ajax({
            url: "http://opendata.city-adm.lviv.ua/api/action/datastore_search_sql?sql=SELECT * from \"0ac8b05d-d53b-4c5e-a545-d79e5ec4cabb\" WHERE \'street\' = '"+addr+"'",

            dataType: 'jsonp',
            success: function(data) {
                console.log(data.result);
            }
        });
    }

}

// let database = new DatabaseConnector();
console.log(DC.getBuilding('a42bf588-269d-4590-b19c-e940cab296fb'));
