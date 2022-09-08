/* Task:

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

const cardSuit = {
	'♣': 'clubs',
	'♦': 'diamonds',
	'♥': 'hearts',
	'♠': 'spades',
}

const defineSuit = (card) => cardSuit[card[card.length - 1]];

// Simple tests:
console.log(defineSuit('Q♠') === 'spades');
console.log(defineSuit('9♦') === 'diamonds');
console.log(defineSuit('J♥') === 'hearts');