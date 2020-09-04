import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

// Sorting a collection of characters (string)
const charactersCollection = new CharactersCollection('Xaayb');
console.log(`Characters Before: ${charactersCollection.data}`);
charactersCollection.sort();
console.log(`Characters After: ${charactersCollection.data}`);

// Sorting a Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('LinkedList Before:');
linkedList.print();
linkedList.sort();
console.log('LinkedList After:');
linkedList.print();

// Sorting a collection of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(`Numbers Before: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`Numbers After: ${numbersCollection.data}`);
