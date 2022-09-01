class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this.head;
    }

    let tail = this.getLast();
    tail.next = new Node(value);
    this.length++;
    return tail;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  atIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.prepend(value);

    const prev = this.atIndex(index - 1);
    if (prev == null) return null;

    prev.next = new Node(value, prev.next);
    this.length++;
  }

  pop() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
    this.length--;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.atIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  contains(value) {
    if (!this.head) return null;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    if (!this.head) return null;
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    list.prepend(values[i]);
  }
  return list;
};

module.exports = LinkedList;
