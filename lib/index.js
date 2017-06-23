'use strict';

/**
 *    _  _ ___ __  __     __  __  _____   _____
 *   | \| | _ \  \/  |___|  \/  |/ _ \ \ / / __|
 *   | .` |  _/ |\/| |___| |\/| | (_) \ V /| _|
 *   |_|\_|_| |_|  |_|   |_|  |_|\___/ \_/ |___|
 */

const fs = require("fs")
    , path = require("path")
    , exec = require("child_process").exec
    , packageJson = "package.json"
    , nodeModulesPath = "node_modules"


/*
* Executes move task
* @params (string, string) path to node module & destination
*/
var executor = function(path, dest) {
    console.log("executor");
    return
}


/**
 * Takes care of the processing configuration modules
 * @params (object, function) configuration & a callback
 */
var processWorker = function(configuration, callback) {
    console.log(configuration);

    for(var key in configuration) {

    }

    return
}


/**
 * Main driver function
 * @params (void) none
 */
var main = function() {

    // Check if package.json configuration is present
    var npmMove = require(path.join(process.cwd(), "package.json")).npmMove;
    if (!npmMove) throw "Npm move configuration not provided";

    // Check if configuration is empty
    if(!Object.keys(npmMove).length){
        console.log("No modules present in configuration")
        return
    }

    processWorker(npmMove)

    return
}

module.exports = {
    move: function() {
        main()
    }
}
