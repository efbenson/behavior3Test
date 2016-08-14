'use strict';
var b3 = require('./behavior3js').b3;
var tree = {};
var ai = {};

/**
 * Action node wrapper for loadNode
 *
 * @param  {String} name
 * @param  {Object} properties
 */
function loadAction(name, properties) {
    return loadNode(name, properties, b3.Action);
}

/**
 * Condition node wrapper for loadNode
 *
 * @param  {String} name
 * @param  {Object} properties
 */
function loadCondition(name, properties) {
    return loadNode(name, properties, b3.Condition);
}

/**
 * Load the custom node definition and functionality
 *
 * @param  {String} name
 * @param  {Object} properties
 * @param  {String} type
 */
function loadNode(name, properties, type) {
    var node = b3.Class(type);
    var nodeProto = node.prototype;
    nodeProto.name = name;
    for (var prop in properties) {
        nodeProto[prop] = properties[prop];
    }
    tree[name] = node;
    return node;
}

/**
 * Init the module
 */
function init() {
    require('./openDoorNodes').init(loadAction, loadCondition);
    ai = {'guy': new b3.BehaviorTree()};
    ai.guy.load(require('../resources/openDoor.json'), tree);
}

module.exports = {
    ai: function() {return ai;},
    init: init
};
