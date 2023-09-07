"use strict";
var _a, _b, _c;
exports.__esModule = true;
exports.VisitModel = exports. = exports.ObjectId = exports.Types = exports.Schema = exports.String = exports.Date = exports.VisitSchema = void 0;
var mongoose_1 = require("mongoose");
exports.Date = (_a = void 0, _a.date), exports.String = _a.summary, exports.Schema = (_b = _a.patient, _b.type), exports.Types = _b.Types, exports.ObjectId = _b.ObjectId, exports. = _b.ref, exports. = _b["patients"], exports.Schema = (_c = _a.physician, _c.type), exports.Types = _c.Types, exports.ObjectId = _c.ObjectId, exports. = _c.ref, exports. = _c["physicians"];
exports.VisitModel = mongoose_1.model("visits", exports.VisitSchema);
