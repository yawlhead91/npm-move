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
* @params
*/
var executor = function() {
    return
}

/**
 * Takes care of the processing configuration modules
 * @params (object, function) configuration & a callback
 */
var processWorker = function(configuration, callback) {
    console.log(configuration)
    return
}

/**
 * Main driver function
 * @params (void) none
 */
var main = function() {
    var npmMove = require(path.join(process.cwd(), "bower.json")).npmMove;

    if (!npmMove) throw "Npm move configuration not provided";

    return
}

module.exports = {


};
