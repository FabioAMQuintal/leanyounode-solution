const fs = require('fs');
const path = require('path');

const filterExtention = (directoryName, fileExtension, callBackFunction) => {
    
    fs.readdir(directoryName, (err, list) => {
        if(err){
            return callBackFunction(err)
        }
        list = list.filter(file => {
            return path.extname(file) === '.'+fileExtension
        })

        callBackFunction(null, list)
    })
}

module.exports = filterExtention