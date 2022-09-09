/* Task:

Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

*/

const rooms = {
  room1: {
    name: '',
    description: '',
    completed: '',
  },
  room2: {
    name: '',
    description: '',
    completed: '',
  },
  room3: {
    name: '',
    description: '',
    completed: '',
  },
}

console.log(rooms.room1.name)
	
// Simple tests:
const keys = Object.keys(rooms);

console.log(keys.length >= 3);

console.log(keys.every(key =>
	Object.hasOwn(rooms[key], 'name')
	&& Object.hasOwn(rooms[key], 'description')
	&& Object.hasOwn(rooms[key], 'completed')));