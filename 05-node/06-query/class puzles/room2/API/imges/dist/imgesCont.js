"use strict";
exports.__esModule = true;
exports.getImages = void 0;
var imgesModel_1 = require("./imgesModel");
function getImages(req, res) {
    try {
        res.send({ images: imgesModel_1.images });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getImages = getImages;
