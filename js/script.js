var data = {
resource_id: '0ac8b05d-d53b-4c5e-a545-d79e5ec4cabb', // the resource id
limit: 5, // get 5 results
q: 'jones' // query for 'jones'
};

$.ajax({
url: 'http://opendata.city-adm.lviv.ua/api/action/datastore_search',
data: data,
dataType: 'jsonp',
success: function(data) {
alert('Total results found: ' + data.result.total)
}
});
