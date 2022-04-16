import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(10);
linkedListCollection.add(3);
linkedListCollection.add(-5);
linkedListCollection.add(0);

linkedListCollection.sort();
linkedListCollection.print();
