'use strict';

var b3 = require('./lib/behavior3js').b3;

var treeLoader = require('./lib/treeLoader');

treeLoader.init();

var ai = treeLoader.ai();

console.log('**** Lucky tries the door');
var lucky = {
    memory:  new b3.Blackboard()
};
lucky.memory.set('name', 'Lucky');
ai.guy.tick(lucky, lucky.memory);

console.log('');
console.log('**** Thief tries the door');
var thief = {
    memory:  new b3.Blackboard()
};
thief.memory.set('name', 'Thief');
thief.memory.set('locked', true);
thief.memory.set('lockpick-level', 8);

ai.guy.tick(thief, thief.memory);

console.log('');
console.log('**** Thug tries the door');
var thug = {
    memory:  new b3.Blackboard()
};
thug.memory.set('name', 'Thug');
thug.memory.set('locked', true);
thug.memory.set('lockpick-level', 2);

ai.guy.tick(thug, thug.memory);
console.log('');
console.log('');
console.log('**** Simulation complete');
