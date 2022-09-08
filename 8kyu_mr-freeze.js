/* Task:

There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

*/

const MrFreeze = {};

Object.freeze(MrFreeze);

// Simple tests:
console.log(Object.isFrozen(MrFreeze), ' => true')