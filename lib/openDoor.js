'use strict';
var b3 = require('behavior3js');

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
            console.log(name + ' opening the door');

            return b3.SUCCESS;
        }
    });
    action('smashDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' smashing the door');

            return b3.SUCCESS;
        }
    });
    action('walkThroughDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 1);
            let name = tick.blackboard.get('name');
            console.log(name + ' walking through the door');

            return b3.SUCCESS;
        }
    });
    action('closeDoor', {
        tick: function(tick) {
            tick.blackboard.set('walking', 0);
            let name = tick.blackboard.get('name');
            console.log(name + ' closing the door');

            return b3.SUCCESS;
        }
    });
}

function conditions(condition) {
    condition('canIunlockTheDoor', {
        tick: function(tick) {
            var skill = tick.blackboard.get('lockpick-level');
            if (!skill) {
                skill = Math.floor(Math.random() * 10);
                tick.blackboard.set('lockpick-level', skill);
            }

            if (skill > 5) {
                return b3.SUCCESS;
            }

            skill += 1;
            tick.blackboard.set('lockpick-level', skill);
            return b3.FAILURE;
        }
    });
}

module.exports = {
    init: init
};
