"use strict";
exports.__esModule = true;
var express_1 = require("express");
var requireAuth_1 = require("../middleware/requireAuth");
var threadsControllers_1 = require("../controllers/threadsControllers");
var router = express_1["default"].Router();
router.get('/getThreads', threadsControllers_1.getThreads);
router.get('/getUserThreads', requireAuth_1.requireAuth, threadsControllers_1.getUserThreads);
router.get('/getThread', requireAuth_1.requireAuth, threadsControllers_1.getThread);
exports["default"] = router;
