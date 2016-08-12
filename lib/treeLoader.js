'use strict';
var b3 = require('behavior3js');
var tree = {};

function loadAction(name, properties) {
    var S = b3.Class(b3.Action);
    var p = S.prototype;
    p.name = name;
    for (var k in properties) { p[k] = properties[k]; }
    tree[name] = S;
    return S;
}

function loadCondition(name, properties) {
    var S = b3.Class(b3.Condition);
    var p = S.prototype;
    p.name = name;
    for (var k in properties) { p[k] = properties[k]; }
    tree[name] = S;
    return S;
}

function init() {
    require('./openDoor').init(loadAction, loadCondition);
}

module.exports = {
    tree: tree,
    init: init
};
