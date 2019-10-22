"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path = require("path");
var storePath = path.resolve(__dirname, './test.json');
var storeObject = {
    k1: 'v1',
    k2: 'v2'
};
var isFileExist = function (path, callback) {
    // tests a user's permissions for the file or directory specified by path
    fs_1["default"].access(path, fs_1["default"].constants.F_OK, function (err) {
        callback(!err);
    });
};
isFileExist(path.resolve(storePath), function (isExist) {
    console.log('isExist', isExist);
    if (isExist) {
        fs_1["default"].appendFile(storePath, JSON.stringify(storeObject), function (err) {
            if (err)
                console.log(err);
        });
    }
    else {
        fs_1["default"].readFile(storePath, function (err, data) {
            if (err)
                console.log(err);
            if (data) {
                console.log(data);
            }
        });
    }
});
