/* Task:

You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

*/

const loop_size = (node) => {
	const visitedNodes = [];
	let idx = -1;
  
	while (true) {
		idx = visitedNodes.indexOf(node);
    
		if (idx < 0) {
			visitedNodes.push(node);
		} else {
			break;
		};
		
		node = node.next;
	};
  
	return (visitedNodes.length - idx);
};
		
// Simple tests: