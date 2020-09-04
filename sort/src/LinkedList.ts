import { LinkedListNode } from './LinkedListNode';
import { SortableCollection } from './SortableCollection';

export class LinkedList extends SortableCollection {
  head: LinkedListNode | null = null;

  add(data: number): void {
    const node = new LinkedListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next; // Traverse until last node
    tail.next = node; // Set last nodes next to the new node
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while (node.next) { // Traverse until last node
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): LinkedListNode {
    if (!this.head) throw new Error('Index out of bounds');

    let counter = 0;
    let node: LinkedListNode | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('List is empty');

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Bit of a cheat
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) return;

    let node: LinkedListNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}