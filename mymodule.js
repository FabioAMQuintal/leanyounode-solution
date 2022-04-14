const fs = require('fs');
const path = require('path');

const filterExtention = (directoryName, fileExtension, callBackFunction) => {
    fs.readdir(directoryName, function (err, list) {
        if(err){
            return callBackFunction(err)
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.'+fileExtension
        })

        callBackFunction(null, list)
    })
}

module.exports = filterExtention