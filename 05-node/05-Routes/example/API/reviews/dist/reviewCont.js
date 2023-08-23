"use strict";
exports.__esModule = true;
exports.updateReview = exports.deleteReview = exports.GetReview = exports.addReview = void 0;
var reviewmodel_1 = require("./reviewmodel");
var reviews = [
    new reviewmodel_1.Review({ name: "leshona", freetext: "garbege" })
];
exports.addReview = function (req, res) {
    var review = req.body;
    reviews.push(new reviewmodel_1.Review(review));
    res.send({ review: review });
};
exports.GetReview = function (req, res) {
    res.send({ reviews: reviews });
};
exports.deleteReview = function (req, res) {
    var id = req.body.id;
    reviews = reviews.filter(function (review) { return review.id !== id; });
    res.send({ reviews: reviews });
};
exports.updateReview = function (req, res) {
    var _a = req.body, id = _a.id, freetext = _a.freetext;
    var review = reviews.find(function (review) { return review.id === id; });
    review.freetext = freetext;
    res.send(reviews);
};
