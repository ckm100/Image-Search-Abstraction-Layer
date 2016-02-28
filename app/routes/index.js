module.exports = function (app, store, db, results) {

    var Search = require("bing.search"),
        search;

    app.get("/api/imagesearch/:term", function (req, res) {

        if (typeof parseInt(req.query.offset) === "number") {

            search = new Search("dw/DjR4i1/AeaEfMcO9k/xamSqIditU2oIK8yxUSZmc", parseInt(req.query.offset));

        } else {

            search = new Search("dw/DjR4i1/AeaEfMcO9k/xamSqIditU2oIK8yxUSZmc");

        }

        store.insert({

            "term": req.params.term,
            "when": new Date().toJSON()

        }, function (err, doc) {

            if (err) {
                throw err;
            } else {

                console.log("Document Inserted");

                search.images(req.params.term, {
                        top: 10
                    },
                    function (err, result) {

                        if (err) {

                            console.log(err)

                        } else {

                            result.forEach(function (val) {

                                results.push({

                                    "url": val.url,
                                    "snippet": val.title,
                                    "thumbnail": val.thumbnail.url,
                                    "context": val.sourceUrl

                                });

                            });

                            res.end(JSON.stringify(results, null, 3));

                            results = [];
                        }

                    });

            }

        });

    });

    app.get("/api/latest/imagesearch", function (req, res) {

        store.find({}, {
            "term": 1,
            "when": 1,
            "_id": 0
        }).toArray(function (err, result) {

            if (err) {
                console.log(err);
            } else {

                res.json(result);

                res.end();
            }

        });

    });
}
