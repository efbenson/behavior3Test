'use strict';
var b3 = require('./behavior3js').b3;

function init(action, condition) {
    actions(action);
    conditions(condition);
}

function actions(action) {
    action('walkToDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' is walking to the door');

            return b3.SUCCESS;
        }
    });
    action('openDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is opening the door');
            return b3.SUCCESS;
        }
    });
    action('smashDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is smashing the door');

            return b3.SUCCESS;
        }
    });
    action('walkThroughDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' is walking through the door');

            return b3.SUCCESS;
        }
    });
    action('closeDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' is closing the door');

            return b3.SUCCESS;
        }
    });
}

function conditions(condition) {
    condition('canIunlockTheDoor', {
        tick: function(tick) {
            var skill = tick.blackboard.get('lockpick-level');
            let name = tick.blackboard.get('name');
            if (!skill) {
                skill = 0;
                tick.blackboard.set('lockpick-level', skill);
            }

            if (skill > 5) {
                console.log(name + ' picked the lock');
                return b3.SUCCESS;
            }

            console.log(name + ' could not pick the lock');

            skill += 1;
            tick.blackboard.set('lockpick-level', skill);
            return b3.FAILURE;
        }
    });
    condition('IsDoorUnlocked', {
        tick: function(tick) {
            let name = tick.blackboard.get('name');
            var locked = tick.blackboard.get('locked');
            if (!locked) {
                return b3.SUCCESS;
            }
            console.log(name + ' notices the door is locked');
            return b3.FAILURE;
        }
    });
}

module.exports = {
    init: init
};
