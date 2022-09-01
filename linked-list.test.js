const LinkedList = require("./linked-list");

describe("#append", () => {
  test("adds node to the end of the linked list", () => {
    const list = LinkedList.fromValues(10, 20);
    list.append(30);

    expect(list.head.next.next.value).toBe(30);
    expect(list.length).toBe(3);
  });
});

describe("#prepend", () => {
  test("adds node to the beginning of the linked list", () => {
    const list = new LinkedList();
    list.prepend(10);
    const prevHead = list.head;
    list.prepend(20);

    expect(list.head.value).toBe(20);
    expect(list.head.next).toBe(prevHead);
    expect(list.length).toBe(2);
  });
});

describe("#size", () => {
  describe("when list is empty", () => {
    test("returns 0", () => {
      const list = LinkedList.fromValues();

      expect(list.size()).toBe(0);
    });
  });
  describe("when list has multiple values", () => {
    test("returns value", () => {
      const list = LinkedList.fromValues(10, 20, 30, 40, 50, 60);

      expect(list.size()).toBe(6);
    });
  });
});

describe("#getFirst", () => {
  test("returns the first node from the list", () => {
    const list = LinkedList.fromValues(10, 20, 30);
    list.getFirst();

    expect(list.head.value).toBe(10);
  });
});

describe("#getLast", () => {
  test("returns last node from the list", () => {
    const list = LinkedList.fromValues(10, 20, 30);
    list.getLast();
    const node = list.atIndex(2);

    expect(node.value).toBe(30);
  });
});

describe("#atIndex", () => {
  describe("with index less than 0", () => {
    test("returns null", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.atIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("returns null", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.atIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("returns head", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.atIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("returns element at that index", () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);

      expect(list.atIndex(2).value).toBe(30);
    });
  });
});

describe("#pop", () => {
  test("removes last node of the list", () => {
    const list = LinkedList.fromValues(10, 20, 30);
    list.pop();
    const node = list.atIndex(1);
    list.getLast();

    expect(list.length).toBe(2);
    expect(node.value).toBe(20);
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("it does not insert anything", () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(-1, 30);

      expect(list.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("it does not insert anything", () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(5, 30);

      expect(list.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("insert at the head", () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(0, 30);

      expect(list.head.value).toBe(30);
      expect(list.head.next.value).toBe(10);
      expect(list.length).toBe(3);
    });
  });
  describe("with index in the middle", () => {
    test("insert at the given index", () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);
      list.insertAtIndex(2, 50);
      const node = list.atIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(list.length).toBe(5);
    });
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    test("it does not remove anything", () => {
      const list = LinkedList.fromValues(10, 20);
      list.removeAtIndex(-1);

      expect(list.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("it does not remove anything", () => {
      const list = LinkedList.fromValues(10, 20);
      list.removeAtIndex(-1);

      expect(list.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("remove the head", () => {
      const list = LinkedList.fromValues(10, 20, 30);
      list.removeAtIndex(0);

      expect(list.head.value).toBe(20);
      expect(list.head.next.value).toBe(30);
      expect(list.length).toBe(2);
    });
  });
  describe("with index in the middle", () => {
    test("remove at the given index", () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);
      list.removeAtIndex(2);
      const node = list.atIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(list.length).toBe(3);
    });
  });
});
