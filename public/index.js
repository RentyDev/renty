var React = require("react");

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var axios = require("axios");

axios.get("/api/user/check")
.then((res) => {
    if (res.data.state) {
        // this.setLoggedIn(res.data.priv);
    } else {
        // this.setState({display: "login"});
    }
});
