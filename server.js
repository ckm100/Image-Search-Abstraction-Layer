var express = require("express"),
    path = require("path"),
    MongoClient = require("mongodb").MongoClient,
    app = express(),
    routes = require("./app/routes/index"),
    results = [];

app.set("json spaces", 3);

app.set("port", (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, "public")));

MongoClient.connect("mongodb://db:12345@ds019048.mlab.com:19048/search", function (err, db) {

    if (err) {

        throw err;

    } else {

        var store = db.collection("store");

        routes(app, store, db, results);

        app.listen(app.get("port"), function () {

            console.log("Listenning on port " + app.get("port"));

        });

    }

});
